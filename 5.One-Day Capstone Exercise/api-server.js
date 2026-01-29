const express = require("express");
const { con } = require("./db/db");
const e = require("express");
const multer = require("multer");
const path = require("path");
const { fileURLToPath } = require("url");
const rateLimit = require("express-rate-limit");
// const redis = require("redis");
const cors = require("cors");

const { mkConfig, generateCsv, asString } = require("export-to-csv");
const fs = require("fs");
const buffer = require("buffer");
const { error } = require("console");

const csvConfig = mkConfig({ useKeysAsHeaders: true });

const app = express();
const PORT = 3000;

//Redis Implementation
// const client = redis.createClient();
// client.on("error", (error) => {
//   console.error(error);
// });

//rate limiting implementation
const limiter = rateLimit({
  windowMs: 2 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again after 2 minutes",
});

// DB Connection
con.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("DB Connected");
  }
});

//multer Config
const storage = multer.diskStorage({
  destination: path.join(__dirname, "uploads"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
  fileFilter: fileFilter,
});

const uploadSingle = (req, res, next) => {
  upload.single("profile_image")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(413).json({
          success: false,
          error: "File too large. Max size is 2MB",
        });
      }

      return res.status(400).json({
        success: false,
        error: err.message,
      });
    } else if (err) {
      return res.status(500).json({
        success: false,
        error: "File upload failed",
      });
    }

    next();
  });
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  console.log("Req received");
  res.status(200).json({ message: "you are at home" });
});

app.get("/api/employees", async (req, res) => {
  console.log("req received");
  let sql = "select * from employee";
  con.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.get("/api/employees/:id", (req, res) => {
  let id = req.params.id;
  console.log("req received");
  console.log(id);
  // const user = client.get(id, redis.print);

  let sql = "select * from employee where id=?";
  con.query(sql, [Number(id)], (err, result) => {
    if (err) {
      console.error(err);
      res.json({ message: "User not Found" });
    } else {
      res.status(200).json(result);
    }
  });
});

app.post("/api/employees", (req, res) => {
  console.log("req received");
  let { first_name, last_name, email, hire_date, salary } = req.body;
  console.log(first_name, last_name, email, hire_date, salary);
  let sql =
    "INSERT INTO employee (first_name, last_name, email, hire_date, salary) VALUES (?,?,?,?,?)";
  con.query(
    sql,
    [first_name, last_name, email, hire_date, salary],
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        console.log(result);
        res.json({ message: `User Inserted`, success: true });
      }
    },
  );
});

app.put("/api/employees/:id", (req, res) => {
  let id = req.params.id;
  let { first_name, last_name, email, hire_date, salary } = req.body;
  console.log(req.body);
  console.log(id);
  let sql = `UPDATE employee SET first_name = ?, last_name= ?, email = ?, hire_date = ?, salary= ? WHERE id=?`;
  con.query(
    sql,
    [first_name, last_name, email, hire_date, salary, id],
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        const employee = result[0];
        console.log(employee);
        res.json({ message: "User Updated", success: true });
      }
    },
  );
});

app.delete("/api/employees/:id", (req, res) => {
  let id = req.params.id;
  console.log(id);
  let sql = "DELETE from employee where id=?";
  con.query(sql, [Number(id)], (err, result) => {
    if (err) {
      res.json({ message: "User not Found" });
      console.error(err);
    } else {
      res.json({ message: "User deleted Successfully" });
    }
  });
});

//One-Day Capstone Exercise (MySQL, Node.JS) ---> Employee Onboarding & Project Assignment API

app.post("/api/employees/onboard", uploadSingle, (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      error: "Profile image is required and must be JPG/PNG under 2MB",
    });
  }

  const {
    first_name,
    last_name,
    email,
    salary,
    dept_id,
    project_id,
    role,
    hours_worked,
  } = req.body;

  const imageFile_path = `uploads/${req.file.filename}`;

  const sql = "CALL employees_onboard_(?,?,?,?,?,?,?,?,?,@new_emp_id)";

  con.query(
    sql,
    [
      first_name,
      last_name,
      email,
      salary,
      dept_id,
      project_id,
      role,
      hours_worked,
      imageFile_path,
    ],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "DB error" });
      }

      con.query("SELECT @new_emp_id AS new_emp_id", (err, rows) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "DB error" });
        }

        const newEmpId = rows[0].new_emp_id;

        // ❌ Validation failures → delete uploaded file
        const fs = require("fs");
        const filePath = req.file.path;

        if (newEmpId === -1) {
          fs.unlinkSync(filePath);
          return res.status(400).json({ error: "Email already exists" });
        }

        if (newEmpId === -2) {
          fs.unlinkSync(filePath);
          return res.status(400).json({ error: "Invalid project ID" });
        }

        if (newEmpId === -3) {
          fs.unlinkSync(filePath);
          return res.status(400).json({ error: "Invalid department ID" });
        }

        // ✅ Success
        res.status(200).json({
          success: true,
          emp_id: newEmpId,
          image: imageFile_path,
        });
      });
    },
  );
});

//to get csv of users
app.get("/users/csv", (req, res) => {
  let sql = "CALL get_employees";
  con.query(sql, async (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const rows = [...data][0];
      // const mockData = [
      //   {
      //     name: "Rouky",
      //     date: "2023-09-01",
      //     percentage: 0.4,
      //     quoted: '"Pickles"',
      //   },
      //   {
      //     name: "Keiko",
      //     date: "2023-09-01",
      //     percentage: 0.9,
      //     quoted: '"Cactus"',
      //   },
      // ];
      console.log(rows);
      // console.log(mockData);
      const csv = generateCsv(csvConfig)(rows);
      const filename = `${csvConfig.filename}.csv`;
      const csvBuffer = new Uint8Array(Buffer.from(asString(csv)));

      fs.writeFile(filename, csvBuffer, (err) => {
        if (err) throw err;
        console.log("file saved : ", filename);
        const filePath = path.resolve(__dirname, filename);
        console.log(filePath);
        res.status(200).sendFile(filePath);
      });
    }
  });
});

app.get("/api/departments", (req, res) => {
  console.log("Department req ");
  const sql = "SELECT dept_id, dept_name, location from departments";
  con.query(sql, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.status(200).json(result);
    }
  });
});

app.get("/api/departments/:id", (req, res) => {
  const id = req.params.id;
  const sql =
    "SELECT employee.id,employee.first_name,employee.email,employee.salary, employee.hire_date FROM employee WHERE dept_id= ?";

  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
      res.status(200).json(result);
    }
  });
});

// Auth for the React Practice
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  sql = "SELECT email, password FROM users where email=?";
  con.query(sql, [email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).json({ data: err, success: false });
    } else {
      console.log(result);
      res.status(200).json({ data: result, success: true });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`);
});

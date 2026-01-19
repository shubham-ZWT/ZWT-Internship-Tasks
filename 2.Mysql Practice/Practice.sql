INSERT INTO employee (first_name, last_name, email, hire_date,salary) VALUES ("Sanket", "Patel", "sanket@gmail.com", '2004-05-13',15000),("Sanket", "Patel", "sanket@gmail.com", '2004-05-13',15000),("Sanket", "Patel", "sanket@gmail.com", '2004-05-13',15000);

SELECT * FROM `employee` WHERE 1;

SELECT first_name, email FROM employee;

SELECT * FROM employee WHERE salary > 10000;

SELECT * FROM employee WHERE hire_date > '2005-01-01';

SELECT COUNT(*) FROM employee;

UPDATE employee SET salary = salary + (salary * 0.1) WHERE id = 2; 

UPDATE departments SET location = "Surat" WHERE dept_name="Design";

SELECT MAX(salary) FROM employee;

SELECT AVG(salary) as avg_salary FROM employee;

SELECT first_name,  salary FROM employee ORDER BY salary DESC;

SELECT * FROM employee WHERE first_name  LIKE 'S%';

SELECT * FROM employee ORDER BY hire_date DESC LIMIT 3;

DELETE FROM employee WHERE id=1;    

SELECT employee.id,employee.first_name, departments.dept_name FROM employee INNER JOIN departments ON employee.dept_id = departments.dept_id;

SELECT projects.project_name, departments.dept_name FROM projects JOIN departments ON projects.dept_id = departments.dept_id;

SELECT employee.first_name, projects.project_name,employee_projects.role FROM employee_projects
JOIN employee ON employee.id = employee_projects.emp_id
JOIN projects ON projects.project_id = employee_projects.project_id;

SELECT * from employee where
employee.id = (SELECT departments.dept_id FROM departments WHERE departments.dept_name = "Engineering") AND employee.salary >70000 ;

SELECT employee.first_name, departments.dept_name FROM employee
LEFT JOIN departments ON departments.dept_id =  employee.dept_id;

SELECT employee.dept_id,departments.dept_name, COUNT(*) FROM employee
JOIN departments ON departments.dept_id = employee.dept_id
GROUP BY(employee.dept_id);

SELECT departments.dept_name, employee.first_name from employee 
RIGHT JOIN departments ON departments.dept_id = employee.dept_id;

SELECT * FROM employee_projects WHERE employee_projects.emp_id IS NOT NULL;

SELECT m.first_name, e.first_name AS Manager FROM employee e
JOIN employee m ON m.manager_id = e.id;


SELECT m.first_name, e.first_name AS Manager, m.salary 'Manager Salary', e.salary 'Employee Salary' FROM employee e
JOIN employee m ON m.manager_id = e.id WHERE e.salary > m.salary;


SELECT COUNT(*) FROM employee
CROSS JOIN projects; 

SELECT projects.project_name, projects.dept_id, SUM(projects.budget) FROM projects GROUP BY projects.dept_id;

SELECT DISTINCT departments.location FROM departments WHERE departments.location IS NOT NULL;

SELECT employee.salary FROM employee
UNION 
SELECT projects.budget FROM projects;


select 'Salary of Employee' AS Type, employee.salary FROM employee
UNION 
SELECT 'Project Budget' AS Type, projects.budget FROM projects

select 'Salary of Employee' AS Type, employee.salary as Amount FROM employee
UNION 
SELECT 'Project Budget' AS Type, projects.budget FROM projects
ORDER BY Amount


SELECT employee.first_name, employee.salary FROM employee WHERE employee.salary >(SELECT AVG(employee.salary) FROM employee);

SELECT employee.first_name, departments.location FROM employee
JOIN departments ON departments.dept_id = employee.dept_id
WHERE departments.location = "New York"



SELECT employee.first_name, projects.budget FROM employee_projects
JOIN employee ON employee.id = employee_projects.emp_id
JOIN projects ON projects.project_id = employee_projects.project_id
WHERE projects.budget > 100000


SELECT employee.first_name, employee.salary FROM employee WHERE employee.salary >=(SELECT employee.salary FROM employee ORDER BY employee.salary DESC LIMIT 1)  

SELECT employee.first_name, employee.salary FROM employee WHERE employee.salary > (SELECT AVG(employee.salary) FROM employee);

SELECT employee.dept_id, departments.dept_name, COUNT(*) AS "No of Employees" FROM employee
JOIN departments ON departments.dept_id = employee.dept_id
GROUP BY employee.dept_id


SELECT SUM(employee.salary) AS "Total Salary in department", AVG(employee.salary) AS "Average Salary per Department", departments.dept_name FROM employee
JOIN departments ON departments.dept_id = employee.dept_id
GROUP BY employee.dept_id

SELECT SUM(employee_projects.hours_worked) AS "Total Hours Worked", projects.project_name FROM employee_projects
JOIN projects ON projects.project_id = employee_projects.project_id
GROUP BY employee_projects.project_id

SELECT departments.dept_name, COUNT(projects.dept_id) as "Projects per department" FROM departments
JOIN projects ON projects.dept_id = departments.dept_id
GROUP BY departments.dept_id

SELECT employee.first_name, employee_projects.emp_id,COUNT(employee_projects.emp_id) as "No of projects per employee" FROM employee
JOIN employee_projects ON employee_projects.emp_id = employee.id
GROUP BY employee_projects.emp_id 
HAVING
COUNT(employee_projects.emp_id) >= 2 ;

SELECT departments.dept_name, SUM(employee.salary) as "Salary to Each Department" FROM employee
JOIN departments ON departments.dept_id = employee.dept_id
GROUP BY departments.dept_id

SELECT UPPER(CONCAT( employee.first_name, " ", employee.last_name)) FROM employee;

SELECT employee.first_name, employee.last_name FROM employee WHERE employee.last_name LIKE '%son%';

SELECT CONCAT(SUBSTRING(employee.first_name, 1, 1),". ",employee.last_name) FROM employee;

SELECT projects.project_name, LENGTH(projects.project_name) AS "Length of Project Name" FROM projects 
ORDER BY LENGTH(projects.project_name) DESC


SELECT employee.first_name, employee.salary,
CASE
	WHEN employee.salary > 75000 THEN 'HighEarner'
    WHEN employee.salary BETWEEN 50000 AND 75000 THEN 'MediumEarner'
    ELSE 'Entry Level'
END AS 'Earning Status'
FROM employee


SELECT employee.first_name, employee.salary,AVG(employee.salary),
CASE
	WHEN employee.salary < AVG(employee.salary) THEN 'Below AVG'
    WHEN employee.salary > AVG(employee.salary) THEN 'Above AVG'
    ELSE 'Average'
END AS 'Salary Status'
FROM employee;

CREATE INDEX idx_email
ON employee(email)

CREATE INDEX idx_pName
ON employee(first_name, last_name)





Hard Exercise

SELECT projects.project_name, SUM(employee_projects.hours_worked) as 'Total Actual Hours',  projects.budget as 'Client Budget', 
SUM(employee_projects.hours_worked * (employee.salary/ (22 * 8))) as 'Actual Cost', 'Over Budget' as status FROM employee_projects
JOIN projects ON projects.project_id = employee_projects.project_id
JOIN employee ON employee.id = employee_projects.emp_id
GROUP BY projects.project_id
HAVING (SUM(employee_projects.hours_worked * (employee.salary/ (22 * 8)))) > projects.budget;




DELIMITER $$

CREATE PROCEDURE terminate_employee(IN in_emp_id INT, IN in_termination_reason VARCHAR(255))
BEGIN
	DECLARE emp_count INT DEFAULT 0;
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
    	ROLLBACK;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Failed to terminate employee. Transaction rolled Back';
    END;
    
    START TRANSACTION;
    
    SELECT COUNT(*) INTO emp_count FROM employee WHERE employee.id = in_emp_id;
    
    IF emp_count = 0 THEN
    	SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Employee Does not exists';
	END IF;
    	
	INSERT INTO terminated_employees (emp_id, termination_reason, termination_date) 
    VALUES (in_emp_id, in_termination_reason, NOW());
    
    DELETE FROM employee_projects WHERE employee_projects.emp_id = in_emp_id;
    
    DELETE FROM employee WHERE employee.id = in_emp_id;
    
    COMMIT;
END$$

DELIMITER ;



WITH DepartmentScores AS(
SELECT departments.dept_name, ( (AVG(employee.salary) * 0.3) + (SUM(projects.budget) * 0.4) + (SUM(employee_projects.hours_worked) * 0.3)) AS "Score" FROM employee_projects 
JOIN projects ON projects.project_id = employee_projects.project_id 
JOIN employee ON employee.id = employee_projects.emp_id 
JOIN departments ON departments.dept_id = employee.dept_id 
GROUP BY departments.dept_name
)
SELECT 
    dept_name,
    RANK() OVER (ORDER BY Score DESC) AS rank
FROM DepartmentScores;



// bulk assing Projects
BEGIN
	
   	DECLARE empID INT;
    DECLARE done INT DEFAULT 0;
    DECLARE id_exists INT DEFAULT 0;
    
    DECLARE EmpCursor CURSOR FOR
    SELECT id FROM employee WHERE employee.dept_id = in_dept_id;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;
    
    OPEN EmpCursor;
   
    REPEAT
    	FETCH EmpCursor INTO empID;
        IF NOT done THEN
        	IF EXISTS (SELECT 1 FROM employee_projects WHERE employee_projects.emp_id=empID AND 									employee_projects.project_id = in_project_id ) THEN
    			SET id_exists = -1;

            ELSE 
    			INSERT INTO employee_projects (emp_id, project_id, hours_worked, role) VALUES 											(empID,in_project_id,0,"Contributor");
                
			END IF;
		END IF;
	UNTIL done END REPEAT;
    CLOSE EmpCursor;
END
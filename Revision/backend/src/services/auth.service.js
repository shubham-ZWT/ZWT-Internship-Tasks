exports.registerUser = (email, password) => {
  console.log(email, password);

  if (email && password) {
    return { id: 1, email: "sanket@gmail.com", createdAt: "00:00:00" };
  }
  return;
};

exports.LoginUser = (email, password) => {
  console.log(email, password);

  if (email && password) {
    return {
      id: 1,
      email: "sanket@gmail.com",
      role: "admin",
      createdAt: "00:00:00",
    };
  }
  return;
};

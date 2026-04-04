module.exports = async function (context, req) {

  const email = req.query.email;
  const password = req.query.password;

  if (!email || !password) {
    context.res = {
      status: 400,
      body: "Missing email or password"
    };
    return;
  }

  if (email === "student@demo.com" && password === "pass123") {
    context.res = {
      headers: { "Content-Type": "application/json" },
      body: {
        email,
        role: "student",
        name: "Aanya Sharma"
      }
    };
  } else {
    context.res = {
      status: 401,
      body: "Invalid credentials"
    };
  }
};

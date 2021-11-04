const db = require("../models");

// Sign in
async function signIn(req, res) {
  try {
    const { email, password } = req.body;

    const data = await db.User.findOne(
      {
        email: email,
      },
      {
        userName: 1,
        password: 1,
      },
    ).lean();
    console.log(data);
    if (data && data.password === password) {
      res.status(200).send({ message: "Successfully signed in", data: data });
    } else {
      res
        .status(410)
        .send({ message: "Email does not exist or wrong password" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// Sign up
async function signUp(req, res) {
  try {
    const { userName, email, password } = req.body;
    console.log(req.body);
    const data = await db.User.create({
      userName: userName,
      email: email,
      password: password,
    });
    res.status(200).send({
      message: "Successfully signed up",
      userId: data._id,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// GET client
async function getById(req, res) {
  try {
    const { id } = req.params;

    const data = await db.User.findOne({ _id: id });
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  signIn: signIn,
  signUp: signUp,
  getById: getById,
};

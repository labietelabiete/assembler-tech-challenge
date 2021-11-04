const db = require("../models");

// Sign in
async function signIn(req, res) {
  try {
    const { email } = req.client;

    const data = await db.User.findOne(
      {
        email: email,
      },
      { _id: 1 },
    );

    res.status(200).send({ message: "Successfully signed in", userId: data });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

// Sign up
async function signUp(req, res) {
  try {
    const { userName } = req.body;
    const { email } = req.body;

    const data = await db.User.create({
      userName: userName,
      email: email,
    });
    res
      .status(200)
      .send({ message: "Successfully signed up", userId: data._id });
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

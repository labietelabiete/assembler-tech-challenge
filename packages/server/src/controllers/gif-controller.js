const db = require("../models");
const { cloudinary } = require("../services/cloudinary");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);

async function addGif(req, res, next) {
  try {
    const { title, category, url, email } = req.body;
    const { _id: userId } = await db.User.findOne(
      { email: email },
      { _id: 1 },
    ).lean();
    let urlFile = req.files["urlFile"];
    let gifUrl = url;
    if (urlFile) {
      urlFile = urlFile[0];
      const urlFileLocation = path.join(
        __dirname,
        "../../",
        "uploads",
        urlFile.originalname,
      );

      // upload file
      await writeFileAsync(
        urlFileLocation,
        Buffer.from(new Uint8Array(urlFile.buffer)),
      );

      // upload to cloudinary
      const cldUrlRes = await cloudinary.uploader.upload(urlFileLocation, {
        upload_preset: "gifs-preset",
        resource_type: "image",
        width: 300,
        height: 300,
        crop: "limit",
      });
      gifUrl = cldUrlRes.secure_url;

      // delete uploaded file
      fs.unlink(urlFileLocation, (err) => {
        if (err) throw err;
      });
    }

    const { _id: gifId } = await db.Gif.create({
      title: title,
      category: category,
      url: gifUrl,
      userId: userId,
    });

    return res
      .status(200)
      .send({ message: "Gif uploaded successfully", _id: gifId });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const { page = 0, limit = 8 } = req.query;

    const gifs = await db.Gif.aggregate([
      {
        $project: {
          title: 1,
          category: 1,
          url: 1,
          userId: 1,
          createdAt: 1,
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      { $limit: parseInt(limit) },
      { $skip: parseInt(page) * parseInt(limit) },
    ]);

    await db.Gif.populate(gifs, {
      path: "userId",
      option: { select: "userName" },
    });

    res.status(200).send({ gifs });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

async function getById() {}

module.exports = {
  addGif: addGif,
  getAll: getAll,
  getById: getById,
};

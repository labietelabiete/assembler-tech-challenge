const db = require("../models");

async function searchGif(req, res, next) {
  try {
    const searchText = req.query?.q;
    const { limit = 8 } = req.query;

    const gifs = await db.Gif.find(
      {
        $or: [
          { title: { $regex: searchText, $options: "i" } },
          { category: { $regex: searchText, $options: "i" } },
        ],
      },
      {
        title: 1,
        category: 1,
        url: 1,
        userId: 1,
      },
    ).limit(parseInt(limit));

    await db.Gif.populate(gifs, {
      path: "userId",
      option: { select: "userName" },
    });

    console.log(gifs);

    return res
      .status(200)
      .send({ message: "Successfully searched", gifs: gifs });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
    next(error);
  }
}

module.exports = {
  searchGif,
};

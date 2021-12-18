const router = require("express").Router();
const fs = require("fs");

const getCharacters = () => {
  return JSON.parse(fs.readFileSync("./data/characters.json", "UTF-8"));
};

router.get("/", (req, res) => {
  const charData = getCharacters();
  res.json(charData);
});

router.get("/select/:id", (req, res) => {
  const charData = getCharacters();
  const reqCharID = req.params.id;
  const foundChar = charData.find((char) => {
    if (char.id === reqCharID) {
      return char.id;
    }
  });
  if (!foundChar) {
    res.status(404).send("Character not found");
  }
  res.json(foundChar);
});

router.get("/series/:series", (req, res) => {
  const charData = getCharacters();
  const reqCharSeries = req.params.series;
  const foundChar = charData.filter((char) => {
    return char.series === reqCharSeries;
  });
  if (!foundChar) {
    res.status(404).send("Character not found");
  }
  res.json(foundChar);
});

router.get("/smashdebut/:smashDebut", (req, res) => {
  const charData = getCharacters();
  const reqCharDebut = req.params.smashDebut;
  const foundChar = charData.filter((char) => {
    return char.smashDebut === reqCharDebut;
  });
  if (!foundChar) {
    res.status(404).send("Character not found");
  }
  res.json(foundChar);
});

module.exports = router;

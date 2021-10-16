import Anime from "../models/anime.js";

export const getAnimes = async (req, res) => {
  try {
    const anime = await Anime.find();
    res.json(anime);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const anime = await Anime.findById(id);
    // .populate("userId");
    // look into .populate method for this function
    if (anime) {
      return res.json(anime);
    }
    res.status(404).json({ message: "Anime not found." });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createAnime = async (req, res) => {
  try {
    const newAnime = new Anime(req.body);
    await newAnime.save();
    res.status(201).json(newAnime);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateAnime = async (req, res) => {
  const { id } = req.params;
  const anime = await Anime.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(anime);
};

export const deleteAnime = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnime = await Anime.findByIdAndDelete(id);
    if (deletedAnime) {
      return res.status(200).send("Anime deleted.");
    }
    throw new Error("Anime not found.");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

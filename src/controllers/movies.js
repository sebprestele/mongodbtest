import Movie from "../models/Movie.js";
import MovieService from '../services/movies.js'

export const createMovie = async (req, res) => {
  try {
    const { name, publishedYear, genres } = req.body;

    const movie = new Movie({
      name,
      publishedYear,
      genres,
    });
   await MovieService.create(movie)
   res.json(movie)
  } catch (error) {
    console.log(error);
  }
};
export const findAll = async (req, res) => {
  try {
   res.json(await MovieService.findAllData());
  } catch (error) {
    console.log(error);
  }
};


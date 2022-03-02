import Movie from "../models/Movie.js";

const create = async (movie) => {
  return movie.save();
};


const findAllData = async()=>{
 return Movie.find()
}

export default { create, findAllData };
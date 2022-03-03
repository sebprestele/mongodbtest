import User from "../models/User.js";

const create = async (user) => {
  return user.save();
};

const findAll = async () => {
  return User.find().populate("movies");
};

const findOne = async (userId) => {
  return User.findById(userId);
};

const update = async (userId, properties) => {
  const userToUpdate = await findOne(userId);
  const { firstName, lastName, email, password } = properties;

  userToUpdate.firstName = firstName ? firstName : userToUpdate.firstName;
  userToUpdate.lastName = lastName ? lastName : userToUpdate.lastName;
  userToUpdate.email = email ? email : userToUpdate.email;
  userToUpdate.password = password ? password : userToUpdate.password;
  return userToUpdate;
};

const deleteUser = async (userId) => {
  return await User.remove({ userId: userId });
};

const addMoviesToUser = async (userId, movieId) => {
  const user = await User.findById(userId);
  user.movies.push(movieId);
  return user.save();
};

export default {
  create,
  findAll,
  findOne,
  update,
  deleteUser,
  addMoviesToUser,
};

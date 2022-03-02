import User from "../models/User.js";

const create = async (user) => {
  return user.save();
};

const findAll = async () => {
  return User.find();
};

const findOne = async (userId) => {
  return User.findOne({ userId: userId });
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

export default { create, findAll, findOne, update, deleteUser };

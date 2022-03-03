import User from "../models/User.js";
import userServices from "../services/userServices.js";
import { v4 as uuidv4 } from "uuid";

export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password, profileImage } = req.body;
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      profileImage,
    });
    await userServices.create(user);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const findAllUsers = async (req, res) => {
  try {
    res.json(await userServices.findAll());
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const userToUpdate = await userServices.update(req.params.id, req.body);

    res.json(userToUpdate);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userToDelete = await userServices.deleteUser(req.params.id);
    res.json(userToDelete);
  } catch (error) {
    console.log(error);
  }
};

export const addMoviesToUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const movieId = req.params.movieId;
    const updatedUser = await userServices.addMoviesToUser(userId, movieId);
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

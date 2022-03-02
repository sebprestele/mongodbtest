import User from "../models/User.js";
import userServices from "../services/userServices.js";
import { v4 as uuidv4 } from "uuid";

export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    const userId = uuidv4();
    const user = new User({
      userId,
      firstName,
      lastName,
      email,
      password,
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

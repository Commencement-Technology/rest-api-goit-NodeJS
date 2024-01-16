import { HttpError, sendEmail } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";
import User from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import gravatar from "gravatar";
import fs from "fs/promises";
import path from "path";
import Jimp from "jimp";
import { v4 as uuid4 } from "uuid";

const avatarPath = path.resolve("public", "avatars");

const { JWT_SECRET, BASE_URL } = process.env;

const signUp = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email is already in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email, { s: "200", r: "pg", d: "mm" });
  const verificationCode = uuid4();
  const newUser = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationCode,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify Email",
    html: `<a target="_blank" href="http://${BASE_URL}/api/auth/${verificationCode}">Click to verify email</a>`,
    // html: `<a target="_blank" href="http://HOST/api/auth/${verificationCode}">Click to verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    message:
      "Registration successful. You can now sign in with your new account.",
    user: {
      email: newUser.email,
      subscription: "starter",
      avatarURL: newUser.avatarURL,
    },
  });
};

const signIn = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Incorrect login or password");
  }

  if (!user.verify) {
    throw HttpError(401, "Email not verify");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Incorrect login or password");
  }

  const { _id: id } = user;
  const payload = {
    id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "23h" });

  await User.findByIdAndUpdate(id, { token });

  res.json({
    token,
    user: {
      email: user.email,
      subscription: "starter",
    },
  });
};

const logOut = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({ message: "Logout successfull" });
};

const updateSubscription = async (req, res) => {
  const { subscription } = req.body;
  const { _id: owner } = req.user;
  const updatedUser = await User.findOneAndUpdate(
    owner,
    { subscription },
    { new: true }
  );

  if (!updatedUser) {
    throw HttpError(401, "User not found or incorrect login");
  }

  res.json(updatedUser);
};

const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;
  res.json({ email, subscription });
};

const updateAvatar = async (req, res) => {
  const { user } = req;
  const { path: oldPath, filename } = req.file;
  const newPath = path.join(avatarPath, filename);

  await Jimp.read(oldPath).then((image) =>
    image.resize(256, 256).writeAsync(newPath)
  );

  await fs.unlink(oldPath);

  const avatar = path.join("avatars", filename);

  await User.findByIdAndUpdate(user._id, { avatarURL: avatar });

  res.json({
    avatarURL: avatar,
  });
};

const verify = async (req, res) => {
  const { verificationCode } = req.params;
  const user = await User.findOne({ verificationCode });
  if (!user) {
    throw HttpError(400, "Email not found or already verified");
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationCode: "",
  });
  res.json({ message: "Email verify success" });
};

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(404, "Email not found");
  }
  if (user.verify) {
    throw HttpError(400, "Email already verified");
  }

  const verifyEmail = {
    to: email,
    subject: "Verify Email",
    html: `<a target="_blank" href="http://${BASE_URL}/api/auth/${verificationCode}">Click to verify email</a>`,
    // html: `<a target="_blank" href="http://HOST/api/auth/${verificationCode}">Click to verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.json({ message: "Verify email send success" });
};

export default {
  signUp: ctrlWrapper(signUp),
  signIn: ctrlWrapper(signIn),
  getCurrent: ctrlWrapper(getCurrent),
  logOut: ctrlWrapper(logOut),
  updateSubscription: ctrlWrapper(updateSubscription),
  updateAvatar: ctrlWrapper(updateAvatar),
  verify: ctrlWrapper(verify),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};

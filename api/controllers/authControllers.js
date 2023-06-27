import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).send("User has been created");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    const isPasswordValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!user) {
      return res.status(400).send(error.message);
    } else if (user && !isPasswordValid) {
      return res.status(401).send("Invalid password");
    } else {
      const token = jwt.sign(
        { id: user._id, isSeller: user.isSeller },
        process.env.JWT_KEY
      );

      const { password, ...info } = user._doc;
      res
        .cookie("accessToken", token, {
          httpOnly: true,
          sameSite: "None",
          secure:true
        })
        .status(200)
        .send(info);
    }
  } catch (error) {
    res.status(500).send("Something is wrong");
  }
};
export const logout = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
};

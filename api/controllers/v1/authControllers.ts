import User from '../../models/v1/userModel'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


export const register = async (req: Request, res: Response) => {
    const { email, password, userType } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists")
        }
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(password, salt)
        const newUser = new User({
            userType,
            email,
            password: hashPassword
        })
        await newUser.save();
        res.status(201).json({ message: 'User successfully created' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "Something went wrong!" })
    }
}


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ error: "Account doesn't exist!" });
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ error: "Invalid Credentials" });
        } else {
            const token = jwt.sign(
                {
                    email: user.email,
                    userType: user.userType,
                    userId: user._id,
                },
                process.env.JWT_KEY!
            );

            const redirectUrl = user.userType === "freelancer" ? "/projects" : "/talents"
            const secureCookie = req.secure ? true : false;
            res
                .cookie("token", token, {
                    httpOnly: true,
                    sameSite: "none",
                    secure: secureCookie

                })
            // console.log('Response Headers:', res.getHeaders()) //Log response headers
            res.status(200)
                .json({
                    email: user.email,
                    userType: user.userType,
                    _id: user._id.toString(),
                    isLoggedIn: true,
                    redirectUrl: redirectUrl,
                });
        }
    } catch (err) {
        res.status(500).send("Something is wrong");
    }
};


export const logout = async (req: Request, res: Response) => {
    res.clearCookie("token", {
        sameSite: "none",
        secure: true
    })
        .status(200)
        .json({ message: "User has been logged out" })
}
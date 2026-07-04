const express = require("express");
const router = express.Router();

const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ================= REGISTER =================

router.post("/register", async (req, res) => {

    try {

        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: "Email already registered"
            });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({

            username,

            email,

            password: hashedPassword

        });

        await user.save();

        res.status(201).json({

            message: "Registration Successful"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: error.message

        });

    }

});


// ================= LOGIN =================

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }

        const validPassword = await bcrypt.compare(

            password,

            user.password

        );

        if (!validPassword) {

            return res.status(400).json({

                message: "Invalid Password"

            });

        }

        const token = jwt.sign(

            {

                id: user._id

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "1d"

            }

        );

        res.status(200).json({

            message: "Login Successful",

            token,

            user: {

                id: user._id,

                username: user.username,

                email: user.email

            }

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message: error.message

        });

    }

});

module.exports = router;
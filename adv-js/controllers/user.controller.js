const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const register = async (req, res) => {
  const { username, email, password, city, street, age, phonenumber } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ error: "missing information" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Validate password length
  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters long" });
  }

  // Validate age if provided
  if (age && (isNaN(age) || age < 13 || age > 120)) {
    return res.status(400).json({ error: "Age must be between 13 and 120" });
  }

  try {
    const hash = bcrypt.hashSync(password, 10); // hashing and salting our password

    const User = new userModel({
      email, // this is the equivalent of writing email: email
      username,
      password: hash,
      city: city || "",
      street: street || "",
      age: age ? parseInt(age) : undefined,
      phonenumber: phonenumber || "",
    });

    const user = await User.save();
    console.log(user);
    return res.status(200).json({ 
      message: "User created successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        city: user.city,
        street: user.street,
        age: user.age,
        phonenumber: user.phonenumber
      }
    });
  } catch (error) {
    console.log("Error creating user", error);
    if (error.code === 11000) {
      return res.status(400).json({ error: "Email already exists" });
    }
    return res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "missing information" });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: "email or password incorrect" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(500).json({ message: "email or password incorrect" });
    }

    req.session.user = {
      _id: user._id,
    };

    const token = jwt.sign(
      { user: { id: user._id, email: user.email } },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );
    console.log(req.session.user);

    return res.status(200).json({ token, username: user.username });
  } catch (error) {
    console.log("Error logging user", error);
    return res.status(500).json({ error: "error logging in" });
  }
};

const logout = async (req, res) => {
  if (req.session.user) {
    delete req.session.user;
  }

  return res.status(204).json({ message: "Logged out successfully" });
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.session.user._id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "error getting user" });
  }
};

module.exports = {
  register,
  login,
  getUser,
  logout,
};

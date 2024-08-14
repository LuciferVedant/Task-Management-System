import UserRepository from "./userRepository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserDummy from "./UserDummy.js";
export default class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async signIn(req, res, next) {
    try {
      const user = await this.userRepository.findByEmail(req.body.email);
      if (!user) {
        return res.status(400).send("Incorrect Credential's");
      } else {
        const result = bcrypt.compare(req.body.password, user.password);
        if (result) {
          const token = jwt.sign(
            {
              userID: user._id,
              email: user.email,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).send(token);
        } else {
          return res.status(400).send("Incorrect Credentials");
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(200).send("Something went wrong");
    }
  }
  async signUp(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const user = new UserDummy(name, email, password);
      await this.userRepository.signUp(user);
      res.status(201).json({ message: "User signed up successfully" });
    } catch (error) {
      console.log(error);
    }
  }
}

import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [25, "Name can't be greater than 25 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+\@.+\../, "Please enter a valid email"],
  },
  password: { type: String },
});

const UserModel = mongoose.model("User", UserSchema, "UserData");
export default UserModel;

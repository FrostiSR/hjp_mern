import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: {type: String, unique: 'That email is already taken', required:true},
    subject: String,
    message: String
})

const UserModel = mongoose.model("hjp_contacts", UserSchema);

export default UserModel;
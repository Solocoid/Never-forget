// create user models and schema
// all the datbase logic

import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://hackoid:QqgXfS8g81Fh4EC0@cluster0.boz3z.mongodb.net/notes-tracking")

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },
})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

export const LinkModel = model("Links", LinkSchema);
export const ContentModel = model("Content", ContentSchema);
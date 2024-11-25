// create user models and schema
// all the datbase logic

import mongoose, { model, Schema } from "mongoose";

mongoose.connect("mongodb+srv://hackoid:QqgXfS8g81Fh4EC0@cluster0.boz3z.mongodb.net/notes-tracking")

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String, 

})

export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true}

})

export const ContentModel = model("Content", ContentSchema);




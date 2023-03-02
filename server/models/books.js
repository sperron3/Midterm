/*
*Models*

Filename: models.js
Student Name: Shawn Perron
Student ID: 301 218 919

COMP 229 SEC 401, Web Application Development
Assignment: COMP229-Midterm
Date: 3/01/2022
 */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: String
}, {
    timestamps: true,
    collection: 'books'
});

export default mongoose.model('Books', BookSchema);
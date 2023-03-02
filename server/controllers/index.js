/*
*Controllers*

* Filename: index.js
Student Name: Shawn Perron
Student ID: 301 218 919

COMP 229 SEC 401, Web Application Development
Assignment: COMP229-Midterm
Date: 3/01/2022
 */
export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
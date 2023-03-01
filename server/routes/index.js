/*
*Routes*

Filename: index.js
Student Name: Shawn Perron
Student ID: 301 218 919
Assignment: COMP229-Midterm
Date: 3/01/2022
 */

import { Router } from 'express';

let router = Router();

import {DisplayHomePage} from '../controllers/index.js';

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

export default router;
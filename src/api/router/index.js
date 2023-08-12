import express from "express";
import createHttpError from "http-errors";
import q2m from "query-to-mongo";
import multer from "multer";
import {
  checkToDOListValidationResult,
  checkToDoListSchema,
} from "../validators/toDoListModel";

const router = express.Router();

/** To do list endpoints */

router.get(
  "/toDoList/",
  checkToDoListSchema,
  checkToDOListValidationResult,
  async (req, res, next) => {
    try {
        console.log(req.headers.origin, "GET to do list at", new Date())
//doFS stuff
const updatedList = "json object of list data
"
        res.status(201).send(updatedList)

    } catch (error) {
        
    }
  }
);

export default router;

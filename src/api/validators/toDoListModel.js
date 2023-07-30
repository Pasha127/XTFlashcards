//const exampleRequest = {
//    project: "ToDoList",
//    user: "Christie",
//    auth: "",
//    data: {
//
//    }
//}

import { checkSchema, validationResult } from "express-validator";
import createHttpError from "http-errors";

const toDoListSchema = {
  project: {
    in: ["body"],
    isString: {
      errorMessage: "'Project' is a mandatory field and needs to be a string",
    },
  },
  user: {
    in: ["body"],
    isString: {
      errorMessage: "'User' is a mandatory field and needs to be a string",
    },
  },
  data: {
    in: ["body"],
  },
};

export const checkToDoListSchema = checkSchema(toDoListSchema);
export const checkValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(createHttpError(400, "ValidationError in To Do List body"), {
      errorsList: errors.array(),
    });
    console.log("400 in To Do List Validator: ", errors);
  } else {
    next();
  }
};

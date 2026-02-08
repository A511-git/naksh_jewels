import { is } from "zod/v4/locales";

const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  INTERNAL_ERROR: 500,
};

class AppError extends Error {
  constructor(name, statusCode, description, isOperational = true, errorStack) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.errorStack = errorStack;

    Error.captureStackTrace(this);
  }
}


class APIError extends AppError {
  constructor(
    name = "API_ERROR",
    statusCode = STATUS_CODES.INTERNAL_ERROR,
    description = "Internal Server Error",
    isOperational = true
  ) {
    super(name, statusCode, description, isOperational);
  }
}

class ValidationError extends AppError {
  constructor(description = "Validation Error", errorStack) {
    super(
      "VALIDATION_ERROR",
      STATUS_CODES.BAD_REQUEST,
      description,
      true,
      errorStack
    );
  }
}


class DatabaseError extends AppError {
  constructor({
    name = "DATABASE_ERROR",
    statusCode = STATUS_CODES.INTERNAL_ERROR,
    description = "Database operation failed",
    cause = null,
    metadata = null,
    isOperational = true,
  }) {
    super(name, statusCode, description, isOperational);
    this.cause = cause;
    this.metadata = metadata;
    this.description = description;
  
  }
}






export {
  AppError,
  APIError,
  ValidationError,
  DatabaseError,
  STATUS_CODES,
};



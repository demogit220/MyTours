class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // Calling the parent constructor of built-in error class with the message

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    // it captures the error stack that caused the error and by using this.constructor here, it will not appear in error stack
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;

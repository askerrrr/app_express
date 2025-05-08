class BotOrderDetailsError extends Error {
  constructor(message, err, userId, orderId) {
    super(message);

    this.userId = userId;
    this.orderId = orderId ?? "";
    this.message = message;
    this.cause = err?.cause ?? "";
    this.name = this.constructor.name;
  }
}

class BotOrderCreateError extends Error {
  constructor(message, err, userId, orderId) {
    super(message);

    this.userId = userId;
    this.orderId = orderId ?? "";
    this.message = message;
    this.cause = err?.cause ?? "";
    this.name = this.constructor.name;
  }
}

class BotServerError extends Error {
  constructor(message, cause, userId, orderId) {
    super(message);

    this.userId = userId;
    this.orderId = orderId ?? "";
    this.message = message;
    this.cause = cause ?? "";
    this.name = this.constructor.name;
  }
}

class DatabaseError extends Error {
  constructor(location, { message, cause }, userId, orderId) {
    super(message);

    this.userId = userId;
    this.orderId = orderId ?? "";
    this.message = message;
    this.location = location;
    this.cause = cause ?? "";
    this.name = this.constructor.name;
  }
}

class DatabaseConnectionError extends Error {
  constructor({ message, cause }) {
    super(message);

    this.cause = cause ?? "";
    this.code = cause?.code ?? 500;
    this.name = this.constructor.name;
    this.message = message ?? "Database connection is not established";
  }
}

class ReadableStreamError extends Error {
  constructor(message, code, url) {
    super(message);

    this.url = url;
    this.code = code;
    this.message = message;
    this.name = this.constructor.name;
  }
}

export {
  BotServerError,
  DatabaseError,
  BotOrderCreateError,
  BotOrderDetailsError,
  DatabaseConnectionError,
  ReadableStreamError,
};

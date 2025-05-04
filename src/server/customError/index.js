class NetworkError extends Error {
  constructor(location, { message, cause }, userId, orderId) {
    super(message);

    this.name = "NetworkError";
    this.userId = userId;
    this.orderId = orderId;
    this.message = message;
    this.location = location;
    this.cause = cause;
  }
}

class BotServerError extends Error {
  constructor(location, { message, cause }, userId, orderId) {
    super(message);

    this.name = "BotServerError";
    this.userId = userId;
    this.orderId = orderId;
    this.message = message;
    this.location = location;
    this.cause = cause;
  }
}

class DatabaseError extends Error {
  constructor(location, { message, cause }, userId, orderId) {
    super(message);

    this.name = "DatabaseError";
    this.userId = userId;
    this.orderId = orderId ?? "";
    this.message = message;
    this.location = location;
    this.cause = cause;
  }
}

class DatabaseConnectionError extends Error {
  constructor(message) {
    super(message);

    this.name = "DatabaseConnectionError";
    this.message = message ?? "Database connection is not established";
    this.code = 500;
    this.cause = cause;
  }
}

export { NetworkError, BotServerError, DatabaseError, DatabaseConnectionError };

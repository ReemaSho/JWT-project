//1-expand the class
//2- constructor inside the class
//3- error creation fun

class CustomAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomError = (message, statusCode) => {
    return new CustomAPIError(message, statusCode);
};

export { CustomAPIError, createCustomError };
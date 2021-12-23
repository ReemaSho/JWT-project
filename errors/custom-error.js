//1-expand the class
//2- constructor inside the class
//3- error creation fun

class customAPIError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomError = (message, statusCode) => {
    return new customAPIError(message, statusCode);
};

export default { customAPIError, createCustomError };
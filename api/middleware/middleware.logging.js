const { ErrorResponse } = require('../responses/response');

const preAPIMiddleware = (req, res, next) => {
    console.log(`[${new Date()}] Before API Call: ${req.method} ${req.url}`);
    next();
};

const postAPIMiddleware = (req, res, next) => {
    res.on('finish', () => {
        console.log(`[${new Date()}] After API Call: ${req.method} ${req.url} - Status: ${res.statusCode}`);
    });
    next();
};

const errorHandlingMiddleware = (err, req, res, next) => {
    console.error(`[${new Date()}] Error: ${err.message}`);
    const response = new ErrorResponse('error', 'Internal Server Error', err.message, new Date(), 0);
    res.status(500).json(response);
};

module.exports = {
    preAPIMiddleware,
    postAPIMiddleware,
    errorHandlingMiddleware,
};
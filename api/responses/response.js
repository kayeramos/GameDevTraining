class SuccessResponse {
    constructor(Status, Message, Data, Date, MS) {
        this.Status = Status;
        this.Message = Message;
        this.Data = Data !== undefined ? Data : null;
        this.Date = Date;
        this.MS = MS;
    }
}

class ErrorResponse {
    constructor(Status, Message, Error, Date, MS) {
        this.Status = Status;
        this.Message = Message;
        this.Error = Error;
        this.Date = Date;
        this.MS = MS;
    }
}

module.exports = {
    SuccessResponse,
    ErrorResponse,
};
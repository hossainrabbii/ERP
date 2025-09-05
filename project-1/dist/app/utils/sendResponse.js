const sendSuccessResponse = (res, responseData) => {
    res.status(responseData.statusCode).json({
        success: true,
        message: responseData.message,
        data: responseData.data,
    });
};
export const sendResponse = {
    sendSuccessResponse,
};
//# sourceMappingURL=sendResponse.js.map
const sendSuccessResponse = (res: any, responseData: any) => {
  res.status(responseData.statusCode).json({
    success: true,
    message: responseData.message,
    data: responseData.data,
  });
};

export const sendResponse = {
  sendSuccessResponse,
};
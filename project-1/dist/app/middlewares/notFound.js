import status from "http-status";
const notFound = (req, res, next) => {
    return res.status(status.NOT_FOUND).json({
        status: status.NOT_FOUND,
        success: false,
        message: "API not found!",
        error: " ",
    });
};
export default notFound;
//# sourceMappingURL=notFound.js.map
const multer = require('multer');
const DatauriParser = require('datauri/parser');
const path = require('path');
const storage = multer.memoryStorage();
const multerUploads = multer({ storage }).single('image');
const parser = new DatauriParser();
/**
* @description This function converts the buffer to data url
* @param {Object} req containing the field object
* @returns {String} The data url from the string buffer
*/
const dataUri = (req, res, next) => {
    const extname = path.extname(req.file.originalname).toString();
    const file64 = parser.format(extname, req.file.buffer);

    return file64;
};
module.exports = { multerUploads, dataUri };
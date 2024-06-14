// const multer = require('multer');

// // Set storage engine
// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   },
// });

// // Initialize upload variable
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 }, // Limit file size to 1MB
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// }).single('file'); // Ensure this matches the field name in your form data

// // Check file type function
// function checkFileType(file, cb) {
//   // Allowed file extensions
//   const filetypes = /jpeg|jpg|png|gif/;
//   // Check file extension
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   // Check mime type
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }

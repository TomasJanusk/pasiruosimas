const express = require("express");
const router = express.Router();
const photoController = require("./../controllers/photoController");
const authController = require("../controllers/authController");


router.use(authController.protect);

router
  .route("/")
  .get(authController.restrictTo("user"), photoController.getAllPhotos)
  .post(photoController.createPhoto);

router
  .route("/:id")
  .get(photoController.getPhotoById)
  .patch(photoController.updatePhoto)
  .delete(photoController.deletePhoto);



module.exports = router;
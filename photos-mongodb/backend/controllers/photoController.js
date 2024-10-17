const Photo = require("../models/photoModel");

//Routes functions

exports.getAllPhotos = async (req, res) => {
  try {
    //Filtering
    const queryObj = { ...req.query };
    const excludedFields = ["sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    //Advanced filtering

    let queryStr = JSON.stringify(queryObj); //convert to string
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`); //add $ sign to operator
    console.log(JSON.parse(queryStr)); //console and parse string from query obj

    let query = Photo.find(JSON.parse(queryStr));

    //Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }
    //Field limiting

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    }

    //Execute query

    const photos = await query; //filter using mongo compare operators
    res.status(200).json({
      status: "success",
      results: photos.length,
      data: {
        photos,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createPhoto = async (req, res) => {
  try {
    const newPhoto = await Photo.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        photo: newPhoto,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getPhotoById = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  if (!photo) {
    return res.status(404).json({
      status: "failed",
      message: "Invalid ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      photo,
    },
  });
};

exports.updatePhoto = async (req, res) => {
  try {
    const photo = await Photo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        photo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      data: {
        message: err,
      },
    });
  }
};

exports.deletePhoto = async (req, res) => {
  try {
    await Photo.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({
    status: "success",
    data: {
      photo: null,
    },
  });
};
"use strict";
const Models = require("../models");

// finds all likes in DB, then sends array as response
const getLikes = (res) => {
  Models.Like.findAll({})
    .then((data) => {
      res.status(200).send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.satus(500).send({ result: 500, error: err.message });
    });
};

// uses JSON from req.body to create new Like in DB
const createLike = (data, res) => {
  Models.Like.create(data)
    .then((data) => {
      res.status(201).send({ result: 201, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

// uses JSON from req.body to update Like ID from req.params.id
// const updateLike = (req, res) => {
//   Models.Like.update(req.body, { where: { id: req.params.id } })
//     .then((data) => {
//       res.status(204).send({ result: 204, data: data });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send({ result: 500, error: err.message });
//     });
// };

// deletes Like matching ID from req.params.id
const deleteLike = (req, res) => {
  Models.Like.destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.status(204).send({ result: 204, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getLikes,
  createLike,
  deleteLike,
//   updateLike,
};
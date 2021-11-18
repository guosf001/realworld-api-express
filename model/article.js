const mongoose = require('mongoose');

const { Schema } = mongoose;
const baseModel = require('./base-model');

const articleSchema = new Schema({
  ...baseModel,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  tagList: {
    type: [String],
    default: null,
  },
  favoritesCount: {
    type: Number,
    default: 0,
  },
  // 映射到User
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = articleSchema;

require('dotenv').config()

const path = process.env.IMAGE_LOADER_PATH

module.exports = {
  images: {
    loader: 'imgix',
    path: path
  },
}
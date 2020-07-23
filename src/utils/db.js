import mongoose from 'mongoose'
import options from '../config'

export const connect = (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true }
  )
}

/*
// Connecting to our database
const db = mongoose
  .connect(
    'mongodb://localhost:27017/jsmakersdb',
    { useNewUrlParser: true }
  )
  .then(() => console.log("DB is connected ✓"))
  .catch(e => console.error(e));

module.exports = db; */
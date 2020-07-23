import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
      match: [/^[a-zA-Z0-9]+$/, 'is invalid']
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
      match: [/^[a-zA-Z0-9]+$/, 'is invalid']
    },
    password: {
      type: String,
      required: true
    },
    hash: String,
    salt: String
  },
  { timestamps: true }
)

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err)
    }

    this.password = hash
    next()
  })
})

userSchema.methods.checkPassword = function (password) {
  const passwordHash = this.password
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err)
      }

      resolve(same)
    })
  })
}

export const User = mongoose.model('user', userSchema)

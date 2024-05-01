import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    diagonisedWith: {
      type: String,
      required: true,
    },

    patientAddress: {
      type: String,
      required: true,
    },

    bloodGroup: {
      type: String,
      enum: ['A+', 'B+', 'O+', 'AB+', 'O-'],
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      enum: ['M', 'F', 'Others'],
      required: true,
    },

    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    drName: {
      type: String,
      required: true,
    },

    drSalary: {
      type: Number,
      required: true,
    },

    drQualification: {
      type: String,
      required: true,
    },

    expInYears: {
      type: Number,
      default: 0,
    },

    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
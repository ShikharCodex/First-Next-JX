import mongoose from "mongoose";

const JournalSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    summary: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Journal ||
  mongoose.model("Journal", JournalSchema);
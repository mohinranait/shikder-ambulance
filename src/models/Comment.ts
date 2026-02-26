import mongoose, { Schema, Model, Document } from "mongoose";

// =======================
// TypeScript interface (optional)
// =======================
export interface IComment extends Document {
  name?: string;
  postId: mongoose.Types.ObjectId;
  content?: string;
  star?: number;
  status?: 'pending' | 'approved' | 'rejected';
}

// =======================
// Schema
// =======================
const commentSchema = new Schema<IComment>(
  {
    name: { type: String, trim: true },
    postId: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    content: { type: String, trim: true },
    star: { type: Number, default: 5 },
    status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'approved' },
  },
  { timestamps: true }
);

// =======================
// Hot reload safe for Next.js
// =======================
const Comment: Model<IComment> = (mongoose.models && mongoose.models.Comment)
  ? mongoose.models.Comment
  : mongoose.model<IComment>("Comment", commentSchema);

export default Comment;
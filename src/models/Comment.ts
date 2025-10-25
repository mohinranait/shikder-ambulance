
import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    postId: {
        type: mongoose.Types.ObjectId,
        ref: "Post",
    },
    content: {
        type: String,

    },
    star: {
        type: Number,
        default: 5,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'approved'
    },
}, { timestamps: true })

export default mongoose.models.Comment || mongoose.model('Comment', commentSchema)


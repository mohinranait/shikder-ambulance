
import mongoose from "mongoose"

const appSchema = new mongoose.Schema({

    email: {
        user: {
            type: String,
        },
        password: {
            type: String,
        },
        status: {
            type: Boolean,
        },
    },
    cloudinary: {
        name: {
            type: String,
        },
        key: {
            type: String,
        },
        secret: {
            type: String,
        },
        status: {
            type: Boolean,
        },
    },
    
}, { timestamps: true })

export default mongoose.models.AppModel || mongoose.model('AppModel', appSchema)


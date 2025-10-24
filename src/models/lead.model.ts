import { model, models, Schema } from "mongoose";

const leadSchema = new Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        default: "Unknown"
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    leadType: {
        type: String,
        enum: ['Customer', 'Provider'],
        default: "Customer"
    },
    district: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true });

const Lead = models.Lead || model("Lead", leadSchema);

export default Lead;
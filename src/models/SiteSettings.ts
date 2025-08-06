import mongoose from "mongoose"

const SiteSettingsSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      default:'/default.png?height=40&width=40'
    },
    siteName: {
      type: String,
    },
    metaTitle: {
      type: String,
    },
    metaDescription: {
      type: String,
    },

    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
     marque: {
      type: String,
    },
    marqueStatus: {
      type: Boolean,
      default:true
    },
    socialMedia: {
      facebook: { type: String, },
      twitter: { type: String,  },
      instagram: { type: String,  },
      youtube: { type: String,  },
      pintarest: { type: String,  },
      tiktok: { type: String,  },
    },
  },
  {
    timestamps: true,
  },
)

export default mongoose.models.SiteSettings || mongoose.model("SiteSettings", SiteSettingsSchema)

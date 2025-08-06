export interface SiteSettings {
  logo: string
  siteName: string
  metaTitle: string
  metaDescription: string
  address: string
  marque: string
  marqueStatus: boolean
  phone: string
  email: string
  socialMedia: {
    facebook: string
    twitter: string
    instagram: string
    youtube: string
    pintarest: string
    tiktok: string
  }
}

export const defaultSiteSettings: SiteSettings = {
  logo: "/default.png?height=40&width=40",
  siteName: "Shikder ambulance",
  metaTitle: "Shikder ambulance",
  metaDescription: "",
  address: "",
  marque: "",
  marqueStatus: true,
  phone: "",
  email: "",
  
  socialMedia: {
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    pintarest: "",
    tiktok: "",
  },
}

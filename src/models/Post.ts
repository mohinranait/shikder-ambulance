import mongoose, { Schema, Model, Document } from "mongoose";

// =======================
// TypeScript interface
// =======================
export interface IPost extends Document {
  author: mongoose.Types.ObjectId;
  postTitle: string;
  postName?: string;
  shortDescription?: string;
  slug?: string;
  image?: {
    featuresImage?: string;
    thumbnail?: string;
  };
  content?: string;
  readTime?: number;
  contents?: {
    priority?: string;
    content?: string;
  }[];
  status?: "Publish" | "Unpublish";
  contactNumber?: string;
  layouts?: {
    banner?: boolean;
    sidebar?: "posts" | "comments" | "author";
    isSidebar?: "right" | "left" | "both" | "none";
    comments?: boolean;
  };
  seoTitle?: string;
  seoDescription?: string;
  publishDate?: Date;
  seoKeyword?: string[];
  reviews?: number;
}

// =======================
// Schema
// =======================
const postSchema = new Schema<IPost>(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    postTitle: { type: String, required: true, trim: true },
    postName: { type: String, trim: true },
    shortDescription: { type: String },
    slug: { type: String, trim: true },
    image: {
      featuresImage: { type: String },
      thumbnail: { type: String },
    },
    content: { type: String },
    readTime: { type: Number, default: 0 },
    contents: [
      {
        priority: { type: String },
        content: { type: String },
      },
    ],
    status: { type: String, default: "Publish", enum: ["Publish", "Unpublish"] },
    contactNumber: { type: String },
    layouts: {
      banner: Boolean,
      sidebar: { type: String, default: "posts", enum: ["posts", "comments", "author"] },
      isSidebar: { type: String, default: "right", enum: ["right", "left", "both", "none"] },
      comments: Boolean,
    },
    seoTitle: { type: String },
    seoDescription: { type: String },
    publishDate: { type: Date, default: Date.now },
    seoKeyword: { type: [String] },
    reviews: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// =======================
// Fix for Next.js hot reload
// =======================
const Post: Model<IPost> = (mongoose.models && mongoose.models.Post)
  ? mongoose.models.Post
  : mongoose.model<IPost>("Post", postSchema);

export default Post;

// import mongoose from "mongoose"


// const postSchema = new mongoose.Schema({
//     author: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//     },
//     postTitle: {
//         type: String,
//         required:true,
//         trim:true,
//     },
//     postName: {
//         type: String,
//          trim: true,
//     },
//     shortDescription: {
//         type: String,
//     },
//     slug: {
//         type:String,
//         trim:true,
//     },
//     image: {
//         featuresImage: {
//             type: String,
//         },
//         thumbnail: {
//             type: String
//         },
//     },
//     content:{
//         type:String

//     },
//     readTime:{
//         type:Number,
//         default:0,
//     },
//     contents: [
//         {
//             priority: {
//                 type: String,
//             },
//             content: {
//                 type: String,
//             }
//         }
//     ],
//     status: {
//         type:String,
//         default:'Publish',
//         enum:['Publish',"Unpublish",]
//     },
//     contactNumber: {
//         type:String,
//     },
//     layouts:{
//         banner: Boolean,
//         sidebar:{
//             type:String,
//             default:'posts',
//             enum:['posts','comments','author']
//         },
//         isSidebar:{
//             type:String,
//             default:'right',
//             enum:['right','left','both','none']
//         },
//         comments:Boolean,
//     },
//     seoTitle: {
//         type: String,
//     },
//     seoDescription: {
//         type: String,
//     },
//     publishDate:{
//         type : Date,
//         default: Date.now,
//     },
//     seoKeyword: {
//         type: [String],
//     },
//     reviews:{
//         type: Number,
//         default:0,
//     }

// },{timestamps:true})


// export default mongoose.models.Post || mongoose.model("Post", postSchema)



import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
        type: String,
        required: true
    }, 
    content: {
        type: String,
        required: true
    }, 
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOn8DbriioqMj7tDtHLNiQlWeERCGPCnWcWg&s'
    }, 
    category: {
        type: String,
        default: 'uncategorized'
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;

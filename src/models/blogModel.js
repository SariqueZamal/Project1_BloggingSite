const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;


const blogSchema = new mongoose.Schema( {
    title: {
        type: String,
        required: true
  
      },

      body:{
        type: String,
        required: true
  
      },

     tags:[String],


     category:{
        type:[String],
        required: true
     },

     subcategory:{
        type:[String]
        
     },

     createdAt: Date,
     updatedAt: Date,
     deletedAt: Date,

     isDeleted:{
        type: Boolean,
        default: false,
     },

     publishedAt:Date,


     isPublished:{
        type: Boolean,
        default: false,
     },

    authorId: {
        type:ObjectId,
        required: true,
        ref: "Author"}
}, { timestamps: true });


module.exports = mongoose.model('blog', blogSchema)

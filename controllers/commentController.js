//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business Logic

exports.createComment = async(req, res) => {
    try{
      //fetch data through req. body
      const {post, user, body} = req.body;
      //create a comment object
      const comment = new Comment({
        post,user,body
      });
      //save the new comment into the database
      const savedComment = await comment.save();

      //find the post by id, add the new comment to its comments array
      //push is used to update  and pull is used to delete
      //new true se updated document aata haii
      //abhi acomments ki ids padhi haii actual document us id se relate karta haii usko fetch kar skte haii using polpulates


      const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id} }, {new: true} )
                  .populate("comments") //populate the comments array with comment documents
                  .exec();
      res.json({
        post: updatedPost,
      });       
    }
    catch(error){
        return res.status(500).json({
            erroe: "error while creating comment" ,
        });

    }

};
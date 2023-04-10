import Blog from "../../model/Blog";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
 if(req.method === "POST"){
    const { title, content,image, date, author } = req.body;
   
//     if(!title || !content || !image || !date || !author){
//         return res.status(422).json({ error: "Please add all the fields" });
//     }

//     const bl = Blog.findOne({title: title});
//     console.log(bl);
// if(bl){
//     // return res.status(422).json({ error: "Blog already exists" });
//     // res.status(422).json({ error: "Blog already exists" });
//     res.status(200).json({
//         bl
//     });

// }else{
    // }else{
 const blog = new Blog({
        title: title,
        content: content,
        image: image,
        date: date,
        author: author,
    });
    await blog.save();
    res.status(201).json({ 
        message: "Blog created successfully",
     });
// }
//  }
}

}

export default connectDB(handler);

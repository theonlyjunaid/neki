const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true , unique: true},
    content: { type: String, required: true },
    image: { type: String, required: true },
    date: { type: String, required: true },
    author: { type: String, required: true },
}, { timestamps: true });
export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);
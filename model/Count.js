const mongoose = require('mongoose');

const CountSchema = new mongoose.Schema({
    count: { type: Number, default: 1 }
}, { timestamps: true });
export default mongoose.models.Count || mongoose.model('Count', CountSchema);
import Count from "../../model/Count";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    
    try{
  const count = await Count.findOneAndUpdate({
       _id: "6433ab9382b5714b6ca7a409"
   }, { $inc: { count: 1 } });
    res.status(200).json({ count: count.count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default connectDB(handler);

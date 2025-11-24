import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected:${conn.connection.host}`);
    }
    catch (error) {
        console.error('mongodb connection failed', error);
        process.exit(1);
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map
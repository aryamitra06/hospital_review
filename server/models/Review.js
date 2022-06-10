import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    creatorId: String,
    postId: String, //reference of _id in Hospital
    name: String,
    visited: String,
    review: String,
    status: String,
    rating: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Review = mongoose.model('Review', reviewSchema)
export default Review;
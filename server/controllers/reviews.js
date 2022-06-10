import Review from '../models/Review.js';

export const getReviews = async(req, res) => {
    try {
        let reviews = await Review.find({ postId: req.params.id })
        res.json(reviews)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const addReview = async(req, res) => {
    try {
        const review = await new Review({ ...req.body, creator: req.userId });
        review.save();
        res.status(200).json("success")
    } catch (error) {
        res.status(404).json(error)
    }
}

export const getReviewData = async(req, res) => {
    try {
        const review = await Review.findById(req.params.id)
        res.json(review);
    } catch (error) {
        res.status(404).json(error)
    }
}

export const editReview = async(req, res) => {
    try {
        const editReview = new Review(req.body);
        await Review.updateOne({ _id: req.params.id }, editReview);
        res.status(200).send("Success");
    } catch (error) {
        res.status(404).json(error)
    }
}

export const deleteReview = async(req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id)
        res.status(200).send("Success");
    } catch (error) {
        res.status(404).json(error)
    }
}
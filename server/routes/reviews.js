import express from "express";
import {getReviews, addReview, getReviewData, editReview, deleteReview} from '../controllers/reviews.js'
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/reviews/:id', getReviews);
router.post('/reviews/new', auth, addReview);
router.get('/reviews/edit/:id', auth, getReviewData)
router.put('/reviews/edit/:id', auth, editReview);
router.delete('/reviews/delete/:id', auth, deleteReview)

export default router;
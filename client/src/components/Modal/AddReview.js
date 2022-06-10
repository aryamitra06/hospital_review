import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addReview } from '../../api/api'
export const AddReview = () => {
    const [reviewdata, setReviewData] = useState({ visited: '', review: '', status: '', rating: '' });
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('profile'));

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addReview({ ...reviewdata, name: user?.result?.name, postId: id })

        //closing modal logic
        document.getElementById("exampleModal").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
    }

    const handleOnChange = (e) => {
        setReviewData({ ...reviewdata, [e.target.name]: e.target.value });
    }


    return (
        <form onSubmit={handleSubmit}>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Write a Review</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="visited" class="form-label">Visited Doctor Name</label>
                                <input type="text" class="form-control" id="visited" onChange={handleOnChange} required name='visited' />
                            </div>
                            <div class="mb-3">
                                <label for="review" class="form-label">Review</label>
                                <textarea type="text" class="form-control" id="review" onChange={handleOnChange} required name='review' />
                            </div>
                            <div class="mb-3">
                                <label for="status" class="form-label">Status</label>
                                <input type="text" class="form-control" id="status" onChange={handleOnChange} required name='status' />
                            </div>
                            <div class="mb-3">
                                <label for="rating" class="form-label">Rate Hospital out of 5</label>
                                <input type="number" class="form-control" id="rating" onChange={handleOnChange} required name='rating' />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Add Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

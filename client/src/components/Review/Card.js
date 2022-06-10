import React, { useEffect, useState } from 'react';
import "./Review.css";
import userImage from "../images/userImage.png";
import { AddReview } from '../Modal/AddReview';
import { useParams } from 'react-router-dom';

import { getReviews } from '../../api/api';
import moment from 'moment'
import EditReview from '../Modal/EditReview';
import DeleteReview from '../Modal/DeleteReview'


export const Card = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await getReviews(id);
        setData(response.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(data);

    return (
        <>
            <section className='Review_wrapper'>
                <div className='Review_overview'>
                </div>
                <div className='Reviews'>
                    <div className='Review_main'>
                        <div className='Reviews_header'>
                            <h1>Reviews</h1>
                            <button className='add_review' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Review</button>
                        </div>

                        {
                            data?.map(d => (
                                <>
                                    <div className='Review_main_details mb-3'>
                                        <div className='Review_user'>
                                            <div className='Review_user_details'>
                                                <div className='Review_user_image'>
                                                    <img src={userImage} alt="" />
                                                </div>
                                                <div className='User_details'>
                                                    <p className='Review_user_name'>{d?.name}</p>
                                                    <p className='Review_visited'>Visited Dr. {d?.visited}</p>
                                                    <p className='Review_time'>{moment(d?.createdAt).fromNow()}</p>
                                                </div>
                                            </div>
                                            <div className='recommend_or_not'>
                                                <p>{d?.status} ({d?.rating}⭐)</p>
                                            </div>
                                        </div>

                                        <div className='Review_by_user'>
                                            <p className='Review_paragraph'>{d?.review}</p>
                                        </div>

                                        <div className='edit_delete'>
                                            <button className='edit' data-bs-toggle="modal" data-bs-target="#editmodal">
                                                <p>Edit</p>
                                            </button>
                                            <button className='delete' data-bs-toggle="modal" data-bs-target="#deletemodal">
                                                <p>Delete</p>
                                            </button>
                                        </div>
                                    </div>
                                    <EditReview/>
                                    <DeleteReview/>
                                </>
                            ))
                        }

                    </div>
                </div>
            </section>
            <AddReview />
        </>
    )
}

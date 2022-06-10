import React from 'react';
import "./HeroReview.css";
import heroImage from "../images/hero-img.svg";
import { useParams } from 'react-router-dom';
import { Card } from './Card';
import { getHospitalData } from '../../api/api';
export const Review = () => {
  const { id } = useParams();
  const [data, setData] = React.useState([]);

  const getData = async () => {
    const response = await getHospitalData(id);
    setData(response.data)
  }
  React.useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <section className="heroReview">
        <div className='heroReview_wrapper'>
          <div className="heroReview_info">
            <div className="heroReview_info_details">
              <h1>{data?.name}</h1>
              <p className='heroReview_star'>⭐⭐⭐⭐⭐</p>
              <p className='heroReview_address'><i class="fas fa-map-pin"></i> {data?.location}</p>
              <p className='heroReview_small-details'><span className='speciality'>{data?.type}</span> |  <span className='beds'>{data?.beds} Beds</span>  |  <span className='details'>{data?.doctors} Doctors</span></p>
              <a href={`tel:${data?.phno}`}><button className='heroReview_call'>CALL NOW</button></a>
            </div>
          </div>
          <div className="heroReview_img">
            <img src={data?.selectedFile} alt={data?.name} />
          </div>
        </div>
      </section>
      <Card />
    </>
  )
}

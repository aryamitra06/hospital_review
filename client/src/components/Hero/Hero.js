import React from 'react';
import "./Hero.css";
import heroImage from "../images/hero-img.svg";
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();
  const [query, setquery] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${query.query}`);
  }

  const handleOnChange = (e) => {
    setquery({ ...query, [e.target.name]: e.target.value });
}

  return (
    <div>
      <section className="hero">
        <div className='Hero_wrapper'>
          <div className="hero_info">
            <div className="hero_info_details">
              <h1>Find only verified and trusted hospitals near you.</h1>
              <form onSubmit={handleSubmit}>
                <div className="hero_input">
                  <input type="text" placeholder="Search by location or name" name="query" onChange={handleOnChange}/>
                  <button type='submit' className='submit_btn'>
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="hero_img">
            <img src={heroImage} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

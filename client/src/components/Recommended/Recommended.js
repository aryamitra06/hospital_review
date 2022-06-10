import React from 'react';
import { Hero } from '../Hero/Hero';
import "./Recommended.css";
import { fetchHospitals,searchPost } from '../../api/api';
import { Link, useSearchParams } from 'react-router-dom';


export const Recommended = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = React.useState([]);

  const search = searchParams.get("query");

  const getAllHospitals = async () => {
    const response = await fetchHospitals();
    setData(response.data)
  }

  const getSearchHospitals = async() => {
    const response = await searchPost(search);
    setData(response.data);
  }

  React.useEffect(() => {
    if (search === null) {
      getAllHospitals();
    }
    if (search === "") {
      getAllHospitals();
    }
    if (search) {
      getSearchHospitals();
    }

  }, [search])

console.log(data);

  return (
    <>
      <Hero />
      <section className="recommended_section">
        <p className="recommended_text">Recommended for you</p>
        <div class="recommended">
          {
            data?.length === 0 && (
              <>
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </>
            )
          }
          {
            data?.map(d => (
              <>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/hospital/${d._id}`}>
                  <div class="search_grid">
                    <div className="search_grid_details">
                      <div className="grid_image">
                        <img src={d.selectedFile} alt={d.name} />
                      </div>
                      <div className="grid_data">
                        <p>{d?.name}</p>
                        <p>{d?.location}</p>
                        <p>{d?.type}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            ))
          }
        </div>
      </section>
    </>
  )
}

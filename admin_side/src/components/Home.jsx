import React, { useEffect, useState } from 'react'
import { fetchHospitals, deleteHospital } from '../api/api'
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState([]);

    const getAllHospitals = async () => {
        const response = await fetchHospitals();
        setData(response.data)
    }

    useEffect(() => {
        getAllHospitals();
    }, [refresh])

    const deleteHospitalHandler = async (id) => {
        if (window.confirm('Delete record?')) {
            await deleteHospital(id);
            await setRefresh(prev => !prev)
        }
    }
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Admin Panel</a>
                </div>
            </nav>
            <div className="container mt-3 d-flex align-items-center justify-content-end">
                <Link to='/new'><button type="button" className="btn btn-primary">Add New Record</button></Link>
            </div>
            <div className="container mt-3 d-flex align-items-center justify-content-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">File</th>
                            <th scope="col">Name</th>
                            <th scope="col">Location</th>
                            <th scope="col">Type</th>
                            <th scope="col">Beds</th>
                            <th scope="col">Doctors</th>
                            <th scope="col">ph</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map(d => (
                                <tr>
                                    <td>{d.selectedFile.toString().substring(0, 3)}...</td>
                                    <td>{d.name}</td>
                                    <td>{d.location}</td>
                                    <td>{d.type}</td>
                                    <td>{d.beds}</td>
                                    <td>{d.doctors}</td>
                                    <td>{d.phno}</td>
                                    <td>
                                        <Link to={`edit/${d._id}`}><button className='btn btn-sm btn-outline-dark'>Edit</button></Link> &nbsp;
                                        <button className='btn btn-sm btn-outline-dark' onClick={() => deleteHospitalHandler(d._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home
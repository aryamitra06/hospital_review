import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { useNavigate, useParams } from 'react-router-dom';
import { editHospital, fetchDataForId } from '../api/api';

function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [postData, setPostData] = useState({ selectedFile: '', name: '', location: '', type: '', beds: '', doctors: '', phno: '' })

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editHospital(id, postData)
        await navigate('/');
    }

    const handleOnChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
    }

    //api call to loading data for specific id
    const loadHospitalData = async () => {
        const response = await fetchDataForId(id);
        setPostData(response.data);
    }
    //to display data for the id
    useEffect(() => {
        loadHospitalData();
        // eslint-disable-next-line
    }, []);



    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div className="container">
                <h3>Edit Record</h3>
            </div>
            <div className="container mt-2" style={{ width: '100%' }}>
                <div className="card">
                    <div className="card-body">
                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={postData.name} required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Location</label>
                                <input type="text" className="form-control" name='location' value={postData.location} required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <input type="text" className="form-control" name='type' value={postData.type} required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Beds</label>
                                <input type="number" className="form-control" name='beds' value={postData.beds} required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Doctors</label>
                                <input type="number" className="form-control" name='doctors' value={postData.doctors} required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Ph no.</label>
                                <input type="number" className="form-control" name='phno' value={postData.phno} required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary w-100">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit
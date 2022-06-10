import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';

import { addHospital } from '../api/api';

function Add() {
    const navigate = useNavigate();
    const [postData, setPostData] = useState({ selectedFile: '', name: '', location: '', type: '', beds: '', doctors: '', phno: '' })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(postData);
        await addHospital(postData);
        await navigate('/');
    }

    const handleOnChange = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value });
    }

    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div className="container">
                <h4>Add New Record</h4>
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
                                <input type="text" className="form-control" name='name' required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Location</label>
                                <input type="text" className="form-control" name='location' required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <input type="text" className="form-control" name='type' required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Beds</label>
                                <input type="number" className="form-control" name='beds' required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Doctors</label>
                                <input type="number" className="form-control" name='doctors' required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Ph no.</label>
                                <input type="number" className="form-control" name='phno' required onChange={handleOnChange} />
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary w-100">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
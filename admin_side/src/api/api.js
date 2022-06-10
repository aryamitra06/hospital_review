import axios from 'axios';

const url = 'http://localhost:5000'; //main database localhost

//@adding
export const addHospital = async (hospital) => {
    return await axios.post(`${url}/new`, hospital);
}

//@getting all
export const fetchHospitals = async() => {
    return await axios.get(`${url}/`);
}

//@getting edit info
export const fetchDataForId = async(id) => {
    return await axios.get(`${url}/edit/${id}`);
}

//@editing info
export const editHospital = async(id, hospital) => {
    return await axios.put(`${url}/edit/${id}`, hospital);
}

//@deleting info
export const deleteHospital = async(id) => {
    return await axios.delete(`${url}/delete/${id}`);
}
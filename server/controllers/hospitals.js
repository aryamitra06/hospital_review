import Hospital from '../models/Hospital.js'

export const getHospitals = async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.status(200).json(hospitals)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const addHospital = async (req, res) => {
    try {
        await Hospital(req.body).save();
        res.status(200).send("Success");
    } catch (error) {
        res.status(404).json(error)
    }
}

export const getHospitalData = async (req, res) => {
    try {
        const fetchHospitalForId = await Hospital.findById(req.params.id);
        res.json(fetchHospitalForId)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const editHospital = async (req, res) => {
    try {
        const editHospital = new Hospital(req.body);
        await Hospital.updateOne({ _id: req.params.id }, editHospital);
        res.status(200).send("Success");
    } catch (error) {
        res.status(404).json(error)
    }
}

export const deleteHospital = async (req, res) => {
    try {
        await Hospital.findByIdAndDelete(req.params.id)
        return res.status(200).send("Success");
    } catch (error) {
        res.status(404).json(error)
    }
}

export const searchHospital = async (req, res) => {
    const { query } = req.query;
    try {
        const q = new RegExp(query, "i");
        const hospitals = await Hospital.find({ $or: [{ name: q }, { location: q }, { type: q }] });
        res.json(hospitals);
    } catch (error) {
        res.status(404).json(error);
    }
}
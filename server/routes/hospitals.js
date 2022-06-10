import express from "express";
import {getHospitals, addHospital, getHospitalData, editHospital, deleteHospital, searchHospital} from '../controllers/hospitals.js'

const router = express.Router();

router.get('/', getHospitals);
router.post('/new', addHospital);
router.get('/edit/:id', getHospitalData);
router.put('/edit/:id', editHospital);
router.delete('/delete/:id', deleteHospital);
router.get('/search', searchHospital);

export default router;
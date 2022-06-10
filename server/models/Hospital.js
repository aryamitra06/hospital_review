import mongoose from 'mongoose';

const hospitalSchema = mongoose.Schema({
    selectedFile: String,
    name: String,
    location: String,
    type: String,
    beds: String,
    doctors: String,
    phno: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Hospital = mongoose.model('Hospital', hospitalSchema)
export default Hospital;
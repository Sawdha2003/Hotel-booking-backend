import mongoose from "mongoose";
const GalleryitemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Galleryitems= mongoose.model("Galleryitems", GalleryitemsSchema)

export default  Galleryitems;
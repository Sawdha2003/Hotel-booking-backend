import express from "express";

import { createGalleryItem } from "../Controller/GalleryitemController.js";


const GalleryItemRouter= express.Router();

GalleryItemRouter.post("/" ,createGalleryItem)


export default GalleryItemRouter
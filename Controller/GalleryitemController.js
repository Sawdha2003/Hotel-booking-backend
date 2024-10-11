import Galleryitems from '../Model/Galleryitems.js'; // Imported model

// Function to create a new gallery item
export function createGalleryItem(req, res) {
  const user = req.user;
  
  if (!user) {  // Check if the user is logged in
    res.status(403).json({
      message: "Please login to create a gallery item"
    })
    return
  
  }

  if(user.type !="admin"){

    res.status(403).json({
      message:"You do not have  apermission to gallery item"
    })
    return
  }
  
  const galleryItemData = req.body;  // Changed variable name to avoid conflict
  
  // Create a new instance of the Galleryitems model
  const newGalleryItem = new Galleryitems(galleryItemData);
  newGalleryItem.save()
    .then(() => {
      res.json({
        message: "Gallery Item created successfully"
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Gallery Item creation failed",
        error: err.message
      });
    });
}

// Function to retrieve all gallery items
export function getGalleryItems(req, res) {
  Galleryitems.find()
    .then((list) => {
      res.json({
        list: list
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to retrieve gallery items",
        error: err.message
      });
    });
}

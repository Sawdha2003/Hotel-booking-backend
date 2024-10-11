import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true,
    default: "Customer"
  },

  WhatsApp: {

    type: String,
    required: true
  },

  Phone: {

    type: String,
    required: true
  },

  disabled : {

    type: Boolean,
    required: true,
    default: false
  },

  emailVerified: {

    type: Boolean,
    required: true,
    default: false
  }


  // img: {
  //   type: String,
  //   default: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
  // }


});

const Users = mongoose.model("Users", userSchema); // Change 'user' to 'Users'

// Export the correct variable
export default Users;


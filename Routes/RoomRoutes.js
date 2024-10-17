import express from 'express';
import { createRoom, deleteRoom, findRoomById ,updateRoom,getRoomsByCategory} from '../Controller/RoomController.js';


const roomRouter = express.Router();

roomRouter.post("/", createRoom)

roomRouter.delete("/:roomId", deleteRoom)

roomRouter.get("/:roomId", findRoomById)

roomRouter.put("/:roomId", updateRoom)

roomRouter.get("/by-category/:category", getRoomsByCategory)
export default roomRouter
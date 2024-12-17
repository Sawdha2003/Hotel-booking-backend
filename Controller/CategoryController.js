import Category from "../Model/Category.js";
import Room from "../Model/Room.js";
import { isAdminValid } from "./UserController.js";


export function createCategory(req, res) {
	if (req.user == null) {
		res.status(401).json({
			message: "Unauthorized",
		});
		return;
	}
	if (req.user.type != "admin") {
		res.status(403).json({
			message: "Forbidden",
		});
		return;
	}
	const newCategory = new Category(req.body);
	newCategory
		.save()
		.then((result) => {
			res.json({
				message: "Category created successfully",
				result: result,
			});
		})
		.catch((err) => {
			res.json({
				message: "Category creation failed",
				error: err,
			});
		});
}

//delete category
export function deleteCategory(req, res) {
	// console.log(req.user);

	// // Check if user is authenticated
	// if (!req.user) {
	// 	return res.status(401).json({
	// 		message: "Unauthorized",
	// 	});
	// }

	// // Check if user has admin privileges
	// if (req.user.type !== "admin") {
	// 	return res.status(403).json({
	// 		message: "Forbidden",
	// 	});
	// }

	const name = req.params.name;

	// Check if there are rooms with the category
	Room.findOne({ category: name })
		.then((room) => {
			if (room) {
				// If a room exists with this category, prevent deletion
				return res.status(400).json({
					message: "Cannot delete category. Rooms with this category exist.",
				});
			}

			// If no rooms exist with the category, delete the category
			Category.findOneAndDelete({ name })
				.then(() => {
					res.status(200).json({
						message: "Category deleted successfully",
					});
				})
				.catch((err) => {
					console.error(err);
					res.status(500).json({
						message: "Category deletion failed",
						error: err.message,
					});
				});
		})
		.catch((err) => {
			console.error(err);
			res.status(500).json({
				message: "Error checking rooms with category",
				error: err.message,
			});
		});
}
export function getCategory(req, res) {
	Category.find()
		.then((result) => {
			res.json({
				categories: result,
			});
		})
		.catch(() => {
			res.json({
				message: "Failed to get categories",
			});
		});
}

export function getCategoryByName(req, res) {
	const name = req.params.name;
	Category.findOne({ name: name })
		.then((result) => {
			if (result == null) {
				res.json({
					message: "Category not found",
				});
			} else {
				res.json({
					category: result,
				});
			}
		})
		.catch(() => {
			res.json({
				message: "Failed to get category",
			});
		});
}
export function updateCategory(req, res) {
	if (!isAdminValid(req)) {
		res.status(403).json({
			message: "Unauthorized",
		});
		return;
	}

	const name = req.params.name;

	Category.updateOne({ name: name }, req.body)
		.then(() => {
			res.json({
				message: "Category updated successfully",
			});
		})
		.catch(() => {
			res.json({
				message: "Failed to update category",
			});
		});
}
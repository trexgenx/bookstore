const mongoose = require('mongoose');

// Book Schema
const bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type: String,
		required: true
	},
	description:{
		type: String
	},
	author:{
		type: String,
		required: true
	},
	publisher:{
		type: String
	},
	pages:{
		type: String
	},
	image_url:{
		type: String
	},
	buy_url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
/*module.exports.getBooks = (callback, limit) => {
	Book.find(callback).limit(limit);
}*/
module.exports.getBooks = (limit) => {
	return new Promise((resolve, reject) => {
	  Book.find()
		.limit(limit)
		.exec()
		.then(books => resolve(books))
		.catch(err => reject(err));
	});}

// Get Book
/*module.exports.getBookById = (id, callback) => {
	Book.findById(id, callback);
}*/

module.exports.getBookById = (id) => {
	return new Promise((resolve, reject) => {
	  Book.findById(id)
		.exec()
		.then(book => resolve(book)) 
		.catch(err => reject(err));
	});}

// Add Book
/*module.exports.addBook = (book, callback) => {
	Book.create(book, callback);
}*/
module.exports.addBook = (book) => {
	return new Promise((resolve, reject) => {
	  Book.create(book)
		.then(addedBook => resolve(addedBook))
		.catch(err => reject(err));
	}); 
  }

// Update Book
/*module.exports.updateBook = (id, book, options, callback) => {
	var query = {_id: id};
	var update = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image_url: book.image_url,
		buy_url: book.buy_url
	}
	Book.findOneAndUpdate(query, update, options, callback);
}*/
module.exports.updateBook = (id, book) => {
	return new Promise((resolve, reject) => {
	  Book.findOneAndUpdate(
		{ _id: id }, 
		book,
		{ new: true } 
	  )
	  .then(updatedBook => resolve(updatedBook))
	  .catch(err => reject(err));
	});
  }

// Delete Book
/*module.exports.removeBook = (id, callback) => {
	var query = {_id: id};
	Book.remove(query, callback);
}*/
module.exports.removeBook = (id) => {
	return new Promise((resolve, reject) => {
	  Book.deleteOne({_id: id })
		.then(result => resolve(result)) 
		.catch(err => reject(err));
	});
  }

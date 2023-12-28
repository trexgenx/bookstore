const mongoose = require('mongoose');

// Genre Schema
const genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Genre = module.exports = mongoose.model('Genre', genreSchema);

// Get Genres
/*module.exports.getGenres = (callback, limit) => {
	Genre.find(callback).limit(limit);
}*/
module.exports.getGenres = (limit) => {
	return new Promise((resolve, reject) => {
	  Genre.find()
		.limit(limit)
		.exec()
		.then(genres => resolve(genres)) 
		.catch(err => reject(err));
	});
  }

// Add Genre
/*module.exports.addGenre = (genre, callback) => {
	Genre.create(genre, callback);
}*/

module.exports.addGenre = (genre) => {
	return new Promise((resolve, reject) => {
	  Genre.create(genre)
		.then(addedGenre => resolve(addedGenre))
		.catch(err => reject(err));
	});
  }

// Update Genre
/*module.exports.updateGenre = (id, genre, options, callback) => {
	var query = {_id: id};
	var update = {
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback);
}*/
module.exports.updateGenre = (id, updatedGenre) => {
	return new Promise((resolve, reject) => {
	  Genre.findOneAndUpdate(
		{ _id: id },
		updatedGenre, 
		{ new: true }
	  )
	  .then(genre => resolve(genre))
	  .catch(err => reject(err));
	});
  }


// Delete Genre
/*module.exports.removeGenre = (id, callback) => {
	var query = {_id: id};
	Genre.remove(query, callback);
}*/
module.exports.removeGenre = (id) => {
	return new Promise((resolve, reject) => {
	  Genre.deleteOne({ _id: id})
		.then(result => resolve(result))
		.catch(err => reject(err));
	}); 
  }

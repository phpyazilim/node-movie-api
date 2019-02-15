const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const MovieSchema = new Schema({
		director_id: 	{
			type:Schema.Types.ObjectId,
     // default:"5c672a8dae5a152b5888e7e3"
		},

    title: {
			type: String 
			 
    },
    category: {
    	type: String,
			maxlength: 30,
			minlength: 1,
		},
    country: {
			type: String,
			maxlength: 30,
			minlength: 1,
		},
    year: {
    	type: Number,
			max: 2040,
			min: 1900
		},
    imdb_score: {
    	type: Number,
			max: 10,
			min: 0
		},
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('movie', MovieSchema);
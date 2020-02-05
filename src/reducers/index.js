const { combineReducers } = require("redux");

const songsReducer = require("./SongsReducers");
const selectedSongReducer = require("./SelectedSongReducer");

const reducers = combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});

module.exports = reducers;

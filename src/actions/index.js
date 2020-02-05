const selectSong = song => {
	return {
		type: "SONG_SELECTED",
		payload: song
	};
};

module.exports = selectSong;

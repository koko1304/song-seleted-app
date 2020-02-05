const React = require("react");
const { connect } = require("react-redux");

const SongListItem = require("./SongListItem");
const selectSong = require("../actions");

const SongsList = props => {
	const songListItems = props.songs.map(song => {
		return <SongListItem song={song} key={song.title} onClick={props.selectSong} />;
	});
	return <ul className="list-group list-group-flush">{songListItems}</ul>;
};

const mapStateToProps = state => {
	return { songs: state.songs };
};

module.exports = connect(mapStateToProps, { selectSong })(SongsList);

const React = require("react");
const { connect } = require("react-redux");

const SongDetail = props => {
	if (!props.song) {
		return <div>Please Select A Song You Like.</div>;
	}

	return (
		<div>
			<h3>{props.song.title}</h3>
			<p>Duration: {props.song.duration}</p>
		</div>
	);
};

const mapStateToProps = state => {
	return { song: state.selectedSong };
};

module.exports = connect(mapStateToProps)(SongDetail);

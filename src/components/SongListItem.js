const React = require("react");

const SongListItem = props => {
	return (
		<li style={{ cursor: "pointer" }} onClick={() => props.onClick(props.song)} className="list-group-item list-group-item-action">
			{props.song.title}
		</li>
	);
};

module.exports = SongListItem;

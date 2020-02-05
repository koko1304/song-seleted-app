const React = require("react");

const SongsList = require("./SongsList");
const SongDetail = require("./SongDetail");

const App = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<SongDetail />
				</div>
				<div className="col-6">
					<SongsList />
				</div>
			</div>
		</div>
	);
};

module.exports = App;

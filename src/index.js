const React = require("react");
const ReactDOM = require("react-dom");
const { Provider } = require("react-redux");
const { createStore } = require("redux");

const App = require("./components/App");
const reducers = require("./reducers");

const store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);

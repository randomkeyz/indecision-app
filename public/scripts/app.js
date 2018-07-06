'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Indecision App'
	),
	React.createElement(
		'p',
		null,
		'This is some info'
	),
	React.createElement(
		'ol',
		null,
		React.createElement('li', null),
		React.createElement('li', null)
	)
);

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Bruce Wayne'
	),
	React.createElement(
		'p',
		null,
		'Age: 123'
	),
	React.createElement(
		'p',
		null,
		'Location: USA'
	)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

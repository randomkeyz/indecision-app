console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
	<div>
		<h1>Indecision App</h1>
		<p>This is some info</p>
		<ol>
			<li></li>
			<li></li>
		</ol>
	</div>
);


var templateTwo = (
	<div>
		<h1>Bruce Wayne</h1>
		<p>Age: 123</p>
		<p>Location: USA</p>
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
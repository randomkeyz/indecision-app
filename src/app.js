// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = (
	<div>
		<h1>{app.title}</h1>
                <p>{app.options.length > 0 ? 'Here are your options' : 'You have no options'}</p>
                {app.subtitle && <p>{app.subtitle}</p>}
		<ol>
			<li></li>
			<li></li>
		</ol>
	</div>
);

var user = {
    name: 'Shuri',
    age: 22,
    location: 'Wakanda'
};

function getLocation(location){
    if (location){
        return <p>Location: {location}</p>;
    } 
}

var templateTwo = (
	<div>
		<h1>{user.name ? user.name : 'Anonymous'}</h1>
                {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
                {getLocation(user.location)}
	</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

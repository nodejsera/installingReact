var fs = require('fs');				// for all modules except global modules, we need to use "require"
var exec = require('child_process').exec;

//1
var child = exec('npm install  react',
function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null){
        console.log('exec error: ' + error);
    }
	//2
	var child1 = exec('npm install  react-dom',
	function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
	
		//3
		
		var child2= exec('npm install  webpack',
		function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
			//4
			var child3 = exec('npm install webpack-dev-server -g',
			function (error, stdout, stderr) {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			if (error !== null) {
				console.log('exec error: ' + error);
			}
				//5
				var child4= exec('npm install  babel-loader',
				function (error, stdout, stderr) {
				console.log('stdout: ' + stdout);
				console.log('stderr: ' + stderr);
				if (error !== null) {
					console.log('exec error: ' + error);
				}
					//6
					var child5 = exec('npm install  babel-core',
					function (error, stdout, stderr) {
					console.log('stdout: ' + stdout);
					console.log('stderr: ' + stderr);
					if (error !== null) {
						console.log('exec error: ' + error);
					}
						//7
						var child6 = exec('npm install babel-preset-es2015',
						function (error, stdout, stderr) {
						console.log('stdout: ' + stdout);
						console.log('stderr: ' + stderr);
						if (error !== null) {
							console.log('exec error: ' + error);
						}
							
							//8
							var child7 = exec('npm install  babel-preset-react',
							function (error, stdout, stderr) {
							console.log('stdout: ' + stdout);
							console.log('stderr: ' + stderr);
							if (error !== null) {
								console.log('exec error: ' + error);
							}
								
								});
							});	
						});	
					});	
				});	
			});	
		});	
    }); 











console.log("ready to write file");


fs.writeFileSync('main.js',"import Hello from './hello.jsx';\nimport World from './world.jsx';");
fs.writeFileSync('index.html','<!doctype html>\n<html>\n<head>\n<meta charset="UTF-8">\n<title>Hello React</title>\n</head>\n<body>\n<div id="hello"></div>\n<div id="world"></div>\n<script src="bundle.js"></script>\n</body>\n</html>');
fs.writeFileSync('webpack.config.js',"var path = require('path');\nvar webpack = require('webpack');\nmodule.exports = {\n entry: './main.js',\n output: { path: __dirname, filename: 'bundle.js' },\n  module: { \n    loaders: [\n   { \n   test: /.jsx?$/,\n        loader: 'babel-loader',\n        exclude: /node_modules/, \n   query: { \n         presets: ['es2015', 'react']\n        }\n      } \n   ]\n },\n};");

fs.writeFileSync('hello.jsx'," import React from 'react';\nimport ReactDOM from 'react-dom';\nclass Hello extends React.Component {\n  render() {\n    return <h1>Hello</h1>\n  }\n}\n ReactDOM.render(<Hello/>, document.getElementById('hello'));");

fs.writeFileSync('world.jsx',"import React from 'react';\nimport ReactDOM from 'react-dom';\nclass World extends React.Component {\n  render() {\n    return <h1>oye battery attery oye</h1> \n  }\n}\n ReactDOM.render(<World/>, document.getElementById('world')); ");



console.log('finished writing!');

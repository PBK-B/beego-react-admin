<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Welcome to beego-react-admin</title>
		<style type="text/css">
			* {
				padding: 0;
				margin: 0;
			}
		</style>
		<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
		<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
		<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
	</head>
	<body>
		<div id="app"></div>
	</body>
	<script type="text/babel">
		const HelloMessage = (props) => {
			return <div>Hello {props.name}</div>;
		};

		ReactDOM.render(<HelloMessage name="world" />, document.getElementById('app'));
	</script>
</html>

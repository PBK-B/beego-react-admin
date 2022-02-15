/*
 * @Author: Bin
 * @Date: 2022-02-16
 * @FilePath: /react-admin/src/pages/index/App.tsx
 */
import Reaxt from 'react';

export interface AppProps {
	name: string;
	blogUrl: string;
}

const App = (props: AppProps) => {
	const { name, blogUrl } = props;
	return (
		<div className="app_content">
			<h1>Welcome to beego-react-admin</h1>
			<p>
				The server provides API services for applications, and technical support is provided by
				<a href={blogUrl} target="_blank">
					{` ${name} `}
				</a>
				.
			</p>
			<p style={{ color: '#000' }}>Thank you for using beego-react-admin.</p>
		</div>
	);
};

export default App;

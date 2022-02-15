/*
 * @Author: Bin
 * @Date: 2022-02-16
 * @FilePath: /react-admin/src/pages/index/App.tsx
 */
import Reaxt from 'react';

export interface AppProps {
	name: string;
}

const App = (props: AppProps) => {
	return <div>Hello {props.name}</div>;
};

export default App;

import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Nine from './components/Nine';
import Eleven from './components/Eleven';

const App = () => {
	return (
		<>
			<Nav></Nav>
			<Routes>
				<Route path="/IX" element={<Nine />}></Route>
				<Route path="/XI" element={<Eleven />}></Route>
				<Route path="*" element={<Navigate to="/IX" replace />} />
			</Routes>
		</>
	);
};

export default App;

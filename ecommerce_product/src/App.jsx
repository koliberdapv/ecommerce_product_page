import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
	return (
		<>
			<Navbar />
			<Sidebar isSidebar={true} />
			<MainContent />
		</>
	);
}

export default App;

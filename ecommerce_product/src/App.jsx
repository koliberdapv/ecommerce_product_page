import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<Navbar />
			<Sidebar isSidebar={true} />
			<MainContent />
			<ToastContainer />
		</>
	);
}

export default App;

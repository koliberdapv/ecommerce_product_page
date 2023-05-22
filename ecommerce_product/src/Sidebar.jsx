import Links from './Links';
import close from './images/icon-close.svg';
import { useRef } from 'react';

const Sidebar = ({ isSidebar }) => {
	const dialogContainer = useRef(null);
	const handleClose = () => {
		dialogContainer.current.close();
	};
	return (
		<dialog
			className="sidebar"
			ref={dialogContainer}
		>
			<div className="sidebar_content | grid">
				<button
					type="button"
					className="btn sidebar_close_btn"
					onClick={handleClose}
				>
					<img
						src={close}
						alt="close"
					/>
				</button>
				<Links isSidebar={isSidebar} />
			</div>
		</dialog>
	);
};

export default Sidebar;

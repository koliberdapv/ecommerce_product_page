import { links } from './data';

const Links = ({ isSidebar }) => {
	return (
		<ul
			className={`links_container | ${
				isSidebar ? 'grid show_links sidebar_links_container' : 'flex'
			}`}
		>
			{links.map((link) => {
				const { id, content, url } = link;
				return (
					<li
						key={id}
						className={`single_link | flex ${
							isSidebar ? 'sidebar_single_link bold' : ''
						} `}
					>
						<a
							href={url}
							className="flex"
						>
							{content}
						</a>
					</li>
				);
			})}
		</ul>
	);
};

export default Links;

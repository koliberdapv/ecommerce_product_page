import { links } from './data';

const Links = () => {
	return (
		<ul className="links_container | flex">
			{links.map((link) => {
				const { id, content, url } = link;
				return (
					<li
						key={id}
						className="single_link | flex"
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

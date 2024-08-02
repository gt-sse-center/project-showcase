import './Main.css';
import data from '../content.json';

type Takeaway = {
	description?: string;
	children?: string[];
};
type Logo = {
	image: string;
	alt: string;
	url: string;
};
type ShowcaseItem = {
	title: string;
	description?: string;
	background: string;
	cover: string;
	logos?: Logo[];
	takeaways: Takeaway[];
	start_date: string;
	end_date: string;
};

function Main() {
	const items: ShowcaseItem[] = data;
	return (
		<main className="card9">
			<section>
				<section
					className="section-background"
					style={{ backgroundImage: "url('gatech_research16.png')" }}>
					<article>
						<a target="_blank" href="https://ssecenter.cc.gatech.edu/">
							<img src="Center for Scientific Software Engineering_8383.png" />
						</a>
						<h1>Project Showcase</h1>
					</article>
				</section>
				<section className="text-bloc">
					<figure>
						<img src="klaus.jpg" alt="photo" />
					</figure>
					<div>
						<h2>Our Background</h2>
						<p>
							<a target="_blank" href="https://ssecenter.cc.gatech.edu/">
								The Scientific Software Engineering (SSE) Center at Georgia Tech
							</a>{' '}
							is a new effort that is part of the{' '}
							<a target="_blank" href="https://www.schmidtsciences.org/viss/">
								Virtual Institute for Scientific Software (VISS)
							</a>
							. VISS was launched by Schmidt Sciences to address the need for training and educating
							software engineers. The SSE center at Georgia Tech is focused on developing new
							methodologies for improving high-performance scientific code and for training
							tomorrow’s software engineers.
						</p>
						<p>What follows is a sampling of our completed projects.</p>
					</div>
				</section>
			</section>
			{items.map((item: ShowcaseItem, index) => (
				<section key={index}>
					<section
						className={`section-background`}
						style={{ backgroundImage: `url(${item.background})` }}>
						<article>
							<p>{item.title}</p>
						</article>
					</section>
					<section className="text-bloc">
						<figure>
							<img src={`${item.cover}`} alt={item.title} />
						</figure>
						{item.description ? <div dangerouslySetInnerHTML={{__html: item.description}} /> : ''}
						{item.logos ? (
							<div>
								{item.logos?.map((logo) => (
									<a target="_blank" href={`${logo.url}`} aria-description={`link to ${logo.alt}`}>
										<img className="logo" alt={logo.alt} src={`${logo.image}`} />
									</a>
								))}
							</div>
						) : (
							''
						)}
						<div>
							{item.takeaways.map((takeaway, t_index) => (
								<p key={t_index}>
									{takeaway.description}
									<br />
									<ul>{takeaway.children?.map((child) => <li dangerouslySetInnerHTML={{__html: child }} />)}</ul>
								</p>
							))}
						</div>
					</section>
				</section>
			))}
		</main>
	);
}

export default Main;

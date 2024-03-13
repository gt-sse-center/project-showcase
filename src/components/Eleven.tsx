import React from 'react';
import './Eleven.css';
import data from '../content.json';

function Eleven() {
	return (
		<section className="container11">
			<header className="header11">
				<h1>Scientific Software Engineering Center Showcase</h1>
				<p>
					The Scientific Software Engineering (SSE) Center at Georgia Tech is a new effort that is
					part of the Virtual Institute for Scientific Software (VISS). VISS was launched by Schmidt
					Futures to address the need for training and educating software engineers, and the SSE
					center at Georgia Tech is focused on developing new methodologies for improving
					high-performance scientific codes and for training tomorrow’s software engineers.
				</p>
			</header>
			<main className="main11">
				{data.map((item) => (
					<section className="section11">
						<figure className="image-container11">
							<img src={item.background} alt="" />
						</figure>
						<article className="content11">
							<h2 className="section-title11">{item.title}</h2>
							<h3>{item.description}</h3>
							<img className="small-image11" src={item.cover}></img>
							<ul className="takeaways11">
								{item.takeaways.map((bullet) => (
									<li>{bullet}</li>
								))}
							</ul>
						</article>
					</section>
				))}
			</main>
			<footer className="footer11">Call to Action... Links...</footer>
		</section>
	);
}

export default Eleven;

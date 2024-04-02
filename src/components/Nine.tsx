import './Nine.css';
import data from '../content.json';

function Nine() {
	return (
		<main className="card9">
			<section>
				<section className="section-background parallax0">
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
						<p>
							The Scientific Software Engineering (SSE) Center at Georgia Tech is a new effort that
							is part of the Virtual Institute for Scientific Software (VISS). VISS was launched by
							Schmidt Futures to address the need for training and educating software engineers, and
							the SSE center at Georgia Tech is focused on developing new methodologies for
							improving high-performance scientific codes and for training tomorrow’s software
							engineers.
						</p>
					</div>
				</section>
			</section>
			{data.map((item, index) => (
				<section key={index}>
					<section className={`section-background parallax${index + 1}`}>
						<article>
							<p>{item.description}</p>
						</article>
					</section>
					<section className="text-bloc">
						<figure>
							<img src={`${item.cover}`} alt={item.description} />
						</figure>
						<div>
							{item.takeaways.map((takeaway, t_index) => (
								<p key={t_index}>{takeaway}</p>
							))}
						</div>
					</section>
				</section>
			))}
		</main>
	);
}

export default Nine;

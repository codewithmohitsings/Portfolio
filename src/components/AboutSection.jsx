function TimelineIcon() {
	return (
		<svg version="1.1" className="max-width-1-4 svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 517 465.8" xmlSpace="preserve">
			<g><g><path d="M488.9,79.3H348.1V28.1c0-14.1-11.5-25.6-25.6-25.6h-128c-14.1,0-25.6,11.5-25.6,25.6v51.2H28.1C14,79.3,2.5,90.8,2.5,104.9v332.8c0,14.1,11.5,25.6,25.6,25.6h460.8c14.1,0,25.6-11.5,25.6-25.6V104.9C514.5,90.8,503,79.3,488.9,79.3z M194.5,28.1h128v51.2h-128V28.1z M488.9,437.7H28.1V232.9h192v25.6c0,21.2,17.2,38.4,38.4,38.4s38.4-17.2,38.4-38.4v-25.6h192V437.7z M245.7,258.5v-25.6h25.6v25.6c0,7.1-5.7,12.8-12.8,12.8C251.4,271.3,245.7,265.6,245.7,258.5z M488.9,207.3H28.1V104.9h460.8V207.3z" /></g></g>
		</svg>
	);
}

function EducationIcon() {
	return (
		<svg version="1.1" className="max-width-1-4 svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 392" xmlSpace="preserve">
			<g><g><path d="M490.8,126.7L264,51.1c-2.6-0.9-5.3-1.3-8-1.3c-2.7,0-5.4,0.4-8,1.3L21.2,126.7C10.9,130.2,4,139.8,4,150.6s6.9,20.5,17.2,23.9l20.6,6.9v41.9L17.9,271l22.5,11.3l13.9-27.9l13.9,27.9L90.9,271L67,223.3v-33.5l37.8,12.6v99.4c0,37.4,115.7,40.3,151.2,40.3s151.2-2.9,151.2-40.3v-99.4l83.6-27.9c10.3-3.4,17.2-13.1,17.2-23.9C508,139.8,501.1,130.2,490.8,126.7z M256,317c-64.5,0-106.1-8.6-121.2-15.1c15.1-6.5,56.7-15.1,121.2-15.1s106.1,8.6,121.2,15.1C362.1,308.3,320.5,317,256,317z M382,277c-36.1-14-101-15.5-126-15.5S166.1,263,130,277V162c8.8-6.5,52.5-17.7,126-17.7s117.2,11.2,126,17.7V277z M407.2,175.8v-16.4c0-37.4-115.7-40.3-151.2-40.3s-151.2,2.9-151.2,40.3v16.4l-75.6-25.2L256,75l226.8,75.6L407.2,175.8z" /></g></g>
		</svg>
	);
}

function SkillBar({ label, value }) {
	return (
		<li>
			<h6 className="font-weight-600 font-size-14 text-uppercase">{label}</h6>
			<div className="progress mb-3"><div className="percentage">{value}%</div></div>
		</li>
	);
}

export default function AboutSection() {
	return (
		<section id="about" className="shadow bg-light radius-2 padding-dy">
			<div className="row mb-5">
				<div className="col">
					<h6 className="font-weight-700 mb-0 text-uppercase mb-2">About me</h6>
					<hr className="divider divider-left divider-lg float-left" />
				</div>
			</div>

			<div className="row mb-2">
				<div className="col-lg-12">
					<h1 className="font-weight-600 mb-0">Mohit <mark>Rath</mark></h1>
					<h6 className="h5 text-muted">Full Stack Developer</h6>
				</div>
			</div>

			<div className="row">
				<div className="col">
					<p>
						Hey, I'm Mohit Rath, a Computer Science student who enjoys building modern web applications and exploring AI-powered development. I'm passionate about creating projects that blend clean design with practical functionality, and I'm always looking for opportunities to learn new technologies and improve my skills. <br />
						<br />
						Outside of coding, you'll usually find me producing music, recording song covers, or exploring new tech-stuffs. I'm a firm believer that every bug teaches something new, even if it takes three cups of coffee and a questionable amount of Googling to prove it.
					</p>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-6 mb-3 mb-lg-0">
					<div className="text-center p-2 radius-1 shadow-inner">
						<div className="shadow radius-1">
							<ul className="text-center info-list font-size-14 p-2 list-inline mb-0">
								<li><span className="inf">Name </span> <span className="value">Mohit Rath</span></li>
								<li><span className="inf">Birth</span> <span className="value"> March 7, 2006 </span></li>
								<li><span className="inf">Bbsr</span> <span className="value"> Odisha, India</span></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="text-center p-2 radius-1 shadow-inner">
						<div className="shadow radius-1">
							<ul className="text-center info-list p-2 font-size-14 list-inline mb-0">
								<li><span className="inf">Email</span> <span className="value">mohitrath42@gmail.com </span></li>
								<li><span className="inf">Phone</span> <span className="value"> 7978571365 </span></li>
								<li><span className="inf">StudyMail</span> <span className="value">mohitrath.cse2028@trident.ac.in</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="row mb-5 mt-6">
				<div className="col">
					<h6 className="font-weight-700 mb-0 text-uppercase mb-2">Professional skills</h6>
					<hr className="divider divider-left divider-lg float-left" />
				</div>
			</div>

			<div className="row vc skill des mb-5">
				<div className="col-md-11">
					<ul className="skills-list list-inline mb-0">
						<SkillBar label="DaVinci" value={50} />
						<SkillBar label="Reaper" value={85} />
						<SkillBar label="Adobe Lightroom" value={90} />
					</ul>
				</div>
				<div className="col-lg-1">
					<div className="title des font-size-14">
						<span>Design</span>
					</div>
				</div>
			</div>

			<div className="row vc skill dev mb-5">
				<div className="col-md-11">
					<ul className="skills-list list-inline mb-0">
						<SkillBar label="Html-CSS" value={90} />
						<SkillBar label="Javascript" value={50} />
						<SkillBar label="Python" value={75} />
						<SkillBar label="C" value={70} />
					</ul>
				</div>
				<div className="col-lg-1">
					<div className="title dev font-size-14">
						<span>Coding</span>
					</div>
				</div>
			</div>

			<div className="row vc skill prs">
				<div className="col-md-11">
					<ul className="skills-list list-inline mb-0">
						<SkillBar label="React" value={65} />
						<SkillBar label="Gen AI Tools" value={75} />
						<SkillBar label="Git/GitHub" value={85} />
					</ul>
				</div>
				<div className="col-lg-1">
					<div className="title prs font-size-14">
						<span>Stacks</span>
					</div>
				</div>
			</div>

			<div className="row mb-5 mt-6">
				<div className="col">
					<h6 className="font-weight-700 mb-0 text-uppercase mb-2">Experience</h6>
					<hr className="divider divider-left divider-lg float-left" />
				</div>
			</div>

			<div className="row">
				<div className="col-md-12">
					<div className="timeline">
						<div className="outer radius-2 position-absolute">
							<div className="ui-icon ui-icon-md inner">
								<div className="ui-icon-inner">
									<TimelineIcon />
								</div>
							</div>
						</div>
						<div className="pt-7">
							<div className="timeline-content">
								<div className="mb-1">
									<h6 className="font-weight-600 font-size-15 mb-1">Web Developer - Cognifyz IT Solutions </h6>
									<div className="font-size-13 text-dark mb-1"><i className="fa fa-calendar mr-2 text-muted"></i>May 2026 - June 2026</div>
								</div>
								<p className="mb-0"> responsive, interactive landing pages and web components using HTML, CSS, JavaScript, and modern frontend frameworks (Bootstrap/Bulma).</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row mb-5 mt-6">
				<div className="col">
					<h6 className="font-weight-700 mb-0 text-uppercase mb-2">Education</h6>
					<hr className="divider divider-left divider-lg float-left" />
				</div>
			</div>

			<div className="row">
				<div className="col-md-12">
					<div className="timeline">
						<div className="outer radius-2 position-absolute">
							<div className="ui-icon ui-icon-md inner">
								<div className="ui-icon-inner">
									<EducationIcon />
								</div>
							</div>
						</div>
						<div className="pt-7">
							<div className="timeline-content">
								<div className="mb-1">
									<h6 className="font-weight-600 font-size-15 mb-1">Bachelor Degree - BPUT University</h6>
									<div className="font-size-13 text-dark mb-1"><i className="fa fa-calendar mr-2 text-muted"></i>September 2024 - <span className="current">Current</span></div>
								</div>
								<p className="mb-0">Computer Science Engineering</p>
							</div>
							<div className="timeline-content">
								<div className="mb-1">
									<h6 className="font-weight-600 font-size-15 mb-1">11th -12th boards - Nimapara Autonomous College </h6>
									<div className="font-size-13 text-dark mb-1"><i className="fa fa-calendar mr-2 text-muted"></i>August 2022 - March 2024</div>
								</div>
								<p className="mb-0">12th Science</p>
							</div>
							<div className="timeline-content">
								<div className="mb-1">
									<h6 className="font-weight-600 font-size-15 mb-1">10th - Saraswati Sishu Vidya Mandir</h6>
									<div className="font-size-13 text-dark mb-1"><i className="fa fa-calendar mr-2 text-muted"></i>2021-2022</div>
								</div>
								<p className="mb-0">Matrix</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6 text-left mb-2 mb-lg-0">
					<a className="float-left" href="CV Goes Here">
						<div className="media align-items-center">
							<div className="outer radius-2 mr-3">
								<div className="ui-icon ui-icon-md inner">
									<div className="ui-icon-inner">
										<svg version="1.1" className="max-width-1-3 svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 517 517" xmlSpace="preserve">
											<g><g><path d="M514.5,258.5c0-141.4-114.6-256-256-256s-256,114.6-256,256s114.6,256,256,256S514.5,399.9,514.5,258.5z M28.1,258.5c0-127,103.4-230.4,230.4-230.4s230.4,103.4,230.4,230.4S385.5,488.9,258.5,488.9S28.1,385.5,28.1,258.5z" /></g></g><g><g><path d="M267.5,344.4l128-128c5-5,5-13.1,0-18.1s-13.1-5-18.1,0l-119,118.9l-118.9-119c-5-5-13.1-5-18.1,0c-2.5,2.5-3.8,5.8-3.8,9.1s1.2,6.6,3.7,9.1l128,128C254.4,349.4,262.5,349.4,267.5,344.4z" /></g></g></svg>
									</div>
								</div>
							</div>
							<div className="media-body">
								<span className="text-muted font-size-13 font-weight-600 text-uppercase">Check my CV</span>
							</div>
						</div>
					</a>
				</div>
			</div>
		</section>
	);
}

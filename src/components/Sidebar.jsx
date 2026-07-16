function HomeIcon() {
  return (
    <svg version="1.1" className="max-width-1 svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 517 517" xmlSpace="preserve"><g><g><path d="M504.6,187.1L274.2,7.9c-4.6-3.6-10.2-5.4-15.7-5.4s-11.1,1.8-15.7,5.4L12.4,187.1c-8.6,6.7-12,18.2-8.5,28.5c3.6,10.3,13.3,17.3,24.2,17.3h25.6v281.6h153.6V309.7h102.4v204.8h153.6V232.9h25.6c10.9,0,20.7-6.9,24.2-17.3C516.7,205.3,513.2,193.8,504.6,187.1z M437.7,207.3v281.6H335.3V309.7c0-14.1-11.5-25.6-25.6-25.6H207.3c-14.1,0-25.6,11.5-25.6,25.6v179.2H79.3V207.3H28.1L258.5,28.1l230.4,179.2H437.7L437.7,207.3z" /></g></g></svg>
  );
}

function AboutIcon() {
  return (
    <svg version="1.1" className="max-width-1 svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 514.5" xmlSpace="preserve"><g><g><path d="M256,2.5c-84.8,0-153.6,86-153.6,192s68.8,192,153.6,192s153.6-86,153.6-192S340.8,2.5,256,2.5z M256,360.9c-70.6,0-128-74.6-128-166.4S185.4,28.1,256,28.1s128,74.7,128,166.4S326.6,360.9,256,360.9z" /></g></g></svg>
  );
}

function ProjectsIcon() {
  return (
    <svg version="1.1" className="max-width-1 svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 517 466.8" xmlSpace="preserve"><g><g><path d="M488.9,2.5H156.1c-14.1,0-25.6,11.5-25.6,25.6v204.8c0,14.1,11.5,25.6,25.6,25.6h89.6l76.8,76.8l76.8-76.8h89.6c14.1,0,25.6-11.5,25.6-25.6V28.1C514.5,14,503,2.5,488.9,2.5z M488.9,232.9H388.7l-66.2,66.2l-66.2-66.2H156.1V28.1h332.8V232.9z" /></g></g></svg>
  );
}

export default function Sidebar() {
  return (
    <div className="col-lg-3 pl-lg-0 my-order-switch-2 mb-lg-0 mb-5">
      <div className="sticky-lg-top">
        <header className="shadow bg-light radius-2 px-4 py-6 text-center">
          <div className="profile-image"><div className="profile-image-border"><img className="rounded-circle" src="/assets/img/profile.png" alt="/" /></div></div>
          <div className="mt-4 mb-5"><h3 className="font-weight-600 mb-0">Mohit <mark>Rath</mark></h3><h6 className="text-muted">Web Developer</h6></div>
          <nav id="main-nav" className="main-nav clearfix tabbed">
            <ul className="pl-0">
              <li className="outer radius-2 mb-3"><a className="inner radius-2" href="#home"><div className="media align-items-center"><div className="media-body text-left"><span className="font-weight-600 font-size-13 text-uppercase text-secondary-2">Home</span></div><HomeIcon /></div></a></li>
              <li className="outer radius-2 mb-3"><a className="inner radius-2" href="#about"><div className="media align-items-center"><div className="media-body text-left"><span className="font-weight-600 font-size-13 text-uppercase text-secondary-2">About</span></div><AboutIcon /></div></a></li>
              <li className="outer radius-2 mb-3"><a className="inner radius-2" href="#blog"><div className="media align-items-center"><div className="media-body text-left"><span className="font-weight-600 font-size-13 text-uppercase text-secondary-2">Projects</span></div><ProjectsIcon /></div></a></li>
            </ul>
          </nav>
        </header>
        <div className="text-center mt-5"><p className="font-size-14 mb-2">Â©Mohit Rath</p><ul className="list-inline mt-auto mb-0"><li className="list-inline-item outer radius-2 mr-1"><a className="inner btn btn-round btn-icon" href="https://www.instagram.com/mohitsings_._/"><span className="fab fa-instagram btn-icon-inner"></span></a></li><li className="list-inline-item mr-1 outer radius-2"><a className="inner btn btn-round btn-icon" href="https://www.linkedin.com/in/mohit-rath-2a18a2335/ "><span className="fab fa-linkedin btn-icon-inner"></span></a></li><li className="list-inline-item mx-0 outer radius-2"><a className="inner btn btn-round btn-icon" href="https://github.com/codewithmohitsings"><span className="fab fa-github btn-icon-inner"></span></a></li></ul></div>
      </div>
    </div>
  );
}
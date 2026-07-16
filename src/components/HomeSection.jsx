function CvIcon() {
  return (
    <svg version="1.1" className="max-width-1-3 svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 517 517" xmlSpace="preserve">
      <g><g><path d="M514.5,258.5c0-141.4-114.6-256-256-256s-256,114.6-256,256s114.6,256,256,256S514.5,399.9,514.5,258.5z M28.1,258.5c0-127,103.4-230.4,230.4-230.4s230.4,103.4,230.4,230.4S385.5,488.9,258.5,488.9S28.1,385.5,28.1,258.5z" /></g></g>
      <g><g><path d="M267.5,344.4l128-128c5-5,5-13.1,0-18.1s-13.1-5-18.1,0l-119,118.9l-118.9-119c-5-5-13.1-5-18.1,0c-2.5,2.5-3.8,5.8-3.8,9.1s1.2,6.6,3.7,9.1l128,128C254.4,349.4,262.5,349.4,267.5,344.4z" /></g></g>
    </svg>
  );
}

export default function HomeSection() {
  return (
    <section id="home" className="shadow bg-light radius-2 padding-dy text-center">
      <div className="row v-height-50 v-centred">
        <div className="col-md-12">
          <h1 className="font-weight-600 mb-0">Mohit <mark>Rath</mark></h1>
          <div className="text-rotation">
            <div className="item">
              <h6 className="h5 text-muted mt-1 mb-0"><span className="text-rotating">Full Stack Web Developer, Creative Technologist</span></h6>
            </div>
          </div>
          <ul className="list-inline mb-0 mt-4">
            <li className="list-inline-item outer radius-2 mr-1 mb-2 mb-lg-0"><a className="inner btn btn-round btn-icon" href="https://www.instagram.com/mohitsings_._/"><span className="fab fa-instagram btn-icon-inner"></span></a></li>
            <li className="list-inline-item mr-1 outer radius-2 mb-2 mb-lg-0"><a className="inner btn btn-round btn-icon" href="https://www.linkedin.com/in/mohit-rath-2a18a2335/"><span className="fab fa-linkedin btn-icon-inner"></span></a></li>
            <li className="list-inline-item mx-0 outer radius-2 mb-2 mb-lg-0"><a className="inner btn btn-round btn-icon" href="https://github.com/codewithmohitsings"><span className="fab fa-github btn-icon-inner"></span></a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-6"><hr className="divider divider-lg divider-center" /></div>
        <div className="col-md-6 text-left mb-2 mb-lg-0">
          <a className="float-left" href="The CV Goes here">
            <div className="media align-items-center">
              <div className="outer radius-2 mr-3"><div className="ui-icon ui-icon-md inner"><div className="ui-icon-inner"><CvIcon /></div></div></div>
              <div className="media-body"><span className="text-muted font-size-13 font-weight-600 text-uppercase">Check Out My CV</span></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
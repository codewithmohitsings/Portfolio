function ProjectCard({ title, github, href, tag, description }) {
  return (
    <div className="col-md-12">
      <div><h1 className="h5 font-weight-500 d-inline-block"><a href="blog-single.html">{title}</a></h1></div>
      <ul className="list-inline font-size-13">
        <li className="list-inline-item"><span className="fas fa-user mr-1"></span><span>Post on <a href={github}>GitHub</a></span></li>
      </ul>
      <hr className="mt-3 mb-3" />
      <p>{description}</p>
      <div className="outer radius-2 d-inline-block"><a href={href} className="inner radius-2 d-block px-4 py-2 font-size-14 text-secondary-2 font-weight-500">GitHub</a></div>
    </div>
  );
}

export default function BlogSection() {
  return (
    
  );
}
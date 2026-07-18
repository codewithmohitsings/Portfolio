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
    <section id="blog" className="shadow bg-light radius-2 padding-dy">
      <div className="row mb-5"><div className="col"><h6 className="font-weight-700 mb-0 text-uppercase mb-2">Projects</h6><hr className="divider divider-left divider-lg float-left" /></div></div>
      <div className="row">
        <ProjectCard title="Synchordia" github="https://github.com/codewithmohitsings/Synchordia" href="https://github.com/codewithmohitsings/Synchordia" description="A browser-based polyphonic instrument controlled by real-time hand gestures using MediaPipe and the Web Audio API." />
        <div className="col-md-12 mt-4 mb-6"><hr className="divider divider-md divider-center" /></div>
        <ProjectCard title="SkillPath AI" github="https://github.com/codewithmohitsings/SkillPAth-AI" href="https://github.com/codewithmohitsings/SkillPAth-AI" description="A react web-app for struggling students to get a proper roadmap and TODOs for a specific skill. It uses Google's gemini API to generate roadmaps and todos. The fun part is here the student can compete him/herself with their other friends as well. We have gamified the web-app to make it more even engaging. It was a hackathon project Idea so the mvp was made in just 24hrs." />
        <div className="col-md-12 mt-4 mb-6"><hr className="divider divider-md divider-center" /></div>
        <ProjectCard title="Q-Play" github="https://github.com/codewithmohitsings/Q-Playt" href="https://github.com/codewithmohitsings/Q-Playt" description="A Music Player App with a beautiful UI and a lot of features. It is made using React Native and Expo. It uses the react-native-track-player library for audio playback and react-native-gesture-handler for gestures. It also uses react-native-reanimated for animations. I am storing my own audio files in the app and also using the react-native-fs library to read the audio files from the device storage. It is a work in progress and I will be adding more features in the future." />
        <div className="col-md-12 mt-4 mb-6"><hr className="divider divider-md divider-center" /></div>
        <div className="col-md-6 text-left mb-2 mb-lg-0"><a className="float-left" href="the cv is here"><div className="media align-items-center"><div className="outer radius-2 mr-3"><div className="ui-icon ui-icon-md inner"><div className="ui-icon-inner"><svg version="1.1" className="max-width-1-3 svg-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 517 517" xmlSpace="preserve"><g><g><path d="M514.5,258.5c0-141.4-114.6-256-256-256s-256,114.6-256,256s114.6,256,256,256S514.5,399.9,514.5,258.5z M28.1,258.5c0-127,103.4-230.4,230.4-230.4s230.4,103.4,230.4,230.4S385.5,488.9,258.5,488.9S28.1,385.5,28.1,258.5z" /></g></g><g><g><path d="M267.5,344.4l128-128c5-5,5-13.1,0-18.1s-13.1-5-18.1,0l-119,118.9l-118.9-119c-5-5-13.1-5-18.1,0c-2.5,2.5-3.8,5.8-3.8,9.1s1.2,6.6,3.7,9.1l128,128C254.4,349.4,262.5,349.4,267.5,344.4z" /></g></g></svg></div></div></div><div className="media-body"><span className="text-muted font-size-13 font-weight-600 text-uppercase">Download my CV</span></div></div></a></div>
      </div>
    </section>
  );
}
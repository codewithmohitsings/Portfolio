const swatches = [
  'clr-1', 'clr-2', 'clr-3', 'clr-4', 'clr-5', 'clr-6', 'clr-7', 'clr-8', 'clr-9', 'clr-10',
  'clr-11', 'clr-12', 'clr-13', 'clr-14', 'clr-15', 'clr-16', 'clr-17', 'clr-18', 'clr-19', 'clr-20',
  'clr-21', 'clr-22', 'clr-23', 'clr-24', 'clr-25', 'clr-26', 'clr-27', 'clr-28', 'clr-29', 'clr-30',
  'clr-31', 'clr-32', 'clr-33',
];

function setTheme(title) {
  if (typeof window.setActiveStyleSheet === 'function') {
    window.setActiveStyleSheet(title);
  }
}

export default function ThemeSwitcher() {
  return (
    <div className="styler">
      <div className="mb-3">
        <h6 className="font-weight-600 font-size-17">Theme Colors</h6>
        <hr className="divider divider-md divider-center m-0" />
      </div>
      <div className="toggle">
        <div className="outer radius-1 d-inline-block">
          <a className="inner radius-1 d-block" href="#">
            <span className="fa fa-cog"></span>
          </a>
        </div>
      </div>
      <div className="day-night-mode">
        <div className="outer radius-1 d-inline-block">
          <a className="inner radius-1 d-block" href="The Link for CV will go here">
            <span className="fa fa-user-tie"></span>
          </a>
        </div>
      </div>
      <div>
        <h6 className="text-muted font-weight-400 mb-0">Pick a color</h6>
        <ul className="color-list pl-0 mb-0">
          {swatches.map((title, index) => {
            const outerClass = index === 20 || index === 25 ? 'outer' : 'outer-sm';
            const innerClass = index === 0 || index === 20 || index === 25 ? 'inner' : 'inner-sm';
            return (
              <li key={title} className={outerClass}>
                <a
                  href="#"
                  className={`${title} ${innerClass}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setTheme(title);
                  }}
                >
                  <span></span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-3">
        <div className="reset outer radius-2 d-inline-block">
          <a
            className="inner radius-2 d-block px-4 py-1 font-size-13 text-dark font-weight-500"
            href="#"
            onClick={(event) => {
              event.preventDefault();
              setTheme('clr-1');
            }}
          >
            Reset
          </a>
        </div>
        <div className="ml-1 close-styler outer radius-2 d-inline-block">
          <a className="inner radius-2 d-block px-4 py-1 font-size-13 text-dark font-weight-500" href="#">
            Close
          </a>
        </div>
      </div>
    </div>
  );
}
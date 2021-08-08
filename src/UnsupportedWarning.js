const UnsupportedWarning = ({ title, description }) => (
  <div className="warning-container">
    <div>
      <div className="warning-container--exclamation-mark">!</div>
    </div>
    <div>
      <div className="warning-container--title">{title}</div>
      <div className="warning-container--description">{description}</div>
    </div>
  </div>
);

export default UnsupportedWarning;

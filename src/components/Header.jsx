import propTypes from "prop-types";

function Header({ text, bgColor, textColor, fontStyle }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    fontStyle: fontStyle,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "feedBup.io",
  bgColor: "rgba(0, 0, 0, 0.4)",
  textColor: "#f6gad",
  fontStyle: "Inter",
};

Header.propTypes = {
  text: propTypes.string.isRequired,
  bgColor: propTypes.string.isRequired,
  textColor: propTypes.string.isRequired,
};

export default Header;

import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, name, lastName }) => {
    const onClick = () => console.log('joe');
  return (
    <header className="header">
      <h1>
        Task Tracker 
      </h1>
      <Button onClick={onClick}/>

    </header>
  );
};
Header.defaultProps = {
  title: "joejoejo",
  name: "farahat",
  lastName: "ebrahim",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
// css in JS
// const headingStyle = {
//   color: "blue",
//   backgroundColor: "gray",
// };

export default Header;

import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

function LinkedinIcon({ className }) {
    return <FontAwesomeIcon icon={faSquareLinkedin} className={className} />;
}

LinkedinIcon.propTypes = {
    className: PropTypes.string,
};
export default LinkedinIcon;

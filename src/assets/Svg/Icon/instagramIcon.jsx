import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

function FacebookIcon({ className }) {
    return <FontAwesomeIcon icon={faSquareInstagram} className={className} />;
}

FacebookIcon.propTypes = {
    className: PropTypes.string,
};

export default FacebookIcon;

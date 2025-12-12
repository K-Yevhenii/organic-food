import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";

function TwitterIcon({ className }) {
    return <FontAwesomeIcon icon={faSquareTwitter} className={className} />;
}

TwitterIcon.propTypes = {
    className: PropTypes.string,
};
export default TwitterIcon;

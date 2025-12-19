import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcon({ icon, className }) {
    return <FontAwesomeIcon icon={icon} className={className} />;
}

SocialIcon.propTypes = {
    icon: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default SocialIcon;

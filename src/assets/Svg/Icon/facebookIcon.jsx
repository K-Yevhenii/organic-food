import PropTypes from "prop-types";
function FacebookIcon({ className }) {
  return (
    <svg
      className={className}
      width="21"
      height="23"
      viewBox="0 0 21 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_59)">
        <path
          d="M20.16 1.59998H0.84C0.375375 1.59998 0 1.97356 0 2.43598V21.664C0 22.1264 0.375375 22.5 0.84 22.5H20.16C20.6246 22.5 21 22.1264 21 21.664V2.43598C21 1.97356 20.6246 1.59998 20.16 1.59998ZM19.32 20.828H14.4874V14.4065H17.2174L17.6269 11.2532H14.4874V9.23892C14.4874 8.32455 14.742 7.70278 16.0571 7.70278H17.7345V4.88128C17.4431 4.84209 16.4482 4.75588 15.288 4.75588C12.8678 4.75588 11.2114 6.22671 11.2114 8.92543V11.2506H8.47612V14.4038H11.214V20.828H1.68V3.27198H19.32V20.828Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_59">
          <rect
            width="21"
            height="22"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
FacebookIcon.propTypes = {
  className: PropTypes.string,
};

export default FacebookIcon;

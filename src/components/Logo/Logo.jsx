import clsx from "clsx";
import "./Logo.scss";

function Logo({ className }) {
    return (
        <a className={clsx("logo", className)} href="#">
            Logo
        </a>
    );
}

export default Logo;

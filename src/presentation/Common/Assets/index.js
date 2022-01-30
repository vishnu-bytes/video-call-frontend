import FeatherIconsReact from "feather-icons-react";
import logoWithTitle from "./Logo/logo_with_title.svg";
import logo from "./Logo/logo.svg";
import fallback from "./fallback.png";
import Person from "./person.png";

const FeatherIcon = ({ icon, onClick, size = 18 }) => (
  <FeatherIconsReact icon={icon} onClick={onClick} size={size} />
);

export { logoWithTitle, logo, FeatherIcon, fallback, Person };

import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const social = [
  {
    icon: <FaGithub />,
    path: "https://github.com/tanvirtalukdersiam",
  },
  {
    icon: <FaSquareFacebook />,
    path: "https://www.facebook.com/tanvir.siam.739/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/tanvirtalukdersiam/",
  },
  {
    icon: <FaLinkedin />,
    path: "#",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

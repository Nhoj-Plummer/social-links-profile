import "@/components/SocialLink/SocialLink.css";
import Image from "next/image";
import ProfilePic from "/public/avatar-jessica.jpeg";

const SocialLnk = () => {
  return (
    <div className="social-link-main">
      <div className="social-link_image">
        <Image src={ProfilePic} alt="face-image" />
      </div>
      <div className="social-link_text"></div>
      <div className="social-link_links"></div>
    </div>
  );
};

export default SocialLnk;

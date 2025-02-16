import "@/components/SocialLink/SocialLink.css";
import Image from "next/image";
import ProfilePic from "/public/avatar-jessica.jpeg";

const SocialLnk = () => {
  return (
    <div className="social-link-main">
      <div className="social-link_section1">
        <div className="social-link_image">
          <Image src={ProfilePic} alt="face-image" />
        </div>
        <div className="social-link_text">
          <h1>Jessica Randall</h1>
          <h2>London, United Kingdom</h2>
          <p>"Front-end developer and avid reader."</p>
        </div>
      </div>

      <div className="social-link_links"></div>
    </div>
  );
};

export default SocialLnk;

import "@/components/SocialLink/SocialLink.css";
import Image from "next/image";
import ProfilePic from "/public/avatar-jessica.jpeg";

const SocialLnk = () => {
  interface Link {
    id: number;
    name: string;
    link: string;
  }

  const links: Link[] = [
    { id: 1, name: "Github", link: "" },
    { id: 2, name: "Github", link: "" },
    { id: 3, name: "Github", link: "" },
    { id: 4, name: "Github", link: "" },
    { id: 5, name: "Github", link: "" },
  ];

  return (
    <div className="social-link-main">
      <div className="social-link_section1">
        <div className="social-link_image">
          <Image src={ProfilePic} alt="face-image" />
        </div>
        <div className="social-link_text">
          <h1>Jessica Randall</h1>
          <h2>London, United Kingdom</h2>
          <p>&quot;Front-end developer and avid reader.&quot;</p>
        </div>
      </div>

      <div className="social-link_links">
        {links.map((item) => (
          <a className="social-link_links-item" key={item.id} href={item.link}>
            <h2>{item.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLnk;

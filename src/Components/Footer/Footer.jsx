import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer bg-[#F3F4F6] py-8 px-16">
      <div className="container mx-auto flex">
        <div className="left flex-1 flex flex-col justify-between">
          <h3 className="text-3xl font-bold tracking-wider">
            Leave us a <br />
            note !
          </h3>
          <div className="box">
            <div className="socialmedia flex items-center gap-5 mb-2">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
              <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
              <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            </div>
            <div className="copyright text-[#171A1F]">
              <p>© 2022 Brand, Inc. • Privacy • Terms • Sitemap</p>
            </div>
          </div>
        </div>
        <div className="right flex-1">
          <form action="">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="border-[#BCC1CA] bg-[#F8F9FA] border w-full px-3 py-2 mb-5 focus:border-[#565E6D] outline-none"
              placeholder="Your Email Address "
            />
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="border-[#BCC1CA] bg-[#F8F9FA] border w-full px-3 py-2 mb-6 focus:border-[#565E6D] outline-none"
              placeholder="Input your message"
            />
            <Button text="submit" clicked />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import FOOTER_LINKS from "../../../public/data/footer_links";
import FOOTER_CONTACT_INFO from "../../../public/data/footer_contact";
import SOCIALS from "../../../public/data/socials";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <div className="footerContainer">
          <Link className="shoppee">Shoppee</Link>
          <div className="footerContent">
            {FOOTER_LINKS.map((col) => (
              <span className="footerColumn" title={col.title} key={col.title}>
                {col.title}
                <ul>
                  {col.links.map((link) => (
                    <Link key={link}>{link}</Link>
                  ))}
                </ul>
              </span>
            ))}
            <div>
              <span
                span
                className="footerColumn"
                title={FOOTER_CONTACT_INFO.title}
              >
                {FOOTER_CONTACT_INFO.title}
                <ul>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link>
                      {link.label}:{"  "}{link.value}
                    </Link>
                  ))}
                </ul>
              </span>
            </div>
            <div>
              <span span className="footerColumn" title={SOCIALS.title}>
                {SOCIALS.title}
                <ul className="icons">
                  {SOCIALS.links.map((link) => (
                    <img src={link} alt="" />
                  ))}
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="rightsFoot">
        <span>2024 Shoppee | All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;

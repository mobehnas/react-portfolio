import React from 'react';
import { FaGithub, FaLinkedin,} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-div">
      <footer>
        <ul>
          <a href="https://github.com/mobehnas" target="blank">
            <li>
              <FaGithub />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-behnas-946b66174/" target="blank">
            <li>
              <FaLinkedin />
            </li>
          </a>
          
      
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

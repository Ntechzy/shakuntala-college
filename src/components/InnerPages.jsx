import React, { useState, useEffect, useRef } from "react";
import "./innerPages.css";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const InnerPages = ({ heading, sidemenu, url }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const refs = sidemenu.map(() => useRef());

  //   const scrollToRef = (ref) => {
  //     if (ref.current) {
  //       ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   };

  const scrollToRef = (ref) => {
    if (ref.current) {
      const navbarHeight = 100;
      const offset = ref.current.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    scrollToRef(refs[index]);
  };
  return (
    <>
      <div className="inner-container">
        <div className="inner-wrapper">
          <div className="inner-top">{heading}</div>
          <div className="inner-bottom">
            <div className="inner-left">
              {sidemenu.map((item, index) => (
                <div
                  className="inner-leftItems"
                  key={item.url}
                  onClick={(e) => handleClick(e, index)}
                >
                  <Link to={`${url}/#${item.url}`}> {item.title}</Link>
                  {/* {console.log(`${url}/#${item.url}`)} */}
                </div>
              ))}
            </div>
            <div className="inner-right">
              {sidemenu.map((item, index) => (
                <div
                  className="inner-rightItems"
                  key={index}
                  ref={refs[index]}
                >
                  <div className="inner-content" id={item.url}>
                    <h1 className="innerContent-heading">{item.title}</h1>
                    {item.img && <img src={item.img} alt={item.title} />}
                    {/* <br /> */}
                    <div>{item.content()}</div>
                    {/* <div dangerouslySetInnerHTML={{ __html: item.content }} /> */}
                  </div>
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div
            className={`back-to-top ${isVisible ? "show" : ""}`}
            onClick={scrollToTop}
          >
            {/* <a href="#"> */}
            <FaArrowUp size={30} color="#1d784d" />
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default InnerPages;

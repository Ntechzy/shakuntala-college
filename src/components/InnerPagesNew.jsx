import React, { useRef } from "react";
import "./innerPages.css";
import { Link } from "react-router-dom";

const InnerPages = ({ heading, sidemenu, url }) => {
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
      <div className="inner-container-new">
        <div className="inner-wrapper-new">
          <div className="inner-top-new">{heading}</div>
          <div className="inner-bottom-new">
            <div className="inner-left-new">
              {sidemenu.map((item, index) => (
                <div
                  className="inner-leftItems-new"
                  key={item.url}
                  onClick={(e) => handleClick(e, index)}
                >
                  <Link to={`${url}/#${item.url}`}> {item.title}</Link>
                  {/* {console.log(`${url}/#${item.url}`)} */}
                </div>
              ))}
            </div>
            <div className="inner-right-new">
              {sidemenu.map((item, index) => (
                <div
                  className="inner-rightItems-new"
                  key={item.url}
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
        </div>
      </div>
    </>
  );
};

export default InnerPages;

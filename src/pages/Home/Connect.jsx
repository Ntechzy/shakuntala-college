import React from "react";
import "./connect.css";
import { InstagramEmbed } from "react-social-media-embed";

const Connect = () => {
  return (
    <>
      <div className="connect-container">
        <div className="connect-wrapper">
          <div className="connect-header">Connect with Us</div>
          <div className="connect-heading">Stay Updated, Stay Engaged</div>
          <div className="connect-social">
            <div className="rect">
              <iframe
                className="custom-iframe"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDrshakuntalaamc&tabs=timeline&width=400&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="350"
                height="600"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            {/* <div className="rect" style={{ borderRadius: "10px" }}>
              <iframe
                className="custom-iframe"
                width="800"
                height="600"
                src="https://www.youtube.com/embed/71tk8N3NjqM"
                title="2025 Toyota Camry Review // The $30,000 King"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div> */}
            <div className="rect">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <InstagramEmbed
                  url="https://www.instagram.com/p/C5aPXzlramd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                  width={350}
                  height={600}
                  style={{ borderRadius: "10px" }}
                  //   captioned
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;

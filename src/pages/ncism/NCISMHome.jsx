import React from "react";
import { Link } from "react-router-dom";
import { latestNavbarData } from "../../data/latestNavbar";
import NCISMPrincipal from "./ncism-home/NCISMPrincipal";
import NCISMSuperintedent from "./ncism-home/NCISMSuperintedent";
import NCISMViceChancellor from "./ncism-home/NCISMViceChancellor";
import NCISMRegistrar from "./ncism-home/NCISMRegistrar";
import NCISMChairman from "./ncism-home/NCISMChairman";

const NCISMHome = () => {
  const ncismMandateItems =
    latestNavbarData.find((item) => item.title === "NCISM Mandate")?.submenu ?? [];

  const sections = [
    {
      id: "principal-details-message",
      title: "Principal Details / Message",
      href: "/ncism-mandate/home/principal-details",
      content: <NCISMPrincipal />,
    },
    {
      id: "medical-superintendent-details-message",
      title: "Medical Superintendent Details / Message",
      href: "/ncism-mandate/medical-superintendent",
      content: <NCISMSuperintedent />,
    },
    {
      id: "vice-chancellor-message",
      title: "Vice Chancellor Message",
      href: "/ncism-mandate/vice-chancellor-message",
      content: <NCISMViceChancellor />,
    },
    // {
    //   id: "registrar-details-message",
    //   title: "Registrar Details / Message",
    //   href: "/ncism-mandate/registrar-message",
    //   content: <NCISMRegistrar />,
    // },
    {
      id: "chairman-details-message",
      title: "Chairman Details / Message",
      href: "/ncism-mandate/home/chairman-details",
      content: <NCISMChairman />,
    },
  ];

  const sectionMap = new Map(sections.map((section) => [section.title, section]));
  const normalizeUrl = (url = "") => {
    if (!url) {
      return "#";
    }

    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }

    return url.startsWith("/") ? url : `/${url}`;
  };

  const renderNavItems = (items, level = 0) =>
    items.map((item) => {
      const hasChildren = Array.isArray(item.submenu) && item.submenu.length > 0;
      const href = normalizeUrl(item.url);
      const isExternal = href.startsWith("http://") || href.startsWith("https://");
      const section = sectionMap.get(item.title);
      if (hasChildren) {
        return (
          <details
            key={`${level}-${item.title}`}
            className={`ncism-sidebar-group ncism-sidebar-group-level-${level}`}
          >
            <summary className="ncism-sidebar-summary">{item.title}</summary>
            <div className="ncism-sidebar-children">{renderNavItems(item.submenu, level + 1)}</div>
          </details>
        );
      }

      if (isExternal) {
        return (
          <a
            key={`${level}-${item.title}`}
            className={`ncism-sidebar-link ncism-sidebar-link-level-${level}`}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {item.title}
          </a>
        );
      }

      return (
        <Link
          key={`${level}-${item.title}`}
          className={`ncism-sidebar-link ncism-sidebar-link-level-${level}`}
          to={href}
          onClick={(event) => {
            if (section) {
              event.preventDefault();
              document
                .getElementById(section.id)
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
        >
          {item.title}
        </Link>
      );
    });

  return (
    <>
      <style>{`
        .ncism-home-layout {
          display: flex;
          gap: 28px;
          align-items: flex-start;
          width: min(1400px, calc(100% - 32px));
          margin: 32px auto;
        }

        .ncism-home-sidebar-wrap {
          align-self: flex-start;
          flex: 0 0 300px;
        }

        .ncism-home-sidebar {
          min-height: calc(100vh - 120px);
          max-height: calc(100vh - 110px);
          overflow: auto;
          background: #ffffff;
          border: 1px solid rgba(29, 120, 77, 0.18);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(29, 120, 77, 0.1);
        }

        .ncism-home-sidebar-title {
          margin: 0;
          padding: 18px 20px;
          background: linear-gradient(135deg, var(--dark), #2f8e57);
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.4px;
        }

        .ncism-home-sidebar-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px;
          background: #ffffff;
        }

        .ncism-sidebar-group {
          border: 1px solid rgba(101, 188, 81, 0.22);
          border-radius: 12px;
          background: #f8fbf8;
          overflow: hidden;
        }

        .ncism-sidebar-group[open] {
          background: #ffffff;
        }

        .ncism-sidebar-summary {
          display: block;
          list-style: none;
          padding: 13px 14px;
          cursor: pointer;
          color: var(--dark);
          font-weight: 700;
          user-select: none;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .ncism-sidebar-summary::-webkit-details-marker {
          display: none;
        }

        .ncism-sidebar-summary::after {
          content: "+";
          float: right;
          color: var(--dark);
          font-size: 1rem;
        }

        .ncism-sidebar-group[open] > .ncism-sidebar-summary {
          background: rgba(101, 188, 81, 0.16);
        }

        .ncism-sidebar-group[open] > .ncism-sidebar-summary::after {
          content: "-";
        }

        .ncism-sidebar-children {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 8px;
          background: #ffffff;
        }

        .ncism-sidebar-link {
          display: block;
          padding: 12px 14px;
          border-radius: 12px;
          color: #1f2937;
          font-weight: 600;
          text-decoration: none;
          transition: background-color 0.2s ease, color 0.2s ease,
            transform 0.2s ease;
          border: 1px solid transparent;
        }

        .ncism-sidebar-link:hover,
        .ncism-sidebar-summary:hover {
          background: rgba(101, 188, 81, 0.16);
          color: var(--dark);
        }

        .ncism-sidebar-link:hover {
          border-color: rgba(29, 120, 77, 0.12);
          transform: translateX(4px);
        }

        .ncism-sidebar-link-level-1,
        .ncism-sidebar-group-level-1 > .ncism-sidebar-summary {
          margin-left: 8px;
        }

        .ncism-sidebar-link-level-2,
        .ncism-sidebar-group-level-2 > .ncism-sidebar-summary {
          margin-left: 16px;
          font-size: 0.96rem;
        }

        .ncism-sidebar-link-level-3,
        .ncism-sidebar-group-level-3 > .ncism-sidebar-summary {
          margin-left: 24px;
          font-size: 0.93rem;
        }

        .ncism-home-content {
          min-width: 0;
          flex: 1;
        }

        .ncism-home-section {
          scroll-margin-top: 110px;
        }

        .ncism-home-section + .ncism-home-section {
          margin-top: 8px;
        }

        @media (max-width: 1024px) {
          .ncism-home-layout {
            flex-direction: column;
          }

          .ncism-home-sidebar-wrap {
            display: none;
          }

          .ncism-home-sidebar {
            display: none;
          }
        }
      `}</style>

      <div className="ncism-home-layout">
        <div className="ncism-home-sidebar-wrap">
          <aside className="ncism-home-sidebar">
            <h2 className="ncism-home-sidebar-title">NCISM Mandate</h2>
            <div className="ncism-home-sidebar-links">{renderNavItems(ncismMandateItems)}</div>
          </aside>
        </div>

        <div className="ncism-home-content">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="ncism-home-section">
              {section.content}
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default NCISMHome;

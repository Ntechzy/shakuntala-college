import React from "react";

const CommitteePageTemplate = ({ title, documents }) => {
  return (
    <section className="committee-page">
      <style>{`
        .committee-page {
          width: 100%;
          background-color: #eef0f2;
          padding: 24px 0;
        }

        .committee-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 16px;
        }

        .committee-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .committee-title {
          font-size: 1.8rem;
          font-weight: 500;
          color: #1d784d;
        }

        .committee-divider {
          width: 70px;
          height: 4px;
          background-color: #65bc51;
          margin: 12px auto 0;
          border-radius: 999px;
        }

        .committee-table-wrap {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
          overflow-x: auto;
        }

        .committee-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 720px;
        }

        .committee-table th,
        .committee-table td {
          border: 1px solid #dbe2e8;
          padding: 14px 12px;
          text-align: center;
          vertical-align: middle;
        }

        .committee-table th {
          background: #f6faf6;
          color: #1d784d;
          font-size: 1rem;
          font-weight: 700;
        }

        .committee-table td {
          background: #ffffff;
        }

        .committee-pdf-link {
          display: inline-block;
          text-decoration: none;
          color: #ffffff;
          background: #1d784d;
          border-radius: 8px;
          padding: 8px 14px;
          font-weight: 600;
          font-size: 0.92rem;
          transition: background-color 0.2s ease;
        }

        .committee-pdf-link:hover {
          background: #65bc51;
        }

        @media (max-width: 768px) {
          .committee-title {
            font-size: 1.4rem;
          }
        }
      `}</style>

      <div className="committee-container">
        <div className="committee-header">
          <h2 className="committee-title">{title}</h2>
          <div className="committee-divider"></div>
        </div>

        <div className="committee-table-wrap">
          <table className="committee-table">
            <thead>
              <tr>
                <th>Members of Committee</th>
                <th>Minutes of Committee</th>
                <th>Conclusion of Committee</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    className="committee-pdf-link"
                    href={documents.members}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View PDF
                  </a>
                </td>
                <td>
                  <a
                    className="committee-pdf-link"
                    href={documents.minutes}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View PDF
                  </a>
                </td>
                <td>
                  <a
                    className="committee-pdf-link"
                    href={documents.conclusion}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View PDF
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CommitteePageTemplate;

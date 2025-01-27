import React from 'react';

const newsItems = [
  { id: 1, src: '/news/news1.jpg', alt: 'News 1' },
  { id: 2, src: '/news/news2.jpg', alt: 'News 2' },
  { id: 3, src: '/news/news3.jpg', alt: 'News 3' },
  { id: 4, src: '/news/news4.jpg', alt: 'News 4' },
  { id: 5, src: '/news/news5.jpg', alt: 'News 5' },
  { id: 6, src: '/news/news6.jpg', alt: 'News 6' },
  { id: 7, src: '/news/news7.jpg', alt: 'News 7' },
  { id: 8, src: '/news/news8.jpg', alt: 'News 8' },
  { id: 9, src: '/news/news9.jpg', alt: 'News 9' },
  { id: 10, src: '/news/news10.jpg', alt: 'News 10' },
  { id: 11, src: '/news/news11.jpg', alt: 'News 11' },
  { id: 12, src: '/news/news12.jpg', alt: 'News 12' },
  { id: 13, src: '/news/news13.jpg', alt: 'News 13' },
  { id: 14, src: '/news/news14.jpg', alt: 'News 14' },
  { id: 15, src: '/news/news15.jpg', alt: 'News 15' },
];

const NewsSection = () => {
  return (
    <div className="news-section">
      <h2>Latest News</h2>
      <div className="news-items">
        {newsItems.map((news) => (
          <div key={news.id} className="news-item">
            <img src={news.src} alt={news.alt} className="news-image" />
          </div>
        ))}
      </div>

      <style jsx>{`
        .news-section {
          padding: 20px;
          background-color: #f4f4f9;
          border-radius: 8px;
        }

        .news-section h2 {
          font-size: 24px;
          margin-bottom: 20px;
          text-align: center;
        }

        .news-items {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        .news-item {
          background-color: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .news-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default NewsSection;

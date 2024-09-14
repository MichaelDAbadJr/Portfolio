import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const handleButtonClick = url => {
    if (url) {
      window.open(url, '_blank');
    }
  };
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map(work => {
          return (
            <div key={work.w_no} className="image-wrapper">
              <img key={work.w_no} src={work.w_img} alt={`Work ${work.w_no}`} />
              <div className="overlay">
                {work.frontend_repo && (
                  <button
                    className="overlay-button"
                    onClick={() => handleButtonClick(work.frontend_repo)}
                  >
                    Frontend Repo
                  </button>
                )}
                {work.backend_repo &&
                <button
                  className="overlay-button"
                  onClick={() => handleButtonClick(work.backend_repo)}
                >
                  Backend Repo
                </button>
                }
                {work.netlify_url &&
                <button
                  className="overlay-button netlify-button"
                  onClick={() => handleButtonClick(work.netlify_url)}
                >
                  View Live Page on Netlify
                </button>
                }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;

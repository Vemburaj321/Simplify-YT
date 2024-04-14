// // HomePage.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Home.css';

// const HomePage = () => {
//   const [videoUrl, setVideoUrl] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     setVideoUrl(event.target.value);
//   };

//   const handleSummarizeClick = () => {
//     // Implement the logic for video summarization if needed
//     console.log(`Summarize video with URL: ${videoUrl}`);

//     // Navigate to the Summary page with the video URL as a parameter
//     navigate(`/summary/${encodeURIComponent(videoUrl)}`);
//   };

//   const handleInputFocus = () => {
//     setIsFocused(true);
//   };

//   const handleInputBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <div className="home-container">
//       <h1 className="product-name">Simplify YT</h1>

//       <div
//         className={`video-section ${isFocused ? 'focused' : ''}`}
//       >
//         <div className="input-container">
//           <input
//             type="text"
//             placeholder="Paste Video URL"
//             value={videoUrl}
//             onChange={handleInputChange}
//             onFocus={handleInputFocus}
//             onBlur={handleInputBlur}
//           />
//           <button onClick={handleSummarizeClick}>Summarize</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making requests
import '../styles/Home.css';
import Youtube from '../images/youtube.png';

const HomePage = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setVideoUrl(event.target.value);
  };

  const handleSummarizeClick = async () => {
    // Send the video URL to the Flask backend
    try {
      const response = await axios.post('http://127.0.0.1:8000', {
        videoUrl: videoUrl,
      });

      console.log('Response from backend:', response.data);

      // Navigate to the Summary page with the video URL as a parameter
      navigate(`/summary/${encodeURIComponent(videoUrl)}`);
    } catch (error) {
      console.error('Error summarizing video:', error);
    }
  };

  const handleVerifyClick = async () => {
    navigate(`/verify/${encodeURIComponent(videoUrl)}`);

  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div id="parent-home-container">
      <div className="home-container">
        <div className="logo">
          <h1 className="product-name">Simplify YT</h1>
          <img className="ytimg" src={Youtube} alt="Your Logo"/>
        </div>

        <div className={`video-section ${isFocused ? 'focused' : ''}`}>
          <div className="input-container">
            <input className='inputHome'
              type="text"
              placeholder="Paste Video URL"
              value={videoUrl}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <button className="buttonHome" onClick={handleVerifyClick} style={{margin: '8px', width: '12%'}}>Verify</button>
            <button className="buttonHome" onClick={handleSummarizeClick} style={{margin: '8px', width: '12%'}}>Summarize</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

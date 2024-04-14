// VerifyPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import Chatbot from './Chatbot';
import '../styles/Verify.css';


const Verify = () => {
  const { url } = useParams();
  
  return (
    // <div>
    //   <h2>Summary Page</h2>
    //   <p>Video URL: {decodeURIComponent(url)}</p>
    // </div>
    <div>
        <div calssName="verify-header">
            <h1 className="verify-text">Verify</h1>
        </div>
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 1, alignItems: 'center', marginTop: '50px' }}>
                {/* Left side: YouTube video */}
                <VideoPlayer videoUrl={decodeURIComponent(url)} />
            </div>
            <div style={{ flex: 1 }}>
                {/* Right side: Chatbot interface */}
                <Chatbot />
            </div>
        </div>
    </div>
  );
};

export default Verify;

import React from "react";

const ChatDetails=()=>{
    return(
        <div className="detail-area">
        <div className="detail-area-header">
         <div className="msg-profile group">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
           <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2zM12 22v-6.5" />
           <path d="M22 8.5l-10 7-10-7" />
           <path d="M2 15.5l10-7 10 7M12 2v6.5" /></svg>
         </div>
         <div className="detail-title">CodePen Group</div>
         <div className="detail-subtitle">Created by Aysenur, 1 May 2020</div>
         <div className="detail-buttons">
          <button className="detail-button">
           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
           </svg>
           Call Group
          </button>
          <button className="detail-button">
           <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video">
            <path d="M23 7l-7 5 7 5V7z" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>
           Video Chat
          </button>
         </div>
        </div>
        
       </div>
    );

}

export default ChatDetails;

// src/components/VideoPlayer.js
import React from 'react';

export default function VideoPlayer({src, title = "Video Player"}) {
  return (
    <div style={{
      position: 'relative',
      paddingBottom: '56.25%', // 16:9 aspect ratio
      height: 0,
      overflow: 'hidden',
      maxWidth: '100%',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <iframe
        src={src}
        title={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
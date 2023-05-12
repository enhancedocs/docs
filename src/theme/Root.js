import React from 'react';
import EnhancedChat from 'enhancedocs-chat';

import 'enhancedocs-chat/dist/style.css';

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      {children}
      <EnhancedChat
        config={{
          projectId: '642c2d009557653a6d46cdda',
          accessToken: 'pk_c237abe4951408b069e6482ad7b4214ea7ce6901bf699dbe'
        }}
        size="large"
      />
    </>
  );
}

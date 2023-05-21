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
          projectId: '646a4e6158de6ee4ab3076cd',
          accessToken: 'pk_919329ca3f52aeae4ba58aa1021f4a63eba7454d54ca86c7'
        }}
        size="large"
      />
    </>
  );
}

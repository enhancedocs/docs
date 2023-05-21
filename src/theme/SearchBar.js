/**
 * @see https://docusaurus.io/docs/search#using-your-own-search
 */

import React from 'react';
import EnhancedSearch from 'enhancedocs-search';

import 'enhancedocs-search/dist/style.css';

export default function SearchBarWrapper(props) {
  return (
    <EnhancedSearch
      config={{
        enhancedSearch: {
          projectId: '646a4e6158de6ee4ab3076cd',
          accessToken: 'pk_919329ca3f52aeae4ba58aa1021f4a63eba7454d54ca86c7'
        }
      }}
      {...props}
    />
  );
}

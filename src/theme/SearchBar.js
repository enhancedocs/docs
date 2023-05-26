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
        projectId: '642c2d009557653a6d46cdda',
        accessToken: 'pk_c237abe4951408b069e6482ad7b4214ea7ce6901bf699dbe'
      }}
      {...props}
    />
  );
}

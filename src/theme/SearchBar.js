/**
 * @see https://docusaurus.io/docs/search#using-your-own-search
 */

import React from 'react';
import EnhancedSearch from 'enhancedocs-search';

import 'enhancedocs-search/dist/style.css';

export default function SearchBarWrapper(props) {
  return (
    <EnhancedSearch
      accessToken="pk_760ed6e637a6ab987495e43916e7fc2799de0c074e2c1d86"
      {...props}
    />
  );
}

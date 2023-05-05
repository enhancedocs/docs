---
sidebar_position: 1
---

import docusaurus_ss from './assets/docusaurus_ss.png';
import docusaurus_cc from './assets/docusaurus_cc.png';

# Integrating with Docusaurus

*EnhanceDocs Search* and *EnhanceDocs Chat* are an open-source search and chat components designed for `React` projects,
which can be easily integrated into your Docusaurus site.

## Search Installation

To add `EnhanceDocs Search` to your project, execute the following command:

```bash npm2yarn
npm install enhancedocs-search
```

## Adding the Search Component

Create a new file `src/theme/SearchBar.js` with the following content:

```js
// src/theme/SearchBar.js

import React from 'react';
import EnhancedSearch from 'enhancedocs-search';

import 'enhancedocs-search/dist/style.css';

export default function SearchBarWrapper(props) {
  return (
    <EnhancedSearch
      config={{
        enhancedSearch: {
          apiBaseURL: "your_api_base_url",
          accessToken: "your_app_access_token",
        }
      }}
      {...props}
    />
  );
}
```

Replace `your_api_base_url` with your API base URL, `your_app_access_token` with your EnhanceDocs Server access token, and `your_project_id` with your project ID.

### Defaults

If `your_api_base_url` is not provided, it will default to the EnhanceDocs managed URL. The access token is not required and should not be provided if you haven't set up one. If you are using the managed EnhanceDocs service, make sure to also provide the `projectId`.

## Summary

With these changes, your Docusaurus site will now use the AI-powered search engine provided by EnhanceDocs for your documentation.

Enjoy the benefits of an AI-powered search engine for your Docusaurus documentation site! 🚀🚀

<div>
  <img src={docusaurus_ss} alt="EnhanceDocs Adding to Existing Project" width="100%" style={{ borderRadius: 8 }} />
</div>

## Chat Installation

To add `EnhanceDocs Chat` to your project, execute the following command:

```bash npm2yarn
npm install enhancedocs-chat
```

## Adding the Chat Component

You can use the same SearchBarWrapper `src/theme/SearchBar.js` to add the Chat component in your Docusaurus site.
You can combine the Search and Chat on the same file! 🚀🚀

```js
// src/theme/SearchBar.js

import React from 'react';
import EnhancedChat from 'enhancedocs-chat';

import 'enhancedocs-chat/dist/style.css';

export default function SearchBarWrapper(props) {
  return (
    <EnhancedChat
      config={{
        apiBaseURL: "your_api_base_url",
        accessToken: "your_app_access_token",
      }}
      {...props}
    />
  );
}

// OR combine both!

export default function SearchBarWrapper(props) {
  return (
    <>
      <EnhancedSearch
        config={{
          enhancedSearch: {
            apiBaseURL: "your_api_base_url",
            accessToken: "your_app_access_token",
          }
        }}
        {...props}
      />
      <EnhancedChat
        config={{
          apiBaseURL: "your_api_base_url",
          accessToken: "your_app_access_token",
        }}
        {...props}
      />
    </>
  );
}
```

<div>
  <img src={docusaurus_cc} alt="EnhanceDocs Adding to Existing Project" width="100%" style={{ borderRadius: 8 }} />
</div>

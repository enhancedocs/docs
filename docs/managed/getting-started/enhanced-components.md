---
sidebar_position: 3
sidebar_label: 🚀 Add to an Existing Project
description: Add our Enhanced Search into any React project
---

import enhancedocsAddingExistingProjectUrl from './assets/enhancedocs-adding-existing-project.png';

# Add to an Existing Project

You can integrate `EnhanceDocs Search` and `EnhanceDocs Chat` in your project easily.

EnhanceDocs components are an open-source **search** and **chat** components ready to use for your `React` projects.

## Search

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=flat-square&logo=github&logoColor=white)](https://github.com/enhancedocs/enhancedocs-search)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/enhancedocs-search)
[![Downloads](https://img.shields.io/npm/dm/enhancedocs-search.svg)](https://www.npmjs.com/package/enhancedocs-search)

```bash npm2yarn
npm install enhancedocs-search
```

Add the search where you like in your code!
You will need to use the credentials from the [previous step](./set-up-project#get-the-credentials).

```js
import EnhancedSearch from 'enhancedocs-search';

import 'enhancedocs-search/dist/style.css';

<EnhancedSearch
  config={{
    enhancedSearch: {
      projectId: "1234a5678b98126bfdbdc6a6",
      accessToken: "pk_a12345b0cd1c5951f810dba47c49261296cd6ed41cfca5cf"
    }
  }}
  {...props}
/>
```

### Docusaurus Example using the Search

Configure [Docusaurus](https://docusaurus.io/) theme to use your own search.
See official documentation [here](https://docusaurus.io/docs/search#using-your-own-search).

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
          projectId: "1234a5678b98126bfdbdc6a6",
          accessToken: "pk_a12345b0cd1c5951f810dba47c49261296cd6ed41cfca5cf"
        }
      }}
      {...props}
    />
  );
}
```

Now you can start using your AI-powered search engine for your documentation 🚀🚀

<div align="center" style={{ margin: '24px 0' }}>
  <img src={enhancedocsAddingExistingProjectUrl} alt="EnhanceDocs Adding to Existing Project" width="800" style={{ borderRadius: 16 }} />
</div>

## Chat

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=flat-square&logo=github&logoColor=white)](https://github.com/enhancedocs/enhancedocs-chat)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/enhancedocs-chat)
[![Downloads](https://img.shields.io/npm/dm/enhancedocs-chat.svg)](https://www.npmjs.com/package/enhancedocs-chat)

```bash npm2yarn
npm install enhancedocs-chat
```

```js
import EnhancedChat from 'enhancedocs-chat';

import 'enhancedocs-chat/dist/style.css';

<EnhancedChat
  config={{
    projectId: "1234a5678b98126bfdbdc6a6",
    accessToken: "pk_a12345b0cd1c5951f810dba47c49261296cd6ed41cfca5cf"
  }}
  {...props}
/>
```

### Docusaurus Example using the Chat

Add the Chat component by extending the Root theme:

```js
// src/theme/Root.js

import EnhancedChat from 'enhancedocs-chat';

import 'enhancedocs-chat/dist/style.css';

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      {children}
      <EnhancedChat
        config={{
          projectId: '1234a5678b98126bfdbdc6a6',
          accessToken: 'pk_a12345b0cd1c5951f810dba47c49261296cd6ed41cfca5cf'
        }}
        {...props}
      />
    </>
  );
}
```

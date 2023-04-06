---
sidebar_position: 2
---

# Getting started
In this page we will explain to you how to quickly set up a EnhanceDocs project and start using it your project.

### 1. Creating an EnhanceDocs account
This is where it all begings. EnhanceDocs is a managed AI-powered search, therefore we managed the infrastructure for you!

Create an account [here](https://app.enhancedocs.com/sign-up), Sign in if you [already have one here](https://app.enhancedocs.com/sign-in) or
join an already created organization by clicking the invitation on your email or from [here](https://app.enhancedocs.com/sign-up/invite).

### 2. Creating and configure your project
Once you are in the platform create a new project.

When you create a new project we will need two values.
- **Docs base url**: We will use this to generate links on the prompted answer and at the sources links at the bottom of the results.
- **Short description**: A short project description to inform the AI towards the scope of answers it should only provide.

### 3. Get the credentials
Yes! We know, more clicks? Where is the code implementation? I want to get run this now!! - Don't worry this is the last UI part :)

Go you profile name/icon on the top left conner, then click Organization settings -> [API Keys](https://app.enhancedocs.com/settings/api-keys) and save these two for latter.

These keys will allow you to authenticate API requests. Learn more about [API Keys security](./security/api-keys.md)

### 4. Install EnhanceDocs Search
EnhanceDocs Search is our React Search component ready to use.

```bash npm2yarn
npm install enhancedocs-search
```
Add where you like in your code! and replace your access token with the public key retrieved from step 3 and projectId from step 2
```js
import EnhancedSearch from 'enhancedocs-search';

import 'enhancedocs-search/dist/style.css';

<EnhancedSearch
  config={{
    enhancedSearch: {
      projectId: "abc123",
      accessToken: "pk_abc123"
    }
  }}
  {...props}
/>
```

#### Docusaurus Example

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
          projectId: "abc123",
          accessToken: "pk_abc123"
        }
      }}
      {...props}
    />
  );
}
```


### 5. Configure your CD pipelines to build and push

#### Option A: Using EnhanceDoc Github Action

```yaml
steps:
  - name: Checkout Repository
    uses: actions/checkout@v3

  - name: Install EnhanceDocs CLI
    uses: enhancedocs/enhancedocs-github-action@0.1.0
    with:
      # More about EnhanceDocs Secret API Key: https://docs.enhancedocs.com/security/api-keys
      api-key: ${{ secrets.ENHANCEDOCS_API_KEY }}
  
  - name: Build Docs
    run: enhancedocs build docs

  - name: Pushish Docs
    run: enhancedocs push <project_id>
```


#### Option B: Run in any other environment.

Install EnhanceDocs CLI
```bash
npm install -g enhancedocs
```

Set EnhanceDocs API Key as an environment variable. Make sure to store it securely read more about [API Keys](./security/api-keys.md)
```bash
export ENHANCEDOCS_API_KEY=sk_3434...
```

Build your docs. Replace `docs` with path to your documentation folder.
```bash 
enhancedocs build docs
```
```bash
enhancedocs push <project_id>
```

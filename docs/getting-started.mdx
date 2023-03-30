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

### 4. Install EnhanceDocs CLI
In order to generate responses we need to have access to your docs!

There's a couple ways we can get that, either push the information to us or we crawl it.

We highly encourage usage of push that way you have control over when versioning and when accurately keep the AI trained with your new documentation when published, therefore we will show that example here.

#### Install dev dependencies

enhancedocs is our cli built on top of [Rust](https://www.rust-lang.org/) to transform large data documentations extremely fast!

```bash npm2yarn
npm install enhancedocs --save-dev
```

####  Add build and push scripts to your `package.json`.

```json
{
  "scripts": {
    // ...
    "enhancedocs:build": "enhancedocs build docs",
    "enhancedocs:push": "enhancedocs push"
  }
}
```

### 4. Install EnhanceDocs Search
EnhanceDocs Search is our React Search component ready to use.

```bash npm2yarn
npm install enhancedocs/search
```
Add where you like in your code! and replace your access token with the public key retrieved from step 3.
```js
import EnhancedSearch from 'enhancedocs-search';

import 'enhancedocs-search/dist/style.css';

<EnhancedSearch accessToken="pk_abc123" {...props} />
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
  return <EnhancedSearch accessToken="pk_abc123" {...props} />;
}
```


### 6. Configure your CD pipelines to build and push

Store securely as a secret on your pipeline env variables ENHANCEDOCS_API_KEY=sk_123456...

Run in two steps in your pipeline.
```bash npm2yarn
npm run enhancedocs:build
```
```bash npm2yarn
npm run enhancedocs:push
```

Example on Github Actions with Github pages [here](https://github.com/enhancedocs/docs/blob/main/.github/workflows/deploy.yaml)

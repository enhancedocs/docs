---
sidebar_position: 1
---

# API keys
Use API keys to authenticate API requests.

EnhanceDocs authenticates your API requests using your account’s API keys. EnhanceDocs raises an invalid request error if you don’t include a key, and an authentication error if the key is incorrect or outdated.

You can use the [App Dashboard](https://app.enhancedocs.com/settings/api-keys) to reveal, revoke, and create secret API keys.

## Secret and publishable keys

All accounts have a total of two API keys by default.

### Secret
To be used on the server-side: Must be secret and stored securely in your web or mobile app’s server-side code (such as in an environment variable or credential management system) to call EnhanceDocs APIs. Don’t expose this key on a website or embed it in a mobile application.

Example: `sk_123ab456c7890f3b211ab1a6b0af14e8ea4284c5701ced95`

### Publishable
On the client-side: Can be publicly-accessible in your web or mobile app’s client-side code (such as [enhancedocs-search](https://www.npmjs.com/package/enhancedocs-search)) to let the server know which documentation provide information for.

Example: `pk_a12345b0cd1c5951f810dba47c49261296cd6ed41cfca5cf`

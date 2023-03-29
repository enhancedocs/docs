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

Example: `sk_422a9c325a11f1d19c718afc792d55efe5dbf9b56408f9a3`

### Publishable
On the client-side: Can be publicly-accessible in your web or mobile app’s client-side code (such as [enhancedocs-search](https://www.npmjs.com/package/enhancedocs-search)) to let the server know which documentation provide information for.

Example: `pk_7a6cb5f2da2da98a2ab8b243f3c66df1495e98d223faa735`

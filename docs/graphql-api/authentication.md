---
sidebar_position: 2
---

# Authentication

The EnhanceDocs GraphQL API uses [API keys](../security/api-keys.md) to authenticate requests. You can view and manage your API keys in your [EnhanceDocs account](https://app.enhancedocs.com/settings/api-keys).

Get an API Key from your EnhanceDocs account settings page, [API Keys](https://app.enhancedocs.com/settings/api-keys)

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

Authentication to the API is performed via [HTTP Bearer Authentication](https://swagger.io/docs/specification/authentication/bearer-authentication/).

Provide your API key as the Bearer value `Authorization: Bearer sk_345...`

All API requests must be made over [HTTPS](https://en.wikipedia.org/wiki/HTTPS). Calls made over plain HTTP will fail. API requests without authentication will also fail.

# The GraphQL endpoint

`https://api.enhancedocs.com/graphql`

The endpoint remains constant no matter what operation you perform.

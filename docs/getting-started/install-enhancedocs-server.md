---
sidebar_position: 1
---

# Installing EnhanceDocs Server

The most convenient way to utilize *EnhanceDocs Server* is by running the pre-built image from [Docker Hub](https://hub.docker.com/r/enhancedocs/enhancedocs). Ensure that [Docker](https://docs.docker.com/get-docker/) is installed on your system before proceeding.

### Requirements

**EnhanceDocs Server** depends on the [OpenAI API](https://platform.openai.com/docs/api-reference), which means you need to supply an `OPENAI_API_KEY` as an environment variable.

To obtain an `OPENAI_API_KEY`, sign up on the [OpenAI Platform](https://platform.openai.com/), navigate to [API Keys](https://platform.openai.com/account/api-keys), and create a new key.

## Launching EnhanceDocs Server

To launch EnhanceDocs Server, execute the following command:

```bash
docker run -p 8080:8080 \
  -v $(pwd)/.enhancedocs/data:/data/enhancedocs \
  -v $(pwd)/.enhancedocs/config:/etc/enhancedocs \
  --env OPENAI_API_KEY=sk-... \
  enhancedocs/enhancedocs
```

By doing so, EnhanceDocs will employ the default configuration and store all data in the `./.enhancedocs` directory.

Optionally, you can provide the following environment variables:

- `ENHANCEDOCS_API_KEY`: Optional; by default, you can input data into EnhanceDocs without an API Key, which makes working in your local environment more comfortable. However, we strongly recommend setting this variable for production use.
- `ENHANCEDOCS_ACCESS_TOKEN`: Optional; this client-side token is recommended for production use in conjunction with CORS to ensure that only your site can make API requests.

## Managed EnhanceDocs

While EnhanceDocs is free and open-source, requiring self-hosting, you can also opt for the managed version of EnhanceDocs. This alternative offers out-of-the-box integrations with popular tools like Notion, Slack, Teams, Confluence, Discord, and more.

Visit https://enhancedocs.com for more information.

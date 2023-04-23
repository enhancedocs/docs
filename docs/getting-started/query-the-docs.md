---
sidebar_position: 4
---

# Querying the Docs

## Asking the Docs Using the CLI

To ask the docs using the CLI, enter the following command:

```bash
enhancedocs ask How do I get started?
```

The response will be in JSON format. You can optionally use [jq](https://stedolan.github.io/jq/) to prettify the response or access specific parts of it.

```bash
enhancedocs ask How do I get started? | jq .
```

## Asking the Docs Using Curl

To ask the docs using curl, use the following command:

```bash
curl ${API_BASE_URL}/ask?question=How+do+I+get+started? \
   -H "Accept: application/json" \
   -H "Authorization: Bearer ${ENHANCEDOCS_API_KEY}" | jq .
```

## Summary

Congratulations on taking the first steps towards utilizing AI-powered search! In this chapter, you've learned how to:

- Install EnhanceDocs Server and CLI
- Ingest your first data source
- Perform AI-powered searches using the CLI and curl

While this setup provides a solid foundation, implementing EnhanceDocs in real-world scenarios may require additional work. To make the process easier, we offer pre-built integrations and components that can be used with your preferred productivity tools or website frameworks. Explore the following guides for more information:

- [React and Docusaurus Search Sites](../integrations/docusaurus)
- [EnhanceDocs on Your Discord Community Server](../integrations/discord.md)
- [EnhanceDocs on Your Slack Workspace](../integrations/slack)

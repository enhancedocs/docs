---
sidebar_position: 4
---

# Query the docs

## Ask the docs using the CLI

```bash
enhancedocs ask How do I get started?
```

Response is JSON format. you can optionally use [jq](https://stedolan.github.io/jq/) to prettify the response or access different parts fit.

```bash
enhancedocs ask How do I get started? | jq .
```

## Add to an Existing Documentation Project

You can add EnhanceDocs ready made search component following [this guide](../managed/getting-started/enhanced-search)

```bash
curl ${API_BASE_URL}/ask?question=How+do+I+get+started?
   -H "Accept: application/json"
   -H "Authorization: Bearer ${ENHANCEDOCS_API_KEY}"
```

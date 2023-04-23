---
sidebar_position: 3
---

# Ingest Data Sources

In order to be able to ask questions to the EnhanceDocs Server we need to ingest the source where EnhanceDocs will gather knowledge from.
In this page, we will use EnhanceDocs Docs site as the data source for illustration purpose but feel feed to feed any data that you consider relevant, your docs, code, etc.


## Downloading EnhanceDocs Docs

```bash
git clone git@github.com:enhancedocs/docs.git && cd docs
```

## Configuring local environment

Provide your EnhanceDocs Server URL

```bash
export API_BASE_URL=http://127.0.0.1:8080
```

Optional. If you have set an API Key for your EnhanceDocs Server make sure to set that one too.
```bash
export ENHANCEDOCS_API_KEY=sk_...
```

## Build the docs

```bash
enhancedocs build docs
```

## Ingest data to the EnhanceDocs Server API

```bash
enhancedocs push
```

## Ask a question!

```bash
enhancedocs ask How do I get started?
```

## Additional Resources
- Using Github Actions to automate the build and ingestion of your docs [guide](../managed/getting-started/configure-cd#option-a-using-enhancedocs-github-action)

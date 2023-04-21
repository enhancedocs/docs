---
sidebar_position: 4
sidebar_label: ⚙️ Build and Publish your Docs
description: Configure your CD pipelines to build and push
---

# Configure your CD pipelines to build and push

We believe in automation, that's why you have available two quick set up options to build and publish your documentation.

## Option A: Using EnhanceDocs GitHub Action

Use your Organization Secret API Key (e.g.: `sk_123ab456c7890f3b211ab1a6b0af14e8ea4284c5701ced95`) to build and publish using the GitHub action.

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

You can find more information [here](https://github.com/enhancedocs/enhancedocs-github-action).

## Option B: Install EnhanceDocs CLI

Run in any environment! Install the CLI and build and publish your documentation in a few seconds 🚀🚀

```bash
npm install -g enhancedocs
```

Set EnhanceDocs API Key as an environment variable. Make sure to store it securely read more about [API Keys](../../security/api-keys.md)

```bash
export ENHANCEDOCS_API_KEY=sk_123ab456c7890f3b211ab1a6b0af14e8ea4284c5701ced95
```

Build and publish your docs. Replace `<path_to_docs_folder>` with the path to your documentation folder, e.g.: `docs`.

```bash
enhancedocs build <path_to_docs_folder>
```
```bash
enhancedocs push <project_id>
```

---
sidebar_position: 2
sidebar_label: 📦 Set up your Organization
description: Create your first project and get the credentials
---

import enhancedocsCreateProjectUrl from './assets/enhancedocs-create-project.png';

# Set up your project

Once you are in the platform, you can create your first project.

When you create a new project we will need just a few information:

- **Project name**: You will see all your projects in the dashboard.
- **Docs base url**: It is used to auto-generate links on the prompted answer and at the sources links at the bottom of the results.
- **Project description**: A short project description to inform the AI towards the scope of answers it should only provide.

<div align="center" style={{ margin: '24px 0' }}>
  <img src={enhancedocsCreateProjectUrl} alt="EnhanceDocs Sign Up" width="800" style={{ borderRadius: 16 }} />
</div>

## Get the credentials

Once your project is created, you can get your credentials to start using the **Enhanced Search**!

- `projectId`: You can find it on the projects list, next to the project name (e.g.: `1234a5678b98126bfdbdc6a6`).
- `accessToken` Go to you profile on the top right corner, then click `Organization settings`. You will find your public and private keys in the [API Keys](https://app.enhancedocs.com/settings/api-keys) section:
  - Public key: `pk_a12345b0cd1c5951f810dba47c49261296cd6ed41cfca5cf`
  - Private key: `sk_123ab456c7890f3b211ab1a6b0af14e8ea4284c5701ced95`

These keys will allow you to authenticate API requests. Learn more about [API Keys security](../security/api-keys.md)

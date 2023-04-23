---
sidebar_position: 2
---

import ss from './assets/discord_ss.png';

# Integrating with Discord

To enable Discord integration with EnhanceDocs Server, follow these steps:

1. Update the `config.json` file by adding the following key-value pair within the `integrations` object:

```js
{
  ...
  "integrations": {
    ...
    "discord": true
  }
}
```

2. Provide the `DISCORD_TOKEN` as an environment variable in the `docker run` command. To do this, you need to create a Discord developer account, set up a new application, enable message content intent in the bot settings, and install the bot on your server with the `bot` and `administrator` scopes.

## Creating a Discord Developer Account and Application

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and sign in with your Discord account.
2. Click on the "New Application" button in the top right corner.
3. Enter a name for your application and click "Create".
4. In the application settings, navigate to the "Bot" tab and click "Add Bot".
5. Enable the "Message Content Intent" option in the bot settings.

## Generating the OAuth2 URL and Installing the Bot

1. In the application settings, go to the "OAuth2" tab.
2. In the "Scopes" section, select the "bot" and "administrator" options.
3. Click on the "URL Generator" tab to generate the OAuth2 URL.
4. Follow the generated URL to add the bot to your desired Discord server.

## Running EnhanceDocs Server with Discord Integration

Once you have completed the steps above, update your `docker run` command to include the `DISCORD_TOKEN` environment variable:

```bash
docker run -p 8080:8080 \
  -v $(pwd)/.enhancedocs/data:/data/enhancedocs \
  -v $(pwd)/.enhancedocs/config:/etc/enhancedocs \
  --env OPENAI_API_KEY=sk-... \
  --env DISCORD_TOKEN=your_discord_token \
  enhancedocs/enhancedocs
```

Replace `your_discord_token` with the token you obtained from the Discord Developer Portal.

## Summary

By following these steps, you can successfully enable Discord integration for EnhanceDocs Server, allowing you to access the AI-powered search engine within your Discord community server.

<div>
  <img src={ss} alt="EnhanceDocs Adding to Existing Project" width="100%" style={{ borderRadius: 8 }} />
</div>

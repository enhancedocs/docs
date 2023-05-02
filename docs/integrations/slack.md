---
sidebar_position: 3
---

import ss from './assets/slack_ss.png';

# Integrating with Slack

To enable Slack integration with EnhanceDocs Server, follow these steps:

1. Update the `config.json` file by adding the following key-value pair within the `integrations` object:

```json
{
  ...
  "integrations": {
    ...
    "slack": true
  }
}
```

2. Provide the `SLACK_BOT_TOKEN` and `SLACK_SIGNING_SECRET` as environment variables in the `docker run` command. To do this, you need to create a Slack bot, subscribe to the `app_mention` event, and enable the required scopes/permissions.

## Creating a Slack Bot

1. Go to the [Slack API portal](https://api.slack.com/apps) and sign in with your Slack account.
2. Click on the "Create New App" button.
3. Select "From scratch" and enter a name for your app, then choose the desired workspace and click "Create App".
4. In the "Add features and functionality" section, click on "Bots" and then "Add a bot user".
5. Set a display name and default username for the bot, then click "Add Bot User" and "Save Changes".

## Enabling Events and Subscribing to the App Mention Event

1. In the app settings, navigate to the "Event Subscriptions" tab and toggle on "Enable Events".
2. Enter the "Request URL" (which should be the URL of your EnhanceDocs server with the `/integrations/slack/events` endpoint).
3. In the "Subscribe to bot events" section, click "Add Bot User Event" and choose the `app_mention` event.
4. Click "Save Changes".

## Adding Required Scopes/Permissions

1. Go to the "OAuth & Permissions" tab in the app settings.
2. Scroll to the "Scopes" section and add the following bot token scopes: `app_mentions:read`, `channels:history`, `chat:write`, `groups:history`, `im:history`, and `mpim:history`.
3. Click "Save Changes".

## Installing the App and Obtaining the Bot Token

1. Scroll to the top of the "OAuth & Permissions" page and click "Install App to Workspace".
2. Authorize the app.
3. After installation, you will see the `SLACK_BOT_TOKEN` under "OAuth Tokens for Your Workspace". Copy the token for later use.

## Running EnhanceDocs Server with Slack Integration

Once you have completed the steps above, update your `docker run` command to include the `SLACK_BOT_TOKEN` and `SLACK_SIGNING_SECRET` environment variables:

```bash
docker run -p 8080:8080 \
  -v $(pwd)/.enhancedocs/data:/data/enhancedocs \
  -v $(pwd)/.enhancedocs/config:/etc/enhancedocs \
  --env OPENAI_API_KEY=sk-... \
  --env SLACK_BOT_TOKEN=xoxb-your_slack_bot_token \
  --env SLACK_SIGNING_SECRET=your_slack_signing_secret \
  enhancedocs/enhancedocs
```

Replace `xoxb-your_slack_bot_token` with the bot token you obtained from the Slack API portal, and `your_slack_signing_secret` with the corresponding signing secret.

## Summary

By following these steps, you can successfully enable Slack integration for EnhanceDocs Server, allowing you to access the AI-powered search engine within your Slack workspace.

<div>
  <img src={ss} alt="EnhanceDocs Adding to Existing Project" width="100%" style={{ borderRadius: 8 }} />
</div>

---
sidebar_position: 2
sidebar_label: Integrating with Discord
description: Discord integration
---

import enhancedocsDiscordExampleUrl from './assets/enhancedocs-discord-example.png';

# Integrating with your Discord server

Learn how integrate EnhanceDocs in your community server.

Many EnhanceDocs users engage with the community on Discord. Discord is where they get to know more about their users
and have a more direct feedback communication with the community instead of just searching up on the docs.

## Prerequisites

Configure your CD pipelines to build and push your documentation before integrating with Discord.
You can see how to do it [here](../getting-started/configure-cd).

## 1. Add EnhanceDocs Bot to your Discord Server

First we would need authorize the EnhanceDocs Discord Bot to be in your Discord server.

To authorize the Discord Bot go to [Organization settings](https://app.enhancedocs.com/settings) > [Integrations](https://app.enhancedocs.com/settings/integrations)
from your EnhanceDocs Dashboard. Click on the Discord integration and follow the oauth2 flow and selecting the server you wish to install.

## 2. Create the communication channel

Create a channel in your Discord server with the name **#ask-enhancedocs**.

**#ask-enhancedocs** is the channel that our bot will **only** listen to `/enhancedocs` commands.

## 3. Start using it 🚀🚀

Now you are done with the setup! Give it a try by asking the EnhanceDocs Discord bot a question about your project.
e.g.: `/enhancedocs question Who are you?`

<div align="center" style={{ margin: '24px 0' }}>
  <img src={enhancedocsDiscordExampleUrl} alt="EnhanceDocs Discord Bot Example" width="500" style={{ borderRadius: 16 }} />
</div>

## FAQ

#### Can EnhanceDocs Discord Bot be installed in multiple servers?

Not at the time, but we would love to hear about your use case to potentially work on a solution that we can deliver to you and many EnhnaceDocs users.

#### Can I set up EnhanceDocs Discord Bot in a different channel that #ask-enhancedocs?

Unfortunately not, but we are working on solution so you can define different channels and customize it so each channel can answer to a different project documentation.

#### I've a special feature request, how do I get in contact?

Simply join our discord server and share it on the **#ideas-and-feedback** channel or if you prefer you can do so by filling
the suggestion button form in the [Integrations](https://app.enhancedocs.com/settings/integrations) page.

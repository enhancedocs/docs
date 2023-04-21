---
sidebar_position: 1
---

# Setup EnhanceDocs Server

## Download EnhanceDocs Server

- Cloning this repository `git clone git@github.com:enhancedocs/enhancedocs.git`

or

- Using docker image `docker pull enhancedocs/enhancedocs`

## Set up env variables

### Using docker compose of the enhancedocs repository

Use the `.example.env` as a template and fill with the required fields.

- `OPENAI_API_KEY` is required; EnhanceDocs relies on [OpenAI API](https://platform.openai.com/docs/introduction)
- `ENHANCEDOCS_API_KEY` is optional; By default you can ingest data into EnhanceDocs without an API Key,
  so you can work conformable in your local environment,
  but we highlight recommend to set this on production if you are exposing the API to the internet.
- `ENHANCEDOCS_ACCESS_TOKEN` is optional; This is a client side token,
  and we recommend its usage together with cors so only your site can make requests to the API.

```bash
cp .example.env .env
```

### Running the docker image directly

Same as previous step but instead export the environment variables and are being passed to the container

## Update settings

Update the `config.json` file and `prompt_template.txt` found the configuration path so matches your project description.

By default enhancedocs paths are:
- `/etc/enhancedocs` - For configuration
- `/data/enhancedocs` - For database resources

If you are using docker compose of the enhancedocs repository this will be mapped to the current folder `.enhancedocs` directory for easy setup.


## 🚀 Launch EnhanceDocs

```bash
docker compose up
```

or

```
docker run enhancedocs/enhancedocs \
  -v ./.enhancedocs/data:/data/enhancedocs \
  -v ./.enhancedocs/config:/etc/enhancedocs \
  --env OPENAI_API_KEY=sk-...
```

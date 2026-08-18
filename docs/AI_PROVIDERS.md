# Active Ai AI providers

Active Ai supports text strategy through OpenAI and visual generation through Replicate.

## Vercel environment variables

```text
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini
REPLICATE_API_TOKEN=
REPLICATE_MODEL_VERSION=
```

`REPLICATE_MODEL_VERSION` must be a Replicate model version whose API accepts the inputs sent by `/api/creative/generate-visual`. Choose the image/video model you want to operate in production and set its version in Vercel; do not commit provider secrets.

The application intentionally does not hard-code a model because image and video models expose different input schemas, costs, and output formats.

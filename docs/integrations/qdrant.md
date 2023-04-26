---
sidebar_position: 4
---

# Integrating with Qdrant

Qdrant integration provides an efficient and scalable solution for managing vector databases within EnhanceDocs. By using Qdrant, you can improve performance, especially with large data sets, making it the preferred option for production environments.

To enable Qdrant integration, you need to provide the `QDRANT_URL` and `QDRANT_API_KEY` as environment variables when running EnhanceDocs Server. Make sure you have a Qdrant server set up and running before proceeding with the integration.

## Benefits of Using Qdrant as the Vector Database

- **Scalability**: Qdrant is designed to handle large data sets, providing better performance and stability in production environments.
- **Ease of management**: Qdrant simplifies the management of vector databases, minimizing the need for manual intervention.
- **Optimized search**: Qdrant provides a more efficient vector search compared to the local (default) setup, resulting in faster search results and a better user experience.

## Running EnhanceDocs Server with Qdrant Integration

Update your `docker run` command to include the `QDRANT_URL` and `QDRANT_API_KEY` environment variables:

```bash
docker run -p 8080:8080 \
  -v $(pwd)/.enhancedocs/data:/data/enhancedocs \
  -v $(pwd)/.enhancedocs/config:/etc/enhancedocs \
  --env OPENAI_API_KEY=sk-... \
  --env QDRANT_URL=your_qdrant_url \
  --env QDRANT_API_KEY=your_qdrant_api_key \
  enhancedocs/enhancedocs
```

Replace `your_qdrant_url` with the URL of your running Qdrant server, and `your_qdrant_api_key` with the corresponding API key.

## Summary

By following these steps, you can successfully integrate EnhanceDocs with Qdrant, unlocking better performance and scalability for your AI-powered search engine, especially when dealing with large data sets in production environments.

### Additional Resources

- [Qdrant documentation](https://qdrant.tech/documentation/)
- [Qdrant cloud](https://cloud.qdrant.io/)

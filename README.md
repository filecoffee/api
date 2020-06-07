# file.coffee API documentation
This is the official API Documentation for file.coffee

# Base
The base for the URL is https://file.coffee/api/v1/

# Endpoints
The list of endpoints

## API Rules
The api is built for developers, so they can integrate file.coffee into their platform. If you expect your platform to become big, please contact <a href="mailto:daniel@lnzl.nl">daniel@lngzl.nl</a> to see what we can do for you to avoid issues with the platform in the future (for example, a custom instance for your platform to avoid downtime.).

You are not allowed to abuse the API in any way shape or form, the ToS and Privacy Policy stated on file.coffee also apply for the API. By using the API, you agree to those.

## Upload
Want to upload a file by using code, for example, for your platform?

| Endpoint | HTTP | Post Type | Body key | Optional     |
|----------|------|-----------|----------|--------------|
| upload   | post | Multipart | file     | ?key=api_key |

If you want the upload to be linked to your account, ensure you add your API key to the query.

## Information
Get information about file.coffee, like the upload count and data used.

| Endpoint | HTTP  | Body key |
|----------|-----------|----------|
| information   | GET  | file     |

If you want the upload to be linked to your account, ensure you add your API key to the query.

# More endpoint documentation in the future
We have some more endpoints that need documentation, we'll add those later to this repo.

# Examples
For examples, check the `examples` folder. It contains examples of how to use the API in different programming languages.

import * as contentful from 'contentful';

const client = contentful.createClient({
  space: ${process.env.contentful_space_id},
  environment: ${process.env.contentful_environment_id}, // defaults to 'master' if not set
  accessToken: ${process.env.contentful_access_token},
});

export default client;
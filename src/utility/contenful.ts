import * as contentful from 'contentful';


const client = contentful.createClient({
  space: "3kmi4y9gzll5",
  environment: "master", // defaults to 'master' if not set
  accessToken: "i8ROFeBMRcdmRXsv91uL4BNyJidpIFIPwMDRd3Kg-FM",
});

export default client;

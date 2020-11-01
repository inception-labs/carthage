import express from 'express';


const app = express();

const PORT = 8000;
app.get('/', (req, res) => res.send('Welcome to Carthage - A GraphQL FHIR Architecture.'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
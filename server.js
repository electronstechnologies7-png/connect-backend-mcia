require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

// Base de données (optionnel pour l'instant)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

// Route test
app.get('/', (req, res) => {
  res.json({ message: 'Backend CONNECT MCIA GUCII en ligne !' });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date() });
});

// Login simple (temporaire)
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  res.json({ message: 'Login OK', email });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

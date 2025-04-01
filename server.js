require('dotenv').config();
const express = require('express');
const admin = require('firebase-admin');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// Initialize Firebase Admin
const serviceAccount = {
  type: "service_account",
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL
});

const database = admin.database();

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API endpoint to save articles
// API endpoint to save articles (updated with PIN)
app.post('/api/save', (req, res) => {
    const { content, title = 'Untitled', pin } = req.body;
    const articleRef = database.ref('Articles').push();
    
    const expiredAt = Date.now() + 24 * 60 * 60 * 1000;
    
    const articleData = {
      title,
      content,
      createdAt: admin.database.ServerValue.TIMESTAMP,
      expiredAt: expiredAt
    };

    // Only add pin if provided
    if (pin) {
      articleData.pin = pin;
    }
    
    articleRef.set(articleData)
    .then(() => {
      res.json({ 
        success: true,
        id: articleRef.key,
        url: `/shared/${articleRef.key}`,
        expiredAt: expiredAt,
        hasPin: !!pin // Indicate if PIN was set
      });
    })
    .catch(error => {
      res.status(500).json({ success: false, error: error.message });
    });
});

// API endpoint to delete articles with PIN verification
app.delete('/api/article/:id', (req, res) => {
    const { pin } = req.body;
    
    database.ref(`Articles/${req.params.id}`).once('value')
    .then(snapshot => {
        if (!snapshot.exists()) {
            return res.status(404).json({ success: false, error: 'Article not found' });
        }
        
        const article = snapshot.val();
        
        // Check if article has PIN and if it matches
        if (article.pin && article.pin !== pin) {
            return res.status(401).json({ success: false, error: 'Invalid PIN' });
        }
        
        // If no PIN or PIN matches, delete the article
        return database.ref(`Articles/${req.params.id}`).remove()
            .then(() => {
                res.json({ success: true });
            });
    })
    .catch(error => {
        res.status(500).json({ success: false, error: error.message });
    });
});

// Shared route
app.get('/shared/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'shared.html'));
});

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
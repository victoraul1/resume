const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'resume-data.json');

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static(__dirname));

// Initialize data file if it doesn't exist
async function initDataFile() {
    try {
        await fs.access(DATA_FILE);
    } catch {
        await fs.writeFile(DATA_FILE, JSON.stringify({}), 'utf8');
    }
}

// API Routes
app.get('/api/resume', async (req, res) => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).json({ error: 'Failed to load resume data' });
    }
});

app.post('/api/resume', async (req, res) => {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(req.body, null, 2), 'utf8');
        res.json({ success: true, message: 'Resume data saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save resume data' });
    }
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, async () => {
    await initDataFile();
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`
    =============================================
    Resume Editor is ready!
    
    Access your resume at: http://localhost:${PORT}
    
    Default password: 1234
    (Change this in script.js)
    
    Features:
    - Password-protected editing
    - Dark mode toggle
    - PDF/DOCX export
    - Share functionality
    - Auto-save to browser storage
    - Optional server persistence
    =============================================
    `);
});
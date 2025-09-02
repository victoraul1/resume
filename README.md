# Editable Resume Website

A modern, responsive resume website with password-protected editing capabilities, dark mode, and export functionality.

## Features

- **Password Protected Editing**: Secure 4-digit password authentication for edit mode
- **Live Editing**: Edit resume content directly in the browser
- **Dark Mode**: Toggle between light and dark themes
- **Export Options**: Download resume as PDF or DOCX
- **Share Functionality**: Native share API support
- **Responsive Design**: Mobile-friendly layout
- **Data Persistence**: 
  - Local storage (works offline)
  - Optional server persistence (when running Node.js server)
- **Auto-save**: Changes are automatically saved to browser storage

## Quick Start

### Option 1: Static HTML (No Server)
Simply open `index.html` in a web browser. All features work except server persistence.

### Option 2: With Node.js Server (Recommended)
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage

### Editing Your Resume

1. Click **"Login to Edit"** button
2. Enter the password: `1234` (default)
3. Click **"Edit Resume"** to enter edit mode
4. Click on any text to edit it directly
5. Click on profile image to upload a new one
6. Click **"Save Changes"** to save your edits
7. Click **"Cancel"** to discard changes

### Changing the Password

Edit line 2 in `script.js`:
```javascript
const PASSWORD = '1234'; // Change this to your desired 4-digit password
```

### Features

- **Dark Mode**: Click the 🌙 button to toggle dark mode
- **Export PDF**: Click 📄 to download resume as PDF
- **Export DOCX**: Click 📝 to download resume as Word document
- **Share**: Click 🔗 to share the resume link

### Keyboard Shortcuts

- **Enter**: Submit password in login modal
- **Ctrl/Cmd + S**: Save changes in edit mode
- **Escape**: Cancel edit mode

## Customization

### Styling
- Edit `styles.css` to customize colors, fonts, and layout
- Dark mode colors are defined in CSS variables

### Content Structure
- Edit the HTML structure in `index.html`
- Add `class="editable"` and `data-field="unique-name"` to make any element editable

### Profile Image
- Default placeholder image can be replaced
- Supports JPG, PNG, and other common image formats

## Deployment

### Static Hosting (GitHub Pages, Netlify, Vercel)
Upload these files:
- `index.html`
- `styles.css`
- `script.js`

The site will work with local storage only.

### Full Server Deployment
For server persistence, deploy the Node.js application to:
- Heroku
- Railway
- Render
- Any Node.js hosting service

## File Structure

```
resume/
├── index.html          # Main HTML file
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript functionality
├── server.js           # Optional Node.js server
├── package.json        # Node.js dependencies
├── resume-data.json    # Server-stored resume data (auto-created)
└── README.md          # Documentation
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Security Notes

- The default password is `1234` - change it immediately
- Password is stored in plain text in the JavaScript file
- For production use, consider implementing proper authentication
- Data is stored locally in browser storage and optionally on server

## Troubleshooting

**Password not working?**
- Check that you're entering exactly 4 digits
- Clear browser cache and try again

**Changes not saving?**
- Check browser console for errors
- Ensure local storage is enabled
- Try refreshing the page

**PDF export not working?**
- Ensure you have a stable internet connection (for loading libraries)
- Try a different browser
- Check browser console for errors

## License

MIT License - Feel free to customize and use for your own resume!
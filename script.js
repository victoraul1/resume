// Configuration
const PASSWORD = '123456'; // Change this to your desired 6-digit password
let isLoggedIn = false;
let isEditMode = false;
let originalContent = {};

// Initialize the application
document.addEventListener('DOMContentLoaded', async () => {
    await checkServerAvailability();
    loadSavedData();
    checkLoginStatus();
    initializeDarkMode();
});

// Check if server is available
const SERVER_URL = window.location.origin;
let useServer = false;

async function checkServerAvailability() {
    try {
        const response = await fetch(`${SERVER_URL}/api/resume`);
        if (response.ok) {
            useServer = true;
            console.log('Server API available - using server persistence');
        }
    } catch {
        console.log('Server API not available - using local storage only');
    }
}

// Password Protection
function showPasswordModal() {
    document.getElementById('passwordModal').classList.add('show');
    document.getElementById('passwordInput').focus();
}

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorDiv = document.getElementById('passwordError');
    
    if (input === PASSWORD) {
        isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginTime', Date.now());
        document.getElementById('passwordModal').classList.remove('show');
        document.getElementById('passwordInput').value = '';
        errorDiv.textContent = '';
        updateUIForLogin();
    } else {
        errorDiv.textContent = 'Incorrect password. Please try again.';
        document.getElementById('passwordInput').value = '';
    }
}

function checkLoginStatus() {
    const loginTime = localStorage.getItem('loginTime');
    const isStoredLogin = localStorage.getItem('isLoggedIn');
    
    // Auto-logout after 1 hour
    if (isStoredLogin && loginTime) {
        const hourInMs = 60 * 60 * 1000;
        if (Date.now() - parseInt(loginTime) < hourInMs) {
            isLoggedIn = true;
            updateUIForLogin();
        } else {
            logout();
        }
    }
}

function updateUIForLogin() {
    if (isLoggedIn) {
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'inline-block';
        document.getElementById('editBtn').style.display = 'inline-block';
    } else {
        document.getElementById('loginBtn').style.display = 'inline-block';
        document.getElementById('logoutBtn').style.display = 'none';
        document.getElementById('editBtn').style.display = 'none';
        document.getElementById('saveBtn').style.display = 'none';
        document.getElementById('cancelBtn').style.display = 'none';
    }
}

function logout() {
    isLoggedIn = false;
    isEditMode = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loginTime');
    disableEditMode();
    updateUIForLogin();
}

// Edit Mode Functions
function toggleEditMode() {
    if (!isLoggedIn) {
        showPasswordModal();
        return;
    }
    
    if (!isEditMode) {
        enableEditMode();
    } else {
        disableEditMode();
    }
}

function enableEditMode() {
    isEditMode = true;
    
    // Store original content
    const editables = document.querySelectorAll('.editable, .editable-list');
    editables.forEach(element => {
        const field = element.getAttribute('data-field');
        originalContent[field] = element.innerHTML;
        element.classList.add('edit-mode');
        element.setAttribute('contenteditable', 'true');
    });
    
    
    // Update UI
    document.getElementById('editBtn').style.display = 'none';
    document.getElementById('saveBtn').style.display = 'inline-block';
    document.getElementById('cancelBtn').style.display = 'inline-block';
}

function disableEditMode() {
    isEditMode = false;
    
    const editables = document.querySelectorAll('.editable, .editable-list');
    editables.forEach(element => {
        element.classList.remove('edit-mode');
        element.setAttribute('contenteditable', 'false');
    });
    
    
    // Update UI
    document.getElementById('editBtn').style.display = 'inline-block';
    document.getElementById('saveBtn').style.display = 'none';
    document.getElementById('cancelBtn').style.display = 'none';
}

async function saveChanges() {
    const editables = document.querySelectorAll('.editable, .editable-list');
    const data = {};
    
    editables.forEach(element => {
        const field = element.getAttribute('data-field');
        data[field] = element.innerHTML;
    });
    
    
    // Save to localStorage
    localStorage.setItem('resumeData', JSON.stringify(data));
    
    // Also save to server if available
    if (useServer) {
        try {
            const response = await fetch(`${SERVER_URL}/api/resume`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                console.error('Failed to save to server');
            }
        } catch (error) {
            console.error('Error saving to server:', error);
        }
    }
    
    // Clear original content
    originalContent = {};
    
    disableEditMode();
    
    // Show success message
    showNotification('Changes saved successfully!');
}

function cancelEdit() {
    // Restore original content
    const editables = document.querySelectorAll('.editable, .editable-list');
    editables.forEach(element => {
        const field = element.getAttribute('data-field');
        if (originalContent[field]) {
            element.innerHTML = originalContent[field];
        }
    });
    
    originalContent = {};
    disableEditMode();
}

async function loadSavedData() {
    let data = null;
    
    // Try to load from server first if available
    if (useServer) {
        try {
            const response = await fetch(`${SERVER_URL}/api/resume`);
            if (response.ok) {
                const serverData = await response.json();
                if (Object.keys(serverData).length > 0) {
                    data = serverData;
                }
            }
        } catch (error) {
            console.error('Error loading from server:', error);
        }
    }
    
    // Fallback to localStorage if no server data
    if (!data) {
        const savedData = localStorage.getItem('resumeData');
        if (savedData) {
            data = JSON.parse(savedData);
        }
    }
    
    // Apply the data if available
    if (data) {
        Object.keys(data).forEach(field => {
            const element = document.querySelector(`[data-field="${field}"]`);
            if (element) {
                element.innerHTML = data[field];
            }
        });
    }
}

// Dark Mode
function initializeDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Export Functions
async function exportPDF() {
    // Temporarily hide control panel and edit mode indicators
    const controlPanel = document.querySelector('.control-panel');
    controlPanel.style.display = 'none';
    
    // Remove edit mode classes temporarily
    const editModeElements = document.querySelectorAll('.edit-mode');
    editModeElements.forEach(el => el.classList.remove('edit-mode'));
    
    try {
        const element = document.getElementById('resumeContent');
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false,
            windowHeight: element.scrollHeight
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });
        
        const pageWidth = 210; // A4 width in mm
        const pageHeight = 297; // A4 height in mm
        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        let heightLeft = imgHeight;
        let position = 0;
        
        // Add first page
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        // Add additional pages if content is longer than one page
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        pdf.save('Victor_Galindo_Resume.pdf');
        
        showNotification('PDF downloaded successfully!');
    } catch (error) {
        console.error('Error generating PDF:', error);
        showNotification('Error generating PDF. Please try again.', 'error');
    } finally {
        // Restore control panel and edit mode
        controlPanel.style.display = 'flex';
        if (isEditMode) {
            editModeElements.forEach(el => el.classList.add('edit-mode'));
        }
    }
}

async function exportDOCX() {
    try {
        // Gather all the resume data
        const resumeData = {
            name: document.querySelector('[data-field="name"]').textContent,
            title: document.querySelector('[data-field="title"]').textContent,
            summary: document.querySelector('[data-field="summary"]').textContent,
            phone: document.querySelector('[data-field="phone"]').textContent,
            email: document.querySelector('[data-field="email"]').textContent,
            website: document.querySelector('[data-field="website"]').textContent,
            address: document.querySelector('[data-field="address"]').textContent,
            // Add more fields as needed
        };
        
        // Create document sections
        const doc = new docx.Document({
            sections: [{
                properties: {},
                children: [
                    new docx.Paragraph({
                        text: resumeData.name,
                        heading: docx.HeadingLevel.HEADING_1,
                        alignment: docx.AlignmentType.CENTER,
                    }),
                    new docx.Paragraph({
                        text: resumeData.title,
                        heading: docx.HeadingLevel.HEADING_2,
                        alignment: docx.AlignmentType.CENTER,
                    }),
                    new docx.Paragraph({
                        text: resumeData.summary,
                        spacing: { after: 300 },
                    }),
                    new docx.Paragraph({
                        text: "Contact Information",
                        heading: docx.HeadingLevel.HEADING_2,
                        spacing: { before: 300 },
                    }),
                    new docx.Paragraph({
                        text: `Phone: ${resumeData.phone}`,
                    }),
                    new docx.Paragraph({
                        text: `Email: ${resumeData.email}`,
                    }),
                    new docx.Paragraph({
                        text: `Website: ${resumeData.website}`,
                    }),
                    new docx.Paragraph({
                        text: `Address: ${resumeData.address}`,
                    }),
                    // Add more sections for experience, education, etc.
                ],
            }],
        });
        
        // Generate and download the document
        const blob = await docx.Packer.toBlob(doc);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Victor_Galindo_Resume.docx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        showNotification('DOCX downloaded successfully!');
    } catch (error) {
        console.error('Error generating DOCX:', error);
        showNotification('Error generating DOCX. Please try again.', 'error');
    }
}

// Share Function
function shareResume() {
    const shareData = {
        title: 'Victor R Galindo - Web Developer Resume',
        text: 'Check out my professional resume',
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => showNotification('Resume shared successfully!'))
            .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback - copy link to clipboard
        navigator.clipboard.writeText(window.location.href)
            .then(() => showNotification('Link copied to clipboard!'))
            .catch(() => showNotification('Could not copy link', 'error'));
    }
}

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        z-index: 1001;
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Enter key in password input
    if (e.key === 'Enter' && document.getElementById('passwordModal').classList.contains('show')) {
        checkPassword();
    }
    
    // Ctrl/Cmd + S to save in edit mode
    if ((e.ctrlKey || e.metaKey) && e.key === 's' && isEditMode) {
        e.preventDefault();
        saveChanges();
    }
    
    // Escape to cancel edit mode
    if (e.key === 'Escape' && isEditMode) {
        cancelEdit();
    }
});

// Add CSS for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
`;
document.head.appendChild(style);
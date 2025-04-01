// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCNM6jFlIQJWn49pawqIulqW67FD8OSK6U",
    authDomain: "bot-project-8d259.firebaseapp.com",
    databaseURL: "https://bot-project-8d259-default-rtdb.firebaseio.com",
    projectId: "bot-project-8d259",
    storageBucket: "bot-project-8d259.firebasestorage.app",
    messagingSenderId: "289445545944",
    appId: "1:289445545944:web:3356b5213b45780ef394ad",
    measurementId: "G-L1PQXGH3K3"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const saveBtn = document.getElementById('save-btn');
    const titleInput = document.getElementById('title-input');
    const articleTitle = document.getElementById('article-title');
    
    // Load SweetAlert2
    const Swal = window.Swal;
    
    // Set up toolbar buttons
    document.querySelectorAll('#editor-toolbar button[data-command]').forEach(button => {
      button.addEventListener('click', () => {
        const command = button.getAttribute('data-command');
        
        if (command === 'foreColor') {
          document.getElementById('text-color').click();
        } else if (command === 'hiliteColor') {
          document.getElementById('highlight-color').click();
        } else if (command.startsWith('justify')) {
          // Handle text alignment
          document.execCommand(command, false, null);
          updateAlignmentButtons(command);
        } else {
          document.execCommand(command, false, null);
        }
      });
    });
    
    // Set up color pickers
    document.getElementById('text-color').addEventListener('input', (e) => {
      document.execCommand('foreColor', false, e.target.value);
    });
    
    document.getElementById('highlight-color').addEventListener('input', (e) => {
      document.execCommand('hiliteColor', false, e.target.value);
    });
    
    // Save button click handler
    saveBtn.addEventListener('click', saveArticle);
    
    function updateAlignmentButtons(activeCommand) {
      document.querySelectorAll('[data-command^="justify"]').forEach(btn => {
        btn.classList.toggle('bg-blue-100', btn.getAttribute('data-command') === activeCommand);
      });
    }
    
    function setupEditor() {
      titleInput.classList.remove('hidden');
      saveBtn.classList.remove('hidden');
      editor.contentEditable = true;
      editor.focus();
    }
    
    function saveArticle() {
        const content = editor.innerHTML;
        const title = articleTitle.value.trim();
        const pin = document.getElementById('article-pin').value.trim();
        
        if (!content) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter some content!',
          });
          return;
        }
        
        saveBtn.disabled = true;
        saveBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Saving...';
        
        fetch('/api/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content, title, pin: pin || undefined }),
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            Swal.fire({
              toast: true,
              position: 'top-end',
              icon: 'success',
              title: 'Save Confirmed!',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              background: '#f0fdf4',
              iconColor: '#16a34a'
            }).then(() => {
              window.location.href = data.url;
            });
          } else {
            throw new Error(data.error || 'Failed to save');
          }
        })
        .catch(error => {
          console.error('Error saving article:', error);
          Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'error',
            title: 'Save failed',
            text: error.message,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            background: '#fef2f2',
            iconColor: '#dc2626'
          });
        })
        .finally(() => {
          saveBtn.disabled = false;
          saveBtn.innerHTML = '<i class="fas fa-save mr-2"></i>Save';
        });
      }
    
    // Initialize editor
    setupEditor();
  });
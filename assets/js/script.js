// === File Upload Handling ===
const uploadBox = document.querySelector('.upload-box');
const fileInput = document.querySelector('#fileInput');
const uploadLabel = document.querySelector('.upload-label');

uploadBox.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadBox.classList.add('dragover');
});
uploadBox.addEventListener('dragleave', () => {
  uploadBox.classList.remove('dragover');
});
uploadBox.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadBox.classList.remove('dragover');
  const files = e.dataTransfer.files;
  handleFiles(files);
});
uploadLabel.addEventListener('click', () => {
  fileInput.click();
});
fileInput.addEventListener('change', () => {
  handleFiles(fileInput.files);
});
function handleFiles(files) {
  const previewArea = document.querySelector('.task-list');
  previewArea.innerHTML = '';
  Array.from(files).forEach(file => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
      <strong>${file.name}</strong><br>
      <em>${(file.size / 1024).toFixed(2)} KB</em>
    `;
    previewArea.appendChild(taskItem);
  });
}
// === Assistant Agent Toggle (Optional) ===
const assistantToggle = document.querySelector('#assistantToggle');
const sidebar = document.querySelector('.sidebar');
if (assistantToggle) {
  assistantToggle.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
  });
}

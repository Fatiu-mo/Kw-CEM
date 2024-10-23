// Toggle delete modal
document.getElementById('deleteBtn').addEventListener('click', function () {
    document.getElementById('deleteModal').style.display = 'flex';
});

document.getElementById('cancelDeleteBtn').addEventListener('click', function () {
    document.getElementById('deleteModal').style.display = 'none';
});

document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
    // Add logic to delete the user
    alert('User has been deleted');
    document.getElementById('deleteModal').style.display = 'none';
});

// Save admin notes
document.getElementById('saveNotesBtn').addEventListener('click', function () {
    const notes = document.getElementById('adminNotes').value;
    // Save notes to the database (for now we'll log it)
    console.log('Admin Notes:', notes);
    alert('Notes saved successfully!');
});

// Edit button logic
document.getElementById('editBtn').addEventListener('click', function () {
    // Redirect to an edit form or allow inline editing
    alert('Edit User feature coming soon!');
});

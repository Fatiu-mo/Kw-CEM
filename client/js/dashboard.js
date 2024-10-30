// Example data (this would come from the database in a real app)
let users = [
    { name: 'John Doe', phone: '08012345678', lga: 'Ilorin West', ward: 'Adewole', nin: '12345678901', bvn: '22222222222', accountNumber: '1111111111', bank: "Zenith" },
    { name: 'Jane Smith', phone: '08098765432', lga: 'Asa', ward: 'Alapa', nin: '10987654321', bvn: '33333333333', accountNumber: '2222222222', bank: "UBA" },
    { name: 'Park Lith', phone: '08098765431', lga: 'Irepodun', ward: 'Esie', nin: '10987654325', bvn: '33333333233', accountNumber: '2222222122', bank: "Opay" },
    // Add more users
];

let currentPage = 1;
const rowsPerPage = 10;
let selectedUserIndex = null; // Track the selected user for deletion

// Initialize dashboard statistics
function loadDashboardStats() {
    document.getElementById('totalUsers').innerText = users.length;
    document.getElementById('totalLGA').innerText = new Set(users.map(user => user.lga)).size;
    document.getElementById('flaggedDuplicates').innerText = 0; // Implement duplicate checking later
}

// Load user data into the table
function loadUserTable(page = 1) {
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = ''; // Clear previous data

    const start = (page - 1) * rowsPerPage;
    const end = page * rowsPerPage;
    const paginatedUsers = users.slice(start, end);

    paginatedUsers.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.lga}</td>
            <td>${user.ward}</td>
            <td>${user.bvn}</td>
            <td>${user.bank}</td>
            <td>${user.accountNumber}</td>
            <td class="xtra-btn">
                <button class="action-btn edit-btn">Edit</button>
                <button class="action-btn delete-btn" onclick="confirmDelete(${index + start})">Delete</button>
            </td>
        `;
        row.onclick = () => window.location.href = `user-details.html?user=${user.name}`;
        tbody.appendChild(row);
    });
    
    document.getElementById('currentPage').innerText = currentPage;
}

// Handle pagination
document.getElementById('prevPageBtn').addEventListener('click', function () {
    if (currentPage > 1) {
        currentPage--;
        loadUserTable(currentPage);
    }
});

document.getElementById('nextPageBtn').addEventListener('click', function () {
    if (currentPage * rowsPerPage < users.length) {
        currentPage++;
        loadUserTable(currentPage);
    }
});

// Filter users by search input
document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchValue) || 
        user.nin.includes(searchValue) ||
        user.bvn.includes(searchValue) ||
        user.uniqueId.toLowerCase().includes(searchValue)
    );
    
    // Update the table with filtered users
    const tbody = document.getElementById('userTableBody');
    tbody.innerHTML = '';

    filteredUsers.slice(0, rowsPerPage).forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.lga}</td>
            <td>${user.ward}</td>
            <td>${user.bvn}</td>
            <td>${user.bank}</td>
            <td>${user.accountNumber}</td>
            <td class="xtra-btn">
                <button class="action-btn edit-btn">Edit</button>
                <button class="action-btn delete-btn" onclick="confirmDelete(${index})">Delete</button>
            </td>
        `;
        row.onclick = () => window.location.href = `user-details.html?user=${user.name}`;
        tbody.appendChild(row);
    });
});

// Delete confirmation modal
function confirmDelete(index) {
    selectedUserIndex = index;
    document.getElementById('deleteModal').style.display = 'flex';
}

document.getElementById('confirmDeleteBtn').addEventListener('click', function () {
    users.splice(selectedUserIndex, 1); // Remove the user
    loadUserTable(currentPage);
    document.getElementById('deleteModal').style.display = 'none';
});

document.getElementById('cancelDeleteBtn').addEventListener('click', function () {
    document.getElementById('deleteModal').style.display = 'none';
});

// Initialize dashboard
window.onload = function() {
    loadDashboardStats();
    loadUserTable();
};

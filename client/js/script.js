// Hamburger and Dropdown Menu Toggle
const hamburger = document.getElementById('hamburger');
const dropdownMenu = document.getElementById('dropdown-menu');

hamburger.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});


// Navbar Scroll Change
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    hamburger.style.color = '#333'
  } else {
    navbar.classList.remove('scrolled');
    hamburger.style.color = 'white'
  }
});


document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const localGovt = document.getElementById('local-government').value;
    const ward = document.getElementById('ward').value;
    const community = document.getElementById('community').value;
    const bvn = document.getElementById('bvn').value;
    const nin = document.getElementById('nin').value;
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const vin = document.getElementById('vin').value
  
    // Basic Validation
    if (!name || !phone || !age || !gender || !localGovt || !ward || !community || !vin || !bvn || !nin || !bank || !accountNumber) {
      document.getElementById('error-popup').classList.remove('hidden');
    } else {
      document.getElementById('confirmation-popup').classList.remove('hidden');
    }
  });
  
  // Close Confirmation Pop-up
  document.getElementById('close-confirmation').addEventListener('click', function () {
    document.getElementById('confirmation-popup').classList.add('hidden');
    document.getElementById('registration-form').reset();
  });
  
  // Close Error Pop-up
  document.getElementById('close-error').addEventListener('click', function () {
    document.getElementById('error-popup').classList.add('hidden');
  });
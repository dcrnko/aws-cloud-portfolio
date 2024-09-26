document.getElementById('toggleLink').addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.getElementById('toggleSection');
    
    if (section.style.display === 'none' || section.style.display === '') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
  function scrollToNextSection() {
    document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
  }
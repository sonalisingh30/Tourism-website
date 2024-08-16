// Function to handle the click event
function handleClick(event) {
    // Get the ID of the clicked element
    const id = event.currentTarget.id;
    // Perform some action based on the ID
    alert('Clicked on: ' + id);
  }

  // Add event listeners to each rfm-child element
  document.querySelectorAll('.rfm-child').forEach(item => {
    item.addEventListener('click', handleClick);
  });
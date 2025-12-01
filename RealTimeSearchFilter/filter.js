// Add a keyup event listener to the search box
document.getElementById('searchBox').addEventListener('keyup', function() {
    // Get the search query, converted to lowercase for case-insensitivity
    const query = this.value.toLowerCase();

    // Get all list items
    const items = document.querySelectorAll('#itemList li');

    // Loop through items and check if they include the query
    items.forEach(item => {
        // Convert item text to lowercase and check if it incldes the query
        if (item.textContent.toLowerCase().includes(query)) {
            item.classList.remove('hidden'); // Show matching values
        } else {
            item.classList.add('hidden'); // Hide non-matching items
        }
    });
});
document.getElementById('newbtn').addEventListener('click', function() {
    let newName = prompt("Enter new name:");
    
    if (newName) {
        // Send a POST request with plain text data
        fetch('/new/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'  // Specify the content type as plain text
            },
            body: newName  // Send the plain text data
        })
        .then(response => {
            if (response.ok) {
                // If the request was successful, reload the page
                window.location.reload();
            } else {
                // Handle errors (optional)
                alert('Error: Could not save the new name.');
            }
        })
        .catch(error => {
            // Handle network or other errors (optional)
            console.error('Error:', error);
        });
    }
});

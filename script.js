document.getElementById('newbtn').addEventListener('click', function() {
    let newName = prompt("Enter new name:");
    
    if (newName) {
        // Create the request body
        const requestData = { name: newName };

        // Send a POST request
        fetch('/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
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

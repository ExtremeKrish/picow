document.getElementById('newbtn').addEventListener('click', function() {
    let newName = prompt("Enter new name:");
    
    if (newName) {
        // Send a POST request with plain text data
        fetch(('/new/' + newName), {
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
 const deleteButtons = document.querySelectorAll('.delete-btn');

        // Loop through each delete button
        deleteButtons.forEach((button) => {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default form submission

                // Find the parent form
                const form = this.closest('form');

                // Custom logic for setting the form action
                const fileName = form.closest('tr').querySelector('.name').textContent;
                form.action = `/delete/${fileName}`;  // Custom action

                // Optional: Add confirmation dialog before submitting the form
                Swal.fire({
                    title: 'Are you sure?',
                    text: `Do you want to delete ${fileName}?`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel',
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Submit the form programmatically
                        form.submit();
                    }
                });
            });
        });
                                                   

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
                title: '<span style="color:#00ff00;">Are you sure?</span>',
                html: `<span style="color:#00ff00;">Do you want to delete <b>${fileName}</b>?</span>`,
                icon: 'warning',
                background: '#000000',  // Pure black background
                color: '#00ff00',       // Hacker green text color
                iconColor: '#00ff00',   // Green color for the icon
                showCancelButton: true,
                confirmButtonText: '<span style="color:black;">Yes, delete it!</span>',
                cancelButtonText: '<span style="color:black;">No, cancel!</span>',
                confirmButtonColor: '#00ff00',  // Green for confirm button background
                cancelButtonColor: '#3085d6',   // Blue for cancel button background
                customClass: {
                    popup: 'swal2-hacker-popup',
                    title: 'swal2-hacker-title',
                    confirmButton: 'swal2-hacker-confirm',
                    cancelButton: 'swal2-hacker-cancel'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    // Submit the form programmatically
                    form.submit();
                }
                });
            });
        });



 const deleteButtons = document.querySelectorAll('.rename-btn');

        // Loop through each delete button
        deleteButtons.forEach((button) => {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default form submission
               
                // Find the parent form
                const form = this.closest('form');

                // Custom logic for setting the form action
                const fileName = form.closest('tr').querySelector('.name').textContent;
                 var newName = prompt("Enter New Name", fileName);
                form.action = `/rename/${fileName}/newName`;  // Custom action

                // Optional: Add confirmation dialog before submitting the form
               
            });
        });
                                                   

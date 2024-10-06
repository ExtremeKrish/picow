document.getElementById('newbtn').addEventListener('click', function() {
    let newName = prompt("Enter new name:");
    if (newName) {
        // Code to handle new name creation can be added here
        alert("New file created: " + newName);
    }
});

document.getElementById('newbtn').addEventListener('click', function() {
    let newName = prompt("Enter new name:");
    if (newName) {
        // Redirect to /save/newName
        window.location.href = '/new/' + encodeURIComponent(newName);
    }
});

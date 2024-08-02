document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const confirmation = confirm("Are you sure you want to delete this chat?");
            if (!confirmation) {
                event.preventDefault();
            }
        });
    });
});
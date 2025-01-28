function popBox(box) {
    box.style.transform = "scale(1.2)";
    setTimeout(() => {
        box.style.transform = "scale(1)";
    }, 200);
}

// Remove AI popup functions
// function openAIPopup() {
//     document.getElementById('aiPopup').style.display = 'block';
// }

// function closeAIPopup() {
//     document.getElementById('aiPopup').style.display = 'none';
// }

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a click event listener to all links to log their href
    document.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            console.log('Link clicked:', event.target.href);
        });

        // Add hover effect to make anchor tags pop
        link.addEventListener('mouseover', function() {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.2s";
        });
        link.addEventListener('mouseout', function() {
            link.style.transform = "scale(1)";
        });
    });

    // Example: Add a hover effect to all sections
    document.querySelectorAll('section').forEach(function(section) {
        section.addEventListener('mouseover', function() {
            section.style.backgroundColor = '#f0f0f0';
        });
        section.addEventListener('mouseout', function() {
            section.style.backgroundColor = '';
        });
    });

    // Add click and hover event listeners to boxes for animation
    document.querySelectorAll('.box').forEach(function(box) {
        box.addEventListener('click', function() {
            popBox(box);
        });

        // Add hover effect to make boxes pop
        box.addEventListener('mouseover', function() {
            box.style.transform = "scale(1.1)";
            box.style.transition = "transform 0.2s";
        });
        box.addEventListener('mouseout', function() {
            box.style.transform = "scale(1)";
        });
    });

    // Remove AI popup event listeners
    // document.querySelector('.ai-helper').addEventListener('click', openAIPopup);
    // document.querySelector('.ai-popup-close').addEventListener('click', closeAIPopup);
});
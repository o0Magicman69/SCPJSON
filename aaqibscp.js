// Fetch the JSON data and populate the nav menu with monster names
function loadNavMenu() {}
    fetch('https://raw.githubusercontent.com/o0Magicman69/Aaqib-Course-work/refs/heads/main/aaqibscp.json')
    .then(response => response.json())
    .then(data => {
    const navMenu = document.getElementById('scp-nav');
    // Iterate through each monster in the JSON and create a link
    data.forEach(scp => {
    const link = document.createElement('a');
    link.href = `#${scp.name}`;
    link.textContent = scp.name;
    link.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    loadSCP(scp); // Load the specific monster content
    };
    navMenu.appendChild(link);
    });
    }
     )
    .catch(error => console.error('Error loading JSON data:', error));
    
    function loadSCP(scp) {
        const scpContent = document.getElementById('scp-content');
        scpContent.innerHTML = ''; // Clear previous content
            <div class="scp-entry">
                <h2>${scp.name}</h2>
                <p><strong>Object Class:</strong> ${scp.object_class}</p>
                <p><strong>Special Containment Procedures:</strong> ${scp.special_containment_procedures}</p>
                <p><strong>Description:</strong> ${scp.description}</p>
                
            </div>
            `;
            }
 window.onload = loadNavMenu; // Load the nav menu when the page loads
        
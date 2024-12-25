(function () {
    // Avoid duplicate injections
    if (window.RepSocialInjected) return;
    window.RepSocialInjected = true;

    // Add a floating panel
    const panel = document.createElement('div');
    panel.style.position = 'fixed';
    panel.style.right = '0';
    panel.style.top = '0';
    panel.style.width = '300px';
    panel.style.height = '100%';
    panel.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    panel.style.color = '#fff';
    panel.style.zIndex = '100000';
    panel.style.padding = '20px';
    panel.innerHTML = `
        <h3>Rep Social</h3>
        <p>This panel is injected into the page!</p>
        <button id="rep-btn" style="margin-top: 10px;">Click Me</button>
    `;
    document.body.appendChild(panel);

    // Add event listener to the button
    document.getElementById('rep-btn').addEventListener('click', () => {
        alert('Button clicked! Example interaction.');
    });

    console.log('Rep Social script injected successfully.');
})();

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events
    window.deferredPrompt = event;
    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// Event handler on the `butInstall` element for the click event
butInstall.addEventListener('click', async () => {
    console.log("clicked")
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // Show prompt
    promptEvent.prompt();
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'downloadPlaylist') {
      let playlistUrl = request.url;
      // Simulate downloading process
      setTimeout(function() {
        // In a real extension, implement logic to download the playlist
        sendResponse({success: true});
      }, 2000);
      return true; // Indicates that the response will be sent asynchronously
    }
  });
  
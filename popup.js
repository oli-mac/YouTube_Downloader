document.getElementById('downloadButton').addEventListener('click', function() {
  let playlistUrl = document.getElementById('playlistInput').value;
  if (playlistUrl) {
    chrome.runtime.sendMessage({action: 'downloadPlaylist', url: playlistUrl}, function(response) {
      if (response && response.success) {
        setStatus('Playlist downloaded successfully!');
      } else {
        setStatus('Failed to download playlist. Please try again.');
      }
    });
  } else {
    setStatus('No playlist found in the input field.');
  }
});

function setStatus(message) {
  document.getElementById('status').textContent = message;
}
function isMusicCommand(cmd)
{
    return cmd.startsWith('music');
}

function inVoiceChannel(member)
{
    const channel = member.voice?.channel;

    if (channel === null) return false;
    
    return true;
}

function isYouTubeUrl(url) {
    // Regular expression pattern for a YouTube video URL
    const pattern = /^https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})(?:\S+)?$/;
    // Match the pattern against the input URL
    const match = url.match(pattern);
    // If there's a match, return true
    if (match) {
      return true;
    }
    // Otherwise, return false
    else {
      return false;
    }
  }
  

export {isMusicCommand,inVoiceChannel,isYouTubeUrl}
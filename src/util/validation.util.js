import { STOP_MUSIC_COMMAND,PLAY_MUSIC_COMMAND, PAUSE_MUSIC_COMMAND, RESUME_MUSIC_COMMAND } from "../protocol/protocol.js";

function isPlayMusicCommand(cmd)
{
    return cmd.startsWith(PLAY_MUSIC_COMMAND);
}

function isMusicStopCommand(cmd)
{
  return cmd === STOP_MUSIC_COMMAND
}

function isMusicPauseCommand(cmd)
{
  return cmd === PAUSE_MUSIC_COMMAND;
}

function isMusicResumeCommand(cmd)
{
  return cmd === RESUME_MUSIC_COMMAND;
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
  

export {
  isMusicStopCommand,
  isPlayMusicCommand,
  inVoiceChannel,
  isYouTubeUrl,
  isMusicPauseCommand,
  isMusicResumeCommand
}
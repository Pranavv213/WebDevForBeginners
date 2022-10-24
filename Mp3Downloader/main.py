import argparse
import os
import re
import moviepy.editor as MP

from pytube import Playlist
from pytube import YouTube

ARG_PLAYLIST_ID_SHORT = "-ID"
ARG_PLAYLIST_ID_LONG = "--playlist_id"
ARG_PLAYLIST_ID_HELP = "provide your playlist id"
MODULE_INFO = "this script downloads youtube playlists and converts these to mp3 files"
YT_PLAYLIST_URL_FRAGMENT = "https://www.youtube.com/playlist?list="
DOWNLOAD_PATH = "download"
VIDEO_FILE_EXT = "mp4"
AUDIO_FILE_EXT = "mp3"


def main():
    args = parse_args()
    playlist = gen_playlist_from_arg(args=args)
    download_videos_from_playlist(playlist=playlist)


def parse_args():
    parser = argparse.ArgumentParser(description=MODULE_INFO)

    parser.add_argument(ARG_PLAYLIST_ID_SHORT, ARG_PLAYLIST_ID_LONG, required=True,
                        help=ARG_PLAYLIST_ID_HELP)

    return parser.parse_args()


def gen_playlist_from_arg(args):
    playlist_id = args.playlist_id
    playlist = Playlist(YT_PLAYLIST_URL_FRAGMENT + playlist_id)

    return playlist


def download_videos_from_playlist(playlist):
    # prints each video url, which is the same as iterating through playlist.video_urls
    for url in playlist:
        print(url)
        YouTube(url).streams.filter(file_extension=VIDEO_FILE_EXT).first().download(DOWNLOAD_PATH)
        convert_video_to_audio()


def convert_video_to_audio():
    for file in os.listdir(DOWNLOAD_PATH):
        if re.search(VIDEO_FILE_EXT, file):
            video_path = os.path.join(DOWNLOAD_PATH, file)
            audio_path = os.path.join(DOWNLOAD_PATH, os.path.splitext(file)[0] + "." + AUDIO_FILE_EXT)
            new_file = MP.AudioFileClip(video_path)
            new_file.write_audiofile(audio_path)
            os.remove(video_path)


if __name__ == "__main__":
    main()

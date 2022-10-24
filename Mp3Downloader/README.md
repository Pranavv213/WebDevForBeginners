# mp3-from-youtube-playlist
python script for getting mp3 files from youtube playlist.

## Overview
It's a simple pytube and moviepy implementation. It retrieves the URLs of the videos of the playlist and converts them to mp3 upon downloading.


## Prerequisites
- You will need have Python3
- Setup virtualenv and install dependencies from req.txt
```console
your_pc$ virtualenv -p /usr/bin/python3 venv
```
```console
your_pc$ source venv/bin/activate
```
```console
(venv)your_pc$ pip install -r req.txt
```
## Running
Your Youtube playlist URL might look like this,
```json lines
https://www.youtube.com/watch?v=oJ4YxVC9xk4&list=PLDfKAXSi6kUau7d9DcU2v9u7xwmSqlCyB
```
Extract the playlist id from the query parameter of the URL. here, it's in the 'list='.
After that, run below command from terminal adding the ID as argument.

```console
(venv)your_pc$ python main.py -ID PLDfKAXSi6kUau7d9DcU2v9u7xwmSqlCyB
```

### Project Organization

    ├── README.md          <- The top-level README for developers using this project.
    │
    ├── download           <- Directory for downloaded mp3 files
    │
    ├── req.txt            <- The requirements file for python environment
    │
    │── .gitignore         <- you know what this is :P
    │
    ├── main.py            <- contains the python script

------ 



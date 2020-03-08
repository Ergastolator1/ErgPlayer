# ErgPlayer

Welcome to the project's page of ErgPlayer, a HTML5 player that can play MP3 and HLS streams without a problem!

## Libraries used for this project
This project uses these JS libraries to work correctly:
* hls.js (for HLS streams; without it it won't work properly);
* jQuery (for some things).

## Demos
You can find some demos in the `demos/` folder of this project. If you want to use one of those as a starting point just copy the relative HTML file to the root folder of this project, remove the precedent `index.html` file, rename the file you copied to `index.html` and remove any `../` reference on the file.

## How to use
Just download the repository, extract it in the "ErgPlayer" folder of your webroot and edit the `index.html` file. After that, if you want to use a local MP3 file, replace `yourmediafile.mp3` with your media file name, and `audio/mp3` with your media type (optional).

If you want to use a MP3 stream put `class="withMP3Stream"` before ending the audio starting tag. This prevents using the duration slider while playing a MP3 stream, making it so that it won't break the stream if you use it.

Instead, if you want to use a HLS stream, remove the source tag, then put these contents inside the audio tag:
```
class="withHLS" data-streamurl="yourstreamurl"
```
where `yourstreamurl` can be replaced with the URL of your HLS stream.

## Supported audio tag attributes
`autoplay`, `loop`, `preload`, `muted` and `src` (`src` should only be used if there is no `source` tag present inside the `audio` tag) are the supported audio tag attributes for this project. **DO NOT USE `controls`, OTHERWISE THE PROJECT'S CODE WILL BREAK!**

## How to integrate it in your pages
ErgPlayer supports iframe as integration type. You can add an iframe pointing to `/ErgPlayer/index.html` with this code on a part of your pages:
```html
<iframe src="/ErgPlayer/index.html" style="width:308px;height:20px;border:0" allow="autoplay; encrypted-media"></iframe>
```
et voilà! The integration is done!
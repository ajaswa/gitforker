# GitForker

Using images for "Fork me on GitHub" is lame.

![image](gitforker.png)


## Use

    <script id='gitforker' src='gitforker.min.js?url=https://github.com/ajaswa/gitforker'></script>

### Options

  - `url` -
    Full url of your GitHub Repo.
    Required.
  - `orientation` -
    Places the banner on the left or right of the screen.
    Default: `left`
  - `bg` -
    Background color of the banner.
    Deafult: `#121520`
  - `fg` -
    Foreground color of the banner.
    Deafult: `#eeeeee`


## Rationale

I always thought that using images for some things was kinda silly. The "Fork me on GitHub" ribbon seemed like a great canididate for using pure CSS with a lighter footprint.

Grabing the "black" ribbon from the [GitHub ribbons page](https://github.com/blog/273-github-ribbons), the image is 7,327 bytes (when it's run though [ImageOptim](https://imageoptim.com/) it's 4,665 bytes (compress all the images!)). By comparison gitforker.js uncompressed is 2,188 bytes, nearly 2 and a half kilobytes smaller. Compressed it is 996 bytes! Over 3.5kb smaller than the compressed image! And there is room for improvement in file size.

The one big draw back to GitForker is that the font used isn't the same as the GitHub Ribbons, they use [Collegiate](http://www.fontriver.com/font/collegiate/) and GitForker uses `font-family: Geneva, sans-serif;`. This also means you can easilly customize GitForker to suit your project. Including the Collegiate font for a few words would not be good for the payload.

Mostly though this was an experiment to see if I could do it with a single line in HTML, use CSS for all the styles and be smaller than the competition.

# GITFORKER

Using images for "Fork me on GitHub" is lame.

![image](gitforker.png)


## Use

    <script id="gitforker" src='gitforker.min.js?url=https://github.com/ajaswa/gitforker'></script>

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

Grabing the "black" ribbon from the [GitHub ribbons page](https://github.com/blog/273-github-ribbons), the image is 7,327 bytes (when it's run though [ImageOptim](https://imageoptim.com/) it's 4,665 bytes (compress all the images!)). By comparison gitforker.js uncompressed is 2,741 bytes, nearly a full kilobyte smaller. Compressed it is 1,383 bytes. 3.2kb smaller than the compressed image! And there is lots of room for improvement in file size.

Mostly though this was an experiment to see if I could do it and it be smaller than the competition.

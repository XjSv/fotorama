var $WINDOW = $(window),
    $DOCUMENT = $(document),
    $HTML,
    $BODY,

    TOUCH = Modernizr.touch,
    QUIRKS_FORCE = document.location.hash.replace('#', '') === 'quirks',
    CSSTR = Modernizr.csstransforms3d && Modernizr.csstransitions && !QUIRKS_FORCE,
    FULLSCREEN = fullScreenApi.ok,

    TOUCH_TIMEOUT = 300,
    TRANSITION_DURATION = 333,
    SPINNER_COLOR = '#777',
    AUTOPLAY_INTERVAL = 5000,
    MARGIN = 2,
    THUMB_SIZE = 64,

    // Размеры на тот случай, если пользователь не укажет и брать не откуда
    WIDTH = 500,
    HEIGHT = 333,

    BEZIER = bez([.1, 0, .25, 1]),

    X = '{{X}}',
    VIDEO_IFRAME = '<div class="fotorama__video"><iframe src="' + X +'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>',
    VIDEO_IFRAME_SRC = {
      vimeo: 'http://player.vimeo.com/video/' + X +'?autoplay=1&amp;badge=0',
      youtube: 'http://www.youtube.com/embed/' + X +'?autoplay=1',
      custom: X
    };
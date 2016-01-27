/* eslint-disable no-console */
const express = require('express');
const osaSpotify = require('osa-spotify');
const nodeSpotifyWebHelper = require('node-spotify-webhelper');
const spotify = require('spotify-node-applescript');
const spotifyWebHelper = new nodeSpotifyWebHelper.SpotifyWebHelper();

const router = express();

// middleware to use for all requests
router.use((req, res, next) => {
    // do logging
    // if needed
    next(); // make sure we go to the next routes and don't stop here
});

const getCurrentSong = (res) => {
    spotifyWebHelper.getStatus((err, jsonBlob) => {
        if (err) {
            return res.json({ error: 'Could not get the current song.' });
        }

        return res.json(jsonBlob);
    });
};

router.route('/playing')

    /**
     * @api {get} /playing Request current song
     * @apiName GetSong
     * @apiGroup Song
     *
     * @apiSuccess {Boolean} playing Song is playing or not.
     * @apiSuccess {Object} track Object containing track resource, artist resource, album resource (cf example)
     * @apiSuccess {Integer} volume Current volume (0<=x<=1)
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *           "version": 9,
     *           "client_version": "",
     *           "playing": true,
     *           "shuffle": true,
     *           "repeat": false,
     *           "play_enabled": true,
     *           "prev_enabled": true,
     *           "next_enabled": true,
     *           "track": {
     *               "track_resource": {
     *                   "name": "Live At Lowlands - Continuous Mix",
     *                   "uri": "spotify:track:5PwC9QBTcXjsiutp2BISkg",
     *                   "location": {
     *                       "og": "https://open.spotify.com/track/5PwC9QBTcXjsiutp2BISkg"
     *                   }
     *               },
     *               "artist_resource": {
     *                   "name": "Dr. Lektroluv",
     *                   "uri": "spotify:artist:71zryDK7t1BUFnqbOpSqxa",
     *                   "location": {
     *                       "og": "https://open.spotify.com/artist/71zryDK7t1BUFnqbOpSqxa"
     *                   }
     *               },
     *               "album_resource": {
     *                  "name": "Live At Lowlands",
     *                   "uri": "spotify:album:3FOllYiUU9ZM284tHCMEEY",
     *                   "location": {
     *                       "og": "https://open.spotify.com/album/3FOllYiUU9ZM284tHCMEEY"
     *                   }
     *               },
     *               "length": 4318,
     *               "track_type": "normal"
     *           },
     *           "context": {},
     *           "playing_position": 326.088,
     *           "server_time": 1453429948,
     *           "volume": 1,
     *           "online": true,
     *           "open_graph_state": {
     *               "private_session": false,
     *               "posting_disabled": true
     *           },
     *           "running": true
     *       }
     *
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200
     *     {
     *         error: 'Could not get the current song.'
     *     }
     */
    .get((req, res) => {
        return getCurrentSong(res);
    })

    /**
     * @api {post} /playing Play previous or next song
     * @apiName NextBackSong
     * @apiGroup Song
     *
     * @apiParam {String} [action]  Can be "next" or "back" depending on what you want to be :)
     *
     * @apiSuccess {Boolean} playing Song is playing or not.
     * @apiSuccess {Object} track Object containing track resource, artist resource, album resource (cf example)
     * @apiSuccess {Integer} volume Current volume (0<=x<=1)
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *           "version": 9,
     *           "client_version": "",
     *           "playing": true,
     *           "shuffle": true,
     *           "repeat": false,
     *           "play_enabled": true,
     *           "prev_enabled": true,
     *           "next_enabled": true,
     *           "track": {
     *               "track_resource": {
     *                   "name": "Live At Lowlands - Continuous Mix",
     *                   "uri": "spotify:track:5PwC9QBTcXjsiutp2BISkg",
     *                   "location": {
     *                       "og": "https://open.spotify.com/track/5PwC9QBTcXjsiutp2BISkg"
     *                   }
     *               },
     *               "artist_resource": {
     *                   "name": "Dr. Lektroluv",
     *                   "uri": "spotify:artist:71zryDK7t1BUFnqbOpSqxa",
     *                   "location": {
     *                       "og": "https://open.spotify.com/artist/71zryDK7t1BUFnqbOpSqxa"
     *                   }
     *               },
     *               "album_resource": {
     *                  "name": "Live At Lowlands",
     *                   "uri": "spotify:album:3FOllYiUU9ZM284tHCMEEY",
     *                   "location": {
     *                       "og": "https://open.spotify.com/album/3FOllYiUU9ZM284tHCMEEY"
     *                   }
     *               },
     *               "length": 4318,
     *               "track_type": "normal"
     *           },
     *           "context": {},
     *           "playing_position": 326.088,
     *           "server_time": 1453429948,
     *           "volume": 1,
     *           "online": true,
     *           "open_graph_state": {
     *               "private_session": false,
     *               "posting_disabled": true
     *           },
     *           "running": true
     *       }
     *
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200
     *     {
     *         error: 'Valid actions are only "back" and "next".'
     *     }
     */
    .post((req, res) => {
        const errorMsg = 'Valid actions are only "back" and "next".';
        const body = req.body;
        if (!body) {
            return res.json({ error: errorMsg });
        }

        if (body.action === 'back') {
            osaSpotify.back().then(() => {
                return getCurrentSong(res);
            });
        } else if (body.action === 'next') {
            osaSpotify.next().then(() => {
                return getCurrentSong(res);
            });
        } else {
            return res.json({ error: errorMsg });
        }
    })

    /**
     * @api {put} /playing Play or pause the current song
     * @apiName PlayPauseSong
     * @apiGroup Song
     *
     * @apiSuccess {Boolean} playing Song is playing or not.
     * @apiSuccess {Object} track Object containing track resource, artist resource, album resource (cf example)
     * @apiSuccess {Integer} volume Current volume (0<=x<=1)
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *           "version": 9,
     *           "client_version": "",
     *           "playing": true,
     *           "shuffle": true,
     *           "repeat": false,
     *           "play_enabled": true,
     *           "prev_enabled": true,
     *           "next_enabled": true,
     *           "track": {
     *               "track_resource": {
     *                   "name": "Live At Lowlands - Continuous Mix",
     *                   "uri": "spotify:track:5PwC9QBTcXjsiutp2BISkg",
     *                   "location": {
     *                       "og": "https://open.spotify.com/track/5PwC9QBTcXjsiutp2BISkg"
     *                   }
     *               },
     *               "artist_resource": {
     *                   "name": "Dr. Lektroluv",
     *                   "uri": "spotify:artist:71zryDK7t1BUFnqbOpSqxa",
     *                   "location": {
     *                       "og": "https://open.spotify.com/artist/71zryDK7t1BUFnqbOpSqxa"
     *                   }
     *               },
     *               "album_resource": {
     *                  "name": "Live At Lowlands",
     *                   "uri": "spotify:album:3FOllYiUU9ZM284tHCMEEY",
     *                   "location": {
     *                       "og": "https://open.spotify.com/album/3FOllYiUU9ZM284tHCMEEY"
     *                   }
     *               },
     *               "length": 4318,
     *               "track_type": "normal"
     *           },
     *           "context": {},
     *           "playing_position": 326.088,
     *           "server_time": 1453429948,
     *           "volume": 1,
     *           "online": true,
     *           "open_graph_state": {
     *               "private_session": false,
     *               "posting_disabled": true
     *           },
     *           "running": true
     *       }
     *
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200
     *     {
     *         error: 'Valid actions are only "back" and "next".'
     *     }
     */
    .put((req, res) => {
        osaSpotify.toggle().then(() => {
            return getCurrentSong(res);
        });
    });

router.route('/volume')

    /**
     * @api {post} /volume Mute or unmute song
     * @apiName MuteUnmuteVolume
     * @apiGroup Volume
     *
     * @apiParam {String} [action]  Can be "mute" or "unmute" depending on what you want to be :)
     *
     * @apiSuccess {Boolean} isMuted Is the volume muted or not.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *           "isMuted": true
     *       }
     *
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 OK
     *     {
     *         error: 'Valid actions are only "mute" and "unmute".'
     *     }
     */
    .post((req, res) => {
        const errorMsg = 'Valid action are only "mute" and "unmute".';
        const body = req.body;
        if (!body) {
            return res.json({ error: errorMsg });
        }

        if (body.action === 'mute') {
            spotify.muteVolume(() => {
                return res.json({ isMuted: true });
            });
        } else if (body.action === 'unmute') {
            spotify.unmuteVolume(() => {
                return res.json({ isMuted: false });
            });
        } else {
            return res.json({ error: errorMsg });
        }
    })

    /**
     * @api {put} /volume Change the volume
     * @apiName ChangeVolume
     * @apiGroup Volume
     *
     * @apiParam {String} [volume]  Integer 0<=x<=100
     *
     * @apiSuccess {Boolean} playing Song is playing or not.
     * @apiSuccess {Object} track Object containing track resource, artist resource, album resource (cf example)
     * @apiSuccess {Integer} volume Current volume (0<=x<=1)
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *           "version": 9,
     *           "client_version": "",
     *           "playing": true,
     *           "shuffle": true,
     *           "repeat": false,
     *           "play_enabled": true,
     *           "prev_enabled": true,
     *           "next_enabled": true,
     *           "track": {
     *               "track_resource": {
     *                   "name": "Live At Lowlands - Continuous Mix",
     *                   "uri": "spotify:track:5PwC9QBTcXjsiutp2BISkg",
     *                   "location": {
     *                       "og": "https://open.spotify.com/track/5PwC9QBTcXjsiutp2BISkg"
     *                   }
     *               },
     *               "artist_resource": {
     *                   "name": "Dr. Lektroluv",
     *                   "uri": "spotify:artist:71zryDK7t1BUFnqbOpSqxa",
     *                   "location": {
     *                       "og": "https://open.spotify.com/artist/71zryDK7t1BUFnqbOpSqxa"
     *                   }
     *               },
     *               "album_resource": {
     *                  "name": "Live At Lowlands",
     *                   "uri": "spotify:album:3FOllYiUU9ZM284tHCMEEY",
     *                   "location": {
     *                       "og": "https://open.spotify.com/album/3FOllYiUU9ZM284tHCMEEY"
     *                   }
     *               },
     *               "length": 4318,
     *               "track_type": "normal"
     *           },
     *           "context": {},
     *           "playing_position": 326.088,
     *           "server_time": 1453429948,
     *           "volume": 1,
     *           "online": true,
     *           "open_graph_state": {
     *               "private_session": false,
     *               "posting_disabled": true
     *           },
     *           "running": true
     *       }
     *
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 OK
     *     {
     *         error: 'Valid action is only volume and must be integer value (0<=X<=100)'
     *     }
     */
    .put((req, res) => {
        const errorMsg = 'Valid action is only volume and must be integer value (0<=X<=100)';
        const body = req.body;
        if (!body) {
            return res.json({ error: errorMsg });
        }

        if (typeof body.volume === 'number' && body.volume >= 0 && body.volume <= 100) {
            spotify.setVolume(body.volume, () => {
                return res.json({ value: body.volume });
            });
        } else {
            return res.json({ error: errorMsg });
        }
    });

module.exports = router;
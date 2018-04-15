/* eslint-disable no-console */
const express = require('express');
const SpotifyWebHelper = require('spotify-web-helper');
const spotify = require('spotify-node-applescript');

const spotifyWebHelper = new SpotifyWebHelper();

const router = express();

// middleware to use for all requests
router.use((req, res, next) => {
    // do logging
    // if needed
    next(); // make sure we go to the next routes and don't stop here
});

router
    .route('/ping')
    /**
     * @api {get} /ping Ping the API
     * @apiName Ping
     * @apiGroup API
     *
     * @apiSuccess {String} status API returns OK. Used by browser extension to check that the server URL is correct.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *           "status": "ok"
     *     }
     *
     **/
    .get((req, res) => res.json({ status: 'ok' }));

const getCurrentSong = res => {
    spotify.isRunning((err, isRunning) => {
        if (!isRunning)
            return res.json({ error: 'Looks like Spotify is not running.' });
    });
    spotifyWebHelper
        .getStatus()
        .then(dataRes => {
            if (!dataRes || !dataRes.track)
                return res.json({ error: 'Could not get the current song.' });
            return res.json(dataRes);
        })
        .catch(() => res.json({ error: 'Could not get the current song.' }));
};

/**
 * @api {post} /play Play the given song / playlist
 * @apiName PlaySong
 * @apiGroup Song
 *
 * @apiParam {String} [url]  Song/Playlist Spotify URL
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
router.route('/play').post((req, res) => {
    const { body } = req;
    return spotifyWebHelper.player
        .play(body.url)
        .then(() => getCurrentSong(res))
        .catch(() =>
            res.json({
                error: 'Something went wrong while trying to play the track.',
            }),
        );
});

router
    .route('/playing')

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
    .get((req, res) => getCurrentSong(res))

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

        const { body } = req;
        if (body.action === 'back') {
            return spotify.previous(() => getCurrentSong(res));
        }

        if (body.action === 'next') {
            return spotify.next(() => getCurrentSong(res));
        }

        return res.json({ error: errorMsg });
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
    .put((req, res) => spotify.playPause(() => getCurrentSong(res)));

router
    .route('/volume')

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

        if (body.action === 'mute') {
            return spotify.muteVolume(() => res.json({ isMuted: true }));
        }
        if (body.action === 'unmute') {
            return spotify.unmuteVolume(() => res.json({ isMuted: false }));
        }

        return res.json({ error: errorMsg });
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
        const errorMsg =
            'Valid action is only volume and must be integer value (0<=X<=100)';
        const body = req.body;

        if (
            typeof body.volume === 'number' &&
            body.volume >= 0 &&
            body.volume <= 100
        ) {
            return spotify.setVolume(body.volume, () =>
                res.json({ value: body.volume }),
            );
        }

        return res.json({ error: errorMsg });
    });

module.exports = router;

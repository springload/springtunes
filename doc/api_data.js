define({
    api: [
        {
            type: 'get',
            url: '/ping',
            title: 'Ping the API',
            name: 'Ping',
            group: 'API',
            success: {
                fields: {
                    'Success 200': [
                        {
                            group: 'Success 200',
                            type: 'String',
                            optional: false,
                            field: 'status',
                            description:
                                '<p>API returns OK. Used by browser extension to check that the server URL is correct.</p>',
                        },
                    ],
                },
                examples: [
                    {
                        title: 'Success-Response:',
                        content: 'HTTP/1.1 200 OK\n{\n      "status": "ok"\n}',
                        type: 'json',
                    },
                ],
            },
            version: '0.0.0',
            filename: 'server/routes.js',
            groupTitle: 'API',
        },
        {
            type: 'get',
            url: '/playing',
            title: 'Request current song',
            name: 'GetSong',
            group: 'Song',
            success: {
                fields: {
                    'Success 200': [
                        {
                            group: 'Success 200',
                            type: 'Boolean',
                            optional: false,
                            field: 'playing',
                            description: '<p>Song is playing or not.</p>',
                        },
                        {
                            group: 'Success 200',
                            type: 'Object',
                            optional: false,
                            field: 'track',
                            description:
                                '<p>Object containing track resource, artist resource, album resource (cf example)</p>',
                        },
                        {
                            group: 'Success 200',
                            type: 'Integer',
                            optional: false,
                            field: 'volume',
                            description:
                                '<p>Current volume (0&lt;=x&lt;=1)</p>',
                        },
                    ],
                },
                examples: [
                    {
                        title: 'Success-Response:',
                        content:
                            'HTTP/1.1 200 OK\n{\n      "version": 9,\n      "client_version": "",\n      "playing": true,\n      "shuffle": true,\n      "repeat": false,\n      "play_enabled": true,\n      "prev_enabled": true,\n      "next_enabled": true,\n      "track": {\n          "track_resource": {\n              "name": "Live At Lowlands - Continuous Mix",\n              "uri": "spotify:track:5PwC9QBTcXjsiutp2BISkg",\n              "location": {\n                  "og": "https://open.spotify.com/track/5PwC9QBTcXjsiutp2BISkg"\n              }\n          },\n          "artist_resource": {\n              "name": "Dr. Lektroluv",\n              "uri": "spotify:artist:71zryDK7t1BUFnqbOpSqxa",\n              "location": {\n                  "og": "https://open.spotify.com/artist/71zryDK7t1BUFnqbOpSqxa"\n              }\n          },\n          "album_resource": {\n             "name": "Live At Lowlands",\n              "uri": "spotify:album:3FOllYiUU9ZM284tHCMEEY",\n              "location": {\n                  "og": "https://open.spotify.com/album/3FOllYiUU9ZM284tHCMEEY"\n              }\n          },\n          "length": 4318,\n          "track_type": "normal"\n      },\n      "context": {},\n      "playing_position": 326.088,\n      "server_time": 1453429948,\n      "volume": 1,\n      "online": true,\n      "open_graph_state": {\n          "private_session": false,\n          "posting_disabled": true\n      },\n      "running": true\n  }',
                        type: 'json',
                    },
                ],
            },
            error: {
                examples: [
                    {
                        title: 'Error-Response:',
                        content:
                            "HTTP/1.1 200\n{\n    error: 'Could not get the current song.'\n}",
                        type: 'json',
                    },
                ],
            },
            version: '0.0.0',
            filename: 'server/routes.js',
            groupTitle: 'Song',
        },
        {
            type: 'post',
            url: '/playing',
            title: 'Play previous or next song',
            name: 'NextBackSong',
            group: 'Song',
            parameter: {
                fields: {
                    Parameter: [
                        {
                            group: 'Parameter',
                            type: 'String',
                            optional: true,
                            field: 'action',
                            description:
                                '<p>Can be &quot;next&quot; or &quot;back&quot; depending on what you want to be :)</p>',
                        },
                    ],
                },
            },
            success: {
                fields: {
                    'Success 200': [
                        {
                            group: 'Success 200',
                            type: 'Boolean',
                            optional: false,
                            field: 'playing',
                            description: '<p>Song is playing or not.</p>',
                        },
                        {
                            group: 'Success 200',
                            type: 'Object',
                            optional: false,
                            field: 'track',
                            description:
                                '<p>Object containing track resource, artist resource, album resource (cf example)</p>',
                        },
                        {
                            group: 'Success 200',
                            type: 'Integer',
                            optional: false,
                            field: 'volume',
                            description:
                                '<p>Current volume (0&lt;=x&lt;=1)</p>',
                        },
                    ],
                },
                examples: [
                    {
                        title: 'Success-Response:',
                        content:
                            'HTTP/1.1 200 OK\n{\n      "version": 9,\n      "client_version": "",\n      "playing": true,\n      "shuffle": true,\n      "repeat": false,\n      "play_enabled": true,\n      "prev_enabled": true,\n      "next_enabled": true,\n      "track": {\n          "track_resource": {\n              "name": "Live At Lowlands - Continuous Mix",\n              "uri": "spotify:track:5PwC9QBTcXjsiutp2BISkg",\n              "location": {\n                  "og": "https://open.spotify.com/track/5PwC9QBTcXjsiutp2BISkg"\n              }\n          },\n          "artist_resource": {\n              "name": "Dr. Lektroluv",\n              "uri": "spotify:artist:71zryDK7t1BUFnqbOpSqxa",\n              "location": {\n                  "og": "https://open.spotify.com/artist/71zryDK7t1BUFnqbOpSqxa"\n              }\n          },\n          "album_resource": {\n             "name": "Live At Lowlands",\n              "uri": "spotify:album:3FOllYiUU9ZM284tHCMEEY",\n              "location": {\n                  "og": "https://open.spotify.com/album/3FOllYiUU9ZM284tHCMEEY"\n              }\n          },\n          "length": 4318,\n          "track_type": "normal"\n      },\n      "context": {},\n      "playing_position": 326.088,\n      "server_time": 1453429948,\n      "volume": 1,\n      "online": true,\n      "open_graph_state": {\n          "private_session": false,\n          "posting_disabled": true\n      },\n      "running": true\n  }',
                        type: 'json',
                    },
                ],
            },
            error: {
                examples: [
                    {
                        title: 'Error-Response:',
                        content:
                            'HTTP/1.1 200\n{\n    error: \'Valid actions are only "back" and "next".\'\n}',
                        type: 'json',
                    },
                ],
            },
            version: '0.0.0',
            filename: 'server/routes.js',
            groupTitle: 'Song',
        },
        {
            type: 'put',
            url: '/playing',
            title: 'Play or pause the current song',
            name: 'PlayPauseSong',
            group: 'Song',
            success: {
                fields: {
                    'Success 200': [
                        {
                            group: 'Success 200',
                            type: 'Boolean',
                            optional: false,
                            field: 'playing',
                            description: '<p>Song is playing or not.</p>',
                        },
                        {
                            group: 'Success 200',
                            type: 'Object',
                            optional: false,
                            field: 'track',
                            description:
                                '<p>Object containing track resource, artist resource, album resource (cf example)</p>',
                        },
                        {
                            group: 'Success 200',
                            type: 'Integer',
                            optional: false,
                            field: 'volume',
                            description:
                                '<p>Current volume (0&lt;=x&lt;=1)</p>',
                        },
                    ],
                },
                examples: [
                    {
                        title: 'Success-Response:',
                        content:
                            'HTTP/1.1 200 OK\n{\n      "version": 9,\n      "client_version": "",\n      "playing": true,\n      "shuffle": true,\n      "repeat": false,\n      "play_enabled": true,\n      "prev_enabled": true,\n      "next_enabled": true,\n      "track": {\n          "track_resource": {\n              "name": "Live At Lowlands - Continuous Mix",\n              "uri": "spotify:track:5PwC9QBTcXjsiutp2BISkg",\n              "location": {\n                  "og": "https://open.spotify.com/track/5PwC9QBTcXjsiutp2BISkg"\n              }\n          },\n          "artist_resource": {\n              "name": "Dr. Lektroluv",\n              "uri": "spotify:artist:71zryDK7t1BUFnqbOpSqxa",\n              "location": {\n                  "og": "https://open.spotify.com/artist/71zryDK7t1BUFnqbOpSqxa"\n              }\n          },\n          "album_resource": {\n             "name": "Live At Lowlands",\n              "uri": "spotify:album:3FOllYiUU9ZM284tHCMEEY",\n              "location": {\n                  "og": "https://open.spotify.com/album/3FOllYiUU9ZM284tHCMEEY"\n              }\n          },\n          "length": 4318,\n          "track_type": "normal"\n      },\n      "context": {},\n      "playing_position": 326.088,\n      "server_time": 1453429948,\n      "volume": 1,\n      "online": true,\n      "open_graph_state": {\n          "private_session": false,\n          "posting_disabled": true\n      },\n      "running": true\n  }',
                        type: 'json',
                    },
                ],
            },
            error: {
                examples: [
                    {
                        title: 'Error-Response:',
                        content:
                            'HTTP/1.1 200\n{\n    error: \'Valid actions are only "back" and "next".\'\n}',
                        type: 'json',
                    },
                ],
            },
            version: '0.0.0',
            filename: 'server/routes.js',
            groupTitle: 'Song',
        },
        {
            type: 'post',
            url: '/play',
            title: 'Play the given song / playlist',
            name: 'PlaySong',
            group: 'Song',
            parameter: {
                fields: {
                    Parameter: [
                        {
                            group: 'Parameter',
                            type: 'String',
                            optional: true,
                            field: 'url',
                            description: '<p>Song/Playlist Spotify URL</p>',
                        },
                    ],
                },
            },
            success: {
                fields: {
                    'Success 200': [
                        {
                            group: 'Success 200',
                            type: 'Boolean',
                            optional: false,
                            field: 'playing',
                            description: '<p>Song is playing or not.</p>',
                        },
                        {
                            group: 'Success 200',
                            type: 'Object',
                            optional: false,
                            field: 'track',
                            description:
                                '<p>Object containing track resource, artist resource, album resource (cf example)</p>',
                        },
                        {
                            group: 'Success 200',
                            type: 'Integer',
                            optional: false,
                            field: 'volume',
                            description:
                                '<p>Current volume (0&lt;=x&lt;=1)</p>',
                        },
                    ],
                },
                examples: [
                    {
                        title: 'Success-Response:',
                        content:
                            'HTTP/1.1 200 OK\n{\n      "version": 9,\n      "client_version": "",\n      "playing": true,\n      "shuffle": true,\n      "repeat": false,\n      "play_enabled": true,\n      "prev_enabled": true,\n      "next_enabled": true,\n      "track": {\n          "track_resource": {\n              "name": "Live At Lowlands - Continuous Mix",\n              "uri": "spotify:track:5PwC9QBTcXjsiutp2BISkg",\n              "location": {\n                  "og": "https://open.spotify.com/track/5PwC9QBTcXjsiutp2BISkg"\n              }\n          },\n          "artist_resource": {\n              "name": "Dr. Lektroluv",\n              "uri": "spotify:artist:71zryDK7t1BUFnqbOpSqxa",\n              "location": {\n                  "og": "https://open.spotify.com/artist/71zryDK7t1BUFnqbOpSqxa"\n              }\n          },\n          "album_resource": {\n             "name": "Live At Lowlands",\n              "uri": "spotify:album:3FOllYiUU9ZM284tHCMEEY",\n              "location": {\n                  "og": "https://open.spotify.com/album/3FOllYiUU9ZM284tHCMEEY"\n              }\n          },\n          "length": 4318,\n          "track_type": "normal"\n      },\n      "context": {},\n      "playing_position": 326.088,\n      "server_time": 1453429948,\n      "volume": 1,\n      "online": true,\n      "open_graph_state": {\n          "private_session": false,\n          "posting_disabled": true\n      },\n      "running": true\n  }',
                        type: 'json',
                    },
                ],
            },
            error: {
                examples: [
                    {
                        title: 'Error-Response:',
                        content:
                            'HTTP/1.1 200\n{\n    error: \'Valid actions are only "back" and "next".\'\n}',
                        type: 'json',
                    },
                ],
            },
            version: '0.0.0',
            filename: 'server/routes.js',
            groupTitle: 'Song',
        },
        {
            type: 'put',
            url: '/volume',
            title: 'Change the volume',
            name: 'ChangeVolume',
            group: 'Volume',
            parameter: {
                fields: {
                    Parameter: [
                        {
                            group: 'Parameter',
                            type: 'String',
                            optional: true,
                            field: 'volume',
                            description: '<p>Integer 0&lt;=x&lt;=100</p>',
                        },
                    ],
                },
            },
            success: {
                fields: {
                    'Success 200': [
                        {
                            group: 'Success 200',
                            type: 'Boolean',
                            optional: false,
                            field: 'playing',
                            description: '<p>Song is playing or not.</p>',
                        },
                        {
                            group: 'Success 200',
                            type: 'Object',
                            optional: false,
                            field: 'track',
                            description:
                                '<p>Object containing track resource, artist resource, album resource (cf example)</p>',
                        },
                        {
                            group: 'Success 200',
                            type: 'Integer',
                            optional: false,
                            field: 'volume',
                            description:
                                '<p>Current volume (0&lt;=x&lt;=1)</p>',
                        },
                    ],
                },
                examples: [
                    {
                        title: 'Success-Response:',
                        content:
                            'HTTP/1.1 200 OK\n{\n      "version": 9,\n      "client_version": "",\n      "playing": true,\n      "shuffle": true,\n      "repeat": false,\n      "play_enabled": true,\n      "prev_enabled": true,\n      "next_enabled": true,\n      "track": {\n          "track_resource": {\n              "name": "Live At Lowlands - Continuous Mix",\n              "uri": "spotify:track:5PwC9QBTcXjsiutp2BISkg",\n              "location": {\n                  "og": "https://open.spotify.com/track/5PwC9QBTcXjsiutp2BISkg"\n              }\n          },\n          "artist_resource": {\n              "name": "Dr. Lektroluv",\n              "uri": "spotify:artist:71zryDK7t1BUFnqbOpSqxa",\n              "location": {\n                  "og": "https://open.spotify.com/artist/71zryDK7t1BUFnqbOpSqxa"\n              }\n          },\n          "album_resource": {\n             "name": "Live At Lowlands",\n              "uri": "spotify:album:3FOllYiUU9ZM284tHCMEEY",\n              "location": {\n                  "og": "https://open.spotify.com/album/3FOllYiUU9ZM284tHCMEEY"\n              }\n          },\n          "length": 4318,\n          "track_type": "normal"\n      },\n      "context": {},\n      "playing_position": 326.088,\n      "server_time": 1453429948,\n      "volume": 1,\n      "online": true,\n      "open_graph_state": {\n          "private_session": false,\n          "posting_disabled": true\n      },\n      "running": true\n  }',
                        type: 'json',
                    },
                ],
            },
            error: {
                examples: [
                    {
                        title: 'Error-Response:',
                        content:
                            "HTTP/1.1 200 OK\n{\n    error: 'Valid action is only volume and must be integer value (0<=X<=100)'\n}",
                        type: 'json',
                    },
                ],
            },
            version: '0.0.0',
            filename: 'server/routes.js',
            groupTitle: 'Volume',
        },
        {
            type: 'post',
            url: '/volume',
            title: 'Mute or unmute song',
            name: 'MuteUnmuteVolume',
            group: 'Volume',
            parameter: {
                fields: {
                    Parameter: [
                        {
                            group: 'Parameter',
                            type: 'String',
                            optional: true,
                            field: 'action',
                            description:
                                '<p>Can be &quot;mute&quot; or &quot;unmute&quot; depending on what you want to be :)</p>',
                        },
                    ],
                },
            },
            success: {
                fields: {
                    'Success 200': [
                        {
                            group: 'Success 200',
                            type: 'Boolean',
                            optional: false,
                            field: 'isMuted',
                            description: '<p>Is the volume muted or not.</p>',
                        },
                    ],
                },
                examples: [
                    {
                        title: 'Success-Response:',
                        content:
                            'HTTP/1.1 200 OK\n{\n      "isMuted": true\n  }',
                        type: 'json',
                    },
                ],
            },
            error: {
                examples: [
                    {
                        title: 'Error-Response:',
                        content:
                            'HTTP/1.1 200 OK\n{\n    error: \'Valid actions are only "mute" and "unmute".\'\n}',
                        type: 'json',
                    },
                ],
            },
            version: '0.0.0',
            filename: 'server/routes.js',
            groupTitle: 'Volume',
        },
    ],
});

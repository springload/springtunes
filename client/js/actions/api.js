import fetch from 'isomorphic-fetch';

const api = {};

api.fetchSong = () => fetch('/api/playing');

api.togglePause = () =>
    fetch('/api/playing', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });

api.next = () =>
    fetch('/api/playing', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'next' }),
    });

api.back = () =>
    fetch('/api/playing', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'back' }),
    });

api.mute = () =>
    fetch('/api/volume', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'mute' }),
    });

api.unmute = () =>
    fetch('/api/volume', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'unmute' }),
    });

api.changeVolume = volumeValue =>
    fetch('/api/volume', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ volume: volumeValue }),
    });

api.playURL = urlString =>
    fetch('/api/play', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: urlString }),
    });

export default api;

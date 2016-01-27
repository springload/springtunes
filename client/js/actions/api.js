import fetch from 'isomorphic-fetch';

const api = {};

api.fetchSong = () => {
    return fetch('/api/playing');
};

api.togglePause = () => {
    return fetch('/api/playing', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });
};

api.next = () => {
    return fetch('/api/playing', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'next' }),
    });
};

api.back = () => {
    return fetch('/api/playing', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'back' }),
    });
};

api.mute = () => {
    return fetch('/api/volume', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'mute' }),
    });
};

api.unmute = () => {
    return fetch('/api/volume', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'unmute' }),
    });
};

api.changeVolume = (volumeValue) => {
    return fetch('/api/volume', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ volume: volumeValue }),
    });
};

export default api;

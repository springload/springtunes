export const shouldFetchSong = (song) => {
    if (Object.keys(song.current).length === 0) return true;
    if (song.isFetching) return false;
    return true;
};

export const shouldModifyMute = (volume, calledBy) => {
    if (volume.isModifyingMute) return false;
    if (calledBy === 'mute') {
        if (volume.isMuted === true) return false;
    } else {
        if (volume.isMuted === false) return false;
    }

    return true;
};

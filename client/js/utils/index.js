export const shouldFetchSong = (state) => {
    const song = state.song;
    if (Object.keys(song.current).length === 0) return true;
    if (song.isFetching) return false;
    return true;
};

export const shouldModifyMute = (state, calledBy) => {
    const volume = state.volume;
    if (volume.isModifyingMute) return false;
    if (calledBy === 'mute') {
        if (volume.isMuted === true) return false;
    } else {
        if (volume.isMuted === false) return false;
    }

    return true;
};

import React, { PropTypes } from 'react';
import Processing from '../components/Processing';
import Icon from '../components/Icon';

const propTypes = {
    isFetching: PropTypes.bool.isRequired,
    currentSong: PropTypes.object.isRequired,
    hasError: PropTypes.bool,
    error: PropTypes.string,
};

const CurrentSong = ({ currentSong, isFetching, hasError, error }) => (
    <div className="current-song">
        <div className="song-details">
            <div className="song-details__graphic">
                <Icon name="fa-headphones" iconType="big" />
            </div>
            <div className="song-details__content">
                <div className="twelve columns">
                    { !isFetching &&
                        <div>
                            <h2>
                                <a
                                    href={ currentSong.link_track }
                                    target="_blank"
                                    title={ `View track: ${currentSong.title}` }
                                >
                                    { currentSong.title }
                                </a>
                            </h2>
                            <h3>
                                <a
                                    href={ currentSong.link_artist }
                                    target="_blank"
                                    title={ `View Artist: ${currentSong.artist}` }
                                >
                                    { currentSong.artist }
                                </a>
                            </h3>
                            <h3>
                                <a
                                    href={ currentSong.link_album }
                                    target="_blank"
                                    className="color-text-cement"
                                    title={ `View Album: ${currentSong.album}` }
                                >
                                    { currentSong.album }
                                </a>
                            </h3>
                        </div>
                    }
                    { isFetching &&
                        <Processing />
                    }
                    { !isFetching && hasError &&
                        <div className="error">
                            Error occurred.<br />
                            Details are: "{ error }"
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
);

CurrentSong.propTypes = propTypes;

export default CurrentSong;

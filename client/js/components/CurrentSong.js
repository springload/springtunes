import React, { PropTypes, Component } from 'react';
import Processing from '../components/Processing';
import Icon from '../components/Icon';

export default class CurrentSong extends Component {
    render() {
        const { currentSong, isFetching, error } = this.props;

        return (
            <div className='current-song'>
                <div className='song-details'>
                    <div className='song-details__graphic'>
                        <Icon name='fa-headphones' iconType='big' />
                    </div>
                    <div className='song-details__content'>
                        <div className='twelve columns'>
                            { !isFetching &&
                                <div>
                                    <h2>
                                        <a
                                            href={ currentSong.link_track }
                                            target='_blank'
                                            title={ `View track: ${currentSong.title}` }
                                        >
                                            { currentSong.title }
                                        </a>
                                    </h2>
                                    <h3>
                                        <a
                                            href={ currentSong.link_artist }
                                            target='_blank'
                                            title={ `View Artist: ${currentSong.artist}` }
                                        >
                                            { currentSong.artist }
                                        </a>
                                    </h3>
                                    <h3>
                                        <a
                                            href={ currentSong.link_album }
                                            target='_blank'
                                            className='color-text-cement'
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
                            { !isFetching && error !== '' &&
                                <div className='error'>
                                    Error occurred.<br />
                                    Details are: "{ error }"
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CurrentSong.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    currentSong: PropTypes.object.isRequired,
    error: PropTypes.string,
};

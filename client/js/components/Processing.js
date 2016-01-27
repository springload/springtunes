import React, { Component } from 'react';

export default class Processing extends Component {
    render() {
        return (
            <div className='loading'>
                <img src={ '../img/processing.gif' } alt='Processing... please wait...' width='24' height='24' />
            </div>
        );
    }
}

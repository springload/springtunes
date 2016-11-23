import { shouldFetchSong, shouldModifyMute } from './index';

describe('Utils - index', () => {
    describe('shouldFetchSong', () => {
        it('exists', () => {
            expect(shouldFetchSong).toBeDefined();
        });

        it('undefined object', () => {
            expect(shouldFetchSong()).toBeTruthy();
        });

        it('empty object', () => {
            expect(shouldFetchSong({})).toBeTruthy();
        });

        it('empty song', () => {
            expect(shouldFetchSong({
                current: {},
            })).toBeTruthy();
        });

        it('empty song & not fetching', () => {
            expect(shouldFetchSong({
                current: {},
                isFetching: false,
            })).toBeTruthy();
        });

        it('empty song & fetching', () => {
            expect(shouldFetchSong({
                current: {},
                isFetching: true,
            })).toBeTruthy();
        });

        it('not empty song & fetching', () => {
            expect(shouldFetchSong({
                current: {
                    name: 'test song',
                },
                isFetching: true,
            })).toBeFalsy();
        });

        it('not empty song & not fetching', () => {
            expect(shouldFetchSong({
                current: {
                    name: 'test song',
                },
                isFetching: false,
            })).toBeTruthy();
        });
    });

    describe('shouldModifyMute', () => {
        it('exists', () => {
            expect(shouldModifyMute).toBeDefined();
        });

        it('undefined object', () => {
            expect(shouldModifyMute()).toBeTruthy();
        });

        it('empty object', () => {
            expect(shouldModifyMute({})).toBeTruthy();
        });

        it('is modifying', () => {
            expect(shouldModifyMute({
                isModifyingMute: true,
            })).toBeFalsy();
        });

        it('is not modifying', () => {
            expect(shouldModifyMute({
                isModifyingMute: false,
            })).toBeTruthy();
        });

        it('is not modifying, not muted and called by mute', () => {
            expect(shouldModifyMute({
                isModifyingMute: false,
                isMuted: false,
            }, 'mute')).toBeTruthy();
        });

        it('is not modifying, muted and called by unmute', () => {
            expect(shouldModifyMute({
                isModifyingMute: false,
                isMuted: true,
            }, 'unmute')).toBeTruthy();
        });

        it('is not modifying, muted and called by mute', () => {
            expect(shouldModifyMute({
                isModifyingMute: false,
                isMuted: true,
            }, 'mute')).toBeFalsy();
        });

        it('is not modifying, not muted and called by unmute', () => {
            expect(shouldModifyMute({
                isModifyingMute: false,
                isMuted: false,
            }, 'unmute')).toBeFalsy();
        });
    });
});

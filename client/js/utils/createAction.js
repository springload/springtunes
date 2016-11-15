// import from https://github.com/acdlite/redux-actions/blob/master/src/createAction.js
import identity from 'lodash/identity';

export default function createAction(type, payloadCreator, metaCreator) {
    const finalPayloadCreator = typeof payloadCreator === 'function'
      ? payloadCreator
      : identity;

    const actionCreator = (...args) => {
        const hasError = args[0] instanceof Error;

        const action = {
            type,
        };

        const payload = hasError ? args[0] : finalPayloadCreator(...args);
        if (!(payload === null || payload === undefined)) {
            action.payload = payload;
        }

        if (hasError || payload instanceof Error) {
            // Handle FSA errors where the payload is an Error object. Set error.
            action.error = true;
        }

        if (typeof metaCreator === 'function') {
            action.meta = metaCreator(...args);
        }

        return action;
    };

    actionCreator.toString = () => type.toString();

    return actionCreator;
}

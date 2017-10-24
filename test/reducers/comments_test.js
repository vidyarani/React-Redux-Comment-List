import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('comment Reducer', () => {
    it('handles action with unknown type', () => {
        expect(commentReducer(undefined, {})).to.eql([]);
    });

    it('handles action of type SAVE_COMMENT with name', () => {
        const action = {type: SAVE_COMMENT, payload: {comment: 'new comment',priority: 0}};
         expect(commentReducer([], action)).to.eql([{name: 'new comment', priority: 0}]);
    });
});
import {expect} from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import {saveComment} from '../../src/actions';

describe('actions', () => {
    describe('saveComment', () => {
        it('has the correct type', () => {
            const action = saveComment('',0);
            expect(action.type).to.equal(SAVE_COMMENT);
        });

        it('has the correct payload', () => {
            const action = saveComment('new comment',0);
            expect(action.payload.comment).to.equals('new comment');
            expect(action.payload.priority).to.equals(0);
        });


    });
});
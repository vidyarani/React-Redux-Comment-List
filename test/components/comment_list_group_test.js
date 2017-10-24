import {renderComponent, expect} from '../test_helper';
import CommentListGroup from '../../src/components/comment_list_group';

describe('CommentListGroup', () => {
    let component;
    beforeEach(() => {
        component = renderComponent(CommentListGroup);
    });
    it('has correct class name', () => {
        expect(component).have.class('comment-list-group');
    });

    it('shows a comment priority list', () => {
        expect(component.find('.comment_priority_list')).to.exist;
    });  
    it('shows a comment priority list with title', () => {
            expect(component.find('.comment_priority_list')).to.have.prop('title');
    });
});
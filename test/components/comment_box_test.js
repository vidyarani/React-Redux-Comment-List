import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox',() => {
    let component;
    beforeEach(() => {
        component = renderComponent(CommentBox);
    });
    it('Has the correct class', () => {
        expect(component).have.class('comment-box');
    });
    it('Has a text area', () => {
        expect(component.find('textarea')).to.exist;
    });
    it('Has a button', () => {
        expect(component.find('button')).to.exist;
    });

    describe('entering some text', () => {
        // let textarea;
        beforeEach(() => {
            component.find('textarea').simulate('change', 'new comment');
        });
        it('shows text that is entered', () => {
            expect(component.find('textarea')).to.have.value('new comment');
        });

        it('clears text after submit is clicked', () => {
            component.simulate('submit');
            expect(component.find('textarea')).to.have.value('');
        });
    });
});

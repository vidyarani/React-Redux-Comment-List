import { renderComponent, expect } from '../test_helper';
import CommentPriorityList from '../../src/components/comment_priority_list';

describe('CommentPriorityList', () => {
    let component;
    
    beforeEach(() => {
        const props = {comments: [{name: 'First comment', priority: 0}, {name: '1|Second comment',priority: 1}]};
        component = renderComponent(CommentPriorityList, null, props);
    });

    it('should contain a header', () => {
        console.log('test case', component);
        expect(component.find('h5')).to.exist 
    });

    it('shows every comment in an Li', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('shows each comment that is provided',() => {
        expect(component).to.contain('First comment');
        expect(component).to.contain('Second comment');
    });
});

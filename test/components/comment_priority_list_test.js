import { renderComponent, expect } from '../test_helper';
import CommentPriorityList from '../../src/components/comment_priority_list';
import titles from '../../src/constants/title';


describe('CommentPriorityList', () => {
    let component;
    
    beforeEach(() => {
        const props = {comments: [{name: 'First comment', priority: 0}, {name: '1|Second comment',priority: 1}], 
        priority: 0, title: titles.LOW_PRIORITY_LIST};
        component = renderComponent(CommentPriorityList, props, props);
    });

    it('should contain a header', () => {
        console.log("component::::", component);
        expect(component.find('h5')).to.exist 
    });

    it('shows comments in an Li with given priority', () => {
        expect(component.find('li')).to.exist;
    });

    it('shows each comment that is provided',() => {
        expect(component).to.contain('Priority: 0 Comment: First comment');
    });
});

import React, {Component} from 'react';
import CommentPriorityList from './comment_priority_list';
import {connect} from 'react-redux';

class CommentListGroup extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
        <div className = "comment-list-group">
            <div><CommentPriorityList title = {"List"} /></div>
        </div>
    )}
};
function mapStateToProps(state){
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentListGroup);
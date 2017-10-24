import React, {Component} from 'react';
import CommentPriorityList from './comment_priority_list';
import {connect} from 'react-redux';
import titles from '../constants/title'

class CommentListGroup extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
        <div className = "comment-list-group">
            <div><CommentPriorityList title = { titles.LOW_PRIORITY_LIST } priority = "0" /></div>
            <div><CommentPriorityList title = { titles.MEDIUM_PRIORITY_LIST } priority = "1" /></div>
            <div><CommentPriorityList title = { titles.HIGH_PRIORITY_LIST } priority = "2" /></div>
        </div>
    )}
};
function mapStateToProps(state){
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentListGroup);
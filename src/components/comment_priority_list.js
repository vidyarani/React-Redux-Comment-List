import React from 'react';
import {connect} from 'react-redux';

const CommentPriorityList = (props) => {
    let filteredList = props.comments.filter(comment => comment.priority == props.priority);

    let listToDisplay = filteredList.map(comment => 
        <li key = {comment.name}>Priority: {comment.priority} Comment: {comment.name}</li>);
    
        return (
        <div>
            <h5>{props.title}</h5>
            <ul className = "comment_priority_list">{listToDisplay}</ul> 
        </div>
    );
};

function mapStateToProps(state){
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentPriorityList);
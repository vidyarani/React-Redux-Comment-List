import React from 'react';
import {connect} from 'react-redux';

const CommentPriorityList = (props) => {
    console.log("priority list props: " + props.priority);
    let list = props.comments.map(comment => 
        <li key = {comment.name}>priority: {comment.priority} {comment.name}</li>
    );
    return (
        <div>
        <h5>{props.title}</h5>
        <ul className = "comment_priority_list">{list}</ul> 
        </div>
    );
};

function mapStateToProps(state){
    console.log("mapStateToProps state:", state);
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentPriorityList);
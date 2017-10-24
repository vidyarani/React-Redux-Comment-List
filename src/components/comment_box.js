import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
    constructor(props){
        super(props);
     
        this.state = {comment: ''};
        this.parseAndSaveComment = this.parseAndSaveComment.bind(this);
    }

    handleChange(event){
        this.setState({comment: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.parseAndSaveComment();        
        this.setState({comment: ''});
    }

    parseAndSaveComment(){
        var splitArray = this.state.comment.split('|');
        var priority = splitArray[0];
        var comment = splitArray[1];
        
        if(comment == undefined){
            priority = '0';
            comment = splitArray[0]
        }
        
        this.props.saveComment(comment, priority);
    }

    render() {
        return (
            <form className = 'comment-box' onSubmit = {this.handleSubmit.bind(this)}>
                <h4> Add Comment </h4>
                    <textarea value = {this.state.comment} onChange = {this.handleChange.bind(this)}/>
                    <div>
                        <button action="submit" >Submit Comment</button>
                    </div>
            </form>
        )
    }
}

export default connect(null, actions)(CommentBox);
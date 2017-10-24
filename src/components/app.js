import React, { Component } from 'react';
import CommentBox from './comment_box';
import CommentListGroup from './comment_list_group';

export default class App extends Component {
  render() {
    return (
      <div>
        <CommentBox />
        <CommentListGroup/>
      </div>
    );
  }
}

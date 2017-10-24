import {SAVE_COMMENT} from './types';

export function saveComment(comment, priority){
    return {
        type: SAVE_COMMENT,
        payload: {comment, priority}
    };

}
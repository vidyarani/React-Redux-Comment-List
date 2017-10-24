import {SAVE_COMMENT} from '../actions/types';

export default function(state = [], action) {
    switch(action.type){
        case SAVE_COMMENT: {
            var data = [{name: action.payload.comment, priority: action.payload.priority}];
            var newstate = state.concat(data);
            return newstate;
        }
    }
    
    return state;
}

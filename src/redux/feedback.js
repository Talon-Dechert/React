import * as ActionTypes from './ActionTypes';

export const Feedback = (
  state = {
    feedback: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.POST_FEEDBACK:
      return {
        feedback: action.payload
      };
    default:
      return state;
  }
};

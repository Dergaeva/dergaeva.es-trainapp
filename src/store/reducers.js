import { ADD_TASK, REMOVE_TASK, INPROGRESS_TASK, SET_USER, SET_INFO } from './actions';

export const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK: {
      return [...state, ...action.payload];
    }
    case REMOVE_TASK: {
      const { day, index } = action.payload;
      const tasks = state[day];
      const newtasks = tasks.filter((el, number) => number !== index);
      state[day] = newtasks;

      return [...state];
    }
    case INPROGRESS_TASK: {
      const { day } = action.payload;
      const tasks = state[day];
      const donetask = tasks.filter((el, number) => number.add("done"));
      state[day] = donetask;

      return [...state];
    }
  }

  return state;
};

export const user = (state = null, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.payload;
    }
  }

  return state;
};

export const info = (state = null, action) => {
  switch (action.type) {
    case SET_INFO: {
      return action.payload;
    }
  }

  return state;
};

export const WORKOUT_STATE = {
  workouts: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTLIST":
      const result = action.result ? action.result : [];
      return {
        ...state,
        workouts : result.filter(item => {
          if (
            item.name.toLowerCase().includes(action.query) ||
            item.target.toLowerCase().includes(action.query) ||
            item.equipment.toLowerCase().includes(action.query) ||
            item.bodyPart.toLowerCase().includes(action.query)
          ) {
            return item;
          }
        }),
      };
    default:
        return state;
  }
};

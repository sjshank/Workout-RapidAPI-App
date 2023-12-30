import { TJob } from "../features/job/jobSlice";

export type TNewJobState = Omit<TJob, "id">;

export const NewJobState: TNewJobState = {
  salary: "",
  title: "",
  type: "Internship",
};

export const reducer= (state: TNewJobState, action: any): TNewJobState => {
  switch (action.type) {
    case "SET_VALUE": {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case "RESET": {
        return NewJobState;
      }
    default:
      return state;
  }
};

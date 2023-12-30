import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TFilter = {
  name: string;
  value: string;
  checked: boolean;
};

export type TJobFilter = {
  selectedFilters: TFilter[];
  selectedFilterKeys: string[];
};

export const JobFilterState: TJobFilter = {
  selectedFilters: [
    { name: "internship", value: "Internship", checked: true },
    { name: "fullTime", value: "Full Time", checked: true },
    { name: "remote", value: "Remote", checked: true },
  ],
  selectedFilterKeys: ["Internship", "Full TIme", "Remote"],
};

const filterSlice = createSlice({
  name: "filter",
  initialState: JobFilterState,
  reducers: {
    filtersSelected: (state, { payload }: PayloadAction<TFilter>) => {
      const found = state.selectedFilters.find(
        (filter) => filter.name === payload.name
      );
      if (found && !payload.checked) {
        state.selectedFilters = state.selectedFilters.filter(
          (filter) => filter.name !== payload.name
        );
        state.selectedFilterKeys = state.selectedFilterKeys.filter(
          (key) => key !== payload.value
        );
      } else {
        state.selectedFilters.push(payload);
        state.selectedFilterKeys.push(payload.value);
      }
    },
  },
});

const { actions, reducer } = filterSlice;

export const { filtersSelected } = actions;

export default reducer;

export const selectFilters = (state: RootState) =>
  state!.filter.selectedFilters;
export const selectFilterKeys = (state: RootState) =>
  state!.filter.selectedFilterKeys;

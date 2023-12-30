import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export type TJob = {
  title: string;
  type: string;
  salary: string;
  id: string;
};

export type TJobState = {
  jobs: TJob[];
  isLoading: boolean;
  isError: boolean;
  error: any;
};

export const JobState: TJobState = {
  jobs: [],
  error: {},
  isError: false,
  isLoading: false,
};

export const getJobs: any = createAsyncThunk("job/allJobs", async () => {
  const result = await fetch("http://localhost:9000/jobs");
  return await result.json();
});

export const addNewJob: any = createAsyncThunk(
  "job/addJob",
  async (data: Omit<TJob, "id" | "deadline">) => {
    const result = await fetch("http://localhost:9000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await result.json();
  }
);

export const deleteJob: any = createAsyncThunk(
  "job/deleteJob",
  async (id: string) => {
    const result = await fetch("http://localhost:9000/jobs/" + id, {
      method: "DELETE",
    });
    if (result.ok) {
      return { id: id };
    } else {
      return await result.json();
    }
  }
);

const jobSlice = createSlice({
  name: "job",
  initialState: JobState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<TJobState>) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = action.payload;
      })
      .addCase(getJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action?.error.message;
      })

      .addCase(addNewJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addNewJob.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(addNewJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action?.error.message;
      })

      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = state.jobs.filter((job) => job.id !== action.meta.arg);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action?.error.message;
      });
  },
});

const { reducer } = jobSlice;

export default reducer;

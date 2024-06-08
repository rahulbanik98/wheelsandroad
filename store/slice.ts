import { createSlice } from "@reduxjs/toolkit/react";

interface User {
  datas: string;
}

interface SliceState {
  users: User[];
}

const initialState: SliceState = {
  users: [],
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("action ", action);

      const data: User = {
        datas: action.payload,
      };
      state.users.push(data);
    },
  },
});

export const { addUser } = Slice.actions;
export default Slice.reducer;

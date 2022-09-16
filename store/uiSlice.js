import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCreateModal: false,
};

const uiSlice = createSlice({
  name: "ui-slice",
  initialState,
  reducers: {
    toggleCreateModal(state) {
      state.showCreateModal = !state.showCreateModal;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

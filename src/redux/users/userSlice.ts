import {createSlice} from '@reduxjs/toolkit';

export interface userState {
  addContent: Array<{id: string; title: string; description: string}>;
}

const initialState: userState = {
  addContent: [],
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAddContent: (state, action) => {
      state.addContent.push(action.payload);
    },
    updateContent: (state, action) => {
      const {id, title, description} = action.payload;
      const index = state.addContent.findIndex(item => item.id === id);
      if (index) {
        state.addContent[index] = {id, title, description};
      }
    },
    deleteContent: (state, action) => {
      state.addContent = state.addContent.filter(
        item => item.id !== action.payload,
      );
    },
  },
});

export const {setAddContent, updateContent, deleteContent} = userSlice.actions;

export default userSlice.reducer;

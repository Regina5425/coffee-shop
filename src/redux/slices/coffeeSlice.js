import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  coffee: [],
	oneCoffee: {},
  coffeeLoadingStatus: "idle",
};

export const fetchCoffee = createAsyncThunk("coffee/fetchCoffee", async () => {
  const response = await fetch(
    "https://63dd3878367aa5a7a40bbb9d.mockapi.io/coffee"
  );
  const data = await response.json();
  return data;
});

export const fetchCoffeeById = createAsyncThunk(
  "coffee/fetchCoffeeById",
  async (id) => {
    const response = await fetch(
      `https://63dd3878367aa5a7a40bbb9d.mockapi.io/coffee/${id}`
    );
    const data = await response.json();
    return data;
  }
);

const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffee.pending, (state) => {
        state.coffeeLoadingStatus = "loading";
      })
      .addCase(fetchCoffee.fulfilled, (state, action) => {
        state.coffeeLoadingStatus = "idle";
        state.coffee = action.payload;
      })
      .addCase(fetchCoffee.rejected, (state) => {
        state.coffeeLoadingStatus = "error";
      })
			.addCase(fetchCoffeeById.pending, (state) => {
        state.coffeeLoadingStatus = "loading";
      })
      .addCase(fetchCoffeeById.fulfilled, (state, action) => {
				state.coffeeLoadingStatus = "idle";
        state.oneCoffee = action.payload;
      })
      .addDefaultCase(() => {});
  },
});

export default coffeeSlice.reducer;

export const { coffeeFetching, coffeeFetched, coffeeFetchingError } =
  coffeeSlice.actions;

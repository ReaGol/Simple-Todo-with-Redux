
export const initialState = {
    items: [],
    newItem: ''
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case "add":
        return {
          ...state,
          items: [...state.items, action.payload],
          newItem: ''
        };
      case "delete":
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      case "update":
        return {
          ...state,
          newItem: action.payload,
        };
      case "clear":
       console.log("test");
        return {
          ...state,
          newItem: "",
        };
      case "toggle":
        console.log('toggle');
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.id === action.payload) {
              item.done = !item.done;
            }
            return item;
          }),
        };
      default:
        return state;
    }
}

export default todoReducer
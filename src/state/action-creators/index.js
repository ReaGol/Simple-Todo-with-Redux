export const addTodo = (item) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: item,
    });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    return dispatch({
      type: "delete",
      payload: id,
    });
  };
};

export const updateNewItem = (newItem) => {
  return (dispatch) =>
    dispatch({
      type: "update",
      payload: newItem,
    });
};

export const clearInput = () => {
  return (dispatch) => {
    return dispatch({
      type: "clear",
      payload: "",
    });
  };
};

export const toggleTodo = (item) => {
  return (dispatch) =>
    dispatch({
      type: "toggle",
      payload: item,
    });
};

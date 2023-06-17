import Redux from 'redux'


const initialState = {
  count: 0,
};

//reducer function 
function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}


//creating a store
const store = Redux.createStore(reducer);

function handleStoreChange() {
    //we can't directly modify the e.target.value , we can only modify through store
  const currentState = store.getState();
  console.log("Current state:", currentState);
}

//actions
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

//subscribing to the store
store.subscribe(handleStoreChange);



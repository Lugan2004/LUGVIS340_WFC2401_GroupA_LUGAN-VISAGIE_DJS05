//btns
const addBtn = document.querySelector('.add');
const subtractBtn = document.querySelector('.subtract');
const resetBtn = document.querySelector('.reset');
const getStateBtn = document.querySelector('.get-state');
const subscribeBtn = document.querySelector('.subscribe');
const nameInput = document.getElementById('nameInput');
// Initial state
let state = {
    count: 0
  };

addBtn.addEventListener('click', () => {
  console.log("---")
    return dispatch({ type: 'ADD' });
    
})

subtractBtn.addEventListener('click', () => {
  console.log("---")
    return dispatch({ type: 'SUBTRACT' });
})
resetBtn.addEventListener('click', () => {
  console.log("---")
    return dispatch({ type: 'RESET' });
    
})
getStateBtn.addEventListener('click', () => {
  console.log("---")
    return console.log('getState:', getState());
})
  // Reducer function
  function reducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return { ...state, count: state.count + 1 };
      case 'SUBTRACT':
        return { ...state, count: state.count - 1 };
      case 'RESET':
        return { ...state, count: 0 };
      default:
        return state;
    }
  }
  
  // Subscribers (observers)
  const subscribers = [];
  
  // Subscribe function
  function subscribe(callback) {
    subscribers.push(callback);
    state.count = 0;
  }
  
  // Notify subscribers of state changes
  function notifySubscribers() {
    subscribers.forEach(callback => callback(state));
  }
  
  // Dispatch action
  function dispatch(action) {
    state = reducer(state, action);
    notifySubscribers();
  }
  
  // Get state
  function getState() {
    return state;
  }

# LUGVIS340_WFC2401_GroupA_LUGAN-VISAGIE_DJS05
## How to subscribe:
Just enter your name where specified and run the the line of code below in the console.
- subscribe(newState => console.log('Enter your name here:', newState));

## How to increment the count:
just run the code below in the console the same amount of times as you want to increment the count.
- dispatch({ type: 'ADD' });
- Or Use the add button in the UI to increment the count.

## How to decrement the count:
just run the code below in the console the same amount of times as you want to decrement the count.
- dispatch({ type: 'SUBTRACT' });
-  Or Use the subtract button in the UI to decrement the count.

## How to reset the count:
just run the code below in the console.
- dispatch({ type: 'RESET' });
- Or Use the reset button in the UI to reset the count.

## How to get the state of the count:
just run the code below in the console.
- getState();
- Or Use the get state button in the UI to get the current state of the count.

### what I struggled with:
I struggled with implementing the subscribe function.I wanted to make the process of subscribing to the state more user friendly. I tried to make the user be able to subscribe with a click of a button instead of having to write the line of code in the console but I failed in that aspect but I was able to complete the main task and make the add,substract and reseting of the count much more user freindly by making the UI more user friendly.

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
getElementId() =Is a method of Javascript used to access and manipulate a HTML element by unique ID.
querySelectorAll()=Used for dynamic actions like attaching listeners to multiple buttons.
getElementsByClassName()=Select all elements with a specific classname

2. How do you create and insert a new element into the DOM?
ans:
1.Creat the element:const historyItem = document.createElement('div');
2.Add Content or attribute:historyItem.innerText = `Service: ${serviceName}, Number: ${serviceNumber}`;
historyItem.classList.add('history-card'); 
3.Insert the DOM:document.getElementById('call-history-section').appendChild(historyItem);

3. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault():Stops the browser’s default behavior for an event.
stopPropagation():Stops the event from bubbling up to parent elements.


4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation means attaching a single event listener to a parent element instead of adding individual listeners to each child. When an event occurs on a child (like clicking a button), it bubbles up to the parent, where you can catch it and respond accordingly.
Why it is useful:
I am answering this question based on my assignment.
1.Dynamically add new box to call history section.
2.Handling clicks on Call and Copy buttons inside each card.
3.Updating coin and copy counts, showing alerts, and inserting new elements.
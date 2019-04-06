// Array to hold message objects
var messages = []

// Message object constructor
function Message (content, sender, type) {
  this.content = content
  this.sender = sender
  this.type = type
}

function addMessageHandler (buttonId) {
  // If a field is not filled out when user clicks a button, it sends an alert and ends the function early
  if (document.getElementById("message-input").value == "" || document.getElementById("name-input").value == "") {
    alert("Please fill out all fields!");
    return;
  }
  // Determines what button is pressed and records it in the variable messageType
  var messageType
  switch (buttonId) {
    case 'send':
      messageType = 'out-message';
      break;
    case 'reply':
      messageType = 'in-message';
      break;
    default:
      messageType = 'undefined';
      break;
  }

  // Saves the text in these elements into variables to be referenced
  var content = document.getElementById('message-input').value;
  var sender = document.getElementById('name-input').value;

  // Creates new object
  var message = new Message(content, sender, messageType);
  // Pushes new object into messages array
  messages.push(message);

  // Creates a paragraph element for the message that will contain the sender name and message content
  var messageP = document.createElement('p');
  // Sets class of message based on switch above
  messageP.className = message.type;

  // Creates a paragraph element for the sender name
  var senderP = document.createElement('p');
  // Setting class of the element
  senderP.className = 'sender';
  // Creates a text node for the message
  var senderNode = document.createTextNode(message.sender);
  // Injects sender name into element
  senderP.appendChild(senderNode);

  var contentP = document.createElement('p');
  contentP.className = 'content';
  var contentNode = document.createTextNode(message.content);
  contentP.appendChild(contentNode);

  // Injecting sender and content elements into message element
  messageP.appendChild(senderP);
  messageP.appendChild(contentP);

  // Putting messageP into the messsage-container element
  var container = document.getElementById('message-container');
  container.appendChild(messageP);

  // Jump to the bottom of the page after inserting the message into the container element
  window.location = 'index.html#bottom';
}

function init () {
  // Wiring the addMessageHandler function to the buttons
  document.getElementById("send").onclick = function() {addMessageHandler("send")};
  document.getElementById("reply").onclick = function() {addMessageHandler("reply")};
}

// Initializing the page
init();

document.addEventListener("DOMContentLoaded", function () {
    const chatItems = document.querySelectorAll(".chat-item");
    const chatProfilePic = document.querySelector(".chat-profile-pic");
    const chatName = document.querySelector(".chat-name");
    const chatBody = document.querySelector(".chat-body");
    const chatWindow = document.querySelector(".chat-window");
    const messageInput = document.querySelector(".message-input");

    let activeChatName = null;
    const chatHistory = {
        "Swati": ["Hi, how are you?", "I'm good, thanks!"],
        "Priya😂": ["See in cupboard"]
    };

   
    chatItems.forEach(item => item.addEventListener("click", function () {
        const name = this.dataset.name;
        const image = this.dataset.image;

        
        activeChatName = name;
        chatProfilePic.src = image;
        chatName.textContent = name;

        
        chatWindow.style.display = "block";

       
        displayMessages(name);
    }));

    // Function to Display Messages
    function displayMessages(name) {
        // Clear chat body and show the "Today" date once per chat switch
        chatBody.innerHTML = `<div class="message-date">Today</div>`;

        // Add chat history messages to chat body
        const messages = chatHistory[name];
        messages.forEach(msg => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", "received");
            messageDiv.textContent = msg;
            chatBody.appendChild(messageDiv);
        });

        // Scroll to the bottom after adding messages
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Event Listener for Sending a Message when Enter is pressed
    messageInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && messageInput.value.trim() !== "") {
            const userMessage = messageInput.value.trim();

            // Add message to chat body
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message", "sent");
            messageDiv.textContent = userMessage;
            chatBody.appendChild(messageDiv);

            // Scroll to the bottom after adding a message
            chatBody.scrollTop = chatBody.scrollHeight;

            // Clear input field
            messageInput.value = "";

            // Store the new message in the chat history
            if (!chatHistory[activeChatName]) {
                chatHistory[activeChatName] = [];
            }
            chatHistory[activeChatName].push(userMessage);
        }
    });
});

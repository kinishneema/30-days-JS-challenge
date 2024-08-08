const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
    console.log('Connected to WebSocket server');
};

socket.onmessage = (event) => {
    console.log(`Message from server: ${event.data}`);
};

socket.onclose = () => {
    console.log('Disconnected from WebSocket server');
};
document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    socket.send(message);
    document.getElementById('message-input').value = '';
});

socket.onmessage = (event) => {
    const chatWindow = document.getElementById('chat-window');
    const message = document.createElement('div');
    message.textContent = event.data;
    chatWindow.appendChild(message);
};
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = document.getElementById('message-input').value;
    if (message.trim() !== '') {
        socket.send(message);
        document.getElementById('message-input').value = '';
    }
}

socket.onmessage = (event) => {
    const chatWindow = document.getElementById('chat-window');
    const message = document.createElement('div');
    message.textContent = event.data;
    chatWindow.appendChild(message);
};
document.getElementById('join-chat').addEventListener('click', () => {
    const username = document.getElementById('username-input').value.trim();
    if (username) {
        document.getElementById('chat-container').style.display = 'flex';
        document.getElementById('join-chat').style.display = 'none';
        document.getElementById('username-input').style.display = 'none';
        socket.send(JSON.stringify({ type: 'join', username }));
    }
});

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = document.getElementById('message-input').value.trim();
    if (message) {
        socket.send(JSON.stringify({ type: 'message', text: message }));
        document.getElementById('message-input').value = '';
    }
}

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const chatWindow = document.getElementById('chat-window');
    const message = document.createElement('div');
    if (data.type === 'join') {
        message.textContent = `${data.username} joined the chat`;
    } else if (data.type === 'message') {
        message.textContent = `${data.username}: ${data.text}`;
    }
    chatWindow.appendChild(message);
};

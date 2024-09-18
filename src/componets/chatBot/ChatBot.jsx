import { useState, useEffect, useRef } from "react"
import './chat.css'


export const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatBoxRef = useRef(null);
    const [isChatVisible, setIsChatVisible] = useState(false);

    const handleSendMessage = () =>{
        if(input.trim()){
            const userMessage = {sender: 'user', text: input};
            setMessages([...messages, userMessage]);

            setTimeout(() =>{
                const botMessage = {sender: 'bot', text: generateResponse(input)};
                setMessages (prevMessages => [...prevMessages, botMessage]);
            }, 2000);

            setInput('');
        }
    }


  const generateResponse = (userInput) => {
    // Basic bot logic (can be replaced with API call to a chatbot service)
    if (userInput.toLowerCase().includes('hello')) {
      return 'Hello! How can I help you today?';
    }
    return "I'm not sure how to respond to that.";
  };

  useEffect(() => {
    
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="app-container">
      {!isChatVisible && (
        <div className="chat-icon" onClick={() => setIsChatVisible(true)}>
          💬 {/* This can be an icon from FontAwesome, Material UI, or any other library */}
        </div>
      )}

      {isChatVisible && (
        <div className="chat-container">
          <div className="chat-header">
            <span>Customer Support Chat</span>
            <button className="close-btn" onClick={() => setIsChatVisible(false)}>✖️</button>
          </div>
          <span className="leo">My name is Leo, how can i help you ?</span>
          <div className="chat-box" ref={chatBoxRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-box">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message"
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

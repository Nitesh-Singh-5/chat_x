import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.jsx';

import React from 'react'

export default function App() {
    return (
        <ChatEngine
            height="100vh"
            projectID="8358b0d4-bd62-4a73-94a5-30b137b3cd0d"
            userName="nitesh58"
            userSecret="Nitesh@5801"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

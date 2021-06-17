// import { ChatEngine } from 'react-chat-engine';
// import './App.css';
// import ChatFeed from './components/ChatFeed.jsx';

// import React from 'react'

// export default function App() {
//     return (
//         <ChatEngine
//             height="100vh"
//             projectID="8358b0d4-bd62-4a73-94a5-30b137b3cd0d"
//             userName="nitesh58"
//             userSecret="Nitesh@5801"
//             renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
//         />
//     );
// }





import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = '8358b0d4-bd62-4a73-94a5-30b137b3cd0d';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

// infinite scroll, logout, more customizations...

export default App;
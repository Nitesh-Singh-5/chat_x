import React from 'react'
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

export default function ChatFeed(props) {
    const {chats, activeChat, userName, messages} = props;
    const chat = chats && chats[activeChat];
    
    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key,index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMymessage = userName === message.sender.username;
            return (
                <div key={`msg_${index}`} style={{width:'100%'}}>
                    <div className="message-block">
                        {
                            isMymessage
                            ?<MyMessage message={message}/>
                            :<TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className="read-receipt" style={{ marginRight:isMymessage?'18px':'0px',marginLeft:isMymessage?'0px':'68px'}}>
                    read-receipt
                    </div>
                </div>
            )
        })

    }
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div>
                    <div className="chat-title">{chat.title}</div>
                    <div className="chat-subtitle">
                        {chat.people.map((person) => `${person.person.username}`)}
                    </div>
                </div>
                {renderMessages()}
                <div style={{height:'100px'}}></div>
                <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat}/>
                </div>
            </div>
        </div>
    )
}

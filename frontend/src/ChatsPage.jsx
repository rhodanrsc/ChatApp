import React from "react";
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic  } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('18c88c2b-c984-4ed7-b455-f874bc6d968d', props.user.username, props.user.secret)
    return (
        <div style={{ height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    );   
}

export default ChatsPage;
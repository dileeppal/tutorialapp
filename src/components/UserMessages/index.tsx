
import LeftSideBar from 'components/Dashboard/LeftSideBar';
import { BackOverlay, SearchButton } from 'components/Dashboard/LeftSideBar/leftside.styles';
import Topbar from 'components/Dashboard/TopBar';
import { SearchIcon } from 'components/Dashboard/TopBar/topbar.styles';
import React, { useState } from 'react'
import { PageContainer, InnerContainer } from 'styles/common.styles';
import Conversation from '../Conversation';
import Message from '../Message';
import OnlineChat from '../OnlineChat';
import {
    MasSearchGroup,
    ConversationGroup,
    ChatMessageInputGroup,
    MessageGroup,
    MsgContainer,
    MsgChatMenu,
    MsgChatMenuWrapper,
    MsgChatMenuInput,
    ChatBoxContainer,
    ChatBoxWrapper,
    ChatBoxTop,
    ChatBoxBottom,
    ChatMessageInput,
    ChatSubmitButton,
    OnlineChatContainer,
    OnlineChatWrapper

} from "./msg.styles";

import { SearchNewIcon } from "../../../public/assets/icons/SearchNewIcon";
import { SendIcon } from "../../../public/assets/icons/SendIcon";



function UserMessages() {
    const [menuState, setMenuState] = useState(false)
    {
        menuState && (
            <BackOverlay onClick={() => setMenuState(false)} className="" />
        );
    }
    const [leftSearch, setLeftSearch] = useState(false)

    return (
        <>

            {/* <SearchButton onClick={() => setMenuState(true)} className="toggleMenu">
                <SearchIcon></SearchIcon>
            </SearchButton> */}
            {/* {menuState && <BackOverlay onClick={() => setMenuState(false)} className="" />} */}

            {/* <button onClick={() => setLeftSearch(!leftSearch)}>Search TBN</button> */}

            {/* <div className="overlay" onClick={() => setLeftSearch(!leftSearch)}></div> */}

            <PageContainer>
                <LeftSideBar />
                <InnerContainer>
                    <Topbar />

                    <MsgContainer>
                        {menuState && <BackOverlay onClick={() => setMenuState(false)} className="BackOverlay" />}
                        <MsgChatMenu>
                            <MsgChatMenuWrapper>
                                <MasSearchGroup>
                                    <SearchNewIcon />
                                    <MsgChatMenuInput placeholder="Search for a user" onClick={() => setMenuState(true)} className="toggleMenu" />
                                </MasSearchGroup>

                                <ConversationGroup className={menuState ? 'opened' : ''}>
                                    <Conversation />
                                </ConversationGroup>
                            </MsgChatMenuWrapper>
                        </MsgChatMenu>

                        <ChatBoxContainer>
                            <ChatBoxWrapper>
                                <ChatBoxTop>
                                    <MessageGroup>
                                        <Message />
                                    </MessageGroup>
                                </ChatBoxTop>
                                <ChatBoxBottom>
                                    <ChatMessageInputGroup>
                                        <ChatMessageInput placeholder="write something..." ></ChatMessageInput>
                                        <ChatSubmitButton>
                                            <SendIcon />
                                        </ChatSubmitButton>
                                    </ChatMessageInputGroup>
                                </ChatBoxBottom>
                            </ChatBoxWrapper>
                        </ChatBoxContainer>

                        <OnlineChatContainer>
                            <OnlineChatWrapper>
                                <OnlineChat />
                            </OnlineChatWrapper>
                        </OnlineChatContainer>
                    </MsgContainer>
                </InnerContainer>
            </PageContainer>
        </>
    );
}

export default UserMessages

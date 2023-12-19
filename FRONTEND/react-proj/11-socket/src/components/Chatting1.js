import { useEffect, useState } from "react";
import "../styles/chat.css";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000", {autoConnect:false})

export default function Chatting1(){
    const [msgInput, setMsgInput] = useState("");
    const [chatList, setChatList] = useState([{
        type: "my",
        content: "안녕?"
    }, {
        type: "other",
        content: "응 안녕?"
    }, {
        type: "notice",
        content: ``
    }]);

    const initSocketConnect = () => {
        if(!socket.connected) socket.connect()
    }

    useEffect(()=> {
        initSocketConnect();
    }, [])

    useEffect(()=>{
        const notice = (res)=> {
            console.log("notice 실행!!")
            const newChatList = [...chatList, {type: "notice", content: res.msg}];
            setChatList(newChatList)
        };
        socket.on("notice", notice);

        // chatList가 변경 될 때마다 notice 이벤트가 누적됨. 해결을 위해 notice 이벤트 제거
        return () => socket.off("notice", notice);
    }, [chatList])

    const sendMsg = () => {}
    return<>
    <h3>실습 2, 3번</h3>
    <ul>
        <li>2. 채팅창 UI</li>
        <li>3. socket id 이용하여 입장 공지 띄우기</li>
    </ul>
    <div className="chat-container">
        {chatList.map((chat, i) => {
            if (chat.type === "notice") return <Notice key={i} chat={chat} />
            else return <Chat key={i} chat={chat} />
        })}
    </div>

    <div className="input-container">
        <input
        type="text"
        value={msgInput}
        onChange={(e)=>{setMsgInput(e.target.value)}}/>
        <button onClick={sendMsg}>전송</button>
    </div>

    </>
}
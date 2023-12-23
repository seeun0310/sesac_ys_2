import '../styles/myproject.css';
import io from 'socket.io-client';
import { useCallback, useEffect, useMemo, useState } from "react";
import Chat from "./Chat";
import Notice from "./Notice";

const socket = io.connect("http://localhost:8000", { autoConnect: false });

export default function MyProject () {
    const [msgInput, setMsgInput] = useState("");
  const [chatList, setChatList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userList, setUserList] = useState({});
  const [dmTo, setDmTo] = useState("all");
  const [inputValue, setInputValue] = useState('');
  const [raindrops, setRaindrops] = useState([]);

  const initSocketConnect = () => {
    console.log("connected", socket.connected);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    const newRaindrops = Array.from({ length: 50 }).map((_, index) => ({
        id: index,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 10 + 5}s`,
        fontSize: `${Math.random() * 40 + 20}px`,
    }));
    setRaindrops(newRaindrops);
}, []);

  useEffect(() => {
    socket.on("error", (res) => {
      alert(res.msg);
    });

    socket.on("entrySuccess", (res) => {
      setUserId(res.userId);
    });

    socket.on("userList", (res) => {
      setUserList(res);
    });
  }, []);
  
  const userListOptions = useMemo(() => {
    const options = [];
    for (const key in userList) {
      if (userList[key] === userId) continue;
      options.push(
        <option key={key} value={key}>
          {userList[key]}
        </option>
      );
    }
    return options;
  }, [userList]);

  const addChatList = useCallback(
    (res) => {
      const type = res.userId === userId ? "my" : "other";
      const content = `${res.dm ? "(속닥속닥) " : ""} ${res.userId}: ${
        res.msg
      }`;
      const newChatList = [...chatList, { type: type, content: content }];
      setChatList(newChatList);
    },
    [userId, chatList]
  );

  useEffect(() => {
    socket.on("chat", addChatList);
    return () => socket.off("chat", addChatList);
  }, [addChatList]);

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: "notice", content: res.msg }];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

  const sendMsg = () => {
    if (msgInput !== "") {
      socket.emit("sendMsg", { userId: userId, msg: msgInput, dm: dmTo });
      setMsgInput("");
    }
  };

  const entryChat = () => {
    initSocketConnect();
    socket.emit("entry", { userId: inputValue });
  };
  
  return (
    <>
  
      {userId ? (
        <>
          {/* <div>{userId}님 환영합니다.</div> */}
          <div className="chat-container">
            {chatList.map((chat, i) => {
              if (chat.type === "notice") return <Notice key={i} chat={chat} />;
              else return <Chat key={i} chat={chat} />;
            })}
          </div>
          <div className="input-container">
            <select value={dmTo} onChange={(e) => setDmTo(e.target.value)}>
              <option value="all">전체</option>
              {userListOptions}
            </select>
            <input
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button onClick={sendMsg}>전송</button>
          </div>
        </>
      ) : (
        <>
        <div className='main-title'>
        <h1>두근두근 채팅을 んı작하んı려면 닉네임을 입력ぁĦ주パㅔ요! ♡</h1>
          <div className="name-container">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className='blank'></div>
            <button onClick={entryChat}>입장 ♡</button>
          </div> </div>
        </>
      )}
      <div className="dynamic-background">
      {raindrops.map(raindrop => (
                <div
                    key={raindrop.id}
                    className="raindrop"
                    style={{
                        left: raindrop.left, // 무작위로 가로 위치 설정
                        animationDuration: raindrop.animationDuration, // 무작위로 애니메이션 속도 설정
                        fontSize: raindrop.fontSize, // 무작위로 크기 설정
                    }}
                >
                    ♡
                </div>
            ))}
      </div>
    </>
    )
}
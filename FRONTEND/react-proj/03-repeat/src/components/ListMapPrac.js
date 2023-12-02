import { useState } from "react";

function SignUp () {
    const profileList = [
        {name: "코디", email: "codi@gmail.com"}
    ];

    const [list, setList] = useState(profileList);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const upLoad = () => {
        const newProfil = {name: name, email:email}
        const newProfilList = list.concat(newProfil);
        setList(newProfilList);
    }

    const enterPush = (e) => {
        if (e.key === 'Enter'){
            upLoad ();
        }
    }

    const deleteList = (email) => {
        const newProfilList = list.filter((value)=>{
            return value.email != email;
        })
        setList(newProfilList);
    }
    
    return (
        <>
        <input type="text" placeholder="이름" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <input type="text" placeholder="이메일" value={email} onChange={(e)=>{setEmail(e.target.value)}} onKeyDown={(e)=>{enterPush(e)}}></input>
        <button onClick={upLoad}>등록</button>
        <ol>
        {list.map((value, i)=>{
            return <li style={{listStyleType: "none", cursor: "pointer"}} key={value.email} onDoubleClick={()=>{deleteList(value.email)}}>{value.name}: {value.email}</li>
        })}
        </ol>
        </>
    )
}

function GuestBook () {
    const [guestList, setGuestList] = useState([]);
    const [number, setNumber] = useState(1);
    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");

    const write = () => {
        const newGuestObj = { number: number, title: title, writer: writer };
        setGuestList((prevList)=> [...prevList, newGuestObj]);
        setTitle("");
        setWriter("");
        setNumber(number+1);
    }

    const [keyword, setKeyword] = useState("");
    const search = (keyword) => {
        const newTitleObj = {title: title };
        const newWriterObj = { writer: writer };
        const newSearchList = guestList.filter((value)=>{
            return keyword in newWriterObj;
        })
        newSearchList.length > 0 ? console.log("있습니다") : console.log("없습니다")
    }

    const showAll = () => {

    }

    return (<>
    <hr />
    <br />
        <fieldset>
            작성자 : <input type="text" placeholder="작성자" value={writer} onChange={(e)=>{setWriter(e.target.value)}}></input>
            <span>  </span>
            제목 : <input type="text" placeholder="제목" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
            <span>  </span>
            <button onClick={write}>작성</button>
        </fieldset>
        <br />
        <br />
            <select>
                <option>작성자</option>
                <option>제목</option>
            </select>
            <span>  </span>
            <input type="text" placeholder="검색어" value={keyword} onChange={(e)=>{setKeyword(e.target.value)}}></input>
            <span>  </span>
            <button onClick={search(()=>{keyword})}>검색</button><button onClick={showAll}>전체</button>

        <br />
        <br />
        <table style={{border: "2px solid black", borderCollapse: "collapse", width: "700px"}}>
            <thead>
            <tr>
                <th style={{border: "2px solid black"}}>번호</th>
                <th style={{border: "2px solid black"}}>제목</th>
                <th style={{border: "2px solid black"}}>작성자</th>
                </tr>
            </thead>

            <tbody>
            {guestList.map((value, i)=>{
                return(
            <tr key={value.number}>
            <td style={{border: "2px solid black", textAlign: "center"}}>{value.number}</td>
            <td style={{border: "2px solid black", textAlign: "center"}}>{value.title}</td>
            <td style={{border: "2px solid black", textAlign: "center"}}>{value.writer}</td>
            </tr>
            )})}
            </tbody>
        </table>
        
        
        <br />
        <br />
        <table style={{border: "2px solid black", borderCollapse: "collapse", width: "700px"}}>
            <thead>
            <tr>
                <th style={{border: "2px solid black"}}>번호</th>
                <th style={{border: "2px solid black"}}>제목</th>
                <th style={{border: "2px solid black"}}>작성자</th>
                </tr>
            </thead>

            <tbody>
            {newSearchList.map((value, i)=>{
                return(
            <tr key={value.number}>
            <td style={{border: "2px solid black", textAlign: "center"}}>{value.number}</td>
            <td style={{border: "2px solid black", textAlign: "center"}}>{value.title}</td>
            <td style={{border: "2px solid black", textAlign: "center"}}>{value.writer}</td>
            </tr>
            )})}
            </tbody>
        </table>
    </>
    )}


export {SignUp, GuestBook};
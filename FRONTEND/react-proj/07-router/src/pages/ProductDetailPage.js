import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom"

export default function ProductDetailPage () {
    const [product, setProduct] = useState(null);
    const [msg, setMsg] = useState("Loading...");
    const {id} = useParams()
    console.log(id);
    // product/:id/:name
    // params => { id: value, name: value }

    // ~~~~ ?id=2&name=lily
    // 쿼리를 가져오고 싶을 땐?
    const [query, setQuery] = useSearchParams();
    console.log(query) // URLSearchParamas {size: 1}
    console.log(query.get("name")); // seeun

    // Link 컴포넌트를 이욯하지 않고, js 함수 내부에서 페이지를 이동해야 할 때 사용
    const navigator = useNavigate();

    const getProduct = async () => {
        try {
            // 오류가 날 수도 있는 코드를 try 안에 넣는다
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            // fetch 값이 들어왔는지 확인하려면 ok 사용
            if(res.ok) {
                const prod = await res.json();
                setProduct(prod);
            } else {
                throw Error("존재하지 않는 상품입니다.");
            }
        } catch(error) {
            // try 안에서 오류가 발생하면 catch 안으로 들어옴
            console.log(error);
            setMsg(error.message);
        }

        // axios를 사용한다면?
        // const res = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // const prod = res.data;
        // setProduct(prod);
    }

    useEffect(()=>{
        getProduct();
    }, [])


    return <>
        <div>여기는 상품 상세 페이지</div>

        {/* 이전 페이지로 이동 */}
        <button onClick={()=>navigator(-1)}>목록으로 이동</button>
        {/* 기본 페이지로 이동 */}
        <button onClick={()=>navigator("/")}>홈으로 이동</button>


        {/* setQuery는 인자로 보내준 정보를 이용하여 새로운 쿼리를 만들고 이동함 */}
        {/* <button onClick={()=>setQuery({name: "seeun", id: 5 })}>setQuery 테스트</button> */}

        {product ? (<ul>
            <li>번호 : {product.id}</li>
            <li>상품명 : {product.title}</li>
        </ul>) : (<div>{msg}</div>)}
    </>
}
import { useState } from 'react';

function ListMap () {
    const productList = [
        { id: 1, product: '가방'},
        { id: 2, product: '패딩'},
        { id: 3, product: '신발'},
        { id: 4, product: '상의'},
        { id: 5, product: '하의'},
    ]

    const [list, setList] = useState(productList);
    const [newProduct, setNewProduct] = useState("");

    const addProduct = () => {
        // list와 추가할 객체를 합쳐줘야 함
        // 원래라면 back에서 id 받아와야 하지만 임의로 지정
        const newObj = { id:list[list.length-1].id+1, product: newProduct }
        //const newList = [...list, newObj] // ... 전개구문
        const newList = list.concat(newObj); // 이렇게 메소드로도 ㄱㄴ

        // setList 사용
        setList(newList);
        setNewProduct("");
    }

    const deleteProduct = (id) => {
        // 더블 클릭한 상품 삭제
        // filter 메소드는 앞에 있는 배열에 대해 반복
        // filter메소드의 return값은 조건이 되어야 함 (필터링).
        // 조건이 true일 경우, 해당 원소는 새로운 배열에 포함. false 제외
        const newList = list.filter((value)=>{
            return value.id != id ;
        });
        // rendering할 때 list 배열을 이용하므로 list 배열에서 원하는 원소 삭제
        // 삭제된 버전의 배열을 setList를 이용하여 list의 상태 변경
        setList(newList);

    }

    // map은 앞에 있는 배열에 대해 반복을 돌며,
    // map의 인자로 넘어가는 콜백함수의 return값을 이용해 새로운 배열 생성
    return (<>
    <label>추가할 상품: </label>
    <input
        type="text"
        value={newProduct}
        onChange={(e)=>{setNewProduct(e.target.value)}}/>
    <button
    onClick={addProduct}>추가</button>
        <ul>
            {list.map((value, i)=>{
            return <li
            style={{cursor: "pointer"}}
             key={value.id}
             onDoubleClick={()=>{
                deleteProduct(value.id)}}>{value.product}</li>;
            })}
        </ul>
    </>);
}



export {ListMap};
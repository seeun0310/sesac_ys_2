import { useEffect, useState } from "react";

export default function RouterPrac () {
    const [photo, setPhoto] = useState(null);

    const getPhoto = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_end=19");
            const photos = await res.json();
            setPhoto(photos);
            console.log(photos)
    }

    useEffect(()=>{
        getPhoto();
    }, [])


    return <>
        <div>Router 실습 Photo 페이지~</div>
        {photo ? (<>
        {photo.map((value)=>(
            <ul key={value.id}>
                <li>아이디 : {value.id}</li>
                <li>제목 : {value.title}</li>
                <img src={`${value.thumbnailUrl}`} />
            </ul>))}</>) : (<div>Loading...</div>)}

        {/* {photo ? (<>dddddd</>) : (<div>Loading...</div>)} */}
    </>
}
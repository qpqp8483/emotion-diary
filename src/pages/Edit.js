import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
const Edit = () => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id');
    const mode = searchParams.get('mode');
    console.log(id, mode);

    return (
        <div>
            <h2>Edit</h2>
            <p>이곳은 일기 수정페이지 입니다.</p>
            <button onClick={()=>{ setSearchParams({ who:"찬우" }) }}>QS바꾸기</button>
            <button onClick={()=>{ navigate(-1) }}>뒤로가기</button>
        </div>
    );
};

export default Edit;
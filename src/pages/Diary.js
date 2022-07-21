import React from 'react';
import { useParams } from 'react-router-dom';

const Diary = () => {

    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <h2>Diary</h2>
            <p>이곳은 상세페이지 입니다.</p>
        </div>
    );
};

export default Diary;
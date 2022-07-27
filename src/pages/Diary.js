import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { getStringDate } from "../utill/data";
import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import { emotionList } from "../utill/emotion";
const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      setData(targetDiary);
    } else {
      navigate("/", { replace: true });
    }
  }, [id, diaryList]);

  if (!data) {
    return <div>로딩중입니다...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
    return (
      <div className="Diary">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <MyButton
              text={"< 뒤로가기"}
              onClick={() => {
                navigate(-1);
              }}
            />
          }
          rightChild={
            <MyButton
              text={"수정하기"}
              onClick={() => {
                navigate(`/edit/${data.id}`);
              }}
            />
          }
        />
        <section>
          <h4>오늘의 감정</h4>
          <div
            className={[
              "emotion_box",
              `emotion_type_${curEmotionData.emotion_id}`,
            ].join(" ")}
          >
            <img src={curEmotionData.emotion_img} />
            <span>{curEmotionData.emotion_descript}</span>
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="diary_content">{data.content}</div>
        </section>
      </div>
    );
  }
};

export default Diary;

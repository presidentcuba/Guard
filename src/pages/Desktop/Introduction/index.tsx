import React from "react";
import icon_1 from "../../images/icon_1.png";
import icon_2 from "../../images/icon_2.png";
import icon_3 from "../../images/icon_3.png";
import icon_4 from "../../images/icon_4.png";
export default function index() {
  const dataIntro = [
    {
      image: icon_1,
      title: "서명 요청하기",
      content: "필요한 계약서 파일을 업로드합니다.",
    },
    {
      image: icon_2,
      title: "서명 요청하기",
      content: "업로드한 계약서 파일에서명 요청을 하세요.",
    },
    {
      image: icon_3,
      title: "서명 입력하기",
      content: "상대방이 간단한 절차를 통해서명할 수 있습니다.",
    },
    {
      image: icon_4,
      title: "계약 완료",
      content: "언제 어디서든분 만에 계약 완료!",
    },
  ];
  return (
    <div className="introduction">
      <div className="width-default">
        <div className="introduction__content">
          <div className="introduction__top">
            <div className="introduction__title">
              <span>간단하게 끝내는 계약과정</span>
            </div>
            <div className="introduction__content">
              <span>계약서 파일을 업로드하여 서명을 요청해 보세요.</span>
              <span>
                상대방은 회원가입 없이 이메일, 카카오톡 링크를 통해 서명할 수
                있습니다.
              </span>
              <span>언제 어디서든 5분만에 계약을 체결해 보세요.</span>
            </div>
          </div>
          <div className="introduction__bot">
            {dataIntro.map((item, index) => (
              <div className="introduction__item" key={index}>
                <div className="introduction__image">
                  <img src={item.image} alt={item.title}></img>
                </div>
                <div className="introduction__thread">
                  <p className="introduction__thread-title">{item.title}</p>
                  <span className="introduction__thread-content">
                    {item.content}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

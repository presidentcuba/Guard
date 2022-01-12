import React from "react";
import icon_1 from "../../images/icon_1.svg";
import icon_2 from "../../images/icon_2.svg";
import icon_3 from "../../images/icon_3.svg";
import icon_4 from "../../images/icon_4.svg";
import icon_5 from "../../images/icon_5.svg";
import icon_6 from "../../images/icon_6.svg";
import top from "../../images/top.png";
import { RightOutlined } from "@ant-design/icons";
export default function index() {
  const dataValueOne = [
    {
      img: icon_1,
      title: "쉽고 편리하게",
      content: "번거로운 절차 없이 누구나 빠르게 계약을 체결할 수 있습니다.",
    },
    {
      img: icon_2,
      title: "안전한 보안",
      content: "데이터는 암호화되어 전송되고 안전한 곳에 저장됩니다.",
    },
    {
      img: icon_3,
      title: "다양한 파일형식",
      content: "한글, 오피스부터 PDF, JPG와같은 이미지 파일도 변환없이 지원",
    },
  ];
  const dataValueTwo = [
    {
      img: icon_4,
      title: "간단한 본인인증",
      content: "공인인증서와 ActiveX없이도 본인인증을 할 수 있습니다.",
    },
    {
      img: icon_5,
      title: "효율적인 작업",
      content: "자주 사용하는 문서들을 저장하고 불러와 작업할 수 있습니다.",
    },
    {
      img: icon_6,
      title: "계약서 관리",
      content:
        "관리가 필요한 문서를 한 눈에 보고체계적으로 관리할 수 있습니다.",
    },
  ];
  return (
    <div className="value">
      <div className="width-default">
        <div className="value__content">
          <div className="value__title">
            <span className="title">가드 시그니처를 선택하는 이유</span>
            <span className="content">
              많은 기업들이 가드 시그니처를 선택하는 이유,
            </span>
            <span>아래 버튼을 눌러 상세한 정보를 알아보세요.</span>
          </div>
          <div className="content_body">
            <div className="content_one">
              {dataValueOne.map((item, index) => (
                <div className="item">
                  <div className="icon">
                    <img src={item.img}></img>
                  </div>
                  <span className="title">{item.title}</span>
                  <span className="content">{item.content}</span>
                </div>
              ))}
            </div>
            <div className="content_true">
              <img className="image" src={top}></img>
            </div>
            <div className="content_three">
              {dataValueTwo.map((item, index) => (
                <div className="item">
                  <div className="icon">
                    <img src={item.img}></img>
                  </div>
                  <span className="title">{item.title}</span>
                  <span className="content">{item.content}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="more__btn">
            <a href="#" className="btn">
              <span>더 살펴보기</span>
              <RightOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

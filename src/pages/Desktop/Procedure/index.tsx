import React from "react";
import pro1 from "../../images/pro1.png";
import pro2 from "../../images/pro2.png";
import pro3 from "../../images/pro3.png";
import pro4 from "../../images/pro4.png";
export default function index() {
  const listProcedure = [
    {
      image: pro1,
      number: "First",
      title: "한 눈에 확인하는계약 상태",
      content:
        "계약이 진행되는 모든 과정을 실시간으로 추적해보세요. 진행 상태에 따라 내 서명 필요, 서명 대기중, 서명 완료, 취소, 거절 등이 조회됩니다. 상태 필터 기능을 통해 상태별로 문서를 나열하고 관리할 수도 있습니다.",
    },
    {
      image: pro2,
      number: "second",
      title: "사용하던 서명 그대로",
      content:
        "사용하던 사인과 도장을 PC와 모바일에서도 사용할 수 있습니다. 사인을 직접 그리거나, 다양한 서체의 디지털 도장을 만들 수 있습니다. 실제 도장을 카메라로 찍어서 업로드 하면 깔끔하게 보정되며, 가드 시그니처에서 만든 사인과 도장을 계약서에 바로 사용할 수 있습니다",
    },
    {
      image: pro3,
      number: "third",
      title: "간편한 본인인증",
      content:
        "공인인증서와 OTP, Active X 등을 요구하지 않습니다. 간단하고 빠른 휴대폰 인증과 접근 암호 설정으로 본인인증을 요청할 수 있습니다. 본인인증 요청은 법적효력과 상관없이 선택적으로 이용 가능합니다.",
    },
    {
      image: pro4,
      number: "fourth",
      title: "텍스트 및체크박스 입력",
      content:
        "문서에 텍스트 박스와 체크박스를 입력해 보세요.입력 위치, 크기, 글자체를 자유롭게 지정하고필수입력 여부를 설정할 수 있습니다.상대방에게 텍스트 입력을 요청할 수도 있습니다.",
    },
  ];
  return (
    <div className="procedure">
      <div className="procedure__content">
        {listProcedure.map((item, index) =>
          index === 0 || index === 2 ? (
            <div className="procedure__item">
              <div className="width-default">
                <div className="procedure__item_box">
                  <div className="procedure__image">
                    <img src={item.image} alt=""></img>
                  </div>
                  <div className="procedure__thread">
                    <div className="procedure__thread_box">
                      <span className="procedure__number">{item.number}</span>
                      <span className="procedure__title">{item.title}</span>
                      <span className="procedure__content">{item.content}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="procedure__item_two">
              <div className="width-default">
                <div className="procedure__thread_two_box">
                  <div className="procedure__thread_two">
                    <div className="procedure__thread_box">
                      <span className="procedure__number">{item.number}</span>
                      <span className="procedure__title">{item.title}</span>
                      <span className="procedure__content">{item.content}</span>
                    </div>
                  </div>
                  <div className="procedure__image_two">
                    <img src={item.image} alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

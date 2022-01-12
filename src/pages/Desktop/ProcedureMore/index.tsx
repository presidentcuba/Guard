import React from "react";
import halu1 from "../../images/halu1.png";
import halu2 from "../../images/halu2.png";
import halu3 from "../../images/halu3.png";
import { Row, Col } from "reactstrap";
export default function index() {
  const listData = [
    {
      image: halu1,
      title_main: "모두 시그니처만 의효과적인 기능",
      title_one: "템플릿 저장 및 불러오기",
      content_one:
        "자주 사용하는 문서를 저장하고 필요할 때 마다 템플릿을 불러와 빠르게 작업할 수 있습니다.",
      title_two: "폴더 설정",
      content_two:
        "별도로 관리가 필요한 문서들은 폴더 설정을 통해 보다 체계적으로 관리할 수 있습니다.",
      title_three: "텍스트 및 체크박스 입력",
      content_three:
        "텍스트, 체크박스를 설정하여 문서에 텍스트를 자유롭게 입력하고 상대방의 동의 여부를 확인할 수 있습니다.",
      title_four: "다양한 파일형식 지원",
      content_four:
        "한글, 오피스 계열(Word, PPT, Excel), PDF부터 JPG, PNG,GIF, BMP와 같은 이미지 파일까지 변환없이 업로드하고사용할 수 있습니다.",
    },
    {
      image: halu2,
      title_main: "계약을 쉽고 빠르게체결하는 방법!",
      title_one: "공인인증서 없는 본인인증",
      content_one:
        "공인인증서와 ActiveX가 필요 없습니다. 이메일 인증,휴대폰 인증, 암호인증 설정으로 간편하게 본인인증 해 보세요.",
      title_two: "카카오톡으로 서명 요청하기",
      content_two:
        "카카오톡으로 상대방에게 서명을 요청해보세요. 상대방은 PC, 모바일 언제 어디에서나 계약서에 서명할 수 있습니다.",
      title_three: "계약 체결과 보안",
      content_three:
        "누구나 이용하기 쉬운 직관적인 흐름으로 빠르고 신속하게 계약을 체결하고, 이후에도 지속적으로 관리할 수 있습니다.",
      title_four: "가입 없이 즉시 서명",
      content_four:
        "계약 상대방은 번거로운 회원가입 절차 없이 간편인증 후즉시 서명할 수 있습니다.",
    },
    {
      image: halu3,
      title_main: "수월하게 계약을 완료하세요",
      title_one: "감사추적인증서를 통한 증명",
      content_one:
        "계약완료시 원본과 함께 발급되는 ‘감사추적인증서’로 계약 당사자의 행위를 쉽게 증명할 수 있습니다.",
      title_two: "혼자 서명하기",
      content_two:
        "동의서, 영수증 같이 본인만 서명하는 문서에도 빠르게 서명할 수 있습니다.",
      title_three: "다양한 드라이브 업로드 지원",
      content_three:
        "Google Drive, Dropbox, Box, One Drive에 저장되어 있 문서를 변환 없이 바로 업로드하여 이용하세요.",
      title_four: "계약 문서 관리",
      content_four:
        "내문서함에서 계약 문서별로 내용 확인하기, 계약서 다운로드,공유하기, 삭제하기가 가능합니다.",
    },
  ];
  return (
    <div className="procedureMore">
      <div className="width-default">
        <div className="procedureMore__content">
          {listData.map((item, index) =>
            index === 1 ? (
              <div className="procedureMore__box">
                <div className="procedureMore__image thread">
                  <img src={item.image} alt={item.title_main}></img>
                </div>
                <div className="procedureMore__item">
                  <div className="procedureMore__title two">
                    <span>{item.title_main}</span>
                  </div>
                  <div className="procedureMore__thread">
                    <div className="procedureMore__title_one title">
                      <span className="main_title">{item.title_one}</span>
                      <span>{item.content_one}</span>
                    </div>
                    <div className="procedureMore__title_two title">
                      <span className="main_title">{item.title_two}</span>
                      <span>{item.content_two}</span>
                    </div>
                    <div className="procedureMore__title_three title">
                      <span className="main_title">{item.title_three}</span>
                      <span>{item.content_three}</span>
                    </div>
                    <div className="procedureMore__title_four title">
                      <span className="main_title">{item.title_four}</span>
                      <span>{item.content_four}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="procedureMore__box">
                <div className="procedureMore__item">
                  <div className="procedureMore__title two">
                    <span>{item.title_main}</span>
                  </div>
                  <div className="procedureMore__thread">
                    <div className="procedureMore__title_one title">
                      <span className="main_title">{item.title_one}</span>
                      <span>{item.content_one}</span>
                    </div>
                    <div className="procedureMore__title_two title">
                      <span className="main_title">{item.title_two}</span>
                      <span>{item.content_two}</span>
                    </div>
                    <div className="procedureMore__title_three title">
                      <span className="main_title">{item.title_three}</span>
                      <span>{item.content_three}</span>
                    </div>
                    <div className="procedureMore__title_four title">
                      <span className="main_title">{item.title_four}</span>
                      <span>{item.content_four}</span>
                    </div>
                  </div>
                </div>
                <div className="procedureMore__image thread">
                  <img src={item.image} alt={item.title_main}></img>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

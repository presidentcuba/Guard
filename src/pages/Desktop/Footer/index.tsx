import React from "react";
import icon1 from "../../images/icon.svg";
import icon2 from "../../images/iconn.svg";
import icon3 from "../../images/iconnn.svg";
export default function index() {
  return (
    <div className="footer">
      <div className="width-default">
        <div className="footer__content">
          <div className="content_top">
            <div className="left">
              <ul>
                <li>
                  <a href="#">이용약관 </a>
                </li>
                <li>
                  <a href="#">개인정보처리방침 </a>
                </li>
                <li>
                  <a href="#">고객센터 </a>
                </li>
              </ul>
            </div>
            <div className="right">
              <a href="#">
                <img src={icon1}></img>
              </a>
              <a href="#">
                <img src={icon2}></img>
              </a>
              <a href="#">
                <img src={icon3}></img>
              </a>
            </div>
          </div>
        </div>
        <div className="content_bot">
          <span className="contact">
            (주) 가드시그니처 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 :
            356-00-00000 이메일 : test0101@guardsignature.co.kr｜ FAX :
            070-0000-0000 서울특별시 강남구 도산대로 8길 17 3층{" "}
          </span>
          <span>Copyright© GUARDSIGNATURE All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

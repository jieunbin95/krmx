import React from "react";
import { MainSlide } from "../../component/MainSlide";
import "../main/main.css";
import { Card } from "../../component/Card";
import SaleCard from "../../component/SaleCard";

export const Main = () => {
  return (
    <>
      <header>
        <div class="inner">
          <div class="header-box">
            <a href="/">
              <img src="" />
              아이콘
            </a>

            <div class="main-menu">
              <ul>
                <li>
                  <a class="main-text" href="/">
                    회원권 매매
                  </a>
                </li>
                <li>
                  <a href="/">회원권 안내</a>
                </li>
                <li>
                  <a href="/">매매 문의</a>
                </li>
                <li>
                  <input />
                </li>
                <li>
                  <img />
                  자유 cc골프장
                </li>
              </ul>
            </div>

            <div class="main-sub-menu">
              <ul>
                <li>
                  <a href="/">로그인</a>
                </li>
                <li>
                  <a href="/">회원가입</a>
                </li>
                <li>
                  <a href="/">고객센터</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <section class="visual">
        <div class="inner">
          <MainSlide />
        </div>
      </section>

      <section class="category">
        <div class="inner">
          <h4>전체 매물</h4>
          <div class="category-menu">
            <div class="category-menu-box">
              <div class="category-menu-item">
                <div>icon</div>
                <span>골프장</span>
              </div>
              <div class="category-menu-item">
                <div>icon</div>
                <span>콘도&middot;리조트</span>
              </div>
              <div class="category-menu-item">
                <div>icon</div>
                <span>호텔 휘트니스</span>
              </div>
              <div class="category-menu-item">
                <div>icon</div>
                <span>해외 골프장</span>
              </div>
              <div class="category-menu-item">
                <div>icon</div>
                <span>해외 골프투어</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="filter">
        <div class="inner">
          <div class="filter-banner">
            <div class="filter-banner-item">
              <div>회원권 전체</div>
              <div>지역 전체</div>
            </div>
            <div>
              <input placeholder="골프장 이름으로 검색해 보세요" />
            </div>
          </div>
        </div>
      </section>

      <section class="order-filter">
        <div class="inner">
          <div class="order-filter-box">
            <ul>
              <li>
                <a href="/">추천순</a>
              </li>
              <li>
                <a href="/">높은가격순</a>
              </li>
              <li>
                <a href="/">낮은가격순</a>
              </li>
            </ul>

            <div>
              <a href="/">전체보기</a>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <div class="inner">
          <Card />
        </div>
      </section>

      <section class="banner">
        <div class="inner">
          <div class="banner-box">
            <div>배너1</div>
            <div>배너2</div>
          </div>
        </div>
      </section>

      <section class="sale-card">
        <div class="inner">
          <h4>추천 매물</h4>
          <SaleCard />
        </div>
      </section>

      <footer>
        <div class="inner">
          <div class="footer-menu">
            <ul>
              <li>
                <a href="/">회사소개</a>
              </li>
              <li>
                <a href="/">인재채용</a>
              </li>
              <li>
                <a href="/">개인정보 처리방침</a>
              </li>
              <li>
                <a href="/">이용약관</a>
              </li>
              <li>
                <a href="/">제휴문의</a>
              </li>
            </ul>

            <div>
              <img />
              인스타
              <img />
              블로그
            </div>
          </div>

          <div class="info">
            <span>한국회원거래소</span>
            <span>대표:이나단</span>
            <span>대표번호 : 1899-9844</span>
            <span>이메일:test@test.co.kr</span>
          </div>

          <div>
            <span>주소:경기도 광주시 새말길 239</span>
            <span>사업자등록번호:342-88-02986</span>
          </div>

          <p class="copyright">&copy; 한국회원권거래소.All Rights Reserved.</p>
        </div>
        <div></div>
      </footer>
    </>
  );
};

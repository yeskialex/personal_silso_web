import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/black_real_logo.svg" alt="SILSO" className="footer-logo" />
            <p>실패에서 성공으로 가는 여정을 함께하는 커뮤니티</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>서비스</h4>
            <ul>
              <li><a href="#features">스토리 공유</a></li>
              <li><a href="#features">멘토링</a></li>
              <li><a href="#features">네트워킹</a></li>
              <li><a href="#features">리소스</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>회사</h4>
            <ul>
              <li><a href="#about">소개</a></li>
              <li><a href="#">팀</a></li>
              <li><a href="#">채용</a></li>
              <li><a href="#">블로그</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>지원</h4>
            <ul>
              <li><a href="#">도움말</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">연락처</a></li>
              <li><a href="#">피드백</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>문의하기</h4>
            <div className="contact-info">
              <p>📧 contact@silso.co.kr</p>
              <p>📱 02-1234-5678</p>
              <p>📍 서울시 강남구 테헤란로 123</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2024 SILSO. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">개인정보처리방침</a>
              <a href="#">이용약관</a>
              <a href="#">쿠키정책</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
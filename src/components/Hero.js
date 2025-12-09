import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/purple_real_logo.svg" alt="SILSO" className="logo" />
          </div>
          <div className="nav-links">
            <a href="#about">소개</a>
            <a href="#features">서비스</a>
            <a href="#contact">문의</a>
            <button className="nav-button">시작하기</button>
          </div>
        </div>
      </nav>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            실패에서 성공으로<br />
            <span className="highlight">SILSO</span>와 함께하세요
          </h1>
          <p className="hero-description">
            창업 실패 경험을 가진 사람들이 모여 서로의 이야기를 나누고,<br />
            새로운 기회를 찾을 수 있는 커뮤니티 플랫폼입니다.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">지금 시작하기</button>
            <button className="secondary-button">더 알아보기</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="card-header">
              <div className="card-avatar"></div>
              <div className="card-info">
                <h4>김창업</h4>
                <p>3번의 실패 경험</p>
              </div>
            </div>
            <div className="card-content">
              <p>실패했지만 포기하지 않습니다. 다시 일어날 수 있는 기회를 찾고 있어요.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
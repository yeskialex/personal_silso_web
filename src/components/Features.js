import React from 'react';

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>SILSO 주요 서비스</h2>
          <p>실패를 성공으로 연결하는 다양한 기능들</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#5F37CF" opacity="0.1"/>
                <path d="M16 24L22 30L32 18" stroke="#5F37CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>실패 스토리 공유</h3>
            <p>익명 또는 실명으로 실패 경험을 안전하게 공유하고, 다른 창업자들의 이야기를 통해 위로와 교훈을 얻을 수 있습니다.</p>
            <ul className="feature-details">
              <li>카테고리별 실패 사례 분류</li>
              <li>감정적 지지 시스템</li>
              <li>익명성 보장</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#5F37CF" opacity="0.1"/>
                <path d="M18 32L30 20M18 20H30V32" stroke="#5F37CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>멘토링 매칭</h3>
            <p>경험이 풍부한 선배 창업자들과 연결되어 1:1 멘토링을 받고, 실질적인 조언과 가이드를 얻을 수 있습니다.</p>
            <ul className="feature-details">
              <li>업종별 전문 멘토 매칭</li>
              <li>정기적인 멘토링 세션</li>
              <li>멘토링 품질 관리</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#5F37CF" opacity="0.1"/>
                <path d="M24 16V24L30 30" stroke="#5F37CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>네트워킹 이벤트</h3>
            <p>정기적인 오프라인 모임과 온라인 이벤트를 통해 같은 처지의 창업자들과 네트워크를 형성할 수 있습니다.</p>
            <ul className="feature-details">
              <li>월간 오프라인 모임</li>
              <li>온라인 웨비나 및 워크샵</li>
              <li>업종별 소규모 모임</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#5F37CF" opacity="0.1"/>
                <path d="M20 28L24 32L28 28M24 16V30" stroke="#5F37CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>리소스 라이브러리</h3>
            <p>창업 재도전을 위한 실용적인 자료들과 템플릿, 가이드라인을 무료로 제공합니다.</p>
            <ul className="feature-details">
              <li>사업계획서 템플릿</li>
              <li>투자 준비 가이드</li>
              <li>법무/세무 정보</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#5F37CF" opacity="0.1"/>
                <path d="M32 20L24 28L16 20" stroke="#5F37CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>투자 연결</h3>
            <p>실패 경험을 자산으로 인정하는 투자자들과의 연결 기회를 제공하여 재기 가능성을 높입니다.</p>
            <ul className="feature-details">
              <li>실패 친화적 투자자 DB</li>
              <li>피칭 기회 제공</li>
              <li>투자 준비 지원</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="20" fill="#5F37CF" opacity="0.1"/>
                <path d="M24 16L28 20H20L24 16ZM24 32L20 28H28L24 32Z" stroke="#5F37CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>심리적 지원</h3>
            <p>전문 상담사와의 연결을 통해 실패로 인한 트라우마를 극복하고 정신적 회복을 도와드립니다.</p>
            <ul className="feature-details">
              <li>전문 상담사 연결</li>
              <li>그룹 치료 프로그램</li>
              <li>자기계발 콘텐츠</li>
            </ul>
          </div>
        </div>

        <div className="cta-section">
          <h2>지금 SILSO에 참여하세요</h2>
          <p>실패는 끝이 아닙니다. 새로운 시작의 발판이 될 수 있습니다.</p>
          <button className="primary-button large">무료로 시작하기</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
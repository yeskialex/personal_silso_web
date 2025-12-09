import React from 'react';

const ProblemSolution = () => {
  return (
    <section className="problem-solution" id="about">
      <div className="container">
        <div className="problem-section">
          <div className="section-header">
            <h2>창업 실패 후 겪는 어려움</h2>
            <p>많은 창업자들이 실패 후 홀로 고군분투하고 있습니다</p>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">😔</div>
              <h3>심리적 고립감</h3>
              <p>실패에 대한 부담감으로 혼자 고민하며 외로움을 느끼게 됩니다</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon">🚫</div>
              <h3>네트워킹 기회 부족</h3>
              <p>비슷한 경험을 가진 사람들과 만날 기회가 제한적입니다</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon">💡</div>
              <h3>경험 공유의 어려움</h3>
              <p>실패 경험을 통해 얻은 귀중한 인사이트를 나눌 곳이 없습니다</p>
            </div>
          </div>
        </div>

        <div className="solution-section">
          <div className="section-header">
            <h2>SILSO가 제공하는 솔루션</h2>
            <p>실패를 성장의 발판으로 만드는 커뮤니티</p>
          </div>

          <div className="solution-content">
            <div className="solution-visual">
              <div className="community-preview">
                <div className="chat-bubble">
                  <p>"저도 3번 실패했어요. 하지만 그 경험이 지금 사업에 큰 도움이 되고 있습니다!"</p>
                </div>
                <div className="chat-bubble">
                  <p>"실패 경험 덕분에 투자자들이 더 신뢰해주네요. 함께 새로운 도전해봐요!"</p>
                </div>
              </div>
            </div>

            <div className="solution-features">
              <div className="solution-item">
                <div className="solution-number">01</div>
                <h3>안전한 소통 공간</h3>
                <p>실패 경험을 자유롭게 나누고 서로를 이해할 수 있는 환경을 제공합니다</p>
              </div>

              <div className="solution-item">
                <div className="solution-number">02</div>
                <h3>멘토링 & 네트워킹</h3>
                <p>비슷한 경험을 가진 선배 창업자들과의 멘토링 기회를 연결해드립니다</p>
              </div>

              <div className="solution-item">
                <div className="solution-number">03</div>
                <h3>새로운 기회 발굴</h3>
                <p>실패 경험을 바탕으로 한 새로운 사업 아이디어와 협업 기회를 제공합니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
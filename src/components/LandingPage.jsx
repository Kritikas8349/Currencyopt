import React, { useState } from "react";
import "./LandingPage.css";
import { FaBoxOpen, FaGlobeAsia, FaHandshake, FaAward } from "react-icons/fa";
import { FaChartLine, FaBolt, FaCogs, FaShieldAlt, FaHeadset, FaUserGraduate } from "react-icons/fa";
import { FaBrain, FaSync } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import ContactPopup from "./ContactPopup";



const LandingPage = () => {

  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);

  };

  return (
    <div className="landing">
      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-left">
          <h1>Certified Insights. Strategic Trading. Financial Excellence.</h1>
          <p>
          Unlock your trading potential with data-driven strategies, personalized guidance, and proven market expertise. Start trading smarter today and achieve the results you deserve.
          </p>
          <button className="hero-btn" onClick={() => setIsOpen(true)}>
            Claim Your Free Trial
          </button>

        </div>
      </section>

      <div className="stats-wrapper">
      <div className="stats-slider">
        {[...Array(2)].map((_, i) => (
          <div className="stats-container" key={i}>
            
            <div className="stat-box">
              <div className="icon-circle">
                <FaBoxOpen className="stat-icon" />
              </div>
              <div className="text-block">
                <h2>10K+</h2>
                <p>Assets Traded</p>
              </div>
            </div>

            <div className="stat-box">
              <div className="icon-circle">
                <FaGlobeAsia className="stat-icon" />
              </div>
              <div className="text-block">
                <h2>25+</h2>
                <p>Countries Served</p>
              </div>
            </div>

            <div className="stat-box">
              <div className="icon-circle">
                <FaHandshake className="stat-icon" />
              </div>
              <div className="text-block">
                <h2>500+</h2>
                <p>Global Partners</p>
              </div>
            </div>

            <div className="stat-box">
              <div className="icon-circle">
                <FaAward className="stat-icon" />
              </div>
              <div className="text-block">
                <h2>50K+</h2>
                <p>Successful Deals</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>



    <section className="about-section" id="about">
  {/* Left - Single Image Frame */}
  <div className="about-image-frame">
    <img src="business.png" alt="About Us" />
  </div>

  {/* Right Content */}
  <div className="about-content">
    <p className="about-tag">ABOUT US</p>

    <h2 className="about-title">
      We Are a Dedicated Team Focused on Driving Your Digital Success
    </h2>

    <p className="about-text">
      We are a dedicated team focused on delivering high-quality digital
      solutions that help businesses grow and succeed. Our core values are
      innovation, transparency, and customer satisfaction.
    </p>

    <blockquote className="about-quote">
      “Our mission is to empower businesses with modern, data-driven solutions 
      that bring real growth, trust, and long-lasting success.”
    </blockquote>

    <ul className="about-list">
      <li>✔ Over 10+ years of experience in the industry</li>
      <li>✔ Trusted by clients worldwide</li>
      <li>✔ Dedicated support team</li>
      <li>✔ Commitment to long-term partnerships</li>
      <li>✔ Personalized trading guidance and support</li>
      <li>✔ Expertise in stocks, forex, crypto, and commodities</li>
      <li>✔ High emphasis on data privacy and security</li>
    </ul>

    <button className="learn-btn" onClick={() => setIsOpen(true)}>
        Contact Us →
      </button>
      
  </div>
</section>




    <section className="offer-section" id="services">
      <h2 className="offer-title">What We Offer</h2>

      <div className="offer-grid">

        <div className="offer-card">
          <FaChartLine className="offer-icon" />
          <h3>Multi-Asset Trading</h3>
          <p>Trade Forex, Crypto, Commodities & Global Indices in one secure platform.</p>
        </div>

        <div className="offer-card">
          <FaBolt className="offer-icon" />
          <h3>Lightning-Fast Execution</h3>
          <p>Ultra-low latency execution ensures you never miss profitable market opportunities.</p>
        </div>

        <div className="offer-card">
          <FaCogs className="offer-icon" />
          <h3>Advanced Trading Tools</h3>
          <p>AI trading signals, analytics & automated strategy execution for smarter trading.</p>
        </div>

        <div className="offer-card">
          <FaShieldAlt className="offer-icon" />
          <h3>High Liquidity & Security</h3>
          <p>Encrypted & insured transactions backed by institutional-grade liquidity.</p>
        </div>

        <div className="offer-card">
          <FaHeadset className="offer-icon" />
          <h3>24/7 Customer Support</h3>
          <p>Dedicated support team ready to help anytime — because markets never sleep.</p>
        </div>

        <div className="offer-card">
          <FaUserGraduate className="offer-icon" />
          <h3>Learn & Grow Program</h3>
          <p>Webinars, tutorials & demo trading designed to help traders master the markets.</p>
        </div>

      </div>
    </section>


    <section className="howitworks-section background-gradient-dark" id="howitworks">
  <h2 className="howitworks-title">How We Help You Trade Smarter</h2>

  <div className="steps-container">

    {/* STEP 1 */}
    <div className="step-card up">
      <div className="step-icon">
        <span className="icon"><FaChartLine /></span>
        <span className="step-num">01</span>
      </div>
      <h3>Market Onboarding</h3>
      <p>We analyze your trading goals and risk profile to tailor your market journey.</p>
    </div>

    <img src="arrow1.png" alt="arrow" className="step-arrow down-arrow" />

    {/* STEP 2 */}
    <div className="step-card down">
      <div className="step-icon">
        <span className="icon"><FaBrain /></span>
        <span className="step-num">02</span>
      </div>
      <h3>Data-Driven Analysis</h3>
      <p>AI-powered insights identify high-potential opportunities in real time.</p>
    </div>

    <img src="arrow1.png" alt="arrow" className="step-arrow up-arrow" />

    {/* STEP 3 */}
    <div className="step-card up">
      <div className="step-icon">
        <span className="icon"><FaBolt /></span>
        <span className="step-num">03</span>
      </div>
      <h3>Smart Execution</h3>
      <p>Execute with speed and precision using automated risk management.</p>
    </div>

    <img src="arrow1.png" alt="arrow" className="step-arrow down-arrow" />

    {/* STEP 4 */}
    <div className="step-card down">
      <div className="step-icon">
        <span className="icon"><FaSync /></span>
        <span className="step-num">04</span>
      </div>
      <h3>Continuous Optimization</h3>
      <p>Track performance and refine strategies to maximize long-term results.</p>
    </div>

  </div>
</section>



<section className="faq-section" id="faqs">
<h2 className="faq-title">Have Questions?</h2>

<div className="faq-layout">
  
  <div className="faq-vertical-line"></div>

  <div className="faq-container">
    
    <div
      className={`faq-item ${openIndex === 0 ? "active" : ""}`}
      onClick={() => toggleFAQ(0)}
    >
      <div className="faq-question">
        <span>What does “Certified Analysts” mean?</span>
        <FaQuestionCircle
          className={`arrow ${openIndex === 0 ? "rotate" : ""}`}
        />
      </div>
      <div
        className={`faq-answer-wrapper ${
          openIndex === 0 ? "open" : "closed"
        }`}
      >
        <p className="faq-answer">
        Our experts hold professional designations like CFA, CMT, and FRM, ensuring every analysis follows real financial standards — not guesswork.
        </p>
      </div>
    </div>

    
    <div
      className={`faq-item ${openIndex === 1 ? "active" : ""}`}
      onClick={() => toggleFAQ(1)}
    >
      <div className="faq-question">
        <span>What is FOMC and why does it matter?</span>
        <FaQuestionCircle
          className={`arrow ${openIndex === 1 ? "rotate" : ""}`}
        />
      </div>
      <div
        className={`faq-answer-wrapper ${
          openIndex === 1 ? "open" : "closed"
        }`}
      >
        <p className="faq-answer">
        The Federal Open Market Committee (FOMC) sets U.S. interest rate policy, which impacts global currencies. We monitor its meetings closely to anticipate market shifts.
        </p>
      </div>
    </div>

    
    <div
      className={`faq-item ${openIndex === 2 ? "active" : ""}`}
      onClick={() => toggleFAQ(2)}
    >
      <div className="faq-question">
        <span>Is there a cost for your services?</span>
        <FaQuestionCircle
          className={`arrow ${openIndex === 2 ? "rotate" : ""}`}
        />
      </div>
      <div
        className={`faq-answer-wrapper ${
          openIndex === 2 ? "open" : "closed"
        }`}
      >
        <p className="faq-answer">
        We provide a free trial for all new users. After that, our experts will guide you through available options.

        </p>
      </div>
    </div>

    
    <div
      className={`faq-item ${openIndex === 3 ? "active" : ""}`}
      onClick={() => toggleFAQ(3)}
    >
      <div className="faq-question">
        <span>Do I need experience to start?</span>
        <FaQuestionCircle
          className={`arrow ${openIndex === 3 ? "rotate" : ""}`}
        />
      </div>
      <div
        className={`faq-answer-wrapper ${
          openIndex === 3 ? "open" : "closed"
        }`}
      >
        <p className="faq-answer">
        No — we simplify complex market insights into actionable steps anyone can follow.
        </p>
      </div>
    </div>
  </div>
</div>


<img src="map.png" alt="World Map" className="faq-map" />
</section>



<section className="cta-section">
      <div className="cta-container">
        <img src="shape.png" alt="Trading Icon" className="cta-icon" />
        <div className="cta-text">
          <h2>Open an Account & Start Trading!</h2>
          <p>Join thousands of traders and take control of your financial future today.</p>
        </div>
        <button className="cta-button" onClick={() => setIsOpen(true)}>
          Claim Your Free Trail
        </button>

      </div>
    </section>

    <ContactPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />

    </div>
  );
};

export default LandingPage;

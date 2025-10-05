import React from 'react';
import './App.css';
import { FaUniversity, FaBook, FaMicrophoneAlt, FaBriefcase, FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiGooglescholar } from "react-icons/si";
import { FiExternalLink } from 'react-icons/fi';

function App() {
  return (
    <div className="App"> 
      <div className="container">
        {/* --- 左カラム --- */}
        <div className="left-column">
          <div className="profile-image-container">
            <img src="/no-glasses-square.jpg" alt="Profile" className="profile-image" />
          </div>
          <h1 className="profile-name">Kotaro Ikeda<br/>(池田滉太郎)</h1>
          <p className="profile-title">The University of Tokyo / undergraduate student (B4)</p>
          <a href="/CV.pdf" download="CV_Kotaro_Ikeda.pdf" className="cv-download-button-left">
            Download CV (PDF)
          </a>
          <div className="contact-section section">
            <h3><FaEnvelope /> Contact</h3> 
            <div className="contact-info">
              <p>E-mail: <a href="mailto:kotatumuri114@icloud.com">kotatumuri114[at]icloud.com</a></p>
            </div>
          </div>
          <div className="links-section section">
            <h3>Links</h3>
            <ul className="links-list">
              <li><a href="https://github.com/kotatumuri-room" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a></li>
              <li><a href="https://twitter.com/kotaro_IK" target="_blank" rel="noopener noreferrer"><FaTwitter /> X (Twitter)</a></li>
              <li><a href="https://scholar.google.com/citations?user=BLznLMkAAAAJ&hl" target="_blank" rel="noopener noreferrer"><SiGooglescholar /> Google Scholar</a></li>
            </ul>
          </div>
        </div>

        {/* --- 右カラム --- */}
        <div className="right-column">
          <section id="affiliation" className="section">
            <h2><FaUniversity /> Affiliation</h2> 
            <ul className="text-list">
              <li><strong>2022 - present</strong> The University of Tokyo, Department of Mathematical Engineering and Information Physics, School of Engineering</li>
            </ul>
          </section>
          <section id="publications" className="section">
            <h2><FaBook /> Publications</h2> 
            <ul>
              <li className="publication-item">
                <a href="https://example.com/publication1" target="_blank" rel="noopener noreferrer">Speed-accuracy relations for diffusion models: Wisdom from nonequilibrium thermodynamics and optimal transport<FiExternalLink /></a>
                <span className="authors">Kotaro Ikeda, Tomoya Uda, Daisuke Okanohara, Sosuke Ito</span>
                <span className="conference">Physical Review X 15, 031031 (2025)</span>
                <div className="extra-links">
                  <a href="https://www.s.u-tokyo.ac.jp/ja/press/10887/" target="_blank" rel="noopener noreferrer" className="press-release-link">Press Release (JA)<FiExternalLink /></a>
                  <a href="https://www.eurekalert.org/news-releases/1093188/" target="_blank" rel="noopener noreferrer" className="press-release-link">Press Release (EN)<FiExternalLink /></a>
                </div>
              </li>
              <li className="publication-item">
                <a href="https://example.com/publication2" target="_blank" rel="noopener noreferrer">Pairwise Optimal Transports for Training All-to-All Flow-Based Condition Transfer Model<FiExternalLink /></a>
                <span className="authors">Kotaro Ikeda, Masanori Koyama, Jinzhe Zhang, Kohei Hayashi, Kenji Fukumizu</span>
                <span className="conference">NeurIPS 2025 </span>
              </li>
            </ul>
          </section>
          <section id="conferences-in-japan" className="section">
            <h2><FaMicrophoneAlt /> Conferences in Japan</h2> 
            <ul>
              <li className="publication-item">
                <a href="https://example.com/conference1" target="_blank" rel="noopener noreferrer">Speed-accuracy relations for diffusion models: Wisdom from nonequilibrium thermodynamics and optimal transport<FiExternalLink /></a>
                <span className="authors">Kotaro Ikeda, Tomoya Uda, Daisuke Okanohara, Sosuke Ito</span>
                <span className="conference">The 27th Information-Based Induction Sciences Workshop (IBIS 2024)</span>
              </li>
              <li className="publication-item">
                <a href="https://example.com/conference2" target="_blank" rel="noopener noreferrer">GeoBeta Flow Matching<FiExternalLink /></a>
                <span className="authors">Kotaro Ikeda, Masanori Koyama, Kohei Hayashi, Kenji Fukumizu</span>
                <span className="conference">The 27th Information-Based Induction Sciences Workshop (IBIS 2024)</span>
              </li>
            </ul>
          </section>
          <section id="employment" className="section">
            <h2><FaBriefcase /> Employment</h2> 
            <ul className="text-list">
              <li><strong> Part-time engineer</strong>, Akari Inc., (May 2023 - Mar 2024)</li>
            </ul>
            <ul className="text-list">
              <li><strong>Summer Internship</strong>, Preferred Networks Inc., (Aug 2024 - Mar 2025)</li>
            </ul>
            <ul className="text-list">
              <li><strong>Part-time engineer</strong>, Meltly Inc., (Apr 2025 - present)</li>
            </ul>
          </section>
        </div>
      </div>
      
      <footer>
        <p>&copy; {new Date().getFullYear()} Kotaro Ikeda. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
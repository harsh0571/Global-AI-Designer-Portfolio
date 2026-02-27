import { Link } from 'react-router-dom';
import './Footer.css';

const marqueeItems = [
    'AI Image Generation', 'Video Production', 'Prompt Engineering',
    'Custom Audio', 'Motion Graphics', 'Brand Campaigns', 'Localization',
    'Concept Art', 'VFX', 'Color Grading', 'Sound Design', 'Content Strategy',
];

export default function Footer() {
    return (
        <footer className="footer">
            {/* Marquee */}
            <div className="footer-marquee">
                <div className="footer-marquee-track">
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span key={i} className="footer-marquee-item">
                            <span className="mdot" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3>HARSH JAIN</h3>
                        <p>
                            AI-generated visuals & audio for global brands. Crafting 100% original,
                            IP-free media at scale—from concept to delivery.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="LinkedIn">in</a>
                            <a href="#" aria-label="Twitter/X">𝕏</a>
                            <a href="#" aria-label="Instagram">ig</a>
                            <a href="#" aria-label="Behance">Bē</a>
                            <a href="#" aria-label="YouTube">▶</a>
                        </div>
                    </div>

                    <div className="footer-columns">
                        <div className="footer-column">
                            <h4>Navigation</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/work">Projects</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Services</h4>
                            <ul>
                                <li><Link to="/services">AI Image Campaigns</Link></li>
                                <li><Link to="/services">AI Video Ads</Link></li>
                                <li><Link to="/services">Custom Audio</Link></li>
                                <li><Link to="/services">Localization</Link></li>
                                <li><Link to="/services">High-Volume Production</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="mailto:hello@harshjain.ai">hello@harshjain.ai</a></li>
                                <li><span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>Remote — Global</span></li>
                                <li><Link to="/contact">Start a Project</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Harsh Jain. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import { Link } from 'react-router-dom';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { IconZap, IconShield, IconTrendingUp, IconUsers, IconCode } from '../components/Icons';
import './About.css';

const tools = [
    'Midjourney', 'Stable Diffusion', 'ComfyUI', 'Runway',
    'ElevenLabs', 'Suno AI', 'Adobe Photoshop', 'Adobe Premiere',
    'After Effects', 'Figma', 'DaVinci Resolve', 'Python',
];

export default function About() {
    return (
        <main className="page-transition">
            <section className="page-header">
                <div className="container">
                    <span className="section-label">About</span>
                    <h1>About Harsh Jain</h1>
                    <p>AI Multimedia Artist & Prompt Engineer</p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="about-hero">
                            <div className="about-avatar">
                                <div className="about-avatar-frame">
                                    <img src="/images/about-profile.jpg" alt="Harsh Jain" className="about-profile-image" />
                                </div>
                                <div className="about-avatar-glow" />
                            </div>
                            <div className="about-bio">
                                <h2>Harsh Jain</h2>
                                <p className="about-title">AI Multimedia Artist & Prompt Engineer</p>
                                <p>
                                    At the intersection of technical engineering and creative AI design, I transform
                                    complex brand briefs into production-ready AI-generated media. With expertise spanning
                                    image generation, video production, and custom audio creation, every asset I deliver
                                    is 100% original, commercially viable, and IP-free.
                                </p>
                                <p>
                                    Working remotely with global brands, I bring the precision of an engineer and the
                                    vision of a creative director to every project—whether it's a 200-asset product
                                    campaign or a single AI-composed brand soundtrack.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-secondary)', textAlign: 'center' }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="section-label">The Journey</span>
                            <h2>From Engineering to AI Creative</h2>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div className="about-story">
                            <p>My journey began in traditional software engineering—building systems, optimizing pipelines, and understanding the architecture behind complex technologies. When generative AI emerged, I saw the convergence of everything I loved: technical precision, creative expression, and the ability to produce at unprecedented scale.</p>
                            <p>I dove deep into mastering prompt engineering, understanding the nuances of different AI model architectures, and learning how to apply them to real-world commercial media production. Today, I specialize in creating original, IP-free AI media for global brands—from high-volume image campaigns to custom audio compositions.</p>
                            <p>Every project I take on is guided by a simple philosophy: AI is the instrument, but creative direction, brand understanding, and storytelling always come from a human mind.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="section-label">Core Values</span>
                            <h2>What Drives the Work</h2>
                        </div>
                    </ScrollReveal>
                    <div className="values-grid">
                        {[
                            { icon: <IconZap size={28} color="var(--accent-teal)" />, title: 'Speed', desc: 'High-volume turnaround without compromising quality. 50+ assets delivered in days, not weeks.' },
                            { icon: <IconShield size={28} color="var(--accent-teal)" />, title: '100% Original IP', desc: 'Every asset is generated fresh—no stock imagery, no celebrity likenesses, no copyright risk.' },
                            { icon: <IconTrendingUp size={28} color="var(--accent-teal)" />, title: 'Commercial Viability', desc: 'Assets built for real-world campaigns, not abstract experiments. Production-ready from day one.' },
                            { icon: <IconUsers size={28} color="var(--accent-teal)" />, title: 'Global Collaboration', desc: 'Working across timezones with brands worldwide. Remote-first, always available, always responsive.' },
                        ].map((val, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="card value-card">
                                    <div className="value-icon">{val.icon}</div>
                                    <h4>{val.title}</h4>
                                    <p>{val.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <div className="philosophy">
                <div className="container">
                    <ScrollReveal>
                        <blockquote className="philosophy-quote">
                            AI is a tool, not a replacement. The creative direction, brand understanding,
                            and storytelling always come from a human mind.
                        </blockquote>
                        <p className="philosophy-author">— Harsh Jain</p>
                    </ScrollReveal>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="section-label">Tech Stack</span>
                            <h2>Tools & Technologies</h2>
                            <p>The AI and creative tools I use to deliver production-quality media.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div className="tools-grid">
                            {tools.map(tool => (
                                <span key={tool} className="tool-badge">{tool}</span>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="section about-cta" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">Collaborate</span>
                        <h2>Want to collaborate on your next AI-powered campaign?</h2>
                        <p>Let's discuss how AI-generated visuals, video, and audio can transform your brand's creative output.</p>
                        <Link to="/contact" className="btn btn-primary">Get in Touch →</Link>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}

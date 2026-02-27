import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { IconTarget, IconZap, IconFilm, IconImage, IconVideo, IconMusic, IconGlobe, IconLayers } from '../components/Icons';
import { projects as allProjects } from '../data/projects';
import './Home.css';

const featuredProjects = allProjects.slice(0, 6);

const testimonials = [
    {
        quote: "Harsh delivered 200+ unique AI-generated product visuals in under a week. The speed and quality transformed how we approach seasonal campaigns.",
        author: "Priya Mehta",
        role: "Marketing Director, FutureBrand Agency"
    },
    {
        quote: "The custom AI soundtrack for our product launch was exactly what we needed—original, on-brand, and delivered with full commercial rights.",
        author: "Alex Chen",
        role: "Creative Lead, NovaTech Studios"
    },
    {
        quote: "Working with Harsh on bilingual AI content saved us thousands in localization while maintaining creative consistency across markets.",
        author: "David Okafor",
        role: "VP Marketing, Meridian Global"
    }
];

const faqs = [
    {
        q: "Do I get full IP usage rights for AI-generated assets?",
        a: "Yes. Every asset is generated from scratch using licensed AI tools and custom prompts. You receive full commercial usage rights with no third-party IP conflicts, no celebrity likenesses, and no stock-library dependencies."
    },
    {
        q: "What's the typical timeline for high-volume asset delivery?",
        a: "For standard campaigns, expect initial concepts within 24–48 hours and full delivery of 50+ assets within 5–7 business days. Emergency turnarounds of 24 hours are available for select projects."
    },
    {
        q: "Can you generate custom audio and music with AI?",
        a: "Absolutely. Using cutting-edge AI music generation tools, I create original background tracks, sound effects, and branded audio. Each track is delivered as a single-source file with full commercial rights—no royalty concerns."
    },
    {
        q: "How do you handle bilingual content?",
        a: "I format and adapt visuals for dual-language campaigns (e.g., English–Hindi), including typography adjustments, layout restructuring, and cultural adaptation, ensuring each version feels native."
    }
];

export default function Home() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const showreelRef = useRef(null);
    const videoRef = useRef(null);

    const handleWatchShowreel = () => {
        if (videoRef.current) {
            videoRef.current.muted = false;
            videoRef.current.volume = 1;
            setIsMuted(false);
            videoRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error("Video play failed", e));

            const reqFs = videoRef.current.requestFullscreen || videoRef.current.webkitRequestFullscreen || videoRef.current.msRequestFullscreen;
            if (reqFs) {
                try {
                    reqFs.call(videoRef.current).then(() => {
                        // Scroll in the background silently so it's there when user exits fullscreen
                        if (showreelRef.current) showreelRef.current.scrollIntoView({ behavior: 'instant' });
                    }).catch(() => {
                        if (showreelRef.current) showreelRef.current.scrollIntoView({ behavior: 'smooth' });
                    });
                } catch (e) {
                    if (showreelRef.current) showreelRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                if (showreelRef.current) showreelRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error("Video play failed", e));
            }
        }
    };

    const toggleMute = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            const nextMuted = !isMuted;
            videoRef.current.muted = nextMuted;
            if (!nextMuted) {
                videoRef.current.volume = 1;
            }
            setIsMuted(nextMuted);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current && !isDragging) {
            const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(p);
        }
    };

    const handleSeek = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            const seekTime = (e.target.value / 100) * videoRef.current.duration;
            videoRef.current.currentTime = seekTime;
            setProgress(e.target.value);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial(prev => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="page-transition">
            {/* HERO */}
            <section className="hero">
                <div className="hero-bg">
                    <img src="/images/hero-bg.png" alt="" className="hero-bg-image" />
                    <div className="hero-grid" />
                    <div className="hero-glow-teal" />
                    <div className="hero-glow-orange" />
                    <div className="hero-vignette-top" />
                    <div className="hero-vignette-bottom" />
                </div>
                <div className="hero-content">
                    <div className="hero-label">
                        <span className="dot" /> AI Creative Studio
                    </div>
                    <h1>
                        Turning Ideas into<br />
                        <span className="highlight">AI‑Generated Media</span>
                    </h1>
                    <p className="hero-subtitle">
                        Crafting original, IP-free ads, campaigns, and bilingual content using
                        advanced AI — images, videos, and custom audio at production scale.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={handleWatchShowreel}>Watch Showreel</button>
                        <Link to="/work" className="btn btn-secondary">Explore Portfolio →</Link>
                    </div>
                </div>
            </section>

            {/* SHOWREEL VIDEO PLACEHOLDER */}
            <section className="showreel-section" ref={showreelRef}>
                <div className="container">
                    <div className="showreel-wrapper" onClick={togglePlay} style={{ cursor: 'pointer' }}>
                        <video
                            ref={videoRef}
                            className="showreel-video"
                            src="/videos/showreel/showreel.mp4"
                            poster="/images/project-3.png"
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={() => setIsPlaying(false)}
                            muted={isMuted}
                            loop
                            playsInline
                        />
                        <div className="showreel-overlay">
                            <span className="showreel-badge">AI Cinematic Showreel</span>
                        </div>
                        <div className="custom-video-controls" onClick={(e) => e.stopPropagation()}>
                            <button className="control-btn" onClick={togglePlay}>
                                {isPlaying ? 'Pause' : 'Play'}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={progress || 0}
                                onChange={handleSeek}
                                onMouseDown={() => setIsDragging(true)}
                                onMouseUp={() => setIsDragging(false)}
                                onTouchStart={() => setIsDragging(true)}
                                onTouchEnd={() => setIsDragging(false)}
                                className="progress-slider"
                            />
                            <button className="control-btn" onClick={toggleMute}>
                                {isMuted ? 'Unmute' : 'Mute'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* BRAND STRIP */}
            <section className="brand-strip">
                <p className="brand-strip-label">Trusted by Brands Experimenting with the Future</p>
                <div className="brand-logos">
                    <span className="brand-logo">NOVA•TECH</span>
                    <span className="brand-logo">MERIDIAN</span>
                    <span className="brand-logo">FUTURELAB</span>
                    <span className="brand-logo">AETHON</span>
                    <span className="brand-logo">PRISM•AI</span>
                    <span className="brand-logo">KINETIC</span>
                </div>
            </section>

            {/* FEATURED WORK */}
            <section className="section featured-work">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="section-label">Portfolio</span>
                            <h2>Featured AI Projects</h2>
                            <p>AI-generated campaigns, ads, and audio productions for global brands.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="work-grid">
                            {featuredProjects.map((project, i) => (
                                <Link to={`/work/${project.slug}`} className="work-card" key={i}>
                                    <div className="work-card-gradient" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                    <div className="work-card-overlay">
                                        <div className="work-card-tags">
                                            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                        </div>
                                        <h3>{project.title}</h3>
                                        <p>View Project →</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* PROCESS */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="section-label">How It Works</span>
                            <h2>From Brief to Delivery</h2>
                            <p>A streamlined AI creative process built for speed and scale.</p>
                        </div>
                    </ScrollReveal>
                    <div className="process-grid">
                        {[
                            { num: '01', icon: <IconTarget size={28} color="var(--accent-teal)" />, title: 'Strategy & Prompt Engineering', desc: 'Deep-dive into your brand brief. I architect precise AI prompts that translate your vision into production-ready parameters.' },
                            { num: '02', icon: <IconZap size={28} color="var(--accent-teal)" />, title: 'AI Generation & Iteration', desc: 'Rapid, high-volume asset generation using state-of-the-art AI models. 50+ unique variations within hours, not weeks.' },
                            { num: '03', icon: <IconFilm size={28} color="var(--accent-teal)" />, title: 'Post-Production & Localization', desc: 'Upscaling, color grading, sound design, and dual-language formatting. Every asset is polished and campaign-ready.' },
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.15}>
                                <div className="card process-card">
                                    <span className="process-number">{item.num}</span>
                                    <div className="process-icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENTO SERVICES */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="section-label">What I Do</span>
                            <h2>AI Creative Services</h2>
                            <p>End-to-end AI media production for brands that move fast.</p>
                        </div>
                    </ScrollReveal>
                    <div className="bento-grid">
                        <ScrollReveal className="card bento-item wide" delay={0}>
                            <div className="bento-ambient" style={{ background: 'var(--accent-teal)' }} />
                            <div className="bento-icon"><IconImage size={32} color="var(--accent-teal)" /></div>
                            <h4>AI Image Campaigns</h4>
                            <p>Original, IP-free visuals for ads, social, and product launches. Batch production at scale.</p>
                        </ScrollReveal>
                        <ScrollReveal className="card bento-item" delay={0.1}>
                            <div className="bento-ambient" style={{ background: 'var(--accent-orange)' }} />
                            <div className="bento-icon"><IconVideo size={32} color="var(--accent-orange)" /></div>
                            <h4>AI Video Ads</h4>
                            <p>Short-form promos and looping social assets powered by AI.</p>
                        </ScrollReveal>
                        <ScrollReveal className="card bento-item" delay={0.2}>
                            <div className="bento-ambient" style={{ background: 'var(--accent-teal)' }} />
                            <div className="bento-icon"><IconMusic size={32} color="var(--accent-teal)" /></div>
                            <h4>Custom Audio</h4>
                            <p>AI-generated music and sound effects with full commercial rights.</p>
                        </ScrollReveal>
                        <ScrollReveal className="card bento-item" delay={0.3}>
                            <div className="bento-ambient" style={{ background: 'var(--accent-orange)' }} />
                            <div className="bento-icon"><IconGlobe size={32} color="var(--accent-orange)" /></div>
                            <h4>Localization</h4>
                            <p>Bilingual asset formatting for global markets.</p>
                        </ScrollReveal>
                        <ScrollReveal className="card bento-item wide" delay={0.4}>
                            <div className="bento-ambient" style={{ background: 'var(--accent-teal)' }} />
                            <div className="bento-icon"><IconLayers size={32} color="var(--accent-teal)" /></div>
                            <h4>High-Volume Production</h4>
                            <p>Scalable AI pipelines delivering 50+ original assets per quarter with quality assurance workflows.</p>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal delay={0.3}>
                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <Link to="/services" className="btn btn-ghost">View All Services →</Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* STATS */}
            <section className="section stats-section">
                <div className="container">
                    <ScrollReveal>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <h3>150+</h3>
                                <p>AI Projects Delivered</p>
                            </div>
                            <div className="stat-item">
                                <h3>10,000+</h3>
                                <p>Assets Generated</p>
                            </div>
                            <div className="stat-item">
                                <h3>24hr</h3>
                                <p>Average Turnaround</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="section-label">Client Outcomes</span>
                            <h2>What Brands Say</h2>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div className="testimonials-container">
                            <div className="card testimonial-card">
                                <p className="testimonial-quote">{testimonials[activeTestimonial].quote}</p>
                                <p className="testimonial-author">{testimonials[activeTestimonial].author}</p>
                                <p className="testimonial-role">{testimonials[activeTestimonial].role}</p>
                            </div>
                            <div className="testimonial-dots">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`testimonial-dot ${i === activeTestimonial ? 'active' : ''}`}
                                        onClick={() => setActiveTestimonial(i)}
                                        aria-label={`Testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FAQ */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <span className="section-label">FAQ</span>
                            <h2>Frequently Asked Questions</h2>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div className="faq-list">
                            {faqs.map((faq, i) => (
                                <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                                    <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                        {faq.q}
                                        <span className="faq-icon">+</span>
                                    </button>
                                    <div className="faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="section final-cta">
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="final-cta-glow" />
                    <ScrollReveal>
                        <span className="section-label">Let's Create</span>
                        <h2>Need 100% original AI media for your next global campaign?</h2>
                        <p style={{ maxWidth: '560px', margin: '0 auto 36px', fontSize: '1.05rem' }}>
                            From concept to delivery — images, video, and audio, all IP-free and commercially viable.
                        </p>
                        <Link to="/contact" className="btn btn-primary">Start an AI Project →</Link>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}

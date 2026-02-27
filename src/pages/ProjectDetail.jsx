import { useParams, Link, useNavigate } from 'react-router-dom';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { projects, getProjectBySlug } from '../data/projects';
import ReelCarousel from '../components/ReelCarousel';
import './ProjectDetail.css';

const waveHeights = [15, 25, 35, 20, 40, 28, 18, 32, 22, 38, 15, 30, 25, 35, 20, 28, 40, 18, 32, 22, 35, 15, 28, 38, 20, 30, 25, 18, 35, 40];

export default function ProjectDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <main className="page-transition">
                <section className="page-header">
                    <div className="container">
                        <span className="section-label">404</span>
                        <h1>Project Not Found</h1>
                        <p>The project you're looking for doesn't exist.</p>
                        <Link to="/work" className="btn btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>Back to Portfolio →</Link>
                    </div>
                </section>
            </main>
        );
    }

    // Find next/prev projects
    const currentIndex = projects.findIndex(p => p.slug === slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];
    const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

    return (
        <main className="page-transition">
            {/* Hero */}
            <section className="project-hero">
                <div className="project-hero-bg">
                    <img src={project.image} alt={project.title} className="project-hero-img" />
                    <div className="project-hero-overlay" />
                </div>
                <div className="container project-hero-content">
                    <ScrollReveal>
                        <Link to="/work" className="back-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                            Back to Portfolio
                        </Link>
                        <div className="project-hero-tags">
                            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                            <span className="tag tag-year">{project.year}</span>
                        </div>
                        <h1>{project.title}</h1>
                        <p className="project-hero-desc">{project.longDesc}</p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Project Meta */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="project-meta-grid">
                            <div className="project-meta-item">
                                <label>Client</label>
                                <p>{project.client}</p>
                            </div>
                            <div className="project-meta-item">
                                <label>Category</label>
                                <p>{project.category}</p>
                            </div>
                            <div className="project-meta-item">
                                <label>Tools Used</label>
                                <p>{project.tools.join(', ')}</p>
                            </div>
                            <div className="project-meta-item">
                                <label>Deliverables</label>
                                <p>{project.deliverables}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Reel Carousel */}
            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <ScrollReveal>
                        <ReelCarousel reels={project.reels} projectImage={project.image} />
                    </ScrollReveal>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header" style={{ marginBottom: '32px' }}>
                            <span className="section-label">Gallery</span>
                            <h2>Visual Assets</h2>
                            <p>From prompt to final asset — a selection from this project.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div className="project-gallery">
                            {[0, 1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="project-gallery-item">
                                    <div className="project-gallery-img" style={{
                                        backgroundImage: `url(${project.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: `hue-rotate(${i * 40}deg) brightness(${0.75 + i * 0.05})`,
                                    }} />
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Audio Player (for audio projects) */}
            {project.category === 'Custom Audio' && (
                <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                    <div className="container">
                        <ScrollReveal>
                            <div className="section-header" style={{ marginBottom: '32px' }}>
                                <span className="section-label">Audio</span>
                                <h2>Audio Preview</h2>
                            </div>
                            <div className="audio-player-block">
                                <button className="audio-play-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#000" stroke="none"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                </button>
                                <div className="audio-waveform">
                                    {waveHeights.map((h, i) => (
                                        <div key={i} className={`audio-bar ${i < 12 ? 'active' : ''}`} style={{ height: `${h}px` }} />
                                    ))}
                                </div>
                                <div className="audio-info">
                                    <div className="track-name">{project.title}</div>
                                    <div className="track-duration">3:24</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            )}

            {/* Next/Prev Navigation */}
            <section className="project-nav-section">
                <div className="container">
                    <div className="project-nav">
                        <Link to={`/work/${prevProject.slug}`} className="project-nav-link prev">
                            <span className="project-nav-label">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                                Previous Project
                            </span>
                            <span className="project-nav-title">{prevProject.title}</span>
                        </Link>
                        <Link to={`/work/${nextProject.slug}`} className="project-nav-link next">
                            <span className="project-nav-label">
                                Next Project
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                            </span>
                            <span className="project-nav-title">{nextProject.title}</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

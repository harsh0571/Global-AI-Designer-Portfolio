import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '../data/projects';
import './Work.css';

const categories = ['All', 'AI Image Campaigns', 'AI Videos', 'Concept Art', 'Custom Audio', 'Thumbnails'];

export default function Work() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <main className="page-transition">
            <section className="page-header">
                <div className="container">
                    <span className="section-label">Portfolio</span>
                    <h1>AI Portfolio</h1>
                    <p>Explore our complete collection of AI-generated images, videos, concept art, and custom audio.</p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="filter-bar">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>

                    <div className="projects-grid">
                        {filtered.map((project, i) => (
                            <ScrollReveal key={project.slug} delay={i * 0.08}>
                                <Link to={`/work/${project.slug}`} className="project-card">
                                    <div className="project-card-visual">
                                        <div className="project-card-gradient" style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                        <div className="project-card-badge">
                                            <span className="tag">{project.category}</span>
                                        </div>
                                    </div>
                                    <div className="project-card-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.desc}</p>
                                        <div className="project-card-meta">
                                            <span>{project.client}</span>
                                            <span className="project-card-link">View →</span>
                                        </div>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

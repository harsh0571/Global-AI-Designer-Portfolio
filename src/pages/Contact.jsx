import { useState } from 'react';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { IconMail, IconGlobe, IconZap, IconCalendar } from '../components/Icons';
import './Contact.css';

const serviceOptions = ['Images', 'Video', 'Audio', 'Full Campaign'];

const timezones = [
    'Select timezone', 'UTC-8 (PST)', 'UTC-5 (EST)', 'UTC+0 (GMT)',
    'UTC+1 (CET)', 'UTC+5:30 (IST)', 'UTC+8 (CST)', 'UTC+9 (JST)', 'UTC+10 (AEST)',
];

export default function Contact() {
    const [checkedServices, setCheckedServices] = useState([]);

    const toggleService = (service) => {
        setCheckedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    return (
        <main className="page-transition">
            <section className="page-header">
                <div className="container">
                    <span className="section-label">Contact</span>
                    <h1>Start an AI Project</h1>
                    <p>Tell us about your brand and creative needs. We'll respond within 24 hours.</p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="contact-layout">
                        <ScrollReveal>
                            <form className="contact-form" action="https://formspree.io/f/xvzbybql" method="POST">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input id="name" name="name" type="text" placeholder="Your full name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input id="email" name="email" type="email" placeholder="you@company.com" required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="brand">Brand / Company</label>
                                        <input id="brand" name="brand" type="text" placeholder="Company name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="timezone">Your Timezone</label>
                                        <select id="timezone" name="timezone">
                                            {timezones.map(tz => <option key={tz} value={tz}>{tz}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>What Do You Need?</label>
                                    <div className="checkbox-group">
                                        {serviceOptions.map(service => (
                                            <label key={service} className={`checkbox-item ${checkedServices.includes(service) ? 'checked' : ''}`}>
                                                <input type="checkbox" name="services" value={service} checked={checkedServices.includes(service)} onChange={() => toggleService(service)} />
                                                <span className="checkbox-dot">{checkedServices.includes(service) ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg> : ''}</span>
                                                {service}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="intended-use">Intended Use</label>
                                    <input id="intended-use" name="intended_use" type="text" placeholder="Social campaign, TV ad, product launch, etc." />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="deadline">Deadline</label>
                                    <input id="deadline" name="deadline" type="date" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" name="message" placeholder="Describe your project in detail—what assets you need, brand guidelines, reference materials, etc." required />
                                </div>
                                <button className="btn btn-primary" type="submit" style={{ alignSelf: 'flex-start' }}>Send Project Brief →</button>
                            </form>
                        </ScrollReveal>

                        <ScrollReveal delay={0.15}>
                            <div className="contact-info">
                                <div className="card contact-info-card">
                                    <div className="contact-info-icon"><IconMail size={22} color="var(--accent-teal)" /></div>
                                    <div className="contact-info-text">
                                        <h4>Email</h4>
                                        <p><a href="mailto:kzr0571@gmail.com" style={{ color: 'var(--accent-teal)' }}>kzr0571@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="card contact-info-card">
                                    <div className="contact-info-icon"><IconGlobe size={22} color="var(--accent-teal)" /></div>
                                    <div className="contact-info-text">
                                        <h4>Location</h4>
                                        <p>Remote — Available Globally</p>
                                    </div>
                                </div>
                                <div className="card contact-info-card">
                                    <div className="contact-info-icon"><IconZap size={22} color="var(--accent-teal)" /></div>
                                    <div className="contact-info-text">
                                        <h4>Response Time</h4>
                                        <p>Within 24 Hours</p>
                                    </div>
                                </div>
                                <div className="card contact-info-card">
                                    <div className="contact-info-icon"><IconCalendar size={22} color="var(--accent-teal)" /></div>
                                    <div className="contact-info-text">
                                        <h4>Availability</h4>
                                        <p>Mon–Fri, Flexible Timezone</p>
                                    </div>
                                </div>
                                <div className="card schedule-call">
                                    <p>Prefer a quick call?</p>
                                    <form action="https://formspree.io/f/xvzbybql" method="POST" style={{ margin: 0 }}>
                                        <input type="hidden" name="subject" value="Schedule a Call Request" />
                                        <input type="hidden" name="message" value="I would like to schedule a call." />
                                        <button className="btn btn-outline" type="submit">Schedule a Call →</button>
                                    </form>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal>
                        <div className="global-visual">
                            <div className="globe-art">
                                <IconGlobe size={72} color="var(--accent-teal)" />
                            </div>
                            <h3>Global AI Creative Studio</h3>
                            <p>Connecting with brands across every timezone—remote-first, always responsive, always creative.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}

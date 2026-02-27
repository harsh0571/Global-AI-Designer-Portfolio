import { useState, useRef, useEffect, useCallback } from 'react';
import './ReelCarousel.css';

export default function ReelCarousel({ reels = [], projectImage, projectSlug }) {
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const dragRef = useRef({ startX: 0, scrollLeft: 0, isDragging: false });
    // Track which reels have valid loadable videos
    const [videoLoaded, setVideoLoaded] = useState({});
    // Track which reels are currently playing
    const [playing, setPlaying] = useState({});
    // Store refs for each video element
    const videoRefs = useRef({});

    const totalReels = reels.length;

    const getCardWidth = () => {
        if (!trackRef.current || !trackRef.current.children[0]) return 260;
        return trackRef.current.children[0].offsetWidth + 20;
    };

    const scrollToIndex = useCallback((index) => {
        if (!trackRef.current) return;
        const clamped = Math.max(0, Math.min(index, totalReels - 1));
        const cardW = getCardWidth();
        trackRef.current.scrollTo({ left: clamped * cardW, behavior: 'smooth' });
        setActiveIndex(clamped);
    }, [totalReels]);

    const updateActiveFromScroll = useCallback(() => {
        if (!trackRef.current) return;
        const cardW = getCardWidth();
        const index = Math.round(trackRef.current.scrollLeft / cardW);
        setActiveIndex(Math.max(0, Math.min(index, totalReels - 1)));
    }, [totalReels]);

    const onMouseDown = (e) => {
        dragRef.current.isDragging = true;
        dragRef.current.startX = e.pageX;
        dragRef.current.scrollLeft = trackRef.current.scrollLeft;
        setIsDragging(true);
    };
    const onMouseMove = (e) => {
        if (!dragRef.current.isDragging) return;
        e.preventDefault();
        const walk = (e.pageX - dragRef.current.startX) * 1.2;
        trackRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
    };
    const onMouseUp = () => {
        if (!dragRef.current.isDragging) return;
        dragRef.current.isDragging = false;
        setIsDragging(false);
        setTimeout(updateActiveFromScroll, 50);
    };
    const onTouchStart = (e) => {
        dragRef.current.startX = e.touches[0].pageX;
        dragRef.current.scrollLeft = trackRef.current.scrollLeft;
    };
    const onTouchMove = (e) => {
        const walk = (e.touches[0].pageX - dragRef.current.startX) * 1.2;
        trackRef.current.scrollLeft = dragRef.current.scrollLeft - walk;
    };
    const onTouchEnd = () => {
        setTimeout(updateActiveFromScroll, 50);
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => { updateActiveFromScroll(); ticking = false; });
        };
        track.addEventListener('scroll', onScroll, { passive: true });
        return () => track.removeEventListener('scroll', onScroll);
    }, [updateActiveFromScroll]);

    const handleVideoLoaded = (id) => {
        setVideoLoaded(prev => ({ ...prev, [id]: true }));
    };
    const handleVideoError = (id) => {
        setVideoLoaded(prev => ({ ...prev, [id]: false }));
    };

    const togglePlay = (id) => {
        const video = videoRefs.current[id];
        if (!video) return;
        if (video.paused) {
            video.muted = false;
            video.volume = 1;
            video.play();
            setPlaying(prev => ({ ...prev, [id]: true }));
        } else {
            video.pause();
            setPlaying(prev => ({ ...prev, [id]: false }));
        }
    };

    return (
        <div className="reel-carousel">
            <div className="reel-carousel-header">
                <h3>Video Reels</h3>
                <div className="reel-carousel-nav">
                    <button className="reel-nav-btn" onClick={() => scrollToIndex(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous reel">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                    <span className="reel-counter">{activeIndex + 1} / {totalReels}</span>
                    <button className="reel-nav-btn" onClick={() => scrollToIndex(activeIndex + 1)} disabled={activeIndex === totalReels - 1} aria-label="Next reel">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                    </button>
                </div>
            </div>

            <div
                className={`reel-track ${isDragging ? 'grabbing' : ''}`}
                ref={trackRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {reels.map((reel, i) => {
                    const hasVideo = videoLoaded[reel.id] === true;
                    const isPlaying = playing[reel.id] === true;
                    return (
                        <div key={reel.id} className={`reel-card ${i === activeIndex ? 'active' : ''}`}>
                            <div className="reel-card-inner" style={{ background: reel.gradient }}>
                                {/* Video element */}
                                {reel.video && (
                                    <video
                                        ref={(el) => { if (el) videoRefs.current[reel.id] = el; }}
                                        className="reel-video"
                                        src={reel.video}
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        style={{ display: hasVideo ? 'block' : 'none' }}
                                        onLoadedData={() => handleVideoLoaded(reel.id)}
                                        onError={() => handleVideoError(reel.id)}
                                        onPlay={() => setPlaying(prev => ({ ...prev, [reel.id]: true }))}
                                        onPause={() => setPlaying(prev => ({ ...prev, [reel.id]: false }))}
                                    />
                                )}

                                {/* Fallback background when no video */}
                                {!hasVideo && (
                                    <div className="reel-card-bg" style={{ backgroundImage: `url(${projectImage})` }} />
                                )}

                                {/* Play/Pause button — click to play, hides while playing */}
                                <div
                                    className={`reel-play-overlay ${isPlaying ? 'hidden' : ''}`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (hasVideo) togglePlay(reel.id);
                                    }}
                                    style={{ cursor: hasVideo ? 'pointer' : 'default' }}
                                >
                                    <div className="reel-play-btn">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" stroke="none">
                                            <polygon points="5 3 19 12 5 21 5 3" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Click anywhere on playing video to pause */}
                                {isPlaying && (
                                    <div
                                        className="reel-pause-overlay"
                                        onClick={(e) => { e.stopPropagation(); togglePlay(reel.id); }}
                                    />
                                )}

                                <div className="reel-badge">9:16</div>

                                <div className="reel-card-label">
                                    <span className="reel-label-text">{reel.label}</span>
                                    <span className="reel-label-placeholder">
                                        {isPlaying ? 'Playing' : hasVideo ? 'Click ▶ to play' : 'Video Placeholder'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="reel-dots">
                {reels.map((_, i) => (
                    <button key={i} className={`reel-dot ${i === activeIndex ? 'active' : ''}`} onClick={() => scrollToIndex(i)} aria-label={`Reel ${i + 1}`} />
                ))}
            </div>
        </div>
    );
}

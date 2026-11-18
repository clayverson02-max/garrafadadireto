import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { MessageCircle, MapPin, Instagram, Pause, Play, Volume2, VolumeX } from 'lucide-react';

export const Route = createFileRoute('/')({ component: Bio });
const address = 'Avenida Dom Almeida Lustosa, 1076, Potira I, Caucaia CE, 61645-000, Brasil';
const maps = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(address);
const whatsapp = 'https://wa.me/5585921533148?text=' + encodeURIComponent('Olá! Vim pelo Instagram da JV Pneus e queria informações sobre pneus e serviços para meu carro.');
const products = [
  { photo: 1, name: 'Ottima Plus', size: '195/55 R15' },
  { photo: 2, name: 'Golden Crown', size: '195/55 R16' },
  { photo: 3, name: 'Golden Crown', size: '195/65 R15' },
  { photo: 4, name: 'Forceland', size: '195/60 R15' },
  { photo: 5, name: 'Winrun R330', size: '175/55 R16' },
];
function Bio() {
  const rail = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, last = 0, active = false, interacting = false, resumeAt = 0, position = el.scrollLeft;
    const observer = new IntersectionObserver(([entry]) => { active = entry.isIntersecting; });
    observer.observe(el);
    const stop = () => { interacting = true; };
    const resume = () => { interacting = false; resumeAt = performance.now() + 2200; position = el.scrollLeft; };
    const wheel = () => { resumeAt = performance.now() + 2200; position = el.scrollLeft; };
    el.addEventListener('pointerdown', stop);
    window.addEventListener('pointerup', resume);
    el.addEventListener('wheel', wheel, { passive: true });
    const animate = (now: number) => {
      const delta = Math.min(now - last, 40); last = now;
      const group = el.firstElementChild as HTMLElement | null;
      if (group && active && !paused && !reduced.matches && !document.hidden && !interacting && now > resumeAt && !el.matches(':focus-within')) {
        position += delta * .029;
        if (position >= group.offsetWidth) position -= group.offsetWidth;
        el.scrollLeft = position;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); el.removeEventListener('pointerdown', stop); window.removeEventListener('pointerup', resume); el.removeEventListener('wheel', wheel); };
  }, [paused]);
  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) el.pause();
      else if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && el.muted) el.play().catch(() => {});
    }, { threshold: .4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <main className="bio">
    <header>
      <div className="brand"><img src="/jv-pneus/logo.webp" width="620" height="318" alt="JV Pneus" fetchPriority="high" /></div>
      <p className="eyebrow">POTIRA · CAUCAIA</p>
      <h1>Seu carro bem cuidado.<br /><span>Você segue tranquilo.</span></h1>
      <p className="intro">Pneus, suspensão, alinhamento e balanceamento.<br />Precisou? Fala com a gente.</p>
    </header>
    <nav className="actions" aria-label="Contato e localização">
      <a className="action primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" /><span><strong>Falar com a JV Pneus</strong><small>Orçamento pelo WhatsApp</small></span></a>
      <a className="action" href={maps} target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" /><span><strong>Como chegar na oficina</strong><small>Av. Dom Almeida Lustosa, 1076 · Potira I</small></span></a>
    </nav>
    <section className="products" aria-labelledby="products-title">
      <div className="section-top"><h2 id="products-title">Olha o que tem por aqui</h2><button className="motion-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? 'Retomar carrossel automático' : 'Pausar carrossel automático'} aria-pressed={paused}>{paused ? <Play size={16} /> : <Pause size={16} />}</button></div>
      <div className="rail" ref={rail} tabIndex={0} role="region" aria-label="Fotos de pneus. Deslize para ver mais.">
        {[0, 1].map(group => <div className="product-group" key={group} aria-hidden={group === 1 ? true : undefined}>{products.map(product => <figure className="product" key={product.photo}>
          <img src={`/jv-pneus/pneu-${product.photo}.webp`} alt={`Pneu ${product.name} ${product.size}`} width="540" height="960" loading="lazy" decoding="async" />
          <figcaption><strong>{product.size}</strong><span>{product.name}</span></figcaption>
        </figure>)}</div>)}
      </div>
      <p className="availability">Consulte a medida do seu carro e a disponibilidade.</p>
    </section>
    <section className="visit" aria-labelledby="visit-title">
      <div className="section-top"><div><h2 id="visit-title">Vem conhecer a oficina</h2><p>A gente te mostra onde fica.</p></div></div>
      <div className="video-wrap"><video ref={video} src="/jv-pneus/oficina.mp4" poster="/jv-pneus/video-poster.jpg" controls muted={muted} loop playsInline preload="none" aria-label="Apresentação da localização da JV Pneus" onVolumeChange={() => { if (video.current) setMuted(video.current.muted); }} />
        <button className="sound" onClick={() => { if (video.current) { video.current.muted = !muted; setMuted(!muted); video.current.play().catch(() => {}); } }}>{muted ? <Volume2 size={16} /> : <VolumeX size={16} />}{muted ? 'Ouvir o vídeo' : 'Silenciar'}</button>
      </div>
      <a className="address" href={maps} target="_blank" rel="noopener noreferrer"><MapPin size={18} aria-hidden="true" /><span>Av. Dom Almeida Lustosa, 1076<br />Potira I · Caucaia, CE · 61645-000</span></a>
    </section>
    <footer><a href="https://www.instagram.com/jvpneus.caucaia/" target="_blank" rel="noopener noreferrer"><Instagram size={18} aria-hidden="true" />@jvpneus.caucaia</a></footer>
  </main>;
}

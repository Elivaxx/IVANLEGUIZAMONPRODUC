// Static photo-grain texture: an inline SVG noise filter as a CSS background.
// No JS render loop, no canvas repaint — pure CSS, essentially free at runtime.
const grainSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>`

export default function FilmGrain() {
  return (
    <>
      <style>{`
        @keyframes grain-drift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-2%, 2%); }
          50% { transform: translate(2%, -1%); }
          75% { transform: translate(-1%, -2%); }
        }
        .film-grain {
          animation: grain-drift 8s steps(4) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .film-grain { animation: none; }
        }
      `}</style>
      <div
        aria-hidden="true"
        className="film-grain"
        style={{
          position: 'fixed',
          inset: '-10%',
          zIndex: 1,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml;utf8,${grainSvg}")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
          opacity: 0.35,
        }}
      />
    </>
  )
}

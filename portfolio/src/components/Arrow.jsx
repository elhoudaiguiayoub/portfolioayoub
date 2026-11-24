export default function Arrow({ diagonal = false }) {
  const path = diagonal ? "M5 15 15 5M5 5h10v10" : "M3 10h13m-5-5 5 5-5 5";
  return (
    <svg width="19" height="19" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

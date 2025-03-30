export default function Header() {
  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');

    const themes = ['classic', 'modern', 'blue'];
    const current = document.body.dataset.theme || 'classic';
    const next = themes[(themes.indexOf(current) + 1) % themes.length];
    document.body.dataset.theme = next;
  };

  return (
    <header>
      <div>
        <h1 style={{ marginBottom: '4px' }}>📊 FinSight</h1>
        <p style={{ fontSize: '14px', color: 'gray', margin: 0 }}>
          Your portfolio, clearly visualized.
        </p>
      </div>
      <button onClick={toggleTheme} title="Toggle Theme">
        🎨 Switch Theme
      </button>
    </header>
  );
}

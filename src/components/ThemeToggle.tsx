export default function ThemeToggle() {
  return (
    <button>
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">🌞</span>
    </button>
  );
}

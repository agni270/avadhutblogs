export default function Layout({ children }) {
  return (
    <div className="app-shell">
      {/* LEFT NAV */}
      <aside className="side-nav">
     
      </aside>

      {/* CONTENT */}
      <main className="content-area">
        <div className="content-surface">
          {children}
        </div>
      </main>
    </div>
  );
}

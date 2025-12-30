import "./HomePage.css";
import { Link } from "react-router-dom";
import revolutionImg from "../assets/images/revolution.jpg";

export default function HomePage() {
  return (
    <main className="editorial-home">
      <div className="editorial-container">

        {/* HEADER */}
        <header className="editorial-header">
          <h1>AVADHUT BLOGS</h1>
        </header>

        {/* TICKER */}
        <div className="news-ticker">
          <span>
            ESSAYS +++ NOTES +++ OBSERVATIONS +++ THOUGHT
          </span>
        </div>

        {/* ARTICLES */}
        <section className="article-list">

          {/* ARTICLE ITEM WRAPPED IN LINK */}
          <Link
            to="/blog/understanding-revolution"
            className="article-row-link"
          >
            <article className="article-row">
              <div className="article-left">         
                   <img src={revolutionImg} alt="Revolution" />
              </div>

              <div className="article-center">
                <h2>Understanding Revolution</h2>

                <p className="excerpt">
                  Revolution is not an event or a moment in history.
                  It begins quietly, when an individual refuses to
                  outsource their thinking.
                </p>

                <div className="meta">
                  Vader · 30 Dec 2025 · 6 min read
                </div>
              </div>

              <div className="article-right">
                <span className="category">PHILOSOPHY</span>
              </div>
            </article>
          </Link>

          <hr />

        </section>

        {/* FOOT LINK */}
        <footer className="home-footer">
          <a href="/">ALL ARTICLES →</a>
        </footer>

      </div>
    </main>
  );
}

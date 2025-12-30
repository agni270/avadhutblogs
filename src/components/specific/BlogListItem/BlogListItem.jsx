import { Link } from "react-router-dom";
import styles from "./BlogListItem.module.css";

export default function BlogListItem({ title, date, to }) {
  return (
    <Link to={to} className={styles.item}>
      <h2>{title}</h2>
      <span>{date}</span>
    </Link>
  );
}

import styles from "./Exhibit.module.css";

export default function Exhibit({ children, heading, ...args }) {
  return (
    <article className={styles.container}>
      <div className={styles.heading}>
        <h3> {heading} </h3>
      </div>
      <div className={styles.body}>{children}</div>
    </article>
  );
}

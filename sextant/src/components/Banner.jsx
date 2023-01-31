import styles from './Banner.module.css';
export default function Banner({title}) {
    return <div className={styles.title} > {title} </div>
}
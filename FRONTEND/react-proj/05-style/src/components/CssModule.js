import styles from "../styles/origin.module.css"

function CssModule () {
    return <>
    <hr />
        <div className={styles.origin}>
            <div className={`${styles.box} ${styles.red}`}></div>
            <div className={[styles.box, styles.orange].join(" ")}></div>
            <div className={[styles.box, styles.yellow].join(" ")}></div>
            <div className={[styles.box, styles.green].join(" ")}></div>
            <div className={[styles.box, styles.blue].join(" ")}></div>
            <div className={[styles.box, styles.navy].join(" ")}></div>
            <div className={[styles.box, styles.purple].join(" ")}></div>
        </div>
    </>
}

export default CssModule;

import styles from "./CssModule.module.css";

export default function CssModuleComponent(){
    return (
        <div>
            <h1>How to use style as module</h1>
            <h2 className={styles.heading1}>Its heading 1</h2>
            <h3 className={styles.heading2}>Its heading 2</h3>
        </div>
    );
}
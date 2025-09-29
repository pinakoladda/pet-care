import { Loader as LoadIcon } from 'lucide-react';

import styles from './index.module.css';

export const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <LoadIcon className={styles.loader} size={40} />
        </div>
    )
}
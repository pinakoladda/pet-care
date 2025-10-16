import { Loader as LoadIcon } from 'lucide-react';
import cn from 'classnames';

import styles from './index.module.css';

export const Loader = ({ className, size = 40 }) => {
    return (
        <div className={cn(styles.loaderContainer, className)}>
            <LoadIcon className={styles.loader} size={size} />
        </div>
    )
}
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileName}>
            <img src="https://github.com/chrpistori.png" alt="Christian Raphael Pistori" />
            <div>
                <strong>Christian Raphael Pistori</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.head}>
      {/* Category dropdown on the left */}
      <div className={styles.nav}>
     

       
        <input
          type="text"
          placeholder="Search your recipe..."
          className={styles.text}
        />
      </div>

      {/* Navigation links on the right */}
      <nav>
        <ul>
          <li className={styles.home}><a href="" className={styles.anc}>Home</a></li>
          <li className={styles.home}><a href="" className={styles.anc}>About Us</a></li>
          <li className={styles.home}><a href="" className={styles.anc}>Contact Us</a></li>
          <li className={styles.home}><a href="" className={styles.anc}>Login</a></li>
          <li className={styles.home}><a href="" className={styles.anc}>SignIn</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

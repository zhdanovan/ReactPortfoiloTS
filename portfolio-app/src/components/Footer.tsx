import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Zhdanovan Portfolio</p>
    </footer>
  );
};

export default Footer;
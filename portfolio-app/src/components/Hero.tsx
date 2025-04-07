

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Hi, I'm <span>Zhdanov Artem</span></h1>
        <h2>Frontend Developer</h2>

        <Button variant="primary">View Projects</Button>
      </div>
    </section>
  );
};

export default Hero;
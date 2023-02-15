const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
  },
  title: {
    fontWeight: 700,
    fontSize: 36,
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Phonebook page</h1>
    </div>
  );
};

export default Home;

import Navbar from './components/layout/Navbar.jsx';
import ScrollProgress from './components/layout/ScrollProgress.jsx';
import BackToTop from './components/layout/BackToTop.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';

function App() {

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
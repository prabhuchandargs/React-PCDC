import Menu from './responsiveNavbar';
import Hero from './hero';
import About from './about';
import ClientScroller from './clients';
import Projects from './projects';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.module.css';
import styles from './styles.module.css';

const App = () => {
  const logo = "/images/common/letter-logo.png";
  const links = [
    {
      href: "#home",
      title: "Home"
    },
    {
      href: "#services",
      title: "Services"
    },
    {
      href: "#projects",
      title: "Projects"
    },
    {
      href: "#about",
      title: "About"
    },
    {
      href: "#contact",
      title: "Contact"
    }
  ];

  const clientImages = [
    '/images/clients/aiims.png',
    '/images/clients/meity.png',
    '/images/clients/nhm.png',
    '/images/clients/kredence.png',
    '/images/clients/ywam.jpg',
    '/images/clients/mohfw.png'
  ];


  return (
    <div className={styles.all}>
      <Menu logo={logo} links={links}></Menu>
      <section className={"w-80 "+styles.mainArea}>
        <Hero title="Accelerate Your Business" subtitle="Cutting-edge Digital Solutions" para="Custom-tailored web modules for all your business needs; Made with precision and love, from
                an expert developer." />
        <About />
        <div className={styles.shapes}>
          <img src="/images/common/bg-puzzle.png" width="100"></img>
          <img src="/images/common/bg-puzzle.png" width="100"></img>
          <img src="/images/common/bg-gears.png" width="100"></img>
          <img src="/images/common/bg-shapes.png" width="100"></img>
          <img src="/images/common/bg-shapes.png" style={{transform:'rotate(90deg)'}} width="100"></img>
        </div>

        <ClientScroller images={clientImages}/>
        <Projects/>
      </section>
    </div>);

};

export default App;
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Menu from './responsiveNavbar';
import Hero from './hero';
import About from './about';
import ClientScroller from './clients';
import Projects from './projects';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.module.css';
import styles from './styles.module.css';

const App = () => {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particleOptions = {
    "particles": {
      "number": {
        "value": 251,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#4851d9"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 9
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.78125616521595,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 19.18081918081918,
          "size_min": 5.594405594405594,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#6980b9",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

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
    <>
      <style>
        {` body {
           background-image: url('/images/common/bg3.png'); 
        }
        `}
      </style>
      <div className={styles.all}>

        <Menu logo={logo} links={links}></Menu>
        <section className={"w-80 " + styles.mainArea}>
          <Hero title="Accelerate Your Business" subtitle="Cutting-edge Digital Solutions" para="Custom-tailored web modules for all your business needs; Made with precision and love, from
                an expert developer." />
          <About />
          <div className={styles.shapes}>
            {/* <img src="/images/common/bg-puzzle.png" width="100"></img>
          <img src="/images/common/bg-puzzle.png" width="100"></img>
          <img src="/images/common/bg-gears.png" width="100"></img>
          <img src="/images/common/bg-shapes.png" width="100"></img>
          <img src="/images/common/bg-shapes.png" style={{transform:'rotate(90deg)'}} width="100"></img> */}
          </div>
        </section>
        <ClientScroller images={clientImages} />
        <Projects />

        
      </div>
      <Particles id="tsparticles" init={particlesInit} options={particleOptions} className={styles.particles} style={{zIndex:"-999 !important;  background-image: url('/images/common/bg3.png'); " }}/>
    </>
  );

};

export default App;
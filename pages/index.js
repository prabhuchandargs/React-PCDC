import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import Menu from './responsiveNavbar';
import Hero from './hero';
import About from './about';
import ClientScroller from './clients';
import Projects from './projects';
import ImageScroller from './ImageScroller';
import ImageList from './ImageScroller2';
import Footer from "./Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.module.css';
import 'font-awesome/css/font-awesome.min.css';
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
        "value": 70,
        "density": {
          "enable": false,
          "value_area": 80
        }
      },
      "fpsLimit": 30,
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
      // "opacity": {
      //   "value": 0.78125616521595,
      //   "random": true,
      //   "anim": {
      //     "enable": false,
      //     "speed": 1,
      //     "opacity_min": 0.1,
      //     "sync": false
      //   }
      // },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
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
        "speed": 2,
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
          "enable": false,
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
    '/images/clients/ywam.png',
    '/images/clients/kredence.png',
    '/images/clients/mohfw.png'
  ];

  const scrollImages1 = [
    '/images/projects/kredence.png',
    '/images/projects/fhir-site1.png',
    '/images/projects/ywam.png',
    '/images/projects/eraktkosh-page.png',
    '/images/projects/aiimsR.png',
  ];

  const scrollImages2 = [
    '/images/projects/g20.png',
    '/images/projects/eraktkosh-assets.png',
    '/images/projects/11.png',
    '/images/projects/wbdd.png'
  ];
  const scrollImages0 = [
    '/images/projects/g20.png',
    '/images/projects/eraktkosh-assets.png',
    '/images/projects/11.png',
    '/images/projects/wbdd.png',
    '/images/projects/g20.png',
    '/images/projects/eraktkosh-assets.png',
    '/images/projects/11.png',
    '/images/projects/wbdd.png'
  ];

  if (typeof window !== 'undefined') {
    document.body.style.backgroundImage = "url('/images/common/bg3.png')";
  }

  return (
    <>
      <style>
        {`
          /* Set the width of the carousel to the width of its container */
          #image-carousel {
            width: 100%;
          }
          
          /* Set the height of the rows */
          #row1-container,
          #row2-container {
            height: 370px; /* image height + gap */
          }
          
          /* Set the background color of the row containers */
          #row1-container,
          #row2-container {
            background-color: #f8f9fa;
          }
          
          /* Set the background color of the images */
          .rounded-3 {
            background-color: #e9ecef;
          }
        `}
      </style>
      <div className={styles.all}>

        <Menu logo={logo} links={links}></Menu>
        <div className={"container w-80 " + styles.mainArea}>
          <div className="row">
            <div className="col-6 align-self-center">
              <Hero className="col-6" title="Accelerate Your Business with" subtitle="Cutting-edge Digital Solutions" para="Custom-tailored web modules for all your business needs; Made with precision and love, from
                  an expert developer." />
            </div>
            <div className="col-6">
              <ImageList images={scrollImages1} jmages={scrollImages2} />
            </div>

          </div>



        </div>

        <div className={styles.shapes}>
          {/* <img src="/images/common/bg-puzzle.png" width="100"></img>
          <img src="/images/common/bg-puzzle.png" width="100"></img>
          <img src="/images/common/bg-gears.png" width="100"></img>
          <img src="/images/common/bg-shapes.png" width="100"></img>
          <img src="/images/common/bg-shapes.png" style={{transform:'rotate(90deg)'}} width="100"></img> */}
        </div>

        <About />
        <ClientScroller images={clientImages} />
        <Projects />
        {/* <ImageScroller images={scrollImages1} jmages={scrollImages2}/> */}

        <Footer isAvailable={true} />


      </div>
      <Particles id="tsparticles" init={particlesInit} options={particleOptions} className={styles.particles} style={{ zIndex: "-999 !important;  background-image: url('/images/common/bg3.png'); " }} />
    </>
  );

};

export default App;
import { useCallback } from 'react';
import { tw } from 'twind';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Arrow from '@/constants/svg/arrow.svg';
import { Container, Engine } from 'tsparticles-engine';

type ParticleBgProps = {
  className?: null | string;
};

function ParticleBg({ className = null }: ParticleBgProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className={className as string | undefined}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        interactivity: {
          events: {
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          move: {
            direction: `right`,
            enable: true,
            speed: 0.3,
          },
          number: {
            density: {
              enable: true,
              area: 3000,
            },
            value: 400,
          },
          lineLinked: {
            enable: false,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
            },
          },
          size: {
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

const articles = [
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur ipsum esse.`,
    image: `/images/case-1.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit ipsum esse.`,
    image: `/images/case-2.webp`,
    alt: `Proident pariatur est.`,
  },
  {
    title: `Velit reprehenderit culpa Lorem reprehenderit excepteur esse.`,
    image: `/images/case-3.webp`,
    alt: `Proident pariatur est.`,
  },
];

function CasesSection() {
  return (
    <section>
      <div className={tw(`w-full min-h-screen bg-gray-900 relative`)}>
        <ParticleBg className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)} />
        <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
          <h1 className={tw(`text-white text-4xl lg:text-7xl font-bold text-center`)}>What will you build?</h1>
          <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>
            Don’t just take our word for it — see what leaders in digital are saying
          </p>
          <div className={tw(`mx-auto pt-24`)}>
            <div className={tw(`w-full flex flex-wrap justify-around`)}>
              {articles.map((article) => (
                <div
                  key={article.title}
                  className={tw(
                    `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                      xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105`,
                  )}
                >
                  <div className={tw(`h-64 z-20`)}>
                    <img
                      src={article.image}
                      alt={article.alt}
                      className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                    <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>Case study</p>
                    <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.title}</p>
                  </div>
                </div>
              ))}
              <span
                className={tw(
                  `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-indigo-400 cursor-pointer z-30 hover:text-indigo-600`,
                )}
              >
                See all case studies
                <Arrow className={tw(`h-6 w-6 fill-current ml-2`)} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CasesSection;

import { HelmetProvider, Helmet } from 'react-helmet-async';
import { SkipLink } from './components/layout/SkipLink';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { SITE } from './constants/content';

function App() {
  useSmoothScroll();

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${SITE.name} — ${SITE.role}`}</title>
        <meta name="description" content={SITE.tagline} />
        <meta property="og:title" content={`${SITE.name} — ${SITE.role}`} />
        <meta property="og:description" content={SITE.tagline} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${SITE.name} — ${SITE.role}`} />
        <meta name="twitter:description" content={SITE.tagline} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: SITE.name,
            jobTitle: SITE.role,
            email: SITE.email,
            url: SITE.linkedin,
            sameAs: [SITE.linkedin, SITE.github],
          })}
        </script>
      </Helmet>

      <SkipLink />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </HelmetProvider>
  );
}

export default App;

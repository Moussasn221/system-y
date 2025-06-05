import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Students';
import Recruiters from './pages/Recruiters';
import Contact from './pages/Contact';
import Layout from './components/Layout';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/students" element={<Students />} />
          <Route path="/recruiters" element={<Recruiters />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

// Layout.tsx
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">SystemXëy</h1>
        <nav className="space-x-4">
          <a href="/">Accueil</a>
          <a href="/about">À propos</a>
          <a href="/students">Étudiants</a>
          <a href="/recruiters">Recruteurs</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
      <main className="p-4">{children}</main>
      <footer className="bg-gray-100 text-center p-4 text-sm mt-10">© 2025 SystemXëy. Tous droits réservés.</footer>
    </div>
  );
}

// Home.tsx
export default function Home() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Bienvenue sur SystemXëy</h2>
      <p className="mt-4">Découvrez les talents sénégalais prêts à intégrer le marché du travail. Une initiative soutenue par l’ANSD.</p>
    </section>
  );
}

// About.tsx
export default function About() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">À propos</h2>
      <p className="mt-4">SystemXëy valorise les profils des étudiants sénégalais en fin de cycle afin de favoriser leur insertion professionnelle.</p>
    </section>
  );
}

// Students.tsx
export default function Students() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Espace Étudiants</h2>
      <p className="mt-4">Soumettez votre profil, CV, et vidéo de présentation pour augmenter vos chances de recrutement.</p>
    </section>
  );
}

// Recruiters.tsx
export default function Recruiters() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Espace Recruteurs</h2>
      <p className="mt-4">Consultez les profils des meilleurs talents formés dans les universités sénégalaises.</p>
    </section>
  );
}

// Contact.tsx
export default function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-4">Pour toute question ou collaboration : contact@systemxey.sn</p>
    </section>
  );
}

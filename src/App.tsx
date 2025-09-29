import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { ResearchPage } from './pages/ResearchPage';
import { ContactPage } from './pages/Contact';
import { AboutPage } from './pages/About';
import { BlogsPage } from './pages/BlogsPage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnnouncementBanner } from './components/AnnouncementBanner';



function App() {

  return (
    <Router>
      <div className="min-h-screen w-full bg-white relative">
        {/* Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
            filter: "blur(4px)",
          }}
        />
        {/* Your Content/Components */}

      <div className="min-h-screen text-primary relative">
        <Navbar />
        {/* <AnnouncementBanner /> */}

        {/* Main Content */}
        <main className="pt-32 ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
      </div>
    </Router>
  );
}

export default App;
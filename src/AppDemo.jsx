// דף ראשי ודפי תוכן נוספים לאתר של פרופ' נדב לנסקי
// כולל Layout מודרני, מבוסס React עם TailwindCSS ו-AOS לאנימציות

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function AppDemo() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <Router>
      <div className="font-sans bg-gray-50 min-h-screen">
        <header className="bg-white shadow-md sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-2xl font-bold text-blue-900">פרופ' נדב לנסקי</h1>
            <div className="space-x-4 rtl:space-x-reverse">
              <Link to="/" className="text-gray-700 hover:text-blue-700">ראשי</Link>
              <Link to="/research" className="text-gray-700 hover:text-blue-700">תחומי מחקר</Link>
              <Link to="/publications" className="text-gray-700 hover:text-blue-700">פרסומים</Link>
              <Link to="/collaborations" className="text-gray-700 hover:text-blue-700">שיתופי פעולה</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-700">צור קשר</Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/collaborations" element={<Collaborations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
          © 2025 Nadav Lensky | Geological Survey of Israel
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="space-y-6" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-blue-800">קבוצת המחקר של פרופ' נדב לנסקי</h2>
      <p>
        הקבוצה מתמקדת בתהליכים גיאולוגיים באזור ים המלח תוך שימוש במודלים פיזיקליים, נתוני שטח, ודימות לווייני.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="תחומי מחקר" link="/research" />
        <Card title="פרסומים מדעיים" link="/publications" />
        <Card title="צור קשר" link="/contact" />
      </div>
    </div>
  );
}

function Research() {
  return (
    <div className="space-y-4" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-blue-800">תחומי מחקר</h2>
      <ul className="list-disc rtl list-inside">
        <li>תהליכים הידרולוגיים וגיאומורפולוגיים בים המלח</li>
        <li>ניתוח שינויים טופוגרפיים בעזרת לוויינים</li>
        <li>מודלים פיזיקליים של זרימה תת-קרקעית</li>
        <li>קשר בין תהליכים גיאולוגיים לאקלים</li>
      </ul>
    </div>
  );
}

function Publications() {
  return (
    <div className="space-y-4" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-blue-800">פרסומים מדעיים</h2>
      <ul className="list-decimal rtl list-inside space-y-2">
        <li>Lensky, N.G. et al. (2023). Seasonal dynamics of Dead Sea shoreline. *Journal of Geophysical Research*</li>
        <li>Lensky, N.G. et al. (2021). Groundwater flow in hypersaline environments. *Hydrology Journal*</li>
        <li>Lensky, N.G. et al. (2020). Remote sensing of sinkhole formation. *Geological Society Bulletin*</li>
      </ul>
    </div>
  );
}

function Collaborations() {
  return (
    <div className="space-y-4" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-blue-800">שיתופי פעולה</h2>
      <p>
        שיתופי פעולה עם אוניברסיטאות בארץ ובעולם, כולל הטכניון, האוניברסיטה העברית, MIT ואוניברסיטת מינכן.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="space-y-4 max-w-md mx-auto" data-aos="fade-up">
      <h2 className="text-2xl font-bold text-blue-800">צור קשר</h2>
      <form className="space-y-4">
        <input type="text" placeholder="שם" className="w-full p-2 border rounded" />
        <input type="email" placeholder="אימייל" className="w-full p-2 border rounded" />
        <textarea placeholder="הודעה" className="w-full p-2 border rounded" rows={4}></textarea>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">שלח</button>
      </form>
    </div>
  );
}

function Card({ title, link }) {
  return (
    <Link to={link} className="block p-6 border rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-blue-700">{title}</h3>
    </Link>
  );
}

export default AppDemo;

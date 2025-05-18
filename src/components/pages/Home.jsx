import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="px-4 sm:px-12 py-10 text-gray-800 bg-white">
      {/* Logos Section */}
      <section className="flex flex-wrap justify-center gap-8 items-center mb-4" data-aos="zoom-in">
        <img
          src="https://static.wixstatic.com/media/827931_18b92efd70464eafbf35df4b203f74c1~mv2.jpg"
          alt="Logo 1"
          className="h-24 object-contain"
        />
      </section>

      <section className="text-center mb-10" data-aos="fade-down">
        <h2 className="text-2xl font-semibold mb-2">DEAD SEA OBSERVATORY</h2>
        <a
          href="https://www.gov.il/en/departments/israel-geological-survey/govil-landing-page"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline text-sm sm:text-base"
        >
          Geological Survey of Israel
        </a>
      </section>

      <section className="max-w-3xl mx-auto text-center" data-aos="fade-up">
        <h3 className="text-xl font-medium mb-4">Welcome to the Dead Sea Observatory</h3>
        <p className="text-sm sm:text-base leading-relaxed">
          This observatory is dedicated to the study of tectonics, geochemistry, and geophysics
          of the Dead Sea region. Explore our ongoing research, collaborations, and state-of-the-art
          facilities supporting geoscientific discovery.
        </p>
      </section>
    </div>
  );
}

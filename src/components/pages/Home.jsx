import React from 'react';

const Home = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* כותרת עליונה עם תמונת רקע */}
      <section className="h-[680px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://static.wixstatic.com/media/827931_03d46597fd1a47ddb0bc1deacda7a09e~mv2.jpg')" }}>
        <h1 className="text-5xl font-bold text-white text-center shadow-lg bg-black bg-opacity-50 p-4">
          DEAD SEA OBSERVATORY
        </h1>
      </section>

      {/* מחקר עיקרי */}
      <section className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Our Research Focus</h2>
        <p className="mb-4">
          We are a research team (part of the Geological Survey of Israel) exploring the dynamics of the Dead Sea...
        </p>
      </section>

      {/* תחומי מחקר */}
      <section className="bg-gray-100 p-6">
        <h2 className="text-3xl font-semibold mb-4">Our Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">Evaporation</h3>
            <p>Evaporation is a major component...</p>
          </div>
          {/* הוסף עוד תחומים לפי הצורך */}
        </div>
      </section>

      {/* התפתחויות אחרונות */}
      <section className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Recent Developments</h2>
        <ul className="list-disc pl-6">
          <li className="mb-2">
            <strong>New Remotely Operated Vehicle:</strong> A new vehicle joined the team.
          </li>
        </ul>
      </section>

      {/* גלריה */}
      <section className="p-6">
        <div className="mb-6">
          <img
            src="https://static.wixstatic.com/media/827931_1cdf5bb1a57b4d81a84752e10c473d90~mv2.webp"
            alt="Joint BSF-NSF grant received"
            className="w-full rounded shadow-lg"
          />
          <h2 className="text-2xl mt-4 font-bold">
            <a href="https://gsideadsea.wixsite.com/dso-gsi/single-post/2020/02/21/joint-bsf-nsf-grant-received" className="text-blue-600 hover:underline">
              Joint BSF-NSF grant received
            </a>
          </h2>
        </div>
      </section>

      {/* לוגואים */}
      <section className="flex justify-center gap-10 p-6 bg-gray-50">
        <a href="https://gsideadsea.wixsite.com/dso-gsi">
          <img
            src="https://static.wixstatic.com/media/827931_18b92efd70464eafbf35df4b203f74c1~mv2.jpg"
            alt="DS Observatory Logo"
            className="h-20 object-contain"
          />
        </a>
        <a href="http://www.gsi.gov.il/eng/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://static.wixstatic.com/media/827931_92e1125bdac94c83bc4ca529bda7c538~mv2.jpg"
            alt="GSI Logo"
            className="h-20 object-contain"
          />
        </a>
      </section>

    </div>
  );
};

export default Home;

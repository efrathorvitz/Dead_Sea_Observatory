import React from 'react';

function AppDemo() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gray-100 p-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="https://static.wixstatic.com/media/827931_18b92efd70464eafbf35df4b203f74c1~mv2.jpg"
            alt="Dead Sea Group Logo"
            className="h-20"
          />
          <h1 className="text-3xl font-bold">Dead Sea Research Group</h1>
          <p className="text-lg">Research on the Dead Sea and its Surroundings</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Geological_Survey_of_Israel_Logo.svg/2560px-Geological_Survey_of_Israel_Logo.svg.png"
            alt="GSI Logo"
            className="h-12"
          />
        </div>
      </header>

      {/* Main content */}
      <main className="p-6 max-w-4xl mx-auto space-y-10">

        {/* Publications */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Recent Publications</h2>
          <ul className="list-disc list-inside">
            <li>Geological Evolution of the Dead Sea Basin</li>
            <li>Mineral Deposits and Their Economic Implications</li>
            <li>Environmental Changes in the Dead Sea: A 50-Year Perspective</li>
          </ul>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Current Projects</h2>
          <ul className="list-disc list-inside">
            <li>Mapping the Salt Layers of the Dead Sea</li>
            <li>Assessing Impact of Water Level Decline</li>
            <li>Collaboration with Geological Institute of Israel</li>
          </ul>
        </section>

        {/* Media */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Gallery & Media</h2>
          <a
            href="https://www.youtube.com/channel/UCkSUe_beTLmySHEBxxVgKVA?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Visit our YouTube Channel
          </a>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p><strong>Nadav Lensky</strong>, Head of Dead Sea Observatory</p>
          <p>32 Yesha'yahu Leibowitz St, Jerusalem, Israel</p>
          <p>Email: <a href="mailto:nadavl@gsi.gov.il" className="text-blue-600">nadavl@gsi.gov.il</a>, <a href="mailto:GSI.DeadSea@gmail.com" className="text-blue-600">GSI.DeadSea@gmail.com</a></p>
          <p>Phone: 02-5314259</p>
          <p>Web founder: Efrat Miryam Lensky</p>
        </section>

      </main>
    </div>
  );
}

export default AppDemo;

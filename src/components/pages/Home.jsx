import React from 'react';

const Home = () => (
  <div className="bg-white text-gray-800">
    <section className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Our Research Focus</h2>
      <p className="mb-4">
        We are a research team (part of the Geological Survey of Israel) exploring the dynamics of the Dead Sea: from evaporation at the lake’s surface, through the limnological processes within the water column, to the active formation of salt layers at the lake’s bottom.
      </p>
      <p className="mb-4">
        The Dead Sea, a deep hypersaline lake subjected to negative water balance that precipitates salt layers, is a unique aquatic system on Earth today, but the presence of salt layers (up to a few kilometers in thickness) in sedimentary basins suggests that these were common aquatic environments in the past.
      </p>
      <p className="mb-4">
        In order to understand the processes and hydroclimatic conditions related to the formation of these layers, the Dead Sea is probably the best starting point.
      </p>
      <p className="mb-4">
        In addition, the Dead Sea vicinity is a multi-setting natural laboratory for rare exploration of geomorphic responses to base level fall.
      </p>
    </section>

    <section className="bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold mb-4">Our Research Areas</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Evaporation</h3>
          <p className="mb-4">
            Evaporation is a major component of the water, heat, and salt budgets of lakes, yet it is the least known component, especially in hypersaline environments, and even more so in deep lakes.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Sedimentology</h3>
          <p className="mb-4">
            These step-up improvements in knowledge of evaporation and thermohaline stratification have allowed us to narrow down the primary processes controlling the spatiotemporal deposition dynamics of layers halite in the deep hypersaline Dead Sea.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Limnology</h3>
          <p className="mb-4">
            The dynamics of thermohaline stratification and halite saturation of the lake are essential in understanding processes of salt deposition.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Geomorphology</h3>
          <p className="mb-4">
            The dramatic lake level decline of the Dead Sea provides a multi-setting natural laboratory for rare exploration of the geomorphic responses to base level fall.
          </p>
        </div>
      </div>
    </section>

    <section className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Recent Developments</h2>
      <ul className="list-disc pl-6">
        <li className="mb-2">
          <strong>New Remotely Operated Vehicle:</strong> A new Remotely Operated Vehicle joined the Dead Sea Observatory.
        </li>
        <li className="mb-2">
          <strong>Joint BSF-NSF Grant:</strong> A joint grant of United States-Israel Binational Science Foundation (BSF) and NSF.
        </li>
      </ul>
    </section>
  </div>
);

export default Home;

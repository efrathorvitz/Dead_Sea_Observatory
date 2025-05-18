export default function Contact() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-12"
      data-aos="fade-up"
    >
      {/* צד ימין: פרטי יצירת קשר */}
      <div className="md:w-1/2 text-left md:pr-8" data-aos="fade-right">
        <h2 className="text-4xl font-extrabold mb-6 text-indigo-700" data-aos="fade-down">
          Contact Us
        </h2>

        <div className="space-y-2 text-gray-700 text-base">
          <p data-aos="fade-up" data-aos-delay="100">
            <strong>Nadav Lensky</strong>, Head of Dead Sea Observatory
          </p>
          <p data-aos="fade-up" data-aos-delay="200">32 Yesha'yahu Leibowitz St</p>
          <p data-aos="fade-up" data-aos-delay="300">Jerusalem, Israel</p>
          <p data-aos="fade-up" data-aos-delay="400">
            <a href="mailto:nadavl@gsi.gov.il" className="text-blue-600 hover:underline">
              nadavl@gsi.gov.il
            </a>
          </p>
          <p data-aos="fade-up" data-aos-delay="500">
            <a href="mailto:GSI.DeadSea@gmail.com" className="text-blue-600 hover:underline">
              GSI.DeadSea@gmail.com
            </a>
          </p>
          <p data-aos="fade-up" data-aos-delay="600">
            Web founder: Efrat Miryam Lensky
          </p>
          <p data-aos="fade-up" data-aos-delay="700">02-5314259</p>
        </div>
      </div>

      {/* צד שמאל: מפה */}
      <div
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.610360331099!2d35.19412461513148!3d31.77779368129547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d62d8dbdf5e5%3A0x7fc2bd2c34bd9242!2sYesha&#39;yahu%20Leibowitz%20St%2032%2C%20Jerusalem!5e0!3m2!1sen!2sil!4v1716040000000"
          width="100%"
          height="300"
          className="rounded-xl shadow-md w-[95%] md:w-[90%]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

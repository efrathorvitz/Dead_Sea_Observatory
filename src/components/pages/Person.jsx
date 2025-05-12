import React from 'react';

const Person = ({ person }) => {
  const {
    name,
    title,
    position,
    email,
    photo,
    bio,
    links = [],
  } = person;

  const baseUrl = 'http://localhost:1337';
  const imagePath = photo?.formats?.large?.url || photo?.url || '';
  const imageUrl = `${baseUrl}${imagePath}`;

  return (
    <div className="flex flex-col lg:flex-row bg-white shadow-2xl rounded-2xl overflow-hidden max-w-screen-xl mx-auto my-10">
      {/* Photo */}
      <div className="lg:w-1/2 w-full h-80 lg:h-auto relative">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text info */}
      <div className="lg:w-1/2 w-full p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{name}</h2>
          <p className="text-md text-gray-600 mt-2">{title}</p>
          <p className="text-md text-gray-600 mb-6">{position}</p>

          <div className="text-gray-800 text-sm space-y-4">
            {bio.map((paragraph, i) => (
              <div
                key={i}
                className="leading-relaxed"
                dangerouslySetInnerHTML={{ __html: paragraph.children[0]?.text || '' }}
              />
            ))}
          </div>
        </div>

        {/* Links + Email */}
        <div className="mt-8 space-y-3">
          <p className="text-sm text-blue-700 break-all">
            <a href={`mailto:${email}`} className="underline">
              {email}
            </a>
          </p>
          <div className="flex flex-wrap gap-4">
            {links.map(link => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 underline hover:text-blue-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;

import React, { useEffect } from 'react';
import ImageGallery from './ImageGallery';
import RichTextRenderer from './RichTextRenderer';

const EntityDisplay = ({ entity }) => {
  useEffect(() => {
    import('aos').then((AOS) => AOS.init({ duration: 800 }));
  }, []);

  if (!entity) return null;

  const hiddenFields = ['id', 'slug', 'documentId', 'order'];
  const isHiddenKey = (key) => hiddenFields.includes(key) || key.includes('At');

  const renderField = (key, value) => {
    if (!value || isHiddenKey(key)) return null;

    if (key === 'image') {
      if (Array.isArray(value)) {
        return <ImageGallery key={key} images={value} />;
      } else if (typeof value === 'object') {
        const url = value?.formats?.large?.url || value?.url;
        return url ? (
          <img
            key={key}
            src={url}
            alt={value?.name || 'image'}
            className="w-full max-w-md mx-auto mb-4"
            data-aos="fade-in"
          />
        ) : null;
      }
    }

    if (key === 'photo' && typeof value === 'object') {
      const url = value?.formats?.large?.url || value?.url;
      return url ? (
        <img
          key={key}
          src={url}
          alt={value?.name || 'photo'}
          className="w-full max-w-md mx-auto mb-4"
          data-aos="fade-in"
        />
      ) : null;
    }

    if (key === 'links' && Array.isArray(value)) {
      return (
        <div key={key} className="my-4 space-y-1" data-aos="fade-right">
          {value.map((link) => (
            <a
              key={link.id || link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-600 underline hover:text-blue-800"
            >
              {link.label || link.url}
            </a>
          ))}
        </div>
      );
    }

    if (key === 'email' && typeof value === 'string') {
      return (
        <p key={key} className="mb-2" data-aos="fade-left">
          <a href={`mailto:${value}`} className="text-blue-600 underline hover:text-blue-800">
            {value}
          </a>
        </p>
      );
    }

    if ((key === 'bio' || key === 'description') && Array.isArray(value)) {
      return <RichTextRenderer key={key} value={value} />;
    }

    if (typeof value === 'string' || typeof value === 'number') {
      return (
        <p key={key} className="mb-2" data-aos="fade-in">
          <strong>{key}:</strong> {value}
        </p>
      );
    }

    console.warn(`שדה לא מזוהה "${key}":`, value);
    return null;
  };

  const orderedEntries = Object.entries(entity)
    .filter(([key]) => !isHiddenKey(key))
    .sort((a, b) => {
      const aOrder = entity.order ?? 0;
      const bOrder = entity.order ?? 0;
      return aOrder - bOrder;
    });

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 max-w-3xl mx-auto my-6">
      {orderedEntries.map(([key, value]) => renderField(key, value))}
    </div>
  );
};

export default EntityDisplay;

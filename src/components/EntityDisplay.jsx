import React, { useEffect } from 'react';
import ImageGallery from './ImageGallery';
import RichTextRenderer from './RichTextRenderer';

const EntityDisplay = ({ entity }) => {
  useEffect(() => {
    import('aos').then((AOS) => AOS.init({ duration: 800 }));
  }, []);

  if (!entity) return null;
  if (entity?.isFeatured === false) return null;

  const hiddenFields = ['id', 'slug', 'documentId', 'order','isFeatured'];
  const isHiddenKey = (key) => hiddenFields.includes(key) || key.includes('At');

  const renderField = (key, value) => {
    if (!value || isHiddenKey(key)) return null;

    // תמונות
    if (key === 'images' || key === 'image' || key === 'photo') {
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


    if (key === 'videoUrl' && typeof value === 'string') {
      return (
        <div key={key} className="my-4" data-aos="fade-in">
          <iframe
            src={value}
            title="Video"
            className="w-full aspect-video rounded-lg shadow-md"
            allowFullScreen
          />
        </div>
      );
    }

    // קישורים
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

    // אימייל
    if (key === 'email' && typeof value === 'string') {
      return (
        <p key={key} className="mb-2" data-aos="fade-left">
          <a href={`mailto:${value}`} className="text-blue-600 underline hover:text-blue-800">
            {value}
          </a>
        </p>
      );
    }

    // טקסט עשיר
    const richTextFields = ['bio', 'description', 'summary', 'content'];
    if (richTextFields.includes(key) && Array.isArray(value)) {
      return <RichTextRenderer key={key} value={value} />;
    }

    // טקסט רגיל
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      return (
        <p key={key} className="mb-2" data-aos="fade-in">
          <strong>{key}:</strong> {String(value)}
        </p>
      );
    }

    // שדה לא מזוהה
    console.warn(`שדה לא מזוהה "${key}":`, value);
    return null;
  };

  const visibleEntries = Object.entries(entity).filter(([key]) => !isHiddenKey(key));

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 max-w-3xl mx-auto my-6">
      {visibleEntries.map(([key, value]) => renderField(key, value))}
    </div>
  );
};

export default EntityDisplay;

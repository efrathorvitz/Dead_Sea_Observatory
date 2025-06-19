import React, { useEffect } from 'react';
import ImageGallery from './ImageGallery';
import RichTextRenderer from './RichTextRenderer';

const EntityDisplay = ({ entity }) => {
  if (!entity) return null;
  if (entity?.isFeatured === false) return null;

  const hiddenFields = ['id', 'slug', 'documentId', 'order', 'isFeatured'];
  const isHiddenKey = (key) => hiddenFields.includes(key) || key.includes('At');

  // מציאת תמונת photo בלבד
  let photoImage = null;
  let photoAlt = 'image';

  if (entity?.photo?.formats?.large?.url || entity?.photo?.url) {
    photoImage = entity.photo.formats?.large?.url || entity.photo.url;
    photoAlt = entity.photo?.name || photoAlt;
  }

  const renderField = (key, value) => {
    if (!value || isHiddenKey(key)) return null;

    // תצוגה מיוחדת ל-title בתור כותרת
    if (key === 'title') {
      return (
        <p key={key} className="text-2xl font-bold text-center mb-4" data-aos="fade-in">
          {value}
        </p>
      );
    }

    // תמונות - למעט photo
    if (key === 'images' || key === 'image') {
      if (Array.isArray(value)) {
        return <ImageGallery key={key} images={value} />;
      } else if (typeof value === 'object') {
        const url = value?.formats?.large?.url || value?.url;
        return url ? (
          <div className="flex-shrink-0">
            <img
              key={key}
              src={url}
              alt={value?.name || 'image'}
              className="w-40 h-52 object-cover rounded-lg shadow-md"
              data-aos="fade-in"
            />
          </div>
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
        <div key={key} className="break-all my-4 space-y-1" data-aos="fade-right">
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
          {String(value)}
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
      <div className="flex flex-col md:flex-row gap-6">
        {/* photo בצד שמאל למעלה */}
        {photoImage && (
          <div className="flex-shrink-0">
            <img
              src={photoImage}
              alt={photoAlt}
              className="w-40 h-52 object-cover rounded-lg shadow-md"
              data-aos="fade-in"
            />
          </div>
        )}

        {/* שאר השדות */}
        <div className="flex-1">
          {visibleEntries.map(([key, value]) =>
            key === 'photo' ? null : (
              <React.Fragment key={key}>
                {renderField(key, value)}
              </React.Fragment>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(EntityDisplay);

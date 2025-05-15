import React from 'react';

const baseUrl = 'https://committed-delight-2680eb60f9.strapiapp.com/';
const EntityDisplay = ({ entity }) => {
  if (!entity) return null;

  const renderField = (key, value) => {
    if (
      !value ||
      key === 'id' ||
      key === 'slug' ||
      key.includes('At') ||
      key === 'documentId'
    ) return null;

    // גלריית תמונות
    if (key === 'image' && Array.isArray(value)) {
      return (
        <div key={key} className="my-4 space-y-2">
          {value.map((image, index) => {
            const url = image?.formats?.large?.url || image?.url;
            return url ? (
              <img
                key={index}
                src={`${baseUrl}${url}`}
                alt={image?.name || 'Image'}
                className="w-full max-w-md mx-auto mb-4"
              />
            ) : null;
          })}
        </div>
      );
    }

    // תמונה בודדת
    if (key === 'photo' && typeof value === 'object') {
      const url = value?.formats?.large?.url || value?.url;
      return url ? (
        <img
          key={key}
          src={`${baseUrl}${url}`}
          alt={value?.name || 'photo'}
          className="w-full max-w-md mx-auto mb-4"
        />
      ) : null;
    }

    // קישורים
    if (key === 'links' && Array.isArray(value)) {
      return (
        <div key={key} className="my-4 space-y-1">
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
        <p key={key} className="mb-2">
          <a href={`mailto:${value}`} className="text-blue-600 underline hover:text-blue-800">
            {value}
          </a>
        </p>
      );
    }

    // שדה טקסט עשיר כמו ביוגרפיה
    if (key === 'bio' && Array.isArray(value)) {
      return (
        <div key={key} className="space-y-4 my-4">
          {value.map((item, i) => {
            if (item.type === 'paragraph') {
              const text = item.children?.[0]?.text || '';
              return <p key={i}>{text}</p>;
            }
            if (item.type === 'list') {
              return (
                <ol key={i} className="list-decimal list-inside">
                  {item.children.map((li, j) => (
                    <li key={j}>{li.children?.[0]?.text || ''}</li>
                  ))}
                </ol>
              );
            }
            return null;
          })}
        </div>
      );
    }

    // טקסט רגיל
    if (typeof value === 'string' || typeof value === 'number') {
      return (
        <p key={key} className="mb-2">
          <strong>{key}:</strong> {value}
        </p>
      );
    }

    // fallback — רק לקונסול
    console.warn(`שדה לא מזוהה "${key}":`, value);
    return null;
  };

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 max-w-3xl mx-auto my-6">
      {Object.entries(entity).map(([key, value]) => renderField(key, value))}
    </div>
  );
};

export default EntityDisplay;

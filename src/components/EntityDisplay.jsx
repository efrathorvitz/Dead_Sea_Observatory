import React from 'react';
import ImageGallery from './ImageGallery';
import RichTextRenderer from './RichTextRenderer';
import { getFullImageUrl } from '../utils/getFullImageUrl';

const EntityDisplay = ({ entity }) => {
  if (!entity) return null;

  const hiddenFields = ['id', 'slug', 'documentId', 'order', 'isFeatured'];
  const isHiddenKey = (key) => hiddenFields.includes(key) || key.includes('At');

  const photoImage = getFullImageUrl(entity.photo);
  const photoAlt = entity.photo?.name || 'image';

  const renderField = (key, value) => {
    if (!value || isHiddenKey(key)) return null;

    if (key === 'title') return <p key={key} className="text-2xl font-bold text-center mb-4">{value}</p>;
    if (key === 'name') return <p key={key} className="text-xl font-semibold text-center mb-2">{value}</p>;
    if (key === 'position') return <p key={key} className="text-center italic text-gray-700 mb-4">{value}</p>;

    if (key === 'images' || key === 'image') {
      return Array.isArray(value) ? <ImageGallery key={key} images={value} /> : null;
    }

    const richTextFields = ['bio', 'description', 'summary', 'content'];
    if (richTextFields.includes(key) && Array.isArray(value)) return <RichTextRenderer key={key} value={value} />;

    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      return <p key={key} className="mb-2">{String(value)}</p>;
    }

    return null;
  };

  const visibleEntries = Object.entries(entity).filter(([key]) => !isHiddenKey(key));

  return (
    <div className="bg-white shadow-xl rounded-xl p-6 max-w-3xl mx-auto my-6">
      <div className="flex flex-col md:flex-row gap-6">
        {photoImage && (
          <div className="flex-shrink-0">
            <img src={photoImage} alt={photoAlt} className="w-40 h-52 object-cover rounded-lg shadow-md" />
          </div>
        )}
        <div className="flex-1">
          {visibleEntries.map(([key, value]) => key === 'photo' ? null : renderField(key, value))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(EntityDisplay);

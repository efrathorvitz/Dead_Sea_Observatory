import React from 'react';

const RichTextRenderer = ({ value }) => {
  return (
    <div className="space-y-4 my-4" data-aos="fade-up">
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
};

export default RichTextRenderer;

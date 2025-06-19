import React from 'react';

const RichTextRenderer = ({ value }) => {
  const renderChildren = (children) => {
    return children.map((child, i) => {
      let el = child.text;

      if (child.bold) el = <strong key={i}>{el}</strong>;
      if (child.italic) el = <em key={i}>{el}</em>;
      if (child.underline) el = <u key={i}>{el}</u>;
      if (child.strikethrough) el = <s key={i}>{el}</s>;
      if (child.code) el = (
        <code key={i} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
          {el}
        </code>
      );

      if (child.type === 'link' && child.url) {
        el = (
          <a
            key={i}
            href={child.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {renderChildren(child.children)}
          </a>
        );
      }

      return <React.Fragment key={i}>{el}</React.Fragment>;
    });
  };

  const renderNode = (item, i) => {
    switch (item.type) {
      case 'paragraph':
        return (
          <p key={i} className="mb-2 leading-relaxed">
            {renderChildren(item.children)}
          </p>
        );

      case 'heading': {
        const Tag = `h${item.level || 1}`;
        return (
          <Tag key={i} className="text-2xl font-bold mt-4 mb-2">
            {renderChildren(item.children)}
          </Tag>
        );
      }

      case 'list': {
        const Tag = item.format === 'ordered' ? 'ol' : 'ul';
        const listStyle = item.format === 'ordered' ? 'list-decimal' : 'list-disc';

        return (
          <Tag key={i} className={`${listStyle} list-inside pl-4 mb-2`}>
            {item.children.map((li, j) => (
              <li key={j}>{renderChildren(li.children)}</li>
            ))}
          </Tag>
        );
      }

      default:
        console.warn(`⚠️ לא נתמך: ${item.type}`, item);
        return null;
    }
  };

  return (
    <div className="space-y-4 my-4" data-aos="fade-up">
      {value.map((item, i) => renderNode(item, i))}
    </div>
  );
};

export default RichTextRenderer;

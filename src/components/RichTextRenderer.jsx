import React from 'react';
import { getFullImageUrl } from '../utils/getFullImageUrl';
const RichTextRenderer = ({ value }) => {
  const renderChildren = (children) => {
    return children.map((child, i) => {
      let el = child.text;

      if (child.bold) el = <strong key={i}>{el}</strong>;
      if (child.italic) el = <em key={i}>{el}</em>;
      if (child.underline) el = <u key={i}>{el}</u>;
      if (child.strikethrough) el = <s key={i}>{el}</s>;
      if (child.code) {
        el = (
          <code key={i} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
            {el}
          </code>
        );
      }

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

      case 'code': {
        const codeText = item.children?.map(c => c.text).join('') || '';

        const isHtml = codeText.trim().startsWith('<') && codeText.trim().endsWith('>');

        if (isHtml) {
          return (
            <div key={i} className="my-4" dangerouslySetInnerHTML={{ __html: codeText }} />
          );
        }

        return (
          <pre key={i} className="bg-gray-100 p-4 rounded overflow-auto text-sm font-mono">
            <code>{codeText}</code>
          </pre>
        );
      }

      case 'horizontalRule':
        return <hr key={i} className="my-4 border-t border-gray-300" />;

      case 'image': {
        const img = item.image;
        const url = getFullImageUrl(img);
        if (!url) return null;

        return (
          <div key={i} className="my-4 flex justify-center">
            <img
              src={url}
              alt={img?.alternativeText || img?.name || 'image'}
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        );
      }
      case 'quote':
      case 'blockquote':

        return (
          <blockquote key={i} className="border-l-4 pl-4 italic text-gray-700">
            {renderChildren(item.children)}
          </blockquote>
        );
      case 'table': {
        const { rows, headers } = item;
        return (
          <div key={i} className="overflow-x-auto my-4">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  {headers.map((header, j) => (
                    <th key={j} className="border px-4 py-2 text-left bg-gray-100">
                      {renderChildren(header.children)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, j) => (
                  <tr key={j}>
                    {row.cells.map((cell, k) => (
                      <td key={k} className="border px-4 py-2">
                        {renderChildren(cell.children)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

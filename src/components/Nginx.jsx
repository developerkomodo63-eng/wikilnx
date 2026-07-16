import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Nginx = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/docs_jerale/06_nginx_jerale.md')
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent('No se pudo cargar el contenido.'));
  }, []);

  return (
    <article className="content-card">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default Nginx;

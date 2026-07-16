import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Permisos = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/docs_jerale/04_permisos_jerale.md')
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

export default Permisos;

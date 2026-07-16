import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Instalacion = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/docs_jerale/03_instalacion_jerale.md')
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

export default Instalacion;

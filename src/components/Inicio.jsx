import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const Inicio = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/docs_jerale/01_inicio_jerale.md')
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

export default Inicio;

import React, { useState } from 'react';

function ParagraphInput() {
  const [paragraph, setParagraph] = useState('');
  
  const handleChange = (e) => {
    setParagraph(e.target.value);
  }

  const wordCount = paragraph.split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <textarea
        placeholder="Enter a paragraph..."
        value={paragraph}
        onChange={handleChange}
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default ParagraphInput;


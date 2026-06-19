import React, { useState, useEffect } from 'react';

export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    
    if (subIndex === currentWord.length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }
    
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    
    const timeoutDelay = isDeleting ? 40 : 80;
    
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, timeoutDelay + Math.random() * 20);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);

  return (
    <span className="inline-block min-w-[20px]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse ml-0.5 text-blue-400">|</span>
    </span>
  );
}

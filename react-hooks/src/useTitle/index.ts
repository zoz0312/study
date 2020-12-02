
import { useState, useEffect } from 'react';

type HtmlTitle = HTMLElement | null;
const useTitle = (initialTitle: string): React.Dispatch<React.SetStateAction<string>> => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle: HtmlTitle = document.querySelector<HTMLElement>('title');
    if (htmlTitle) {
      htmlTitle.innerHTML = title;
    }
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}
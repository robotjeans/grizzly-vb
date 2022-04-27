import { FunctionComponent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton: FunctionComponent = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const listener = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener('scroll', listener);

    return () => window.removeEventListener('scroll', listener);
  });

  function handleClick() {
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      {visible && (
        <button
          type="button"
          onClick={handleClick}
          className="fixed right-0 bottom-0 z-50 py-3 px-4 m-8 bg-red-600 border-4 border-red-400 text-white rounded-xl cursor-pointer focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

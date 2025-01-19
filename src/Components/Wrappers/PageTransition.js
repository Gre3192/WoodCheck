import { Transition } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsShowing(true);
    const timeout = setTimeout(() => setIsShowing(false), 500); // Tempo per l'uscita
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <Transition
      as={Fragment}
      show={isShowing}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="h-full w-full">{children}</div>
    </Transition>
  );
};

export default PageTransition;

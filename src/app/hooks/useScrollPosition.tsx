import { useEffect, useState } from "react";

const useScrollPosition = (): boolean => {
  // console.log("calld");

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log("User is scrolling..."); // For debugging
      setIsScrolled(window.scrollY > 100); // Update state on every scroll
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Effect runs only once but scroll handler checks on every scroll

  return isScrolled;
};

export default useScrollPosition;

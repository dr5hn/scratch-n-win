import { useLayoutEffect, useState } from 'react';
import Header from "./header";
import Footer from "./footer";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Layout = (props) => {
  const [, windowHeight] = useWindowSize();
  return (
    <div className="flex flex-col" style={{
      height: windowHeight - 80, // window - message form - navbar
    }}>
      <Header />
      <main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

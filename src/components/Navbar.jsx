import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { navIcons, navLinks } from "@constants";
import useWindowStore from "@store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  const [currentTime, setCurrentTime] = useState(
    dayjs().format("ddd MMM D h:mm A")
  );

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(dayjs().format("ddd MMM D h:mm A"));
    };

    // Update time every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Manish's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name, type }) => (
            <li
              key={id}
              onClick={() => openWindow(type)}
              className="cursor-pointer hover:underline"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
            </li>
          ))}
        </ul>

        <time>{currentTime}</time>
      </div>
    </nav>
  );
};

export default Navbar;

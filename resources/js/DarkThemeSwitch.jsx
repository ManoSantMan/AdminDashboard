// src/components/DarkModeSwitch.jsx
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

const DarkModeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkStored = localStorage.getItem("theme") === "dark";
    setIsDark(darkStored);
    if (darkStored) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = (e) => {
    const checked = e?.target?.checked ?? !document.documentElement.classList.contains("dark");
    setIsDark(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        onChange={toggleDarkMode}
        checked={isDark}
      />
      <Icon icon="tabler:sun" className="swap-off text-yellow-500 size-7" />
      <Icon icon="tabler:moon" className="swap-on text-gray-300 size-7" />
    </label>
  );
};

export default DarkModeSwitch;

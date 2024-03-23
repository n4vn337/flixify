"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted &&
        (currTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-sky-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdDarkMode
            className="text-xl cursor-pointer hover:text-sky-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
};

export default DarkModeToggle;

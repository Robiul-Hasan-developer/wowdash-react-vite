"use client";

import { useEffect, useState } from "react";

// import { useSidebarCollapsed } from "@/hooks/useSidebarCollapsed";
import { useTheme } from '@/components/theme-provider';
import LogoWhite from "../../assets/images/logo-light.png";
import LogoDark from "../../assets/images/logo.png";

function ThemeLogo() {
  const { theme } = useTheme();
//   const isCollapsed = useSidebarCollapsed();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch or wrong theme
  if (!isMounted) return null;

  return (
      <img
        src={theme === "dark" ? LogoWhite : LogoDark}
        alt="Logo"
        width={168}
        height={40}
      />
  );
}

export default ThemeLogo;

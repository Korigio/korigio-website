"use client";

import { useEffect, useState } from "react";
import {
  detectDesktopOsFromNavigator,
  type DesktopOs,
} from "@/lib/os";

export function useVisitorOs(serverOs: DesktopOs | null): DesktopOs | null {
  const [os, setOs] = useState<DesktopOs | null>(serverOs);

  useEffect(() => {
    setOs(detectDesktopOsFromNavigator() ?? serverOs);
  }, [serverOs]);

  return os;
}

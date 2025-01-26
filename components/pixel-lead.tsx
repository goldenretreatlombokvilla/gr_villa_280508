"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const FacebookPixelLeads: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1084556153158205"); //don't forget to change this
        ReactPixel.pageView();
        ReactPixel.trackCustom("lead-drop", {
          currency: "USD",
          value: 1800000.0
        });
      });
  }, [pathname, searchParams]);

  return null;
};

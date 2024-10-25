import { useState, useEffect } from "react";

type useDeviceSizeReturnObject = {
  isMobile: boolean;
  screenSize: string;
};

const useDeviceSize = (): useDeviceSizeReturnObject => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, setScreenSize] = useState<string>("xs");

  //Following tailwind standard breakpoints
  const handleResize = () => {
    const width = window.innerWidth;
    const breakpoints = [
      { label: "md", minWidth: 768 },
      { label: "sm", minWidth: 640 },
      { label: "xs", minWidth: 0 },
    ];

    const currentSize = breakpoints.find(
      (breakpoint) => width >= breakpoint.minWidth
    );

    setScreenSize(currentSize ? currentSize.label : "xs");
  };
  const checkUserAgent = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    // Detect iOS, Android, or Windows Phone based on user agent
    const isMobileDevice = /android|iphone|ipad|ipod|windows phone/i.test(
      userAgent
    );

    return isMobileDevice;
  };

  useEffect(() => {
    // Set initial value based on the current viewport
    handleResize();
    window.addEventListener("resize", handleResize);
    const isMobileDevice = checkUserAgent();

    const isMobileSize = /sm|xs/i.test(screenSize);
    setIsMobile(isMobileDevice || isMobileSize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  return { isMobile, screenSize };
};

export default useDeviceSize;

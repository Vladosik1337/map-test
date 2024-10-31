"use client";

import { queryClient } from "@/api";
import { TenementsProvider } from "@/contexts";
import { QueryClientProvider } from "@tanstack/react-query";
import { Alegreya_Sans } from "next/font/google";

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alegreyaSans.className}>
      <head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.3.0/mapbox-gl-draw.css"
          type="text/css"
        />
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.7.2/mapbox-gl-geocoder.css"
          type="text/css"
        />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <TenementsProvider>{children}</TenementsProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

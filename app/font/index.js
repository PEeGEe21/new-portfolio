import localFont from "next/font/local";

export const SpaceFont = localFont({
  src: [
    {
      path: "./SpaceGrotesk/SpaceGrotesk-Bold.ttf",
      weight: "700",
    },
    {
      path: "./SpaceGrotesk/SpaceGrotesk-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "./SpaceGrotesk/SpaceGrotesk-Medium.ttf",
      weight: "500",
    },
    {
      path: "./SpaceGrotesk/SpaceGrotesk-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-space",
});


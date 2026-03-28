import localFont from "next/font/local";

export const prepspe = localFont({
  src: [
    {
      path: "../../public/fonts/Preospe.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-prepspe",
});

export const hago = localFont({
  src: [
    {
      path: "../../public/fonts/Hago.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-hago",
});

export const gebuk = localFont({
  src: [
    {
      path: "../../public/fonts/gebuk-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gebuk",
});

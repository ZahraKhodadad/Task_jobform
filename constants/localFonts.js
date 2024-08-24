import localFonts from "next/font/local";
const vazirFonts = localFonts({
  src: [
    {
      path: "../public/fonts/vazir/Vazirmatn-Bold.ttf",
      style: "bold",
      weight: "700",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-Light.ttf",
      style: "light",
      weight: "300",
    },
    {
      path: "../public/fonts/vazir/Vazirmatn-Regular.ttf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--fontsVazir",
  style: "bold",
  display: "auto",
});
export default vazirFonts;

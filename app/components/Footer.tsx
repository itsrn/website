import { HDate } from "@hebcal/core";

export const Footer = () => {
  var hebrewDate = new HDate(new Date());

  return (
    <footer className="flex items-center justify-center mt-0 bg-[#131315] transition-all duration-300 ease-[ease-out] hover:text-white text-[#8a8a93] max-h-full py-4 rounded-tl-3xl rounded-tr-3xl absolute bottom-0 left-0 right-0 pb-10">
      &copy; Created by Ron Nuss, {hebrewDate.getFullYear()} (
      {new Date().getFullYear()}).
    </footer>
  );
};

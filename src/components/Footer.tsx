const Footer = () => {
  return (
    <footer className="w-full py-4 px-8 flex items-center justify-between bg-background dark:bg-background shadow-md font-serif rounded-t-md outline-1 outline-[#808080]">
      <p>&copy; {new Date().getFullYear()} JereNwa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

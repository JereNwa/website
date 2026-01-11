const Footer = () => {
  return (
    <footer className="w-full py-4 px-8 flex items-center justify-between bg-foreground dark:bg-foreground shadow-md text-white font-serif dark:text-black rounded-t-md">
      <p>&copy; {new Date().getFullYear()} JereNwa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

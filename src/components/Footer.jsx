const Footer = () => {
  return (
    <footer className="hidden sm:block bg-gray-100 text-gray-600 text-sm px-4 py-6 md:px-10 border-t">
      <div className="text-center">
        © {new Date().getFullYear()} Helsinki Cultural Compass. All rights
        reserved.
      </div>
    </footer>
  );
};
export default Footer;

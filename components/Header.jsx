const Header = () => {
  return (
    <div className="bg-gray py-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="img/maxroll-logo.webp" alt="logo" />
        <nav>
          <a 
            href="#" 
            className="text-light-white text-sm font-bold uppercase">
              HOME
          </a>
          <a 
            href="#" 
            className="text-light-white text-sm font-bold uppercase pl-8">
              BUILD GUIDES
          </a>
          <a 
            href="#" 
            className="text-light-white text-sm font-bold uppercase pl-8">
              CONTACT
          </a>
        </nav>
        <img className="w-5 h-5 cursor-pointer" src="img/search-white.webp" alt="search icon" />
      </div>
    </div>
  )
}

export default Header;
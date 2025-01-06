
const Navbar = () => {
  return (
      <div>
        <nav className="fixed top-0 left-0 w-full bg-[#FEFEFF]/30 backdrop-blur-sm z-50 py-4 border-b border-[#FEFEFF]/20">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-xl">
                      <a href="mailto: skandamayya4@gmail.com" className="hover:opacity-70 transition-opacity">
                       skandamayya4@gmail.com
                      </a>
                </div>
                <div className="flex gap-4">
                    <a href="/blog" className="text-lg hover:opacity-70 transition-opacity">
                        Blog
                      </a>
                      <a href="/blog" className="text-lg hover:opacity-70 transition-opacity">
                          works
                      </a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
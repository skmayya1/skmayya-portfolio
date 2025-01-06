import { MdArrowOutward } from "react-icons/md"

const Navbar = () => {
  return (
      <div>
        <nav className="fixed top-0 left-0 w-full bg-[#FEFEFF]/30 backdrop-blur-sm z-50 py-4 border-b border-[#FEFEFF]/20">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-xl group">
                      <a href="mailto: skandamayya4@gmail.com" className="hover:opacity-70 transition-opacity flex items-end  gap-1 ">
                          skandamayya4@gmail.com <p className="group-hover:opacity-100 opacity-0 transition-all  ease-in-out duration-300 group-hover:translate-x-2"><MdArrowOutward size={22} /></p>
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
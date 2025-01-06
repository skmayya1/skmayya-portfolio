import Lenis from "lenis";
import { useEffect } from "react"

const App = () => {
  // Lenis
  useEffect(() => {
    console.log("App mounted")
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on('scroll', (e) => {
      console.log(e);
    });
  }, [])

  return (
    <div>
      <div className="h-screen w-full bg-[#FEFEFF]">
        
      </div>
      <div className="h-screen w-full bg-blue-500"></div>
      <div className="h-screen w-full bg-green-500"></div>
    </div>
  )
}

export default App
import { Menu } from "lucide-react"
import { useState } from "react"

export const Navbar = ({scrolled}) => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${ scrolled 
            ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800" 
            : "bg-slate-950/20 backdrop-blur-sm"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img src="/logo.png" alt="TzuyuFlow" className="w-6 h-6 sm:w-8 sm:h-8"></img>
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Tzuyu</span>
                            <span className="text-blue-400">Flow</span>
                        </span>
                    </div>
                    {/*Nav Links*/}
                    <div className=" hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a 
                            href="#features" 
                            className="text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
                        <a 
                            href="#pricing" 
                            className="text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
                        <a 
                            href="#testimonials" 
                            className="text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
                    </div>
                    <button 
                        className="md:hidden p-2 text-gray-300 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6"></Menu>
                    </button>
                </div>
            </div>
            {mobileMenuOpen && 
                <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a 
                            href="#features"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                            className="text-gray-300 hover:text-white text-sm lg:text-base">Features</a>
                        <a 
                            href="#pricing" 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-300 hover:text-white text-sm lg:text-base">Pricing</a>
                        <a 
                            href="#testimonials" 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-300 hover:text-white text-sm lg:text-base">Testimonials</a>
                    </div>
                </div>
            }
        </nav>
    )
}
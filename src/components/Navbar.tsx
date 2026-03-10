export default function Navbar() {
    return (
        <nav className="bg-[#F8F1E5] shadow-md">

            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Brand */}
                <h1 className="text-3xl font-extrabold text-[#3B2A1E] tracking-wide">
                    Nickname Infotech
                </h1>

                {/* Menu */}
                <div className="flex items-center text-[#3B2A1E] text-lg font-medium">

                    <span className="ml-8 cursor-pointer hover:text-yellow-600 transition">
                        Home
                    </span>

                    <span className="ml-8 cursor-pointer hover:text-yellow-600 transition">
                        Products
                    </span>

                    <span className="ml-8 cursor-pointer hover:text-yellow-600 transition">
                        Flavours
                    </span>

                    <span className="ml-8 cursor-pointer hover:text-yellow-600 transition">
                        About
                    </span>

                    <span className="ml-8 cursor-pointer hover:text-yellow-600 transition">
                        Contact
                    </span>

                </div>

            </div>

        </nav>
    )
}
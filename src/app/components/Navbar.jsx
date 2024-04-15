import Link from "next/link"

function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-12 h-16 items-center  flex gap-14 justify-between">
        <h1 className="text-sky-700 font-bold text-lg">
          <Link href="/">Stox.</Link>
          </h1>
        <ul className="text-zinc-500  gap-6 text-sm hidden sm:flex">
          <li><Link className=" hover:text-sky-600 transition-all ease-in duration-100 " href="/">About Us</Link></li>
          <li><Link className=" hover:text-sky-600 transition-all ease-in duration-100 " href="/dashboard">Charts</Link></li>
          <li><Link className=" hover:text-sky-600 transition-all ease-in duration-100 " href="/">Help</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
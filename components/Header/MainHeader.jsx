import Link from "next/link";

const MainHeader = () => {
  const changeTheme = () => {
    console.log("Hello world!");
  };

  return (
    <div className="hidden lg:block container mx-auto px-6">
      <nav className="flex items-center justify-between text-white py-4">
        <Link href="/">
          <button className="text-lg">Ujen Basi</button>
        </Link>
        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-3 list-none">
            <li className="flex items-center">
              <Link href="/about">
                <button className="text-lg btn-nav">About</button>
              </Link>
            </li>
            <li className="flex items-center">
              <Link href="/projects">
                <button className="text-lg btn-nav">Projects</button>
              </Link>
            </li>
            <li className="text-lg">
              <a href="mailto:ujenbasi1122@gmail.com">
                <button className="btn-call-to-action-s">Hire me today</button>
              </a>
            </li>
            <li className="flex items-center">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/ujenbasi000"
              >
                <button className="text-lg px-3 py-2 rounded-full text-white hover:text-gray-300">
                  <i className="text-2xl uil uil-github"></i>
                </button>
              </a>
            </li>
          </ul>
          <button
            onClick={changeTheme}
            className="text-lg px-3 py-2 rounded-full text-white hover:text-gray-300"
          >
            <i className="text-2xl uil uil-sun"></i>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MainHeader;

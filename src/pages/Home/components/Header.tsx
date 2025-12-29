import History from "./History";
import Reset from "./Reset";

function Header() {
    return (
      <header className="p-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl text-gold">TM</h1>

          <nav className="flex items-center gap-2">
              <History />
              <Reset />
          </nav>
      </header>
    );
}

export default Header;
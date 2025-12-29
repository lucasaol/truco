import History from "./History";
import Restart from "./Restart";

interface HeaderProps {
    onRestart: () => void;
}

function Header(props: HeaderProps) {
    const { onRestart } = props;
    return (
      <header className="p-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl text-gold">TM</h1>

          <nav className="flex items-center gap-2">
              <History />
              <Restart handleRestartGame={onRestart} />
          </nav>
      </header>
    );
}

export default Header;
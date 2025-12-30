import Router from "./Router";
import { HashRouter } from "react-router-dom";
import { HistoryProvider } from "./contexts/history-context";

function App() {
  return (
    <>
        <HistoryProvider>
            <HashRouter>
                <Router />
            </HashRouter>
        </HistoryProvider>
    </>
  )
}

export default App

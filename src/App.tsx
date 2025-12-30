import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { HistoryProvider } from "./contexts/history-context";

function App() {
  return (
    <>
        <HistoryProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </HistoryProvider>
    </>
  )
}

export default App

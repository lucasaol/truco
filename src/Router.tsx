import { Route, Routes } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout.tsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<BaseLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default Router;
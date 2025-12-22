import { Outlet } from "react-router-dom";

function BaseLayout() {
    return (
        <>
            <main className="min-h-screen bg-board text-white flex flex-col">
                <Outlet />
            </main>
        </>
    );
}

export default BaseLayout;
import { Outlet } from "react-router-dom";

function BaseLayout() {
    return (
        <div className="bg-board text-white">
            <main className="h-screen">
                <Outlet />
            </main>

            <footer className="bottom-0 text-center py-2">
                <p className="text-sm opacity-75">
                    <span>Desenvolvido por: </span>
                    <a href="https://github.com/lucasaol" target="_blank" className="hover:text-gold">
                        @lucasaol
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default BaseLayout;
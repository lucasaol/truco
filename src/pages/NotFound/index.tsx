import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="h-full flex items-center justify-center">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">404</h1>
                <p className="mb-4 text-xl opacity-75">Oops! Página não encontrada</p>

                <Link to="/" className="text-gold no-underline hover:underline">
                    Voltar para a página inicial
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
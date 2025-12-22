
function NotFound() {
    return (
        <div className="h-full flex items-center justify-center">
            <div className="text-center">
                <h1 className="mb-4 text-4xl font-bold">404</h1>
                <p className="mb-4 text-xl opacity-75">Oops! Página não encontrada</p>

                <a href="/" className="text-gold no-underline hover:underline">
                    Voltar para a página inicial
                </a>
            </div>
        </div>
    );
}

export default NotFound;
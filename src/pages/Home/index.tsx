import Header from "./components/Header.tsx";
import Card from "./components/Card.tsx";

function Home() {
    return (
        <>
            <Header />
            <section className="flex flex-1 flex-col p-4 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                    <Card
                        variant="A"
                        teamName="Team A"
                        score={4}
                    />

                    <Card
                        variant="B"
                        teamName="Team B"
                        score={2}
                    />
                </div>
            </section>
        </>
    );
}

export default Home;
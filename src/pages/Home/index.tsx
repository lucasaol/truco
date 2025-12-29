import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import StartGameModal from "./components/StartGameModal";

function Home() {

    const [showStartGame, setShowStartGame] = useState<boolean>(true);

    const handleStartGame = (teamA: string, teamB: string) => {
        alert(`A: ${teamA} x B: ${teamB}`);
        setShowStartGame(false);
    };

    return (
        <>
            <Header />
            {showStartGame && (<StartGameModal onSave={handleStartGame} />)}

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
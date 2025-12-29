import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import StartGameModal from "./components/StartGameModal";
import { useGame } from "../../hooks/useGame";

function Home() {

    const {
        game,
        startGame,
        restartGame,
        increaseScore,
        decreaseScore
    } = useGame();

    const [showStartGame, setShowStartGame] = useState<boolean>(true);

    const handleStartGame = (teamA: string, teamB: string) => {
        startGame(teamA, teamB);
        setShowStartGame(false);
    };

    return (
        <>
            <Header onRestart={restartGame} />

            {showStartGame && (<StartGameModal onSave={handleStartGame} />)}

            <section className="flex flex-1 flex-col p-4 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                    <Card
                        variant="A"
                        teamName={game.teamA.name}
                        score={game.teamA.score}
                        onIncrement={() => {increaseScore("A")}}
                        onDecrement={() => decreaseScore("A")}
                    />

                    <Card
                        variant="B"
                        teamName={game.teamB.name}
                        score={game.teamB.score}
                        onIncrement={() => increaseScore("B")}
                        onDecrement={() => decreaseScore("B")}
                    />
                </div>
            </section>
        </>
    );
}

export default Home;
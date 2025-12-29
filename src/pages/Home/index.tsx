import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import StartGameModal from "./components/StartGameModal";
import { useGame } from "../../hooks/useGame";
import WinnerModal from "./components/WinnerModal.tsx";

function Home() {

    const {
        game,
        startGame,
        restartGame,
        increaseScore,
        decreaseScore
    } = useGame();

    const [showStartGame, setShowStartGame] = useState<boolean>(true);
    const [showWinner, setShowWinner] = useState<boolean>(false);
    const [lastWinner, setLastWinner] = useState<string>("");

    const handleStartGame = (teamA: string, teamB: string) => {
        startGame(teamA, teamB);
        setShowStartGame(false);
    };

    useEffect(() => {
        if (game.winner) {
            const teamKey = game.winner === "A" ? "teamA" : "teamB";
            setLastWinner(game[teamKey].name);
            setShowWinner(true)
        }
    }, [game]);

    const handleChangeTeams = () => {
        setShowWinner(false);
        setShowStartGame(true);
        setLastWinner("");
    };

    const handleRestartGame = () => {
        setShowWinner(false);
        restartGame();
        setLastWinner("");
    };

    return (
        <>
            <Header onRestart={restartGame} />

            {showStartGame && (<StartGameModal onSave={handleStartGame} />)}
            {showWinner && (
                <WinnerModal
                    winner={lastWinner}
                    onRestartGame={handleRestartGame}
                    onChangeTeams={handleChangeTeams}
                />
            )}

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
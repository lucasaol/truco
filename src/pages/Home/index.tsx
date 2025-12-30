import { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import StartGameModal from "./components/StartGameModal";
import { useGame } from "../../hooks/useGame";
import WinnerModal from "./components/WinnerModal.tsx";
import {useHistory} from "../../contexts/history-context.tsx";

function Home() {

    const {
        currentGame,
        startGame,
        restartGame,
        increaseScore,
        decreaseScore
    } = useGame();

    const { addGame } = useHistory();

    const [showStartGame, setShowStartGame] = useState<boolean>(true);
    const [showWinner, setShowWinner] = useState<boolean>(false);
    const [lastWinnerName, setLastWinnerName] = useState<string>("");

    const handleStartGame = (teamA: string, teamB: string) => {
        startGame(teamA, teamB);
        setShowStartGame(false);
    };

    useEffect(() => {
        let interval = null;
        if (currentGame.winner) {
            const currentWinner = (currentGame.winner === "A")
                ? currentGame.teamA.name
                : currentGame.teamB.name;

            if (currentWinner !== lastWinnerName) {
                interval = setInterval(() => {
                    setLastWinnerName(currentWinner);
                    setShowWinner(true);
                    addGame(currentGame);
                }, 10);
            }
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, [addGame, currentGame, lastWinnerName]);

    const handleChangeTeams = () => {
        setShowWinner(false);
        setShowStartGame(true);
        setLastWinnerName("");
    };

    const handleRestartGame = () => {
        setShowWinner(false);
        restartGame();
        setLastWinnerName("");
    };

    return (
        <>
            <Header onRestart={restartGame} />

            {showStartGame && (<StartGameModal onSave={handleStartGame} />)}
            {showWinner && (
                <WinnerModal
                    winner={lastWinnerName}
                    onRestartGame={handleRestartGame}
                    onChangeTeams={handleChangeTeams}
                />
            )}

            <section className="flex flex-1 flex-col p-4 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                    <Card
                        variant="A"
                        teamName={currentGame.teamA.name}
                        score={currentGame.teamA.score}
                        onIncrement={() => {increaseScore("A")}}
                        onDecrement={() => decreaseScore("A")}
                    />

                    <Card
                        variant="B"
                        teamName={currentGame.teamB.name}
                        score={currentGame.teamB.score}
                        onIncrement={() => increaseScore("B")}
                        onDecrement={() => decreaseScore("B")}
                    />
                </div>
            </section>
        </>
    );
}

export default Home;
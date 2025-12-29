import { useCallback, useState } from "react";

const POINTS = [0, 2, 4, 6, 8, 10, 12];
const WIN_SCORE = POINTS[POINTS.length - 1];

interface Game {
    teamA: {
        name: string;
        score: number;
    },
    teamB: {
        name: string;
        score: number;
    },
    winner?: "A" | "B";
    timestamp: Date;
}

export const useGame = () => {

    const [game, setGame] = useState<Game>({
        teamA: { name: "Nós", score: 0 },
        teamB: { name: "Nós", score: 0 },
        timestamp: new Date()
    });

    const getNextScore = (currentScore: number) => {
        const currentIndex = POINTS.indexOf(currentScore);
        if (currentIndex === -1 || currentIndex >= POINTS.length - 1) {
            return currentScore;
        }
        return POINTS[currentIndex + 1];
    };

    const getPreviousScore = (currentScore: number) => {
        const currentIndex = POINTS.indexOf(currentScore);
        if (currentIndex <= 0) {
            return POINTS[0];
        }
        return POINTS[currentIndex - 1];
    };

    const increaseScore = useCallback((team: "A" | "B") => {
        if (game.winner) {
            return;
        }
        setGame((prev) => {
            const teamKey = team === "A" ? "teamA" : "teamB";
            const newScore = getNextScore(prev[teamKey].score);

            const newState = {
                ...prev,
                [teamKey]: { ...prev[teamKey], score: newScore },
            };
            if (newScore === WIN_SCORE) {
                newState.winner = team;
            }
            return newState;
        });
    }, [game.winner]);

    const decreaseScore = useCallback((team: "A" | "B") => {
        if (game.winner) {
            return;
        }
        setGame((prev) => {
            const teamKey = team === "A" ? "teamA" : "teamB";
            const newScore = getPreviousScore(prev[teamKey].score);

            return {
                ...prev,
                [teamKey]: { ...prev[teamKey], score: newScore },
            };
        });
    }, [game.winner]);


    const restartGame = useCallback(() => {
        setGame((prev) => {
            return {
                ...prev,
                teamA: { ...prev.teamA, score: 0 },
                teamB: { ...prev.teamB, score: 0 },
                winner: undefined
            }
        });
    }, []);


    const startGame = useCallback((teamAName: string, teamBName: string) => {
        setGame((prev) => {
            return {
                ...prev,
                teamA: { name: teamAName, score: 0 },
                teamB: { name: teamBName, score: 0 },
                winner: undefined
            }
        });
    }, []);

    return {
        game,
        startGame,
        restartGame,
        increaseScore,
        decreaseScore
    };
};
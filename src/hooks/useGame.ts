import { useCallback, useState } from "react";

const POINTS = [0, 2, 4, 6, 8, 10, 12];
export const WIN_SCORE = POINTS[POINTS.length - 1];
export const MIN_SCORE = POINTS[0];

export interface Game {
    id: string;
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

    const [currentGame, setCurrentGame] = useState<Game>({
        id: crypto.randomUUID(),
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
            return MIN_SCORE;
        }
        return POINTS[currentIndex - 1];
    };

    const increaseScore = useCallback((team: "A" | "B") => {
        if (currentGame.winner) {
            return;
        }
        setCurrentGame((prev) => {
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
    }, [currentGame.winner]);

    const decreaseScore = useCallback((team: "A" | "B") => {
        if (currentGame.winner) {
            return;
        }
        setCurrentGame((prev) => {
            const teamKey = team === "A" ? "teamA" : "teamB";
            const newScore = getPreviousScore(prev[teamKey].score);

            return {
                ...prev,
                [teamKey]: { ...prev[teamKey], score: newScore },
            };
        });
    }, [currentGame.winner]);


    const restartGame = useCallback(() => {
        setCurrentGame((prev) => {
            return {
                ...prev,
                id: crypto.randomUUID(),
                teamA: { ...prev.teamA, score: 0 },
                teamB: { ...prev.teamB, score: 0 },
                winner: undefined
            }
        });
    }, []);


    const startGame = useCallback((teamAName: string, teamBName: string) => {
        setCurrentGame((prev) => {
            return {
                ...prev,
                id: crypto.randomUUID(),
                teamA: { name: teamAName, score: 0 },
                teamB: { name: teamBName, score: 0 },
                winner: undefined
            }
        });
    }, []);

    return {
        currentGame,
        startGame,
        restartGame,
        increaseScore,
        decreaseScore
    };
};
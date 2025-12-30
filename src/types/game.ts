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
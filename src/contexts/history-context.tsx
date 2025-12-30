import { type ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Game } from "../types/game";

type Ctx = {
    history: Game[];
    addGame: (game: Game) => void;
    clear: () => void;
};

const HistoryContext = createContext<Ctx | null>(null);

const STORAGE_KEY = '@lucasaol:truco:history';

type ProviderProps = {
    children: ReactNode;
}
export function HistoryProvider({ children }: ProviderProps) {

    const [history, setHistory] = useState<Game[]>(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Game[]): [];
    });

    useEffect(() => {
        console.log('update history', history);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    }, [history]);

    const addGame = (game: Game) => {
        setHistory(prev => [game, ...prev]);
    };

    const clear = () => {
        console.log('clear');
        setHistory([]);
    };

    const value = useMemo(() => ({
        history,
        addGame,
        clear
    }), [history]);

    return (
        <HistoryContext.Provider value={value}>
            {children}
        </HistoryContext.Provider>
    );
}

export function useHistory() {
    const ctx = useContext(HistoryContext);
    if (!ctx) throw new Error("useGameHistory must be used within GameHistoryProvider");
    return ctx;
}
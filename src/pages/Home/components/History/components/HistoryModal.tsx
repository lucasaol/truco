import IconButton from "../../../../../components/ui/IconButton";
import { LucideTrophy, Trash2, XIcon } from "lucide-react";

interface HistoryModalProps {
    open: boolean;
    onClose: () => void;
}

function HistoryModal(props: HistoryModalProps) {

    const games = [
        {
            id: "a",
            winner: "A",
            teamA: {
                name: "Team A",
                score: 12
            },
            teamB: {
                name: "Team B",
                score: 8
            },
            timestamp: new Date()
        },
        {
            id: "b",
            winner: "B",
            teamA: {
                name: "Team A",
                score: 2
            },
            teamB: {
                name: "Team B",
                score: 12
            },
            timestamp: new Date()
        }
    ];

    if (!props.open) {
        return (
            <></>
        );
    }


    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 fade-in">
            <div className="bg-dark-green rounded-3xl p-6 max-w-md w-full max-h-[80vh] flex flex-col scale-in">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="display text-2xl text-gold">Histórico</h2>
                    <IconButton icon={XIcon} onClick={props.onClose}/>
                </div>

                <div className="flex-1 overflow-y-auto space-y-3 mb-4">
                    <p className="text-center text-muted-foreground py-8">
                        Nenhum jogo registrado ainda
                    </p>

                    {games.map((game) => {
                        const gameWinnerA = game.winner === "A";
                        const gameWinnerB = game.winner === "B";

                        return (
                            <article key={game.id}
                                     className="bg-board-secondary rounded-xl p-4 flex items-center gap-3">
                                <div className={`flex-1 text-right ${gameWinnerA ? "text-white" : "text-foreground"}`}>
                                    <div className="flex items-center justify-end gap-2">
                                        {gameWinnerA ? <LucideTrophy size={16} className="text-gold"/> : null}
                                        <span className="font-semibold truncate max-w-[80px]">{game.teamA.name}</span>
                                    </div>
                                    <span className="text-2xl font-bold display">{game.teamA.score}</span>
                                </div>

                                <div className="text-foreground text-lg">×</div>

                                <div className={`flex-1 text-left ${gameWinnerB ? "text-white" : "text-foreground"}`}>
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold truncate max-w-[80px]">{game.teamB.name}</span>
                                        {gameWinnerB ? <LucideTrophy size={16} className="text-gold"/> : null}
                                    </div>
                                    <span className="text-2xl font-bold display">{game.teamB.score}</span>
                                </div>

                                <div className="text-xs text-foreground whitespace-nowrap">
                                    {game.timestamp.toLocaleString('pt-BR', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: false,
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>

                <button className="btn-outline-gold flex items-center justify-center gap-2 text-sm">
                    <Trash2 size={16}/>
                    Limpar Histórico
                </button>
            </div>
        </div>
    );
}

export default HistoryModal;
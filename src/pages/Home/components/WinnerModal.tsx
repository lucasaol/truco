import { RotateCcw, Trophy, Users } from "lucide-react";
import { useEffect } from "react";
import confetti from "canvas-confetti";

interface WinnerProps {
    winner: string;
    onRestartGame: () => void;
    onChangeTeams: () => void;
}

function WinnerModal(props: WinnerProps) {
    const { winner, onRestartGame, onChangeTeams } = props;

    useEffect(() => {
        let interval = null;
        const duration = 2000;
        const end = Date.now() + duration;
        if (winner) {
            interval = setInterval(() => {
                const colors = ["#FFD700", "#FFA500", "#FF6347", "#00CED1"];
                function frame() {
                    confetti({
                        particleCount: 4,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors,
                    });

                    confetti({
                        particleCount: 4,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors,
                    });
                }
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }, 100);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, [winner]);

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 fade-in">
            <div className="bg-dark-green rounded-3xl p-8 max-w-sm w-full text-center scale-in">

                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <Trophy size={40} className="text-yellow-900" />
                </div>

                <h2 className="text-4xl md:text-5xl text-gold mb-2">
                    Parabéns!
                </h2>
                <p className="text-foreground/80 text-lg mb-8">
                    Vitória de <span className="font-bold text-foreground">{winner}</span>!
                </p>

                <div className="flex flex-col gap-3">
                    <button
                        onClick={onRestartGame}
                        className="bg-gold text-black cursor-pointer
                    px-6 py-3 rounded-xl font-semibold transition-all duration-200
                    active:scale-95 hover:opacity-75
                    w-full flex items-center justify-center gap-2"
                    >
                        <RotateCcw size={20} />
                        Jogar Novamente
                    </button>


                    <button
                        onClick={onChangeTeams}
                        className="btn-outline-gold flex items-center justify-center gap-2">
                        <Users size={20} />
                        Trocar Duplas
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WinnerModal;
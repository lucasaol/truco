import { Minus, Plus } from "lucide-react";
import { MIN_SCORE, WIN_SCORE } from "@/hooks/useGame";

interface CardProps {
    variant: "A" | "B";
    teamName: string;
    score: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

function Card(props: CardProps) {
    const { score, teamName, variant, onIncrement, onDecrement } = props;

    const cardClassName = variant === "A" ? "bg-team-a" : "bg-team-b";
    return (
        <div className={
            `${cardClassName} rounded-2xl p-6 select-none cursor-pointer active:scale-95
            flex flex-col items-center justify-between
            h-full min-h-[200px] md:min-h-[350px]`}>
            <h2 className="text-2xl md:text-3xl text-white/90 uppercase">{teamName}</h2>

            <button
                onClick={onIncrement}
                className="
                text-white text-8xl md:text-9xl cursor-pointer
                flex-1 flex items-center justify-center w-full
                focus:outline-none disabled:opacity-50"
            >
                {score}
            </button>

            <div className="flex gap-3 w-full">
                <button
                    onClick={onDecrement}
                    disabled={score === MIN_SCORE}
                    className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-black/20 text-white/80 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <Minus size={20} />
                </button>
                <button
                    onClick={onIncrement}
                    disabled={score === WIN_SCORE}
                    className="cursor-pointer flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/20 text-white transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                    <Plus size={20} />
                </button>
            </div>
        </div>
    );
}

export default Card;
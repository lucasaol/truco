import { useState } from "react";
import { Check } from "lucide-react";
import Input from "../../../components/ui/Input";
import * as React from "react";

interface StartGameModalProps {
    onSave: (teamA: string, teamB: string) => void;
}

function StartGameModal(props: StartGameModalProps) {
    const { onSave } = props;

    const [teamA, setTeamA] = useState<string>("");
    const [teamB, setTeamB] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSave(teamA, teamB);
    };

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 fade-in">
            <form
                onSubmit={handleSubmit}
                className="bg-dark-green rounded-3xl p-8 max-w-sm w-full scale-in"
            >
                <h2 className="text-3xl text-gold text-center mb-6">
                    Nomes das Duplas
                </h2>

                <div className="space-y-4 mb-6">
                    <Input
                        id="teamA"
                        label="Dupla 1"
                        placeholder="Nós"
                        required={true}
                        handleOnChange={(value) => setTeamA(value)}
                    />

                    <Input
                        id="teamB"
                        label="Dupla 2"
                        placeholder="Eles"
                        required={true}
                        handleOnChange={(value) => setTeamB(value)}
                    />
                </div>


                <button
                    type="submit"
                    className="bg-gold text-black cursor-pointer
                    px-6 py-3 rounded-xl font-semibold transition-all duration-200
                    active:scale-95
                    w-full flex items-center justify-center gap-2"
                >
                    <Check size={20} />
                    Começar Jogo
                </button>

            </form>
        </div>
    );
}

export default StartGameModal;
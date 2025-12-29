import { RotateCcw } from "lucide-react";
import IconButton from "../../../../components/ui/IconButton";

interface RestartProps {
    handleRestartGame: () => void;
}

function Restart(props: RestartProps) {
    const { handleRestartGame } = props;
    return (
        <>
            <IconButton icon={RotateCcw} size={24} onClick={handleRestartGame} />
        </>
    );
}

export default Restart;
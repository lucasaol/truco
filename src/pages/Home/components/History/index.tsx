import { LucideHistory } from "lucide-react";
import IconButton from "@/components/ui/IconButton";
import HistoryModal from "./components/HistoryModal";
import { useState } from "react";
import { useHistory } from "@/contexts/history-context";

function History() {
    const [isOpen, setIsOpen] = useState(false);
    const { history, clear } = useHistory();

    return (
        <>
            <IconButton icon={LucideHistory} counter={history.length} onClick={() => setIsOpen(true)} />
            <HistoryModal
                open={isOpen}
                games={history}
                onClose={() => setIsOpen(false)}
                onClear={clear}
            />
        </>
    );
}

export default History;
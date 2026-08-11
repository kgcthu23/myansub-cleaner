import React from 'react';
import { ExternalLink } from 'lucide-react';

interface InstructionVideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onGoToEssential?: () => void;
}

export const InstructionVideoModal: React.FC<InstructionVideoModalProps> = ({ isOpen, onClose, onGoToEssential }) => {
    if (!isOpen) return null;

    const driveLink = "https://drive.google.com/drive/u/0/folders/1l0q5ayt7zNnJ4RADIA3maPGzoh-AgobU";

    const handleActionClick = () => {
        if (onGoToEssential) {
            onGoToEssential();
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
            <div className="bg-zinc-900/90 border border-zinc-800/80 p-8 rounded-2xl shadow-2xl relative z-10 max-w-sm w-full animate-fade-in text-center">
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-100 mb-2">New Video Notice</h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    there is a new instruction video in essential u might want to check
                </p>
                <a
                    href={driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleActionClick}
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-500/25 mb-3 flex items-center justify-center gap-2 text-sm"
                >
                    <span>Check Essential</span>
                    <ExternalLink className="w-4 h-4" />
                </a>
                <button
                    onClick={onClose}
                    className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors py-1 cursor-pointer"
                >
                    Dismiss
                </button>
            </div>
        </div>
    );
};

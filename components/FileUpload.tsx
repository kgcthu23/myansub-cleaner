import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';
import type { PunctuationOptions } from '../types';

export const FileUpload: React.FC<{ onFileSelect: (content: string, fileName: string, options?: PunctuationOptions) => void; disabled: boolean }> = ({ onFileSelect, disabled }) => {
    const [options, setOptions] = useState<PunctuationOptions>({
        removePha: true,
        removePahtSint: true,
        removeExclamation: true,
        removeQuestion: true
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => onFileSelect(e.target?.result as string, file.name, options);
            reader.readAsText(file, 'UTF-8');
        }
    };

    const handleOptionChange = (key: keyof PunctuationOptions) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptions(prev => ({ ...prev, [key]: e.target.checked }));
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
            <label htmlFor="file-upload" className="w-full relative cursor-pointer bg-zinc-900/40 backdrop-blur-md rounded-2xl border-2 border-dashed border-indigo-500/50 flex flex-col items-center justify-center p-14 hover:bg-zinc-800/60 transition-all duration-300 group shadow-[0_0_30px_rgba(99,102,241,0.1)] hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]">
                <UploadCloud className="w-10 h-10 text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                <span className="mt-2 text-lg font-semibold text-zinc-200">Click to upload or drag and drop</span>
                <span className="text-sm text-zinc-500 mt-1">SRT files only</span>
                <input id="file-upload" type="file" className="sr-only" accept=".srt" onChange={handleFileChange} disabled={disabled} />
            </label>
            <div className="mt-6 flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="remove-pha" checked={options.removePha} onChange={handleOptionChange('removePha')} disabled={disabled} className="w-4 h-4 text-indigo-500 bg-zinc-900 border border-zinc-700 rounded focus:ring-indigo-500/50 focus:ring-2 cursor-pointer accent-indigo-500" />
                    <label htmlFor="remove-pha" className="text-zinc-300 text-sm cursor-pointer select-none">Remove "၊"</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="remove-pahtsint" checked={options.removePahtSint} onChange={handleOptionChange('removePahtSint')} disabled={disabled} className="w-4 h-4 text-indigo-500 bg-zinc-900 border border-zinc-700 rounded focus:ring-indigo-500/50 focus:ring-2 cursor-pointer accent-indigo-500" />
                    <label htmlFor="remove-pahtsint" className="text-zinc-300 text-sm cursor-pointer select-none">Remove "။"</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="remove-exc" checked={options.removeExclamation} onChange={handleOptionChange('removeExclamation')} disabled={disabled} className="w-4 h-4 text-indigo-500 bg-zinc-900 border border-zinc-700 rounded focus:ring-indigo-500/50 focus:ring-2 cursor-pointer accent-indigo-500" />
                    <label htmlFor="remove-exc" className="text-zinc-300 text-sm cursor-pointer select-none">Remove "!"</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="remove-question" checked={options.removeQuestion} onChange={handleOptionChange('removeQuestion')} disabled={disabled} className="w-4 h-4 text-indigo-500 bg-zinc-900 border border-zinc-700 rounded focus:ring-indigo-500/50 focus:ring-2 cursor-pointer accent-indigo-500" />
                    <label htmlFor="remove-question" className="text-zinc-300 text-sm cursor-pointer select-none">Remove "?"</label>
                </div>
            </div>
        </div>
    );
};

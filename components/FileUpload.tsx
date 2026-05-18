import React from 'react';
import { UploadCloud } from 'lucide-react';

export const FileUpload: React.FC<{ onFileSelect: (content: string, fileName: string) => void; disabled: boolean }> = ({ onFileSelect, disabled }) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => onFileSelect(e.target?.result as string, file.name);
            reader.readAsText(file, 'UTF-8');
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <label htmlFor="file-upload" className="relative cursor-pointer glass-panel rounded-3xl border border-emerald-500/30 flex flex-col items-center justify-center p-16 hover:bg-zinc-800/40 transition-all duration-300 group hover:shadow-[0_0_50px_rgba(16,185,129,0.15)]">
                <UploadCloud className="w-12 h-12 text-emerald-400 mb-6 group-hover:-translate-y-2 transition-transform duration-300 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]" />
                <span className="mt-2 text-lg font-semibold text-zinc-200">Click to upload or drag and drop</span>
                <span className="text-sm text-zinc-500 mt-1">SRT files only</span>
                <input id="file-upload" type="file" className="sr-only" accept=".srt" onChange={handleFileChange} disabled={disabled} />
            </label>
        </div>
    );
};

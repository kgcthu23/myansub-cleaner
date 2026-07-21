import { useState, useCallback } from 'react';
import { cleanSrtContent, detectForeignLanguages, getChangeSummary } from '../services/srtCleaner';
import type { PunctuationOptions, SrtFileResult } from '../types';

export function useSrtCleaner() {
    const [files, setFiles] = useState<SrtFileResult[]>([]);
    const [isCleaned, setIsCleaned] = useState<boolean>(false);

    const handleFilesSelect = useCallback((fileDataList: {content: string, name: string}[], options: PunctuationOptions = { removePha: true, removePahtSint: true, removeExclamation: true, removeQuestion: true, removeEllipsis: true }) => {
        const processedFiles = fileDataList.map(fileData => {
            const cleaned = cleanSrtContent(fileData.content, options); 
            const summaryData = getChangeSummary(fileData.content, options); 
            const reportData = detectForeignLanguages(cleaned); 
            return {
                originalContent: fileData.content,
                cleanedContent: cleaned,
                summary: summaryData,
                foreignReport: reportData,
                fileName: fileData.name.replace(/\.srt$/i, '') + '_cleaned.srt'
            };
        });
        
        setFiles(processedFiles);
        setIsCleaned(true);
    }, []);

    const resetCleaner = useCallback(() => {
        setFiles([]);
        setIsCleaned(false);
    }, []);

    return {
        files,
        isCleaned,
        handleFilesSelect,
        resetCleaner
    };
}

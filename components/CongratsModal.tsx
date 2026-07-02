import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Sparkles } from 'lucide-react';

interface CongratsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CongratsModal: React.FC<CongratsModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/75 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                        className="bg-zinc-950/90 border border-zinc-800/80 rounded-3xl shadow-2xl relative z-10 max-w-2xl w-full overflow-hidden flex flex-col max-h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Block with Gradient & Envelope */}
                        <div className="relative h-32 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 flex items-center justify-center border-b border-zinc-900/60">
                            {/* Glowing overlay */}
                            <div className="absolute inset-0 bg-radial-gradient from-purple-500/10 to-transparent blur-xl pointer-events-none" />

                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center border border-pink-400/30 shadow-[0_0_20px_rgba(236,72,153,0.4)] animate-pulse">
                                <Mail className="w-8 h-8 text-white" />
                            </div>

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-400 hover:text-white transition-all cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Title Section */}
                        <div className="px-8 pt-6 pb-2 text-center">
                            <h3 className="text-2xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 flex items-center justify-center gap-2">
                                <Sparkles className="w-5 h-5 text-pink-400" />
                                A Message for You
                                <Sparkles className="w-5 h-5 text-indigo-400" />
                            </h3>
                        </div>

                        {/* Message Content Area */}
                        <div className="px-8 py-4 overflow-y-auto custom-scrollbar flex-1 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
                            <div className="p-4 bg-zinc-900/40 rounded-2xl border border-zinc-800/30 italic text-zinc-400 text-xs sm:text-sm">
                                "I wrote this message a few days ago because i knew u could do it."
                            </div>

                            <p className="text-zinc-200">
                                First of all, <strong className="text-pink-400 font-bold">congratulations on your results!</strong> I always knew you could do it. Be proud of yourself, you did an amazing job. Despite skipping grades, missing two or three years of school, and working at a super famous phone company, you pulled it off. Out of everyone I know, only you could have done this.
                            </p>

                            <p className="text-zinc-200">
                                Thu Thu, you are honestly one of the smartest people I’ve ever knew, definitely in the top three. I still think about you and miss you, in a good way. Our story feels like an unfinished book with an ending we’ll never know. You helped me who I become today, and I think I might have done the same for you. You became like a smarter, female version of me. We have so much in common and still so much to talk about. You taught me a lot about love, kindness, and all the other great stuffs. During your absence, I’ve reflected on our moments together, thinking about what I should have said or done differently. Knowing you was a wonderful experience.
                            </p>

                            <p className="text-zinc-200">
                                All that being said, I am so incredibly proud of you. I’m still your big brother, right? I know our paths will cross again someday, so please stay safe and healthy. I’ll let you know when I go onboard ship.
                            </p>

                            {/* Separator */}
                            <div className="border-t border-zinc-900/60 my-4" />

                            {/* P.S. and Updates */}
                            <div className="space-y-3 bg-zinc-900/20 p-4 sm:p-5 rounded-2xl border border-zinc-800/20 text-xs sm:text-sm">
                                <p className="text-zinc-400">
                                    <span className="font-bold text-pink-400 mr-1.5">P.S.</span>
                                    I can see you’ve been working out, and the results definitely show! Keep it up and go on. Please send my love to your mom and sister.
                                </p>
                                <div className="border-t border-zinc-900/50 my-2" />
                                <p className="text-zinc-400">
                                    <span className="font-bold text-indigo-400 mr-1.5">Update for me:</span>
                                    Im now doing translating work for another movie website called msub. I am at home most of the time. I even asked for a job to ko arkar but all positions are filled so i found a job here instead. I'm just sp
                                </p>
                            </div>

                            <div className="text-center pt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400 text-sm sm:text-base">
                                Anyway, be proud of what u did. ❤️
                            </div>
                        </div>

                        {/* Footer Close Button */}
                        <div className="p-6 bg-zinc-950 border-t border-zinc-900/60 flex justify-center">
                            <button
                                onClick={onClose}
                                className="px-8 py-2.5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-pink-500/10 cursor-pointer text-sm"
                            >
                                Close & Keep Shining
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

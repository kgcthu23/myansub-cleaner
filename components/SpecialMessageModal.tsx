import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles } from 'lucide-react';

interface SpecialMessageModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SpecialMessageModal: React.FC<SpecialMessageModalProps> = ({ isOpen, onClose }) => {
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
                        className="bg-zinc-950/90 border border-zinc-800/80 rounded-3xl shadow-2xl relative z-10 max-w-lg w-full overflow-hidden flex flex-col max-h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Block with Gradient */}
                        <div className="relative h-28 bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-purple-500/10 flex items-center justify-center border-b border-zinc-900/60">
                            {/* Glowing overlay */}
                            <div className="absolute inset-0 bg-radial-gradient from-pink-500/10 to-transparent blur-xl pointer-events-none" />

                            <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center border border-rose-400/30 shadow-[0_0_20px_rgba(244,63,94,0.4)] animate-pulse">
                                <Heart className="w-7 h-7 text-white fill-white/20" />
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
                            <h3 className="text-xl sm:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 flex items-center justify-center gap-2">
                                <Sparkles className="w-4 h-4 text-rose-400 animate-spin" style={{ animationDuration: '3s' }} />
                                A Message for Thu Thu
                                <Sparkles className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
                            </h3>
                        </div>

                        {/* Message Content Area */}
                        <div className="px-8 py-4 overflow-y-auto custom-scrollbar flex-1 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                            <div className="space-y-4 bg-zinc-900/30 p-5 sm:p-6 rounded-2xl border border-zinc-800/40 text-zinc-200">
                                <p className="font-semibold text-zinc-100">
                                    ပြီးခဲ့တာတွေပြီးပြီဆိုပေမယ့်
                                </p>
                                <p>
                                    သုသု im really sorry i made u felt that way.
                                </p>
                                <p>
                                    အမြဲပြောပါတယ် only because of our age လို့ i didnt want to be pedo။
                                </p>
                                <p>
                                    အခုအချိန်သာ သုသုနဲ့ ရည်းစားဖြစ်ရင် တင်ထားမှာ
                                </p>
                                <p className="font-medium text-pink-400">
                                    like bro u dont know how amazing you are to me
                                </p>
                                <p>
                                    သုသုကိုတိုက်ရိုက် သေချာမပြောလိုက်ရလို့ရယ် topic က awkward ဖြစ်မှာစိုးလို့ ဒီမှာလာပြောတာ။ အကိုလည်း ရည်းစားထားစောသွားတယ်။
                                </p>
                                <p className="leading-relaxed">
                                    သုသုနဲ့ရှိတဲ့ကာလတွေက အကို့အတွက် အမှတ်တရအဖြစ်ဆုံးကာလတွေပဲ သုံးနှစ်တာဆိုပေမယ့် အကောင်းဆုံးသုံးနှစ်ပဲ ဖြစ်နိုင်ရင်ပြန်အသွားချင်ဆုံးပါပဲ။ we could talk for hours and hours without getting bored. သုသု u are always my safest comfort place. u always have a special place in me (my butthole).
                                </p>
                            </div>
                        </div>

                        {/* Footer Close Button */}
                        <div className="p-6 bg-zinc-950 border-t border-zinc-900/60 flex justify-center">
                            <button
                                onClick={onClose}
                                className="w-full sm:w-auto px-8 py-2.5 bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 hover:from-rose-500 hover:via-pink-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-rose-500/10 cursor-pointer text-sm"
                            >
                                Close Message
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
export default SpecialMessageModal;

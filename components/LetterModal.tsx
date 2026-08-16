import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Heart } from 'lucide-react';

interface LetterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LetterModal: React.FC<LetterModalProps> = ({ isOpen, onClose }) => {
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
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 320 }}
                        className="bg-zinc-950/95 border border-pink-500/30 rounded-3xl shadow-2xl relative z-10 max-w-xl w-full overflow-hidden flex flex-col max-h-[90vh] shadow-pink-500/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Glowing Background Header */}
                        <div className="relative h-28 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-purple-500/20 flex items-center justify-center border-b border-zinc-900/80 overflow-hidden">
                            <div className="absolute inset-0 bg-radial-gradient from-pink-500/15 to-transparent blur-xl pointer-events-none" />

                            <div className="relative flex items-center gap-2">
                                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center border border-pink-400/40 shadow-[0_0_25px_rgba(244,63,94,0.4)]">
                                    <span className="text-2xl select-none">💌</span>
                                </div>
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
                        <div className="px-6 sm:px-8 pt-5 pb-2 text-center">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold mb-2">
                                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                                <span>A Birthday Letter For You</span>
                                <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 tracking-wide font-sans">
                                သုသုရေ…
                            </h3>
                        </div>

                        {/* Letter Content Area */}
                        <div className="px-6 sm:px-8 py-4 overflow-y-auto custom-scrollbar flex-1 space-y-4 text-zinc-200 text-sm sm:text-base leading-loose font-sans">
                            <div className="bg-zinc-900/50 border border-zinc-800/60 rounded-2xl p-5 sm:p-6 space-y-4 shadow-inner">
                                <p className="text-zinc-300">
                                    သုသုမွေးနေ့အတွက် ဘာမှမလုပ်ပေးဖြစ်တာ ဒါပထမဆုံးအကြိမ်ပဲ။
                                </p>

                                <p className="text-zinc-300">
                                    သုသု အကို့ အပေါ် ကောင်းခဲ့တာတွေအားလုံးအတွက် တကယ်ကျေးဇူးတင်ပါတယ်။ လူတွေအားလုံးထဲမှ သုသုက အကို့ကို အနားလည်ဆုံးဖြစ်ခဲ့သလို အကိုတို့ကြားမှာ ပြောစရာစကားတွေလည်း ဘယ်တော့မှ ကုန်မသွားခဲ့ဘူး။ သုသုရဲ့ <span className="text-pink-300 font-semibold">weird facts</span> တွေအခုထိ လွမ်းနေတုန်းပဲ။ သုသုကို မမေ့ပါဘူး၊ တကယ်တော့ ဘယ်တော့မှလည်း မေ့နိုင်မယ် မထင်ဘူး။
                                </p>

                                <p className="text-zinc-300">
                                    သုသုက အရင်ကတည်းက တော်ပြီးသားပါ၊ ဒါပေမဲ့ အခုလိုမျိုး လှပတဲ့ မိန်းကလေးတစ်ယောက်အဖြစ် ကြီးပြင်းလာတာကို မြင်ရတာ တကယ်ပဲ အရမ်းကောင်းပါတယ်။ <span className="text-pink-400 font-bold">go enjoy ur adulthood</span>
                                </p>

                                <div className="border-t border-zinc-800/80 my-3" />

                                <p className="text-zinc-300">
                                    even tho we are now walking our own paths, i hope it crosses again. thanks for ur treat :P snackworld ကဝယ်စားလိုက်ပါမယ်
                                </p>

                                <p className="text-zinc-300">
                                    ကျန်းမာရေး ဂရုစိုက်ပါ၊ အမြဲပျော်ပျော်နေပါ။
                                </p>
                            </div>

                            <div className="text-center pt-2 pb-1">
                                <p className="font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-indigo-400 flex items-center justify-center gap-2">
                                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400 inline" />
                                    သတိရပါတယ်… မွေးနေ့မှာ ပျော်ရွှင်ပါစေ သုသု။
                                    <Heart className="w-4 h-4 text-pink-400 fill-pink-400 inline" />
                                </p>
                            </div>
                        </div>

                        {/* Footer Button */}
                        <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-900/80 flex justify-center">
                            <button
                                onClick={onClose}
                                className="px-8 py-2.5 bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:from-pink-500 hover:via-rose-500 hover:to-purple-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-pink-500/20 cursor-pointer text-sm"
                            >
                                ပိတ်မည် (Close)
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

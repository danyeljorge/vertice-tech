'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'info' | 'error';
}

interface ToastContextType {
  toast: (options: Omit<ToastItem, 'id'>) => void;
  success: (title: string, description?: string) => void;
  info: (title: string, description?: string) => void;
  error: (title: string, description?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, description, type = 'success' }: Omit<ToastItem, 'id'>) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev.slice(-2), { id, title, description, type }]); // Max 3 stacked

      setTimeout(() => {
        removeToast(id);
      }, 4000);
    },
    [removeToast]
  );

  const success = useCallback(
    (title: string, description?: string) => toast({ title, description, type: 'success' }),
    [toast]
  );

  const info = useCallback(
    (title: string, description?: string) => toast({ title, description, type: 'info' }),
    [toast]
  );

  const error = useCallback(
    (title: string, description?: string) => toast({ title, description, type: 'error' }),
    [toast]
  );

  return (
    <ToastContext.Provider value={{ toast, success, info, error }}>
      {children}
      {/* Toast Viewport - Fixed bottom right (Emil Kowalski / Sonner standard) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4 sm:px-0">
        <AnimatePresence mode="popLayout">
          {toasts.map((item, index) => {
            const isLatest = index === toasts.length - 1;
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: isLatest ? 1 : 0.96,
                  transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  transition: { duration: 0.15, ease: 'easeIn' },
                }}
                className="pointer-events-auto relative flex items-start gap-3 p-4 rounded-2xl bg-[#141814]/95 backdrop-blur-xl border border-white/10 shadow-2xl text-left overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-primary-container shadow-lime-glow" />

                <div className="shrink-0 mt-0.5 text-primary-container">
                  {item.type === 'success' && <CheckCircle2 className="w-4 h-4" />}
                  {item.type === 'info' && <Info className="w-4 h-4 text-cyan-400" />}
                  {item.type === 'error' && <AlertCircle className="w-4 h-4 text-rose-400" />}
                </div>

                <div className="flex-1">
                  <div className="text-xs font-bold text-white tracking-tight">{item.title}</div>
                  {item.description && (
                    <div className="text-[11px] text-secondary mt-0.5 leading-relaxed">
                      {item.description}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => removeToast(item.id)}
                  aria-label="Fechar notificação"
                  className="p-1 rounded text-secondary hover:text-white transition-colors cursor-pointer shrink-0 active:scale-90"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function MortgageCalculator() {
  const { t } = useLanguage();
  const [price, setPrice] = useState<number>(500000);
  const [downPaymentPct, setDownPaymentPct] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const calculateMortgage = (e: React.FormEvent) => {
    e.preventDefault();
    
    const principal = price - (price * (downPaymentPct / 100));
    const monthlyRate = (interestRate / 100) / 12;
    const numPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numPayments);
      return;
    }

    const calc = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    setMonthlyPayment(calc);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-panel overflow-hidden mt-16 p-8 relative rounded-2xl border border-white/10 bg-white/5"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
          <Calculator className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h4 className="text-2xl font-bold text-white">{t('calc.title')}</h4>
          <p className="text-white/60 text-sm mt-1">{t('calc.subtitle')}</p>
        </div>
      </div>
      
      <p className="text-white/80 mb-8 max-w-2xl">{t('calc.desc')}</p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <form onSubmit={calculateMortgage} className="lg:col-span-3 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 block">{t('calc.price')} ($)</label>
              <input 
                type="number" 
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400 transition-colors"
                min="0"
                step="10000"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 block">{t('calc.downpayment')}</label>
              <input 
                type="number" 
                value={downPaymentPct}
                onChange={(e) => setDownPaymentPct(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400 transition-colors"
                min="0"
                max="100"
                step="1"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 block">{t('calc.interest')}</label>
              <input 
                type="number" 
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-400 transition-colors"
                min="0"
                max="30"
                step="0.1"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/70 block">{t('calc.years')}</label>
              <select 
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-lg bg-[#141b2a] border border-white/10 text-white focus:outline-none focus:border-blue-400 transition-colors"
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          
          <button 
            type="submit"
            className="btn-primary w-full md:w-auto px-8 py-3 font-bold shadow-lg"
          >
            {t('calc.calculate')}
          </button>
        </form>

        <div className="lg:col-span-2 bg-[#0a0f18] p-8 rounded-xl border border-white/5 flex flex-col justify-center h-full min-h-[200px]">
          <h5 className="text-white/60 text-sm font-medium mb-3">{t('calc.monthly')}</h5>
          {monthlyPayment !== null ? (
            <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              ${monthlyPayment.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              <span className="text-lg text-white/40 font-normal ml-2">/mo</span>
            </div>
          ) : (
            <div className="text-3xl font-bold text-white/20 tracking-tight">
              $0<span className="text-lg font-normal ml-2">/mo</span>
            </div>
          )}
          
          <div className="mt-8 text-xs text-white/40 max-w-sm">
            *This is an estimate. Actual payments may include taxes, insurance, and HOA fees not included here.
          </div>
        </div>
      </div>
    </motion.div>
  );
}

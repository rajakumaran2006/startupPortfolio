'use client';

import React, { useState } from 'react';
import { Search, X, ArrowRight, Shield, Zap, Layers, FileText } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenDemo: () => void;
}

export default function SearchModal({ isOpen, onClose, onOpenDemo }: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const quickLinks = [
    { title: 'Actionable AI Suite', category: 'Platform', href: '#platform' },
    { title: 'Fraud Attack Radar', category: 'Tool', href: '#actionable-ai' },
    { title: '270+ Data Partners Network', category: 'Integrations', href: '#data-partners' },
    { title: 'Case Study: LiveOak Bank', category: 'Customer Story', href: '#results' },
    { title: '2026 State of Fraud Benchmark Report', category: 'Resource', href: '#resources' }
  ];

  const filteredLinks = quickLinks.filter(l => 
    l.title.toLowerCase().includes(query.toLowerCase()) || 
    l.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-[#E2E0D8] space-y-4 text-[#1C1D21] relative">
        
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search platform capabilities, data partners, case studies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#F5F4F0] border border-gray-300 rounded-xl pl-12 pr-10 py-3.5 text-sm text-[#1C1D21] focus:outline-none focus:ring-2 focus:ring-[#FF5A60]"
          />
          <button
            onClick={onClose}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-black"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2 pt-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
            {query ? 'Search Results' : 'Suggested Topics'}
          </div>

          <div className="space-y-1 max-h-60 overflow-y-auto">
            {filteredLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F5F4F0] transition-colors group"
              >
                <div>
                  <div className="font-bold text-sm text-[#1C1D21] group-hover:text-[#FF5A60] transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs text-gray-400">{item.category}</div>
                </div>
                <span className="text-[#FF5A60] opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold">
                  ▶
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-3 border-t flex items-center justify-between text-xs text-gray-400">
          <span>Press ESC to exit</span>
          <button
            onClick={() => {
              onClose();
              onOpenDemo();
            }}
            className="text-[#FF5A60] font-bold hover:underline"
          >
            Need a custom solution? Book a demo ▶
          </button>
        </div>

      </div>
    </div>
  );
}

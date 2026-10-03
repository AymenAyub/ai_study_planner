"use client";

import React from "react";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
  rightElement?: React.ReactNode;
}

export default function AuthInput({
  label,
  id,
  error,
  rightElement,
  className = "",
  ...props
}: AuthInputProps) {
  return (
    <div className="space-y-1.5 text-left">
      <label htmlFor={id} className="block text-xs font-medium text-slate-300">
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border text-white placeholder:text-slate-500 text-sm focus:outline-none transition-all ${
            error
              ? "border-rose-500/60 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20"
              : "border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          } ${rightElement ? "pr-10" : ""} ${className}`}
          {...props}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {rightElement}
          </div>
        )}
      </div>
      {error && (
        <p id={`${id}-error`} className="text-xs text-rose-400 mt-1 flex items-center gap-1">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-surface">

      {/* Left Panel (Brand & Trust - Desktop Only) */}
      <div className="hidden md:flex w-1/2 bg-surface-container relative overflow-hidden items-center justify-center p-12">
        {/* Background Patterns from globals.css */}
        <div className="absolute inset-0 bg-pattern opacity-50 z-0"></div>
        <div className="absolute inset-0 bg-grid opacity-30 z-0"></div>

        <div className="relative z-10 flex flex-col justify-center max-w-[480px] mx-auto w-full text-left">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold font-display text-primary flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-[#009b6b] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 stroke-white" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            BharatPCPrice
          </Link>

          <h1 className="font-display text-headline-lg text-on-surface mb-4">
            Build smarter. Save more.
          </h1>
          <p className="font-body-lg text-on-surface-variant leading-relaxed mb-12">
            Join thousands of Indian PC enthusiasts tracking real-time prices across 500+ verified retailers.
          </p>

          {/* Trust Card */}
          <div className="bg-surface-container-lowest/90 backdrop-blur-md border border-surface-container-high rounded-xl p-5 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px] text-primary">monitoring</span>
            </div>
            <div>
              <div className="font-body-sm font-semibold text-on-surface">Community Impact</div>
              <div className="font-label-md text-[13px] text-on-surface-variant">Over <span className="text-primary font-bold">₹10 Lakh</span> saved this month.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel (Auth Form) */}
      <div className="w-full md:w-1/2 min-h-screen bg-surface-container-lowest flex items-center justify-center p-6 sm:p-12 relative z-20">

        {/* Mobile Logo Back Link (Hidden on Desktop) */}
        <div className="absolute top-6 left-6 md:hidden">
          <Link href="/" className="text-primary hover:bg-surface-container w-10 h-10 rounded-full flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        </div>

        <div className="w-full max-w-[400px]">
          <h2 className="font-display text-headline-lg text-on-surface mb-2">
            {isLogin ? "Welcome back" : "Create your account"}
          </h2>
          <p className="font-body-sm text-on-surface-variant mb-8">
            {isLogin ? "Enter your details to sign in to your account." : "Start tracking prices and saving money today."}
          </p>

          {/* OAuth Providers */}
          <div className="space-y-3 mb-8">
            <Button variant="ghost" className="w-full bg-surface border border-surface-container-high hover:border-primary hover:bg-surface font-body-sm text-on-surface h-11 py-0">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </Button>
            <Button variant="ghost" className="w-full bg-surface border border-surface-container-high hover:border-primary hover:bg-surface font-body-sm text-on-surface h-11 py-0">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
              Continue with GitHub
            </Button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-surface-container-high"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-3 bg-surface-container-lowest font-body-sm text-[12px] text-on-surface-variant">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div>
                <label className="block font-body-sm font-medium text-on-surface mb-1.5">Username</label>
                <Input type="text" placeholder="Gamer99" required />
              </div>
            )}
            <div>
              <label className="block font-body-sm font-medium text-on-surface mb-1.5">Email</label>
              <Input type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block font-body-sm font-medium text-on-surface">Password</label>
                {isLogin && (
                  <a href="#" className="font-label-md text-[12px] text-primary hover:underline">
                    Forgot Password?
                  </a>
                )}
              </div>
              <Input type="password" placeholder="••••••••" required />
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" className="w-full h-11 text-base">
                {isLogin ? "Sign In" : "Create Account"}
              </Button>
            </div>
          </form>

          {/* Footer Toggle */}
          <div className="mt-8 text-center font-body-sm text-on-surface-variant">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

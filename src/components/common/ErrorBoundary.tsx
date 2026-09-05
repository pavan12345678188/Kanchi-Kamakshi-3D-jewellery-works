import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Caught by Application ErrorBoundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-[#11100E] text-[#F7F3EA] flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#C7A45A]/15 border border-[#C7A45A]/30 flex items-center justify-center text-[#C7A45A] mb-6 shadow-xl">
            <AlertCircle size={32} />
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7F3EA] font-bold mb-3">
            KanchiKamakshi 3D Jewellery Works
          </h2>
          <p className="text-sm text-[#EFE8DA]/80 max-w-md mb-8 leading-relaxed">
            The studio presentation encountered an unexpected display condition. You can reload the view smoothly below.
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#C7A45A] hover:bg-[#B5934D] text-[#11100E] text-xs font-bold uppercase tracking-widest transition-all shadow-lg"
          >
            <RotateCcw size={15} />
            <span>Reload View</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

import React, { useEffect, useState } from "react";

type GoldRateResponse = {
  status: string;
  currency: string;
  unit: string;
  metals: {
    gold: number;
  };
};

export const GoldRate: React.FC = () => {
  const [goldPrice, setGoldPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchGoldRate = async () => {
    try {
      setError(false);

      // Call YOUR Vercel API instead of Metals.Dev directly
      const response = await fetch("/api/gold-rate");

      if (!response.ok) {
        throw new Error("Failed to fetch gold rate");
      }

      const data: GoldRateResponse = await response.json();

      if (data.status !== "success") {
        throw new Error("Gold rate unavailable");
      }

      setGoldPrice(data.metals.gold);
    } catch (err) {
      console.error("Gold rate error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoldRate();

    // Refresh every 60 seconds
    const interval = window.setInterval(
      fetchGoldRate,
      60_000
    );

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl border border-[#9b783d]/20 bg-[#0b0a08] p-6 text-[#f6f1e7]">

      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7b86e]">
        Live Gold Rate
      </p>

      <h2 className="mt-3 font-cinzel text-2xl">
        Today's Gold Price
      </h2>

      {loading ? (
        <p className="mt-4 text-sm text-[#f6f1e7]/60">
          Loading current rate...
        </p>
      ) : error ? (
        <p className="mt-4 text-sm text-[#f6f1e7]/60">
          Gold rate is temporarily unavailable.
        </p>
      ) : (
        <>
          <p className="mt-4 text-3xl font-semibold text-[#d7b86e]">
            ₹
            {goldPrice?.toLocaleString("en-IN", {
              maximumFractionDigits: 2,
            })}
          </p>

          <p className="mt-2 text-sm text-[#f6f1e7]/55">
            Per gram · 24K spot gold
          </p>

          <p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[#f6f1e7]/35">
            Live market reference
          </p>
        </>
      )}
    </div>
  );
};
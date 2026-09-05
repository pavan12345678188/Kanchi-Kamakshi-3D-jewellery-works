import React, { useEffect, useState } from "react";

type GoldRateResponse = {
  status: string;
  currency: string;
  metals: {
    gold24k: number;
    gold22k: number;
  };
};

export const GoldRate: React.FC = () => {
  const [rates, setRates] = useState<GoldRateResponse["metals"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchRates = async () => {
    try {
      setError(false);

      const response = await fetch("/api/gold-rate");

      if (!response.ok) {
        throw new Error("Failed to fetch gold rates");
      }

      const data: GoldRateResponse = await response.json();

      if (
        data.status !== "success" ||
        !data.metals ||
        !data.metals.gold24k
      ) {
        throw new Error("Gold rates unavailable");
      }

      setRates(data.metals);
    } catch (err) {
      console.error("Gold rate error:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRates();

    const interval = window.setInterval(fetchRates, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl border border-[#9b783d]/20 bg-[#0b0a08] p-6 text-[#f6f1e7]">
      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7b86e]">
        Live Gold Rate
      </p>

      <h2 className="mt-3 font-cinzel text-2xl">
        Today's Gold Prices
      </h2>

      {loading ? (
        <p className="mt-4 text-sm text-[#f6f1e7]/60">
          Loading current rate...
        </p>
      ) : error || !rates ? (
        <p className="mt-4 text-sm text-[#f6f1e7]/60">
          Gold rate is temporarily unavailable.
        </p>
      ) : (
        <div className="mt-5 space-y-3">
          <RateRow label="Gold 24K" value={rates.gold24k} />
          <RateRow label="Gold 22K" value={rates.gold22k} />

          <p className="pt-2 text-[10px] uppercase tracking-[0.18em] text-[#f6f1e7]/35">
            Live market reference · per gram
          </p>
        </div>
      )}
    </div>
  );
};

const RateRow: React.FC<{
  label: string;
  value: number;
}> = ({ label, value }) => (
  <div className="flex items-center justify-between text-lg">
    <span className="text-[#f6f1e7]/70">
      {label}
    </span>

    <span className="font-semibold text-[#d7b86e]">
      ₹
      {value.toLocaleString("en-IN", {
        maximumFractionDigits: 2,
      })}
    </span>
  </div>
);
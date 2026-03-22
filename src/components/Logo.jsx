import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div
      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.28em] text-white shadow-sm"
      style={{ width }}
    >
      DevUI
    </div>
  );
}

export default Logo;

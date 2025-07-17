import React from "react";

// Define allowed icon types
type IconType = "rocket" | "check" | "heart";

// Emoji or path-based icon map (replace emojis with URLs if needed)
const iconMap: Record<IconType, string> = {
  rocket: "🚀",
  check: "✅",
  heart: "❤️",
};

// Tile Props
type TrendTileProps = {
  icon: IconType;
  title: string;
  subtitle: string;
};

// Reusable Tile component
function TrendTile({ icon, title, subtitle }: TrendTileProps) {
  return (
    <div className="border flex items-center justify-between shadow rounded-2xl p-3">
      <div className="flex items-center gap-2">
        <div className={`icon-container ${icon}-bg-color flex items-center justify-center text-xl`}>
          {iconMap[icon]}
        </div>
        <div>
          <div className="font-semibold text-base text-black">{title}</div>
          <div className="font-normal text-sm text-black">{subtitle}</div>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M1.5 9.75V8.25H13.63L10.67 5.29L11.73 4.23L16.5 9L11.73 13.77L10.67 12.71L13.63 9.75H1.5Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}

export default function InvestWorks() {
  return (
    <div className="cc-md-0 border-[#d7d6d6] border-b">
      {/* Header */}
      <div className="border-[#d7d6d6] border-l border-r border-b">
        <div className="max-w-7xl border-[#d7d6d6] border-l border-r mx-auto cc-1200 relative h-[200px]">
          <div className="text-[49px] font-semibold leading-tight text-black text-center flex items-center justify-center h-full">
            Decode winning trades – know <br /> what works before you invest
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="max-w-7xl border-[#d7d6d6] border-l border-r mx-auto cc-1200 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* CARD 1: Vertical Scrolling Tiles */}
          <div className="top-trend-card p-5">
            <div className="top-trend-illu cc-mask relative h-[280px] overflow-hidden">
              <div className="animate-vertical-scroll flex flex-col gap-4">
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <TrendTile
                      icon="rocket"
                      title="$Pnut - BUY NOW at ($0.012)"
                      subtitle="Target: $0.024 (+100%)"
                    />
                    <TrendTile
                      icon="check"
                      title="$Pnut - TARGET HIT! +60%"
                      subtitle="Profit in 3 Hours!"
                    />
                    <TrendTile
                      icon="heart"
                      title="BEST TRADE OF THE DAY"
                      subtitle="$TNSR pumping NOW!"
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="top-trend-body mt-7">
              <div className="flex flex-col gap-5">
                <p className="font-semibold text-xl text-black">
                  Trade Like a Pro – AI Picks the Best Entry & Exit Points For You
                </p>
                <p className="text-base font-extralight text-black">
                  Instant notifications on top opportunities, profit targets, and scam warnings.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2: Ticker */}
          <div className="top-trend-card p-5 overflow-hidden">
            <div className="top-trend-illu relative w-full">
              <div className="filters-mask w-full overflow-hidden space-y-3">
                {[0, 1, 2].map((row) => (
                  <div
                    key={row}
                    className={`flex w-max ${row % 2 === 0 ? "animate-ticker-left" : "animate-ticker-right"}`}
                  >
                    {[...Array(2)].map((_, groupIndex) => (
                      <div key={groupIndex} className="flex gap-4">
                        {[...Array(6)].map((_, index) => (
                          <div key={index} className="coin-container shrink-0">
                            <div className="img-cove flex gap-1 items-center flex-col justify-center">
                              <img
                                src="/asset/images/logo/coins/image-1.png"
                                alt="Coin"
                                width="30"
                                height="30"
                              />
                              <div className="text-sm text-black">$0.118738</div>
                              <div className="text-xs text-black">-18.39%</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="top-trend-body mt-7">
              <div className="flex flex-col gap-5">
                <p className="font-semibold text-xl text-black">
                  AI MagicRadar & AI MagicDip
                </p>
                <p className="text-base font-extralight text-black">
                  MagicRadar scans hundreds of newly launched cryptos in real-time and delivers only the safest, high-potential gems ready to explode.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3: Static Visual */}
          <div className="top-trend-card back-blur-bg p-5">
            <div className="flex items-center justify-center">
              <img
                src="/asset/images/logo/magic-score.png"
                alt="Magic Score Visual"
                width="300"
                className="mt-4 shadow-lg float-animation"
              />
            </div>
            <div className="top-trend-body mt-7">
              <div className="flex flex-col gap-5">
                <p className="font-semibold text-xl text-black">
                  AI MagicRadar & AI MagicDip
                </p>
                <p className="text-base font-extralight text-black">
                  MagicRadar scans hundreds of newly launched cryptos in real-time and delivers only the safest, high-potential gems ready to explode.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

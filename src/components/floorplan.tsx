import { useMemo, useState } from "react";

import { Reveal } from "@/components/reveal";
import type { PlanLevel } from "@/data/floorplans";
import { cn } from "@/lib/utils";

export function Floorplan({ levels }: { levels: PlanLevel[] }) {
  const [levelIdx, setLevelIdx] = useState(0);
  const [roomIdx, setRoomIdx] = useState(0);

  const level = levels[levelIdx] ?? levels[0]!;
  const activeRoom = level.rooms[roomIdx] ?? level.rooms[0]!;

  const selectLevel = (i: number) => {
    setLevelIdx(i);
    setRoomIdx(0);
  };

  const rooms = useMemo(() => level.rooms, [level]);

  return (
    <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
      {/* Level toggle */}
      <Reveal className="lg:col-span-4">
        <p className="eyebrow">Levels</p>
        <div className="mt-8 flex flex-col border-t border-border">
          {levels.map((l, i) => (
            <button
              key={l.level}
              onClick={() => selectLevel(i)}
              className={cn(
                "group flex items-center justify-between border-b border-border py-5 text-left transition-colors duration-500",
                i === levelIdx ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              <span className="font-serif text-xl">{l.level}</span>
              <span
                className={cn(
                  "h-px bg-accent transition-all duration-700 ease-[var(--ease-quiet)]",
                  i === levelIdx ? "w-10" : "w-4 opacity-40 group-hover:w-7",
                )}
              />
            </button>
          ))}
        </div>

        {/* Active room callout */}
        <div key={`${level.level}-${activeRoom.name}`} className="mt-12 hidden lg:block">
          <p className="eyebrow text-accent">Selected Room</p>
          <h3 className="display mt-4 text-3xl">{activeRoom.name}</h3>
          <p className="mt-4 text-[0.95rem] leading-[1.9] text-muted-foreground">{activeRoom.note}</p>
        </div>
      </Reveal>

      {/* Plan */}
      <Reveal delay={120} className="lg:col-span-8">
        <div className="rounded-3xl border border-border bg-secondary/40 p-4 md:p-8">
          <svg
            key={level.level}
            viewBox="0 0 100 64"
            className="w-full"
            role="group"
            aria-label={`Floorplan — ${level.level}`}
          >
            {rooms.map((r, i) => {
              const active = i === roomIdx;
              return (
                <g
                  key={r.name}
                  onClick={() => setRoomIdx(i)}
                  onMouseEnter={() => setRoomIdx(i)}
                  className="cursor-pointer"
                  style={{ animation: `fp-in 0.9s ${i * 70}ms var(--ease-quiet) both` }}
                >
                  <rect
                    x={r.x}
                    y={r.y}
                    width={r.w}
                    height={r.h}
                    rx={1.2}
                    className={cn(
                      "transition-all duration-500 ease-[var(--ease-quiet)]",
                      active
                        ? "fill-accent/25 stroke-accent"
                        : "fill-background stroke-border hover:fill-accent/10",
                    )}
                    strokeWidth={active ? 0.5 : 0.3}
                  />
                  <text
                    x={r.x + r.w / 2}
                    y={r.y + r.h / 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={cn(
                      "pointer-events-none fill-foreground font-sans uppercase transition-opacity duration-500",
                      active ? "opacity-100" : "opacity-50",
                    )}
                    style={{ fontSize: "2.4px", letterSpacing: "0.08em" }}
                  >
                    {r.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Room index */}
        <ol className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {rooms.map((r, i) => (
            <li key={r.name}>
              <button
                onClick={() => setRoomIdx(i)}
                onMouseEnter={() => setRoomIdx(i)}
                className={cn(
                  "flex w-full items-baseline gap-4 border-b pb-3 text-left transition-colors duration-500",
                  i === roomIdx ? "border-accent" : "border-border/70 hover:border-foreground/40",
                )}
              >
                <span className="eyebrow w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span
                  className={cn(
                    "text-[0.95rem] transition-colors duration-500",
                    i === roomIdx ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {r.name}
                </span>
              </button>
            </li>
          ))}
        </ol>

        {/* Mobile callout */}
        <div className="mt-8 border-l-2 border-accent pl-6 lg:hidden">
          <h3 className="display text-2xl">{activeRoom.name}</h3>
          <p className="mt-3 text-[0.95rem] leading-[1.9] text-muted-foreground">{activeRoom.note}</p>
        </div>
      </Reveal>
    </div>
  );
}

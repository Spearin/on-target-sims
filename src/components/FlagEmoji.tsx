import CountryFlag from "react-emoji-flag";
import { cn } from "@/lib/utils";

type FlagEmojiProps = {
  countryCode?: string;
  name?: string;
  title?: string;
  className?: string;
};

const fallbackFlags: Record<
  string,
  {
    src: string;
    title: string;
  }
> = {
  sovietunion: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg",
    title: "Soviet Union",
  },
  su: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg",
    title: "Soviet Union",
  },
  ussr: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg",
    title: "Soviet Union",
  },
  eastgermany: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Flag_of_the_German_Democratic_Republic.svg",
    title: "East Germany",
  },
  ddr: {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Flag_of_the_German_Democratic_Republic.svg",
    title: "East Germany",
  },
};

const FlagEmoji = ({ countryCode, name, title, className }: FlagEmojiProps) => {
  const normalizedKey = (countryCode || name || "").toLowerCase().replace(/[^a-z]/g, "");
  const fallback = fallbackFlags[normalizedKey];

  if (fallback) {
    return (
      <span
        className={cn(
          "inline-flex h-8 w-10 items-center justify-center overflow-hidden rounded-[5px]",
          className,
        )}
        role="img"
        aria-label={title || fallback.title}
        title={title || fallback.title}
      >
        <img
          src={fallback.src}
          alt={title || fallback.title}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex h-8 w-10 items-center justify-center overflow-hidden rounded-[3px]",
        className,
      )}
      role="img"
      aria-label={title || name}
      title={title || name}
    >
      <CountryFlag
        countryCode={countryCode || ""}
        title={title || name}
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </span>
  );
};

export default FlagEmoji;

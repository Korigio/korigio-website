import Image from "next/image";
import dashboardDark from "@/assets/preview/dashboard-dark.jpg";
import dashboardLight from "@/assets/preview/dashboard-light.jpg";
import type { Dictionary } from "@/lib/i18n";

type Props = {
  dict: Dictionary;
};

export function AppPreview({ dict }: Props) {
  return (
    <figure className="m-0">
      <div className="app-preview glow-ring overflow-hidden rounded-[14px] border border-white/10">
        <Image
          src={dashboardLight}
          alt=""
          sizes="(max-width: 1024px) 100vw, 520px"
          className="preview-shot preview-shot-light"
          style={{ width: "100%", height: "auto" }}
          priority
        />
        <Image
          src={dashboardDark}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 520px"
          className="preview-shot preview-shot-dark"
          priority
        />
      </div>
      <figcaption className="sr-only">{dict.preview.alt}</figcaption>
    </figure>
  );
}

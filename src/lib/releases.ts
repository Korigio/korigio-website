import { GITHUB_RELEASES_REPO } from "@/lib/constants";

export type ReleaseAsset = {
  name: string;
  url: string;
};

export type ReleaseInfo = {
  version: string | null;
  windows: ReleaseAsset | null;
  macos: ReleaseAsset | null;
  linux: ReleaseAsset | null;
};

type GithubAsset = {
  name: string;
  browser_download_url: string;
};

type GithubRelease = {
  tag_name?: string;
  assets?: GithubAsset[];
};

function pick(assets: GithubAsset[], test: (name: string) => boolean) {
  const asset = assets.find((item) => test(item.name.toLowerCase()));
  return asset
    ? { name: asset.name, url: asset.browser_download_url }
    : null;
}

export async function getLatestRelease(): Promise<ReleaseInfo> {
  const empty: ReleaseInfo = {
    version: null,
    windows: null,
    macos: null,
    linux: null,
  };
  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_RELEASES_REPO}/releases/latest`,
      {
        next: { revalidate: 300 },
        headers: { Accept: "application/vnd.github+json" },
      },
    );
    if (!response.ok) {
      return empty;
    }
    const release = (await response.json()) as GithubRelease;
    const assets = Array.isArray(release.assets) ? release.assets : [];
    return {
      version: release.tag_name ? release.tag_name.replace(/^v/, "") : null,
      windows: pick(
        assets,
        (name) => name.endsWith(".exe") || name.includes("setup"),
      ),
      macos: pick(assets, (name) => name.endsWith(".dmg")),
      linux: pick(
        assets,
        (name) => name.endsWith(".appimage") || name.endsWith(".appimage"),
      ),
    };
  } catch {
    return empty;
  }
}

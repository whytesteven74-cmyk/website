import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.2,
          }}
        >
          Steven Whyte
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 36,
            color: "#eef2ff",
          }}
        >
          Homeless Advocacy & Research
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 24,
            color: "#e0e7ff",
          }}
        >
          5000+ miles across Europe · Lived experience · Social change
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Golden Retreat Lombok Villas";
export const size = {
  width: 1200,
  height: 630
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom, #000000, #1a1a1a)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "40px"
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1,
            textAlign: "center",
            marginBottom: 16
          }}
        >
          Golden Retreat
        </div>
        <div
          style={{
            fontSize: 40,
            fontWeight: 400,
            letterSpacing: "0.05em",
            lineHeight: 1,
            textAlign: "center",
            marginBottom: 24
          }}
        >
          LOMBOK VILLAS
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#9CA3AF",
            letterSpacing: "0.05em",
            lineHeight: 1,
            textAlign: "center"
          }}
        >
          Luxury Villa Investment in Paradise
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}

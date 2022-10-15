import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          color: "black",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="mahima ramgolam"
          width="256"
          src="https://github.com/mahima98.png"
          style={{
            borderRadius: 128,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

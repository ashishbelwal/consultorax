import { Instagram, Mail } from "lucide-react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { FlipWords } from "./ui/flip-words";
const words = ["POSTIONING","STRATEGY", "SPOTLIGHT", "IMPACT",];
export function TextBack() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 40,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          //   backgroundColor: "red",
          height: "100%",
        }}
      >
        <p
          style={{
            // fontFamily: "'Antonio', sans-serif",
            fontSize: 100,
            // fontWeight: "100",
            color: "#111",
            letterSpacing: -2,
            position: "absolute",

            top: "50%",
            left: "50%",
            transform: "translate(-50%, calc(-50% - 150px))",
          }}
        >
          Brand Needs
        </p>
      </div>
    </div>
  );
}
export function TextFront() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-center",
        pointerEvents: "none",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ff000008",
          height: "100%",
        }}
      >
        <div
          style={{
            fontFamily: "'Antonio', sans-serif",
            fontSize: 40,
            // fontWeight: "700",
            color: "#ffffff",
            opacity: 1,
            letterSpacing: -2,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, calc(-50% + 250px))",
            // textTransform: "uppercase",
            maxWidth: "100%",
            overflow: "hidden",
            background: "#ff000010",
            textAlign: "center",
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "20px",
          }}
        >
          {/* <p className="text-white text-2xl text-center">Brand Needs</p> */}
          Your Brand Needs Right 
          <br />
          <FlipWords
            words={words}
            className="text-yellow-500 text-[70px] font-bold"
          />
        </div>
      </div>
    </div>
  );
}
export function Underlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 40,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: "1 1 0%",
            height: 30,
            fontSize: 30,
            fontWeight: "700",
            lineHeight: "30px",
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          CONSULTORA-X
        </p>
        <div style={{ flex: "1 1 0%", display: "flex", gap: "2em" }}></div>
        <p
          style={{
            flex: "1 1 0%",
            height: 30,
            fontSize: 30,
            lineHeight: "30px",
            textAlign: "right",
            color: "#ffffff",
          }}
        >
          ⎑
        </p>
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            flex: "1 1 0%",
            height: "100%",
            fontSize: 12,
            lineHeight: "1.5em",
            color: "#ffffff",
          }}
        >
          <b>Illuminating Ideas</b>
          <br />
          Shaping Impact
          <br />
          <b>—</b>
        </p>
        <div style={{ width: 10 }} />
        <p
          style={{
            transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
            transformOrigin: "right",
            fontSize: 12,
            fontWeight: "700",
            lineHeight: "100%",
            textAlign: "right",
            color: "#ffffff",
            whiteSpace: "nowrap",
          }}
        >
          CONSULTORA-X &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
        </p>
      </div>
      <div style={{ height: 10 }} />
      <div
        className="full"
        style={{
          fontFamily: "'Antonio', sans-serif",
          width: "100%",
          flex: "1 1 0",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        {/* <p
          style={{
            flex: "1 1 0%",
            fontSize: 700,
            fontWeight: "500",
            lineHeight: "1em",
            color: "#ffffff",
            margin: 0,
            letterSpacing: -10,
            opacity: 0.03,
            textAlign: "center",
          }}
        >
          X
        </p> */}
        <div style={{ width: 10 }} />
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          pointerEvents: "all",
          // pointer: "auto",
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <p
          className="full"
          style={{
            whiteSpace: "nowrap",
            flex: "1 1 0%",
            fontSize: 12,
            lineHeight: "1.5em",
            color: "#ffffff",
          }}
        >
          <b>Driving Excellence</b>
          <br />
          Inspiring Growth
        </p>
        <div style={{ width: 10 }} />
        {/* <button
          className="full"
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: "1 1 0%",
            fontSize: 16,
            fontWeight: "700",
            lineHeight: "1em",
            textAlign: "center",
            color: "#ffffff",
            letterSpacing: -0.5,
            whiteSpace: "nowrap",
          }}
        >
          THE SUMMIT OF THE MANY
        </button> */}
        <div style={{ width: 10 }} />
        <p
          className="full"
          style={{
            flex: "1 1 0%",
            fontSize: 12,
            lineHeight: "1em",
            textAlign: "right",
            color: "#ffffff",
          }}
        ></p>
      </div>
    </div>
  );
}

export function Overlay() {
  return (
    <div style={{ position: "absolute", bottom: 40, right: 40 }}>
      <p
        style={{
          flex: "1 1 0%",
          // fontSize: 12,
          lineHeight: "1em",
          textAlign: "right",
          color: "#ffffff",
          display: "flex",
          gap: "1em",
        }}
      >
        <a href="mailto:consultora-x@gmail.com">
          <Mail size={22} strokeWidth={1} />
        </a>{" "}
        <a href="https://www.instagram.com/consultora.x/">
          <Instagram size={20} strokeWidth={1} />
        </a>
      </p>
    </div>
  );
}

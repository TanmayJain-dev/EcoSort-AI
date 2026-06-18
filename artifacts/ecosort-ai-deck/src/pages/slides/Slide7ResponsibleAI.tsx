export default function Slide7ResponsibleAI() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{
        backgroundColor: "#080C08",
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 6vw",
        boxSizing: "border-box",
      }}
    >
      {/* Centered radial glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(ellipse at 50% 55%, rgba(90,138,90,0.1) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "4vh" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5vw",
              color: "#5A8A5A",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1vw",
              fontWeight: 700,
              letterSpacing: "0.15vw",
              textTransform: "uppercase",
            }}
          >
            <span>⬡</span>
            <span>EcoSort AI</span>
          </div>
          <div
            style={{
              color: "#E0EBE0",
              opacity: 0.5,
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.9vw",
              letterSpacing: "0.1vw",
            }}
          >
            RESPONSIBLE AI — MANDATORY
          </div>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "4vw",
            fontWeight: 400,
            color: "#E0EBE0",
            margin: "0 0 1.5vh 0",
            lineHeight: 1.1,
            letterSpacing: "-0.08vw",
          }}
        >
          Responsible AI Considerations
        </h2>
        <div
          style={{
            width: "5vw",
            height: "2px",
            backgroundColor: "#5A8A5A",
            marginBottom: "5vh",
          }}
        />

        {/* Three considerations */}
        <div style={{ display: "flex", flex: 1, gap: "3vw", alignItems: "stretch" }}>
          {/* Fairness */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(90,138,90,0.07)",
              borderTop: "2px solid #5A8A5A",
              padding: "3vh 2.5vw",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.15vw",
                textTransform: "uppercase",
              }}
            >
              Fairness
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "2vw",
                fontWeight: 700,
                color: "#E0EBE0",
                lineHeight: 1.15,
              }}
            >
              Equitable Access
            </div>
            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(90,138,90,0.25)",
              }}
            />
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.4vw",
                color: "#E0EBE0",
                opacity: 0.7,
                lineHeight: 1.6,
                flex: 1,
              }}
            >
              Evaluates waste without assuming the user has access to premium recycling services. Guidance is equally useful for any household, regardless of location or income.
            </div>
          </div>

          {/* Transparency */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(90,138,90,0.07)",
              borderTop: "2px solid #5A8A5A",
              padding: "3vh 2.5vw",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.15vw",
                textTransform: "uppercase",
              }}
            >
              Transparency
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "2vw",
                fontWeight: 700,
                color: "#E0EBE0",
                lineHeight: 1.15,
              }}
            >
              Explained Decisions
            </div>
            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(90,138,90,0.25)",
              }}
            />
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.4vw",
                color: "#E0EBE0",
                opacity: 0.7,
                lineHeight: 1.6,
                flex: 1,
              }}
            >
              The AI explains why the item needs specific handling — for example, why batteries must have their terminals taped to prevent fires — not just a category label.
            </div>
          </div>

          {/* Privacy */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(90,138,90,0.07)",
              borderTop: "2px solid #5A8A5A",
              padding: "3vh 2.5vw",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#5A8A5A",
                letterSpacing: "0.15vw",
                textTransform: "uppercase",
              }}
            >
              Privacy
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "2vw",
                fontWeight: 700,
                color: "#E0EBE0",
                lineHeight: 1.15,
              }}
            >
              Zero Data Collected
            </div>
            <div
              style={{
                height: "1px",
                backgroundColor: "rgba(90,138,90,0.25)",
              }}
            />
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1.4vw",
                color: "#E0EBE0",
                opacity: 0.7,
                lineHeight: 1.6,
                flex: 1,
              }}
            >
              The API call only sends the waste item name — no personal user data is collected or processed. No names, locations, or histories are ever stored or transmitted.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontStyle: "italic", color: "#5A8A5A" }}>
            EcoSort AI
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#E0EBE0", opacity: 0.4 }}>
            07
          </div>
        </div>
      </div>
    </div>
  );
}

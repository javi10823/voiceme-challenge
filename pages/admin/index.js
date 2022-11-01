import Head from "next/head";
import Image from "next/image";
import { VictoryBar, VictoryPie, VictoryChart } from "victory";

const Admin = () => {
  const colors = ["#d72c4a", "#d75f2c", "#2cd79b", "#3d2cd7"];
  const data = [
    { quarter: "a", earnings: 13 },
    { quarter: "b", earnings: 16 },
    { quarter: "c", earnings: 14 },
    { quarter: "d", earnings: 19 },
  ];

  const dataPie = [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 },
  ];

  const likes = 7;
  const dislikes = 3;

  const comics = ["comic1", "comic2", "comic3"];
  return (
    <div>
      <Head>
        <title>Voice.Me</title>
        <meta name="description" content="VoiceMe Admin" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main style={{ paddingInline: "10%", marginTop: 40 }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {colors.map((i, ind) => (
            <div
              key={ind}
              style={{
                width: "20%",
                paddingBlock: 10,
                paddingInline: 20,
                backgroundColor: i,
                borderRadius: 10,
              }}
            >
              <p style={{ fontWeight: 600 }}>TITLE title</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: "50%",
                    backgroundColor: "white",
                    opacity: 0.5,
                  }}
                />
                <div style={{ display: "flex" }}>
                  <h1>19</h1>
                  <h1>HS</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <div
            style={{
              backgroundColor: "#822cd7",
              borderRadius: 20,
              paddingInline: 20,
              width: "50%",
            }}
          >
            <h1>graph 1</h1>
            <div style={{ width: "60%" }}>
              <VictoryChart domainPadding={20}>
                <VictoryBar data={data} x="quarter" y="earnings" />
              </VictoryChart>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#822cd7",
              borderRadius: 10,
              paddingInline: 20,
              width: "45%",
            }}
          >
            <h1>graph 2</h1>
            <div style={{ width: "60%" }}>
              <VictoryPie colorScale={colors} data={dataPie} />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginBlock: 20,
            backgroundColor: "#d75f2c",
            paddingInline: 20,
            paddingBottom: 20,
            borderRadius: 20,
            flexDirection: "column",
          }}
        >
          {comics.map((i, ind) => (
            <div key={ind}>
              <h2>{i}</h2>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    backgroundColor: "gray",
                    width: "50%",
                    height: 10,
                    marginRight: 20,
                  }}
                >
                  <div
                    style={{
                      height: 10,
                      width: `${(likes * 100) / (likes + dislikes)}%`,
                      backgroundColor: "blue",
                    }}
                  />
                </div>
                <p>{(likes * 100) / (likes + dislikes)}%</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Admin;

import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import { VictoryBar, VictoryPie, VictoryChart } from "victory";
import { BASE_URL } from "../../config";

const Admin = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["adminData"],
    queryFn: () => fetch(`${BASE_URL}/api/admin`).then((res) => res.json()),
  });
  const colors = ["#d72c4a", "#d75f2c", "#2cd79b", "#3d2cd7"];

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error!</h1>;
  }

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
          {data.kpis?.map(({ title, value }, ind) => (
            <div
              key={ind}
              style={{
                width: "20%",
                paddingBlock: 10,
                paddingInline: 20,
                backgroundColor: colors[ind],
                borderRadius: 10,
              }}
            >
              <p style={{ fontWeight: 600 }}>{title}</p>
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
                  <h1>{value}</h1>
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
              width: "45%",
            }}
          >
            <h1>Earnings</h1>
            <div>
              <VictoryChart domainPadding={20}>
                <VictoryBar
                  data={data.earnings}
                  x="quarter"
                  y="earnings"
                  style={{ data: { fill: "#FFF" } }}
                />
              </VictoryChart>
            </div>
          </div>
          <div
            style={{
              flexDirection: "column",
              backgroundColor: "#822cd7",
              borderRadius: 10,
              paddingInline: 20,
              width: "50%",
            }}
          >
            <h1>Popular comics</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <VictoryPie
                colorScale={colors}
                data={data.popular}
                padding={{ bottom: 100, top: 100, right: 100, left: 100 }}
                style={{
                  labels: { fontSize: 14, fill: "#fff" },
                }}
              />
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
          <h1>Last comics rating</h1>
          {data.lastComicsRating?.map(({ title, likes, dislikes }, ind) => (
            <div key={ind}>
              <h2>{title}</h2>
              <h4>
                Likes {likes} Dislikes: {dislikes}
              </h4>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    backgroundColor: "gray",
                    width: "100%",
                    height: 10,
                    marginRight: 20,
                  }}
                >
                  <div
                    style={{
                      height: 10,
                      width: `${Math.floor(
                        (likes * 100) / (likes + dislikes)
                      )}%`,
                      backgroundColor: "blue",
                    }}
                  />
                </div>
                <p>{Math.floor((likes * 100) / (likes + dislikes))}%</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Admin;

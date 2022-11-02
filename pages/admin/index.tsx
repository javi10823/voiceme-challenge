import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { VictoryBar, VictoryPie, VictoryChart } from "victory";
import { BASE_URL } from "../../config";
import styles from "./styles.module.css";

const colors = ["#d72c4a", "#d75f2c", "#2cd79b", "#3d2cd7"];

const Admin = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["adminData"],
    queryFn: () => fetch(`${BASE_URL}/api/admin`).then((res) => res.json()),
  });

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

      <main className={styles.main}>
        <div className={styles.header}>
          {data.kpis?.map(({ title, value }, i) => (
            <div
              key={i}
              className={styles.headerItem}
              style={{ backgroundColor: colors[i] }}
            >
              <h2>{title}</h2>
              <h1>{value}</h1>
            </div>
          ))}
        </div>

        <div className={styles.graphContainer}>
          <div className={styles.graphCard}>
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
          <div className={styles.graphCard}>
            <h1>Popular comics</h1>
            <div>
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

        <div className={styles.ratingContainer}>
          <h1>Last comics rating</h1>
          {data.lastComicsRating?.map(({ title, likes, dislikes }, i) => (
            <div key={i}>
              <h2>{title}</h2>
              <h4>
                Likes {likes} Dislikes: {dislikes}
              </h4>
              <div className={styles.proportionContainer}>
                <div className={styles.proportionBackground}>
                  <div
                    className={styles.likes}
                    style={{
                      width: `${Math.floor(
                        (likes * 100) / (likes + dislikes)
                      )}%`,
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

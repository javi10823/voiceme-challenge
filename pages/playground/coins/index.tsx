import Head from "next/head";
import { useEffect, useState } from "react";

const maxVotes = 10;

const Coins = () => {
  const [views, setViews] = useState(0);
  const [votes, setVotes] = useState([0, 0]);
  const [coins, setCoins] = useState(0);

  const [participation, setParticipation] = useState(0);

  useEffect(() => {
    if (views % 100 === 0 && views !== 0) {
      if (views > 1000) {
        return setCoins((prev) => prev + 50);
      }
      setCoins((prev) => prev + 10);
    }
  }, [views]);

  useEffect(() => {
    if (!(votes[0] + votes[1] < maxVotes)) {
      if (votes[0] > votes[1]) {
        setCoins((prev) => prev + 10 * votes[0]);
      }

      setTimeout(() => {
        setVotes([0, 0]);
      }, 1000);
    }
  }, [votes]);

  useEffect(() => {
    if (participation % 3 === 0 && participation !== 0) {
      return setCoins((prev) => prev + 30);
    }
  }, [participation]);

  const onVote = (user) => {
    if (user === 1) {
      setVotes((prev) => [prev[0], prev[1] + 1]);
    } else {
      setVotes((prev) => [prev[0] + 1, prev[1]]);
    }
  };

  return (
    <div style={{ paddingInline: 20 }}>
      <Head>
        <title>Voice.Me</title>
        <meta name="description" content="VoiceMe Admin" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "#d7c62c",
            borderRadius: 20,
            marginBlock: 20,
            paddingInline: 20,
          }}
        >
          <h1>Coins: {coins}</h1>
        </div>
      </div>
      <h1>For Uploads</h1>
      <p>
        After X number of users see your publication, Y number of coins will be
        received. Depending on how large the number of viewers is, the greater
        the number of coins won
      </p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "#2cb5d7",
            padding: 20,
            marginBottom: 20,
            borderRadius: 20,
          }}
        >
          <h1 style={{ marginTop: 0, marginBottom: 20 }}>Views: {views}</h1>
          <button onClick={() => setViews((prev) => prev + 10)}>+ 10</button>
          <button onClick={() => setViews((prev) => prev + 50)}>+ 50</button>
          <button onClick={() => setViews((prev) => prev + 100)}>+ 100</button>
        </div>
      </div>
      <p>
        If the user wins a competition, will receive X amount of coins, scaling
        by the amount of votes they have received
      </p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "#2cb5d7",
            marginBottom: 20,
            padding: 20,
            borderRadius: 20,
          }}
        >
          <div style={{ display: "flex" }}>
            <h1 style={{ marginTop: 0, marginBottom: 20 }}>
              Your Votes: {votes[0]}
            </h1>
            <h1 style={{ marginTop: 0, marginLeft: 20, marginBottom: 20 }}>
              Other Votes: {votes[1]}
            </h1>
          </div>
          <button
            disabled={!(votes[0] + votes[1] < maxVotes)}
            onClick={onVote.bind(null, 0)}
          >
            You +
          </button>
          <button
            disabled={!(votes[0] + votes[1] < maxVotes)}
            onClick={onVote.bind(null, 1)}
          >
            Others +
          </button>
        </div>
      </div>

      <h1>For Viewers</h1>
      <p>
        When a user votes in a competitions, after X number of votations, the
        user will receive Y number of coins.
      </p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "#2cb5d7",
            padding: 20,
            marginBottom: 20,
            borderRadius: 20,
          }}
        >
          <h1 style={{ marginTop: 0, marginBottom: 20 }}>
            Participation: {participation}
          </h1>
          <button onClick={() => setParticipation((prev) => prev + 1)}>
            1
          </button>
          <button onClick={() => setParticipation((prev) => prev + 5)}>
            5
          </button>
          <button onClick={() => setParticipation((prev) => prev + 10)}>
            10
          </button>
        </div>
      </div>
      <p>A user will be able to buy coins using real money.</p>
      <div style={{ display: "flex" }}>
        <div
          style={{
            backgroundColor: "#2cb5d7",
            padding: 20,
            marginBottom: 20,
            borderRadius: 20,
          }}
        >
          <div>
            <p>1000 coins for $10</p>
            <button
              style={{ backgroundColor: "#d7c62c", padding: 10, fontSize: 20 }}
              onClick={() => setCoins((prev) => prev + 1000)}
            >
              $10
            </button>
          </div>
          <div>
            <p>10000 coins for $50</p>
            <button
              style={{ backgroundColor: "#d7c62c", padding: 10, fontSize: 20 }}
              onClick={() => setCoins((prev) => prev + 10000)}
            >
              $50
            </button>
          </div>
          <div>
            <p>100000 coins for $400</p>
            <button
              style={{ backgroundColor: "#d7c62c", padding: 10, fontSize: 20 }}
              onClick={() => setCoins((prev) => prev + 100000)}
            >
              $400
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;

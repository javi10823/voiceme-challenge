const mock_data = {
  visitors: [
    {
      time: Date.now() - 60 * 60 * 1000,
      amount: 150,
    },
    {
      time: Date.now() - 2 * 60 * 60 * 1000,
      amount: 200,
    },
    {
      time: Date.now() - 3 * 60 * 60 * 1000,
      amount: 75,
    },
    {
      time: Date.now() - 4 * 60 * 60 * 1000,
      amount: 133,
    },
  ],
};

export default function getData(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ data: mock_data });
  }
};

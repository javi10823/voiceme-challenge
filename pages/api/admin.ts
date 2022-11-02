const mock_data = {
  earnings: [
    { quarter: "1st", earnings: 13 },
    { quarter: "2nd", earnings: 16 },
    { quarter: "3rd", earnings: 14 },
    { quarter: "4th", earnings: 19 },
  ],
  kpis: [
    { title: "Monthly earnings average", value: 15.5 },
    { title: "Monthly visitors average", value: 534 },
    { title: "Monthly earned coins", value: 789 },
    { title: "Monthly coins spent", value: 246 },
  ],
  popular: [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 },
  ],
  lastComicsRating: [
    { title: 'Comic 1', likes: 53, dislikes: 23 },
    { title: 'Comic 2', likes: 34, dislikes: 2 },
    { title: 'Comic 3', likes: 25, dislikes: 64 },
  ]
};

export default function getData(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ ...mock_data });
  }

  res.status(404).json({ error: "Unknown method" });
}

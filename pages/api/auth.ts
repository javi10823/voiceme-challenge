// MOCK
const users = [
  {
    username: "admin",
    password: "admin",
    role: "admin",
    token: "THISISTESTADMINTOKEN",
  },
];

export default function login(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const user = users.find((u) => username === u.username);
    if (user && user.password === password) {
      res
        .status(200)
        .json({ username: user.username, role: user.role, token: user.token });
    } else {
      res.status(403).json({ error: "Invalid credentials" });
    }
  }
}

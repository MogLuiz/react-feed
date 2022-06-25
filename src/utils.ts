import { PostType } from "./components/Post";

export const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/58401291?v=4",
      name: "Luiz Ramos",
      role: "Frontend Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "<jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-25 17:30:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/64808612?v=4",
      name: "Matheus Cunha",
      role: "Frontend Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "<jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-06-10 17:30:00"),
  },
];

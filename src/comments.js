const LOCAL_COMMENTTS = localStorage.getItem("INITIAL_COMMENTS");
export const INITIAL_COMMENTS = LOCAL_COMMENTTS
  ? JSON.stringify(LOCAL_COMMENTTS)
  : Object.freeze([
    {
      name: "Eman K",
      profilePic: "/profiles/dp1.jpg",
      id: 1,
      message: "comment 1",
      time: new Date().getTime(),
      reply: []
    },
    {
      name: "Eman K",
      profilePic: "/profiles/dp1.jpg",
      id: 2,
      message: "comment 1",
      time: new Date().getTime() - 10 * 60 * 1000,
      reply: []
    },
    {
      name: "Amr Ezzat",
      id: 33,
      profilePic: "/profiles/dp2.jpeg",
      message: "comment 2",
      time: new Date().getTime() - 2 * 24 * 60 * 60 * 1000,
      reply: [
        {
          name: "Eman K",
          id: 34,

          profilePic: "/profiles/dp1.jpg",
          message: "thread 1 comment 1",
          time: new Date().getTime() - 3 * 60 * 60 * 1000,
          reply: [
            {
              name: "Eman K",
              id: 35,
              profilePic: "/profiles/dp1.jpg",
              time: new Date().getTime() - 2 * 60 * 60 * 1000,
              message: "thread 2 comment 1"
            },
            {
              name: "Kumar",
              id: 36,
              profilePic: "/profiles/dp3.jpeg",
              time: new Date().getTime() - 1 * 60 * 60 * 1000,
              message: "thread 2 comment 1"
            }
          ]
        }
      ]
    }
  ]);

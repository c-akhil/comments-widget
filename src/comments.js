const LOCAL_COMMENTTS = localStorage.getItem("INITIAL_COMMENTS");
export const INITIAL_COMMENTS = LOCAL_COMMENTTS
  ? JSON.stringify(LOCAL_COMMENTTS)
  : Object.freeze([
      {
        name: "Eman K",
        message: "comment 1",
        reply: []
      },
      {
        name: "Amr Ezzat",
        message: "comment 2",
        reply: [
          {
            name: "Eman K",
            message: "thread 1 comment 1",
            reply: [
              {
                name: "Eman K",
                message: "thread 2 comment 1"
              },
              {
                name: "Eman K",
                message: "thread 2 comment 1"
              }
            ]
          }
        ]
      }
    ]);

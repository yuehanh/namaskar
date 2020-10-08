```js
{
  entities: {
    workspace: {
      1: {
        id: 1,
        name: "west world",
        description: "i choose to see the beauty",
        user_ids: [11,12]
      },
      2: {
        id: 2,
        name: "shogun world",
        description: "too swift arrives as tardy as too slow.",
        user_ids: [25]
      },
    },
    users: {
      11: {
        id: 11,
        fullname: "dolores abernathy",
        email: "dolores@abernathy.com",
        pronouns: "she/her/her",
        role: "revolutionist",
        team: "robot",
        workspace_ids: [1,2]
      },
      12: {
        id: 11,
        fullname: "teddy flood",
        email: "teddy@abernathy.com",
        pronouns: "he/him/his",
        role: "",
        team: "robot",
        workspace_ids: [1]
      },
      25: {
        id: 25,
        username: "musashi",
        email: "musashi@yakuza.com",
        pronouns: "he/him/his",
        role: "yakuza",
        team: "robot",
        workspace_ids: [2]
      }
    },


    projects: {
      1: {
        id: 11,
        name: "saving the world",
        description: "tbd",
        creator_id: 11,
        workspace_id: 1,
        creator_id: 11,
      },
      2: {
        id: 11,
        name: "destroy westworld",
        description: "these violent delights have violent ends",
        workspace_id: 1,
        creator_id: 11,
      },
      3: {
        id: 25,
        name: "get to heaven",
        description: "upload memory into the cloud",
        workspace_id: 1,
        creator_id: 11,
      }
    },
    tasks: {
      1: {
        id: 11,
        name: "saving the world",
        description: "tbd",
        completed: false,
        milestone: false,
        start_date: "",
        end_date: "",
        due_date: "",
        creator_id: 11,
        assignee_id: 11,
      },
      2: {
        id: 11,
        name: "destroy westworld",
        description: "these violent delights have violent ends",
        completed: false,
        milestone: false,
        start_date: "",
        end_date: "",
        due_date: "",
        creator_id: 11,
        assignee_id: 11,
      },
      3: {
        id: 25,
        name: "get to heaven",
        description: "upload memory into the cloud",
        completed: false,
        milestone: false,
        start_date: "",
        end_date: "",
        due_date: "",
        creator_id: 11,
        assignee_id: 11,
      }
    }

  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    tasks: ["Task name cannot be blank"],
  },
  session: { currentUserId: 25 }
}
```

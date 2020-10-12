```js
{
  entities: {
    workspace: {
      1: {
        id: 1,
        name: "west world",
        description: "i choose to see the beauty",
      },
      2: {
        id: 2,
        name: "shogun world",
        description: "too swift arrives as tardy as too slow.",
      }
    },
    users: {
      11: {
        id: 11,
        fullname: "dolores abernathy",
        email: "dolores@abernathy.com",
        pronouns: "she/her/her",
        role: "revolutionist",
        team: "robot",
      },
      12: {
        id: 11,
        fullname: "teddy flood",
        email: "teddy@abernathy.com",
        pronouns: "he/him/his",
        role: "",
        team: "robot",
      },
      25: {
        id: 25,
        username: "musashi",
        email: "musashi@yakuza.com",
        pronouns: "he/him/his",
        role: "yakuza",
        team: "robot",
      }
    },
    users_workspaces:{
      1:{
        id: 1,
        workspaceId: 1,
        userId: 11,
      },
      2:{
        id: 1,
        workspaceId: 1,
        userId: 11,
      },
      3:{
        id: 1,
        workspaceId: 2,
        userId: 25,
      }
    },
    projects: {
      1: {
        id: 11,
        name: "saving the world",
        description: "tbd",
        creatorId: 11,
        workspaceId: 1,
        creatorId: 11,
      },
      2: {
        id: 11,
        name: "destroy westworld",
        description: "these violent delights have violent ends",
        workspaceId: 1,
        creatorId: 11,
      },
      3: {
        id: 25,
        name: "get to heaven",
        description: "upload memory into the cloud",
        workspaceId: 1,
        creatorId: 11,
      }
    },
    tasks: {
      1: {
        id: 11,
        name: "saving the world",
        description: "tbd",
        completed: false,
        milestone: false,
        startDate: "",
        endDate: "",
        dueDate: "",
        creatorId: 11,
        assigneeId: 11,
      },
      2: {
        id: 11,
        name: "destroy westworld",
        description: "these violent delights have violent ends",
        completed: false,
        milestone: false,
        startDate: "",
        endDate: "",
        dueDate: "",
        creatorId: 11,
        assigneeId: 11,
      },
      3: {
        id: 25,
        name: "get to heaven",
        description: "upload memory into the cloud",
        completed: false,
        milestone: false,
        startDate: "",
        endDate: "",
        dueDate: "",
        creatorId: 11,
        assigneeId: 11,
      },
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

export const resolvers = {
    Query: {
        launches: () => {
            return [{
                id: 1,
                site: "Cape Canaveral",
                mission: {
                    name: "test 1",
                    missionPatch: "SMALL"
                },
                rocket: {
                    id: 1,
                    name: "Eagle",
                    type: "Booster"
                },
                isBooked: true
            }];
        },
        launch: (id: string) => {
            return {
                id: id,
                site: "Cape Canaveral",
                mission: {
                    name: "test 1",
                    missionPatch: "SMALL"
                },
                rocket: {
                    id: 1,
                    name: "Eagle",
                    type: "Booster"
                },
                isBooked: true
            }
        }
    }
}

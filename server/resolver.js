const resolvers = {
    Query: {
        launches: (ids) => {
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
        }
    }
}

module.exports = resolvers;

var fbMocks = {};

fbMocks.tournamentCurrent = {
    TournamentId: 1,
    name: "Torneo Fifa 15 - 16"
};

fbMocks.tournamentMatches = [
    {
        date: "2015-11-09",
        matches: [
            {
                MatchId: 1,
                date: "2015-11-09",
                played: true,
                Players: [
                    {
                        UserId: 1,
                        name: "Frederic Peña",
                        teamName: "Brasil",
                        teamFlag: "br",
                        score: 0
                    }, {
                        UserId: 2,
                        name: "Juan Perez",
                        teamName: "Alemania",
                        teamFlag: "de",
                        score: 5
                    }
                ]
            }, {
                MatchId: 2,
                date: "2015-11-09",
                played: true,
                Players: [
                    {
                        UserId: 1,
                        name: "Frederic Peña",
                        teamName: "Alemania",
                        teamFlag: "de",
                        score: 2
                    }, {
                        UserId: 2,
                        name: "Juan Perez",
                        teamName: "USA",
                        teamFlag: "us",
                        score: 1
                    }
                ]
            }
        ]
    }, {
        date: "2015-11-10",
        matches: [
            {
                MatchId: 3,
                date: "2015-11-10",
                played: true,
                Players: [
                    {
                        UserId: 1,
                        name: "Frederic Peña",
                        teamName: "Colombia",
                        teamFlag: "co",
                        score: 0
                    }, {
                        UserId: 2,
                        name: "Juan Perez",
                        teamName: "Ecuador",
                        teamFlag: "ec",
                        score: 5
                    }
                ]
            }
        ]
    }, {
        date: "2015-11-11",
        matches: [
            {
                MatchId: 4,
                date: "2015-11-11",
                played: true,
                Players: [
                    {
                        UserId: 1,
                        name: "Frederic Peña",
                        teamName: "Portugal",
                        teamFlag: "pt",
                        score: 0
                    }, {
                        UserId: 2,
                        name: "Juan Perez",
                        teamName: "Honduras",
                        teamFlag: "hn",
                        score: 5
                    }
                ]
            }
        ]
    }
];
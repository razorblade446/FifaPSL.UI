var fbMocks = {};

fbMocks.playerListStatistics = [
    {
        UserId: 1,
        name: "Frederic Peña",
        games_played:   8,
        games_won:      6,
        games_draw:     1,
        games_lost:     1,
        points:         19,
        average:        0.73
    },
    {
        UserId: 2,
        name: "Diego Bonilla",
        games_played:   8,
        games_won:      4,
        games_draw:     2,
        games_lost:     2,
        points:         14,
        average:        0.61
    },
    {
        UserId: 3,
        name: "Juan Perez",
        games_played:   7,
        games_won:      1,
        games_draw:     1,
        games_lost:     5,
        points:         4,
        average:        0.17
    }
];

fbMocks.tournamentCurrent = {
    TournamentId: 1,
    name: "Torneo Fifa 15 - 16"
};

fbMocks.tournamentList = [
    fbMocks.tournamentCurrent
];

fbMocks.tournamentMatches = [
    {
        date: "2015-11-09",
        matches: [
            {
                MatchId: 1,
                date: "2015-11-09T12:00:00",
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
                date: "2015-11-09T12:20:00",
                played: false,
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
                date: "2015-11-10T13:00:00",
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
                date: "2015-11-11T13:20:00",
                played: false,
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
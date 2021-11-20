export class SinglesMatch {
	"ID": string;
	"Tournament_ID": string;
	"StartTime": string;
	"EndTime": string;
	"Player1": SinglesTeam;
	"Player2": SinglesTeam;
	"TossWinner": string;
	"Category": string;
	"GameMoves": MatchData[];
}
export class DoublesMatch {
	"ID": string;
	"Tournament_ID": string;
	"StartTime": string;
	"EndTime": string;
	"Player1": DoublesTeam;
	"Player2": DoublesTeam;
	"TossWinner": string;
	"Category": string;
	"GameMoves": MatchData[];
  }
  
  export class SinglesTeam {
	"TeamName": string;
	"player1_ID": number;
	"player1_Name": string;
	"player2_ID": number;
	"player2_Name": string;
  }

  export class DoublesTeam {
	"TeamName": string;
	"player1_ID": number;
	"player1_Name": string;
	"player2_ID": number;
	"player2_Name": string;
  }
  
  export class MatchData {
	"LeftTopPlayer": string;
	"LeftBottomPlayer": string;
	"RightTopPlayer": string;
	"RightBottomPlayer": string;
	"Team1Score": number;
	"Team2Score": number;
	"ServeBox": string;
  }
  

//   let Matches = [
// 	{
// 	  ID: "1",
// 	  Tournament_ID: "2",
// 	  StartTime: "2013-03-11 11:35:24",
// 	  EndTime: "2013-03-11 11:35:24",
// 	  Team1: {
// 		TeamName: "Team A",
// 		player1_ID: 1,
// 		player1_Name: "Midhun",
// 		player2_ID: 2,
// 		player2_Name: "Anil",
// 	  },
// 	  Team2: {
// 		TeamName: "Team B",
// 		player1_ID: 3,
// 		player1_Name: "Chandru",
// 		player2_ID: 4,
// 		player2_Name: "Chetan",
// 	  },
// 	  TossWinner: "Team B",
// 	  Category: "Mens Doubles",
// 	  GameMoves: [
// 		{
// 		  LeftTopPlayer: "Midhun",
// 		  LeftBottomPlayer: "Anil",
// 		  RightTopPlayer: "Chandru",
// 		  RightBottomPlayer: "Chetan",
// 		  Team1Score: 0,
// 		  Team2Score: 0,
// 		  ServeBox: "RightTop",
// 		},
// 		{
// 		  LeftTopPlayer: "Midhun",
// 		  LeftBottomPlayer: "Anil",
// 		  RightTopPlayer: "Chetan",
// 		  RightBottomPlayer: "Chandru",
// 		  Team1Score: 0,
// 		  Team2Score: 1,
// 		  ServeBox: "RightBottom",
// 		},
// 	  ],
// 	},
// 	{
// 	  ID: "2",
// 	  Tournament_ID: "2",
// 	  StartTime: "2013-03-11 11:35:24",
// 	  EndTime: "2013-03-11 11:35:24",
// 	  Team1: {
// 		TeamName: "Team B",
// 		player1_ID: 3,
// 		player1_Name: "Chandru",
// 		player2_ID: 4,
// 		player2_Name: "Chetan",
// 	  },
// 	  Team2: {
// 		TeamName: "Team A",
// 		player1_ID: 1,
// 		player1_Name: "Midhun",
// 		player2_ID: 2,
// 		player2_Name: "Anil",
// 	  },
// 	  TossWinner: "",
// 	  Category: "Mens Doubles",
// 	  GameMoves: [
// 		{
// 		  LeftTopPlayer: "",
// 		  LeftBottomPlayer: "",
// 		  RightTopPlayer: "",
// 		  RightBottomPlayer: "",
// 		  Team1Score: 0,
// 		  Team2Score: 0,
// 		  ServeBox: "",
// 		},
// 	  ],
// 	},
//   ];
module.exports = {
	"identification": {
		"conditionId": 1,
		"condition": "OneRobotOneHumanNo3TimeRepeat",
		"description": "The robot will first introduce a word 3 times before the participant will say it."
	},
	"players": [
		{
			"pNumber": 153,
			"name": "player1",
			"realName": "Brandy",
			"type": "human",
			"isLoggedOn": false,
			"position": 0,
			"isPlaying": true,
			"trapList": [],
			"hintList": [],
			"hintWord": []
		},
		{
			"pNumber": -1,
			"name": "player2",
			"realName": "Nao",
			"type": "robot",
			"isLoggedOn": false,
			"position": 0,
			"isPlaying": false,
			"trapList": [],
			"hintList": [],
			"hintWord": [],
			"talk": {
				"acknowledge": [
					"Ok, I'll go to the ?word?!"
				],
				"goTo": "Go to the ?word?!",
				"handMovement": true,
				"lookUpDown": true
			}
		},
		{
			"pNumber": 0,
			"name": "Researcher",
			"realName": "Researcher",
			"type": "researcher",
			"isLoggedOn": false,
			"trapList": [],
			"hintList": [],
			"hintWord": []
		}
	],
	"levels": {
		"tutorial": {
			"type": "single",
			"network": [
				{
					"next": 0,
					"transmitter": "player1",
					"receiver": "player2"
				}
			],
			"fields": [
				{
					"playerName": "player1",
					"trapList": [
						{
							"position": [
								0,
								0
							],
							"name": "clothes"
						},
						{
							"position": [
								0,
								1
							],
							"name": "mouse"
						},
						{
							"position": [
								0,
								2
							],
							"name": "clothes"
						},
						{
							"position": [
								0,
								3
							],
							"name": "RAM"
						},
						{
							"position": [
								0,
								4
							],
							"name": "marijuana"
						},
						{
							"position": [
								0,
								5
							],
							"name": "barrels"
						},
						{
							"position": [
								0,
								6
							],
							"name": "factory"
						},
						{
							"position": [
								0,
								7
							],
							"name": "rabbit"
						},
						{
							"position": [
								0,
								8
							],
							"name": "cart"
						},
						{
							"position": [
								0,
								9
							],
							"name": "frog"
						},
						{
							"position": [
								1,
								0
							],
							"name": "ship"
						},
						{
							"position": [
								1,
								1
							],
							"name": "pigeon"
						},
						{
							"position": [
								1,
								2
							],
							"name": "priest"
						},
						{
							"position": [
								1,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								1,
								4
							],
							"name": "rabbit"
						},
						{
							"position": [
								1,
								5
							],
							"name": "woman"
						},
						{
							"position": [
								1,
								6
							],
							"name": "drugs"
						},
						{
							"position": [
								1,
								7
							],
							"name": "graves"
						},
						{
							"position": [
								1,
								8
							],
							"name": "eraser"
						},
						{
							"position": [
								1,
								9
							],
							"name": "hen"
						},
						{
							"position": [
								2,
								0
							],
							"name": "flag"
						},
						{
							"position": [
								2,
								1
							],
							"name": "bench"
						},
						{
							"position": [
								2,
								2
							],
							"name": "referee"
						},
						{
							"position": [
								2,
								3
							],
							"name": "cross"
						},
						{
							"position": [
								2,
								4
							],
							"name": "parking_spot"
						},
						{
							"position": [
								2,
								5
							],
							"name": "road"
						},
						{
							"position": [
								2,
								6
							],
							"name": "church"
						},
						{
							"position": [
								2,
								7
							],
							"name": "referee"
						},
						{
							"position": [
								2,
								8
							],
							"name": "drugs"
						},
						{
							"position": [
								2,
								9
							],
							"name": "mouse"
						},
						{
							"position": [
								3,
								0
							],
							"name": "Q45"
						},
						{
							"position": [
								3,
								1
							],
							"name": "rave"
						},
						{
							"position": [
								3,
								2
							],
							"name": "beetle"
						},
						{
							"position": [
								3,
								3
							],
							"name": "programmer"
						},
						{
							"position": [
								3,
								4
							],
							"name": "mouse"
						},
						{
							"position": [
								3,
								5
							],
							"name": "people"
						},
						{
							"position": [
								3,
								6
							],
							"name": "ocean"
						},
						{
							"position": [
								3,
								7
							],
							"name": "hen"
						},
						{
							"position": [
								3,
								8
							],
							"name": "pipe"
						},
						{
							"position": [
								3,
								9
							],
							"name": "priest"
						},
						{
							"position": [
								4,
								0
							],
							"name": "floppy"
						},
						{
							"position": [
								4,
								1
							],
							"name": "soldier"
						},
						{
							"position": [
								4,
								2
							],
							"name": "rabbit"
						},
						{
							"position": [
								4,
								3
							],
							"name": "beach"
						},
						{
							"position": [
								4,
								4
							],
							"name": "router"
						},
						{
							"position": [
								4,
								5
							],
							"name": "artist"
						},
						{
							"position": [
								4,
								6
							],
							"name": "tree"
						},
						{
							"position": [
								4,
								7
							],
							"name": "fireplace"
						},
						{
							"position": [
								4,
								8
							],
							"name": "beetle"
						},
						{
							"position": [
								4,
								9
							],
							"name": "eraser"
						},
						{
							"position": [
								5,
								0
							],
							"name": "mouse"
						},
						{
							"position": [
								5,
								1
							],
							"name": "robot"
						},
						{
							"position": [
								5,
								2
							],
							"name": "road"
						},
						{
							"position": [
								5,
								3
							],
							"name": "church"
						},
						{
							"position": [
								5,
								4
							],
							"name": "house"
						},
						{
							"position": [
								5,
								5
							],
							"name": "doctor"
						},
						{
							"position": [
								5,
								6
							],
							"name": "pipe"
						},
						{
							"position": [
								5,
								7
							],
							"name": "cave"
						},
						{
							"position": [
								5,
								8
							],
							"name": "factory"
						},
						{
							"position": [
								5,
								9
							],
							"name": "dunes"
						}
					],
					"hintList": [
						[
							0,
							0
						],
						[
							1,
							1
						],
						[
							2,
							1
						],
						[
							2,
							2
						],
						[
							2,
							3
						],
						[
							2,
							4
						],
						[
							2,
							5
						],
						[
							2,
							6
						],
						[
							2,
							7
						],
						[
							3,
							8
						],
						[
							4,
							7
						],
						[
							4,
							6
						],
						[
							4,
							5
						],
						[
							4,
							4
						],
						[
							4,
							3
						],
						[
							4,
							2
						],
						[
							4,
							1
						],
						[
							5,
							1
						]
					],
					"hintWord": [
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						null
					]
				},
				{
					"playerName": "player2",
					"trapList": [
						{
							"position": [
								0,
								0
							],
							"name": "snack"
						},
						{
							"position": [
								0,
								1
							],
							"name": "sphere"
						},
						{
							"position": [
								0,
								2
							],
							"name": "ocean"
						},
						{
							"position": [
								0,
								3
							],
							"name": "cart"
						},
						{
							"position": [
								0,
								4
							],
							"name": "peach"
						},
						{
							"position": [
								0,
								5
							],
							"name": "money"
						},
						{
							"position": [
								0,
								6
							],
							"name": "woman"
						},
						{
							"position": [
								0,
								7
							],
							"name": "baby"
						},
						{
							"position": [
								0,
								8
							],
							"name": "cross"
						},
						{
							"position": [
								0,
								9
							],
							"name": "beach"
						},
						{
							"position": [
								1,
								0
							],
							"name": "boot"
						},
						{
							"position": [
								1,
								1
							],
							"name": "ocean"
						},
						{
							"position": [
								1,
								2
							],
							"name": "runners"
						},
						{
							"position": [
								1,
								3
							],
							"name": "bench"
						},
						{
							"position": [
								1,
								4
							],
							"name": "door"
						},
						{
							"position": [
								1,
								5
							],
							"name": "soldier"
						},
						{
							"position": [
								1,
								6
							],
							"name": "Q60"
						},
						{
							"position": [
								1,
								7
							],
							"name": "frog"
						},
						{
							"position": [
								1,
								8
							],
							"name": "touchpad"
						},
						{
							"position": [
								1,
								9
							],
							"name": "road"
						},
						{
							"position": [
								2,
								0
							],
							"name": "Q45"
						},
						{
							"position": [
								2,
								1
							],
							"name": "baby"
						},
						{
							"position": [
								2,
								2
							],
							"name": "barrels"
						},
						{
							"position": [
								2,
								3
							],
							"name": "frog"
						},
						{
							"position": [
								2,
								4
							],
							"name": "berries"
						},
						{
							"position": [
								2,
								5
							],
							"name": "ship"
						},
						{
							"position": [
								2,
								6
							],
							"name": "man"
						},
						{
							"position": [
								2,
								7
							],
							"name": "cop"
						},
						{
							"position": [
								2,
								8
							],
							"name": "boot"
						},
						{
							"position": [
								2,
								9
							],
							"name": "flower"
						},
						{
							"position": [
								3,
								0
							],
							"name": "cave"
						},
						{
							"position": [
								3,
								1
							],
							"name": "runners"
						},
						{
							"position": [
								3,
								2
							],
							"name": "videogame"
						},
						{
							"position": [
								3,
								3
							],
							"name": "athlete"
						},
						{
							"position": [
								3,
								4
							],
							"name": "dog"
						},
						{
							"position": [
								3,
								5
							],
							"name": "microbes"
						},
						{
							"position": [
								3,
								6
							],
							"name": "mouse"
						},
						{
							"position": [
								3,
								7
							],
							"name": "gun"
						},
						{
							"position": [
								3,
								8
							],
							"name": "frog"
						},
						{
							"position": [
								3,
								9
							],
							"name": "hen"
						},
						{
							"position": [
								4,
								0
							],
							"name": "kids"
						},
						{
							"position": [
								4,
								1
							],
							"name": "tree"
						},
						{
							"position": [
								4,
								2
							],
							"name": "eraser"
						},
						{
							"position": [
								4,
								3
							],
							"name": "thief"
						},
						{
							"position": [
								4,
								4
							],
							"name": "branch"
						},
						{
							"position": [
								4,
								5
							],
							"name": "cleaner"
						},
						{
							"position": [
								4,
								6
							],
							"name": "wine"
						},
						{
							"position": [
								4,
								7
							],
							"name": "parking_spot"
						},
						{
							"position": [
								4,
								8
							],
							"name": "sink"
						},
						{
							"position": [
								4,
								9
							],
							"name": "recycling"
						},
						{
							"position": [
								5,
								0
							],
							"name": "people"
						},
						{
							"position": [
								5,
								1
							],
							"name": "alligator"
						},
						{
							"position": [
								5,
								2
							],
							"name": "boot"
						},
						{
							"position": [
								5,
								3
							],
							"name": "factory"
						},
						{
							"position": [
								5,
								4
							],
							"name": "baby"
						},
						{
							"position": [
								5,
								5
							],
							"name": "shoe"
						},
						{
							"position": [
								5,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								5,
								7
							],
							"name": "bench"
						},
						{
							"position": [
								5,
								8
							],
							"name": "cross"
						},
						{
							"position": [
								5,
								9
							],
							"name": "moth"
						}
					],
					"hintList": [
						[
							0,
							0
						],
						[
							1,
							1
						],
						[
							2,
							1
						],
						[
							2,
							2
						],
						[
							2,
							3
						],
						[
							2,
							4
						],
						[
							2,
							5
						],
						[
							2,
							6
						],
						[
							2,
							7
						],
						[
							3,
							8
						],
						[
							4,
							7
						],
						[
							4,
							6
						],
						[
							4,
							5
						],
						[
							4,
							4
						],
						[
							4,
							3
						],
						[
							4,
							2
						],
						[
							4,
							1
						],
						[
							5,
							1
						]
					],
					"hintWord": [
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						null
					]
				}
			]
		},
		"singlePlayer": {
			"type": "single",
			"network": [
				{
					"next": 0,
					"transmitter": "player1",
					"receiver": "player2"
				}
			],
			"fields": [
				{
					"playerName": "player1",
					"trapList": [
						{
							"position": [
								0,
								0
							],
							"name": "rocks"
						},
						{
							"position": [
								0,
								1
							],
							"name": "cross"
						},
						{
							"position": [
								0,
								2
							],
							"name": "violin"
						},
						{
							"position": [
								0,
								3
							],
							"name": "peach"
						},
						{
							"position": [
								0,
								4
							],
							"name": "computer"
						},
						{
							"position": [
								0,
								5
							],
							"name": "pipe"
						},
						{
							"position": [
								0,
								6
							],
							"name": "branch"
						},
						{
							"position": [
								0,
								7
							],
							"name": "cop"
						},
						{
							"position": [
								0,
								8
							],
							"name": "beach"
						},
						{
							"position": [
								0,
								9
							],
							"name": "plate"
						},
						{
							"position": [
								1,
								0
							],
							"name": "drink"
						},
						{
							"position": [
								1,
								1
							],
							"name": "frog"
						},
						{
							"position": [
								1,
								2
							],
							"name": "Q60"
						},
						{
							"position": [
								1,
								3
							],
							"name": "cattle"
						},
						{
							"position": [
								1,
								4
							],
							"name": "house"
						},
						{
							"position": [
								1,
								5
							],
							"name": "boot"
						},
						{
							"position": [
								1,
								6
							],
							"name": "floppy"
						},
						{
							"position": [
								1,
								7
							],
							"name": "gun"
						},
						{
							"position": [
								1,
								8
							],
							"name": "peach"
						},
						{
							"position": [
								1,
								9
							],
							"name": "eraser"
						},
						{
							"position": [
								2,
								0
							],
							"name": "beach"
						},
						{
							"position": [
								2,
								1
							],
							"name": "snake"
						},
						{
							"position": [
								2,
								2
							],
							"name": "soldier"
						},
						{
							"position": [
								2,
								3
							],
							"name": "runners"
						},
						{
							"position": [
								2,
								4
							],
							"name": "touchpad"
						},
						{
							"position": [
								2,
								5
							],
							"name": "athlete"
						},
						{
							"position": [
								2,
								6
							],
							"name": "dunes"
						},
						{
							"position": [
								2,
								7
							],
							"name": "artist"
						},
						{
							"position": [
								2,
								8
							],
							"name": "canoe"
						},
						{
							"position": [
								2,
								9
							],
							"name": "ocean"
						},
						{
							"position": [
								3,
								0
							],
							"name": "plate"
						},
						{
							"position": [
								3,
								1
							],
							"name": "moth"
						},
						{
							"position": [
								3,
								2
							],
							"name": "woman"
						},
						{
							"position": [
								3,
								3
							],
							"name": "alligator"
						},
						{
							"position": [
								3,
								4
							],
							"name": "bench"
						},
						{
							"position": [
								3,
								5
							],
							"name": "beans"
						},
						{
							"position": [
								3,
								6
							],
							"name": "berries"
						},
						{
							"position": [
								3,
								7
							],
							"name": "axe"
						},
						{
							"position": [
								3,
								8
							],
							"name": "beach"
						},
						{
							"position": [
								3,
								9
							],
							"name": "house"
						},
						{
							"position": [
								4,
								0
							],
							"name": "gun"
						},
						{
							"position": [
								4,
								1
							],
							"name": "violin"
						},
						{
							"position": [
								4,
								2
							],
							"name": "people"
						},
						{
							"position": [
								4,
								3
							],
							"name": "mouse"
						},
						{
							"position": [
								4,
								4
							],
							"name": "berries"
						},
						{
							"position": [
								4,
								5
							],
							"name": "sink"
						},
						{
							"position": [
								4,
								6
							],
							"name": "money"
						},
						{
							"position": [
								4,
								7
							],
							"name": "parking sp"
						},
						{
							"position": [
								4,
								8
							],
							"name": "road"
						},
						{
							"position": [
								4,
								9
							],
							"name": "branch"
						},
						{
							"position": [
								5,
								0
							],
							"name": "rave"
						},
						{
							"position": [
								5,
								1
							],
							"name": "road"
						},
						{
							"position": [
								5,
								2
							],
							"name": "cleaner"
						},
						{
							"position": [
								5,
								3
							],
							"name": "cart"
						},
						{
							"position": [
								5,
								4
							],
							"name": "door"
						},
						{
							"position": [
								5,
								5
							],
							"name": "branch"
						},
						{
							"position": [
								5,
								6
							],
							"name": "alligator"
						},
						{
							"position": [
								5,
								7
							],
							"name": "shoe"
						},
						{
							"position": [
								5,
								8
							],
							"name": "church"
						},
						{
							"position": [
								5,
								9
							],
							"name": "cattle"
						},
						{
							"position": [
								6,
								0
							],
							"name": "dog"
						},
						{
							"position": [
								6,
								1
							],
							"name": "recycling"
						},
						{
							"position": [
								6,
								2
							],
							"name": "wine"
						},
						{
							"position": [
								6,
								3
							],
							"name": "branch"
						},
						{
							"position": [
								6,
								4
							],
							"name": "priest"
						},
						{
							"position": [
								6,
								5
							],
							"name": "knife"
						},
						{
							"position": [
								6,
								6
							],
							"name": "tree"
						},
						{
							"position": [
								6,
								7
							],
							"name": "bench"
						},
						{
							"position": [
								6,
								8
							],
							"name": "branch"
						},
						{
							"position": [
								6,
								9
							],
							"name": "jacket"
						},
						{
							"position": [
								7,
								0
							],
							"name": "rabbit"
						},
						{
							"position": [
								7,
								1
							],
							"name": "berries"
						},
						{
							"position": [
								7,
								2
							],
							"name": "woman"
						},
						{
							"position": [
								7,
								3
							],
							"name": "pigeon"
						},
						{
							"position": [
								7,
								4
							],
							"name": "cleaner"
						},
						{
							"position": [
								7,
								5
							],
							"name": "beetle"
						},
						{
							"position": [
								7,
								6
							],
							"name": "dirt"
						},
						{
							"position": [
								7,
								7
							],
							"name": "beach"
						},
						{
							"position": [
								7,
								8
							],
							"name": "thief"
						},
						{
							"position": [
								7,
								9
							],
							"name": "sphere"
						},
						{
							"position": [
								8,
								0
							],
							"name": "drugs"
						},
						{
							"position": [
								8,
								1
							],
							"name": "Q60"
						},
						{
							"position": [
								8,
								2
							],
							"name": "doctor"
						},
						{
							"position": [
								8,
								3
							],
							"name": "drugs"
						},
						{
							"position": [
								8,
								4
							],
							"name": "plate"
						},
						{
							"position": [
								8,
								5
							],
							"name": "dog"
						},
						{
							"position": [
								8,
								6
							],
							"name": "drink"
						},
						{
							"position": [
								8,
								7
							],
							"name": "router"
						},
						{
							"position": [
								8,
								8
							],
							"name": "kids"
						},
						{
							"position": [
								8,
								9
							],
							"name": "bench"
						},
						{
							"position": [
								9,
								0
							],
							"name": "parking_sp"
						},
						{
							"position": [
								9,
								1
							],
							"name": "dirt"
						},
						{
							"position": [
								9,
								2
							],
							"name": "gun"
						},
						{
							"position": [
								9,
								3
							],
							"name": "cleaner"
						},
						{
							"position": [
								9,
								4
							],
							"name": "socket"
						},
						{
							"position": [
								9,
								5
							],
							"name": "money"
						},
						{
							"position": [
								9,
								6
							],
							"name": "house"
						},
						{
							"position": [
								9,
								7
							],
							"name": "church"
						},
						{
							"position": [
								9,
								8
							],
							"name": "cart"
						},
						{
							"position": [
								9,
								9
							],
							"name": "touchpad"
						},
						{
							"position": [
								10,
								0
							],
							"name": "axe"
						},
						{
							"position": [
								10,
								1
							],
							"name": "pipe"
						},
						{
							"position": [
								10,
								2
							],
							"name": "hen"
						},
						{
							"position": [
								10,
								3
							],
							"name": "ship"
						},
						{
							"position": [
								10,
								4
							],
							"name": "cattle"
						},
						{
							"position": [
								10,
								5
							],
							"name": "cook"
						},
						{
							"position": [
								10,
								6
							],
							"name": "fireplace"
						},
						{
							"position": [
								10,
								7
							],
							"name": "alligator"
						},
						{
							"position": [
								10,
								8
							],
							"name": "socket"
						},
						{
							"position": [
								10,
								9
							],
							"name": "plate"
						},
						{
							"position": [
								11,
								0
							],
							"name": "athlete"
						},
						{
							"position": [
								11,
								1
							],
							"name": "plate"
						},
						{
							"position": [
								11,
								2
							],
							"name": "shoe"
						},
						{
							"position": [
								11,
								3
							],
							"name": "soldier"
						},
						{
							"position": [
								11,
								4
							],
							"name": "branch"
						},
						{
							"position": [
								11,
								5
							],
							"name": "berries"
						},
						{
							"position": [
								11,
								6
							],
							"name": "microbes"
						},
						{
							"position": [
								11,
								7
							],
							"name": "cook"
						},
						{
							"position": [
								11,
								8
							],
							"name": "barrels"
						},
						{
							"position": [
								11,
								9
							],
							"name": "robot"
						},
						{
							"position": [
								12,
								0
							],
							"name": "beach"
						},
						{
							"position": [
								12,
								1
							],
							"name": "touchpad"
						},
						{
							"position": [
								12,
								2
							],
							"name": "ocean"
						},
						{
							"position": [
								12,
								3
							],
							"name": "router"
						},
						{
							"position": [
								12,
								4
							],
							"name": "runners"
						},
						{
							"position": [
								12,
								5
							],
							"name": "referee"
						},
						{
							"position": [
								12,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								7
							],
							"name": "frog"
						},
						{
							"position": [
								12,
								8
							],
							"name": "pigeon"
						},
						{
							"position": [
								12,
								9
							],
							"name": "ship"
						},
						{
							"position": [
								13,
								0
							],
							"name": "floppy"
						},
						{
							"position": [
								13,
								1
							],
							"name": "alligator"
						},
						{
							"position": [
								13,
								2
							],
							"name": "bench"
						},
						{
							"position": [
								13,
								3
							],
							"name": "hen"
						},
						{
							"position": [
								13,
								4
							],
							"name": "cave"
						},
						{
							"position": [
								13,
								5
							],
							"name": "canoe"
						},
						{
							"position": [
								13,
								6
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								13,
								7
							],
							"name": "eraser"
						},
						{
							"position": [
								13,
								8
							],
							"name": "parking_sp"
						},
						{
							"position": [
								13,
								9
							],
							"name": "sphere"
						},
						{
							"position": [
								14,
								0
							],
							"name": "rave"
						},
						{
							"position": [
								14,
								1
							],
							"name": "runners"
						},
						{
							"position": [
								14,
								2
							],
							"name": "cross"
						},
						{
							"position": [
								14,
								3
							],
							"name": "RAM"
						},
						{
							"position": [
								14,
								4
							],
							"name": "fireplace"
						},
						{
							"position": [
								14,
								5
							],
							"name": "RAM"
						},
						{
							"position": [
								14,
								6
							],
							"name": "king"
						},
						{
							"position": [
								14,
								7
							],
							"name": "drugs"
						},
						{
							"position": [
								14,
								8
							],
							"name": "shoe"
						},
						{
							"position": [
								14,
								9
							],
							"name": "couch"
						}
					],
					"hintList": [
						[
							1,
							1
						],
						[
							2,
							1
						],
						[
							2,
							2
						],
						[
							2,
							3
						],
						[
							2,
							4
						],
						[
							2,
							5
						],
						[
							2,
							6
						],
						[
							2,
							7
						],
						[
							3,
							8
						],
						[
							4,
							1
						],
						[
							4,
							2
						],
						[
							4,
							3
						],
						[
							4,
							4
						],
						[
							4,
							5
						],
						[
							4,
							6
						],
						[
							4,
							7
						],
						[
							5,
							1
						],
						[
							6,
							1
						],
						[
							6,
							2
						],
						[
							6,
							3
						],
						[
							6,
							4
						],
						[
							6,
							5
						],
						[
							6,
							6
						],
						[
							6,
							7
						],
						[
							7,
							8
						],
						[
							8,
							1
						],
						[
							8,
							2
						],
						[
							8,
							3
						],
						[
							8,
							4
						],
						[
							8,
							5
						],
						[
							8,
							6
						],
						[
							8,
							7
						],
						[
							9,
							1
						],
						[
							10,
							1
						],
						[
							10,
							2
						],
						[
							10,
							3
						],
						[
							10,
							4
						],
						[
							10,
							5
						],
						[
							10,
							6
						],
						[
							10,
							7
						],
						[
							11,
							8
						],
						[
							12,
							5
						],
						[
							12,
							6
						],
						[
							12,
							7
						]
					],
					"hintWord": [
						[
							"NA",
							"NA"
						],
						[
							"serpent",
							"snake"
						],
						[
							"gunman",
							"soldier"
						],
						[
							"NA",
							"NA"
						],
						[
							"touchscreen",
							"tablet"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"artist",
							"painter"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"people",
							"crowd"
						],
						[
							"mouse",
							"rat"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"money",
							"coins"
						],
						[
							"NA",
							"NA"
						],
						[
							"avenue",
							"highway"
						],
						[
							"recycling bin",
							"rubbish bin"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"pastor",
							"priest"
						],
						[
							"knife",
							"dagger"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"robber",
							"thief"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"drugs",
							"medicine"
						],
						[
							"NA",
							"NA"
						],
						[
							"wolf",
							"dog"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"sand",
							"gravel"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"ship",
							"boat"
						],
						[
							"cattle",
							"cows"
						],
						[
							"cook",
							"chef"
						],
						[
							"NA",
							"NA"
						],
						[
							"crocodile",
							"alligator"
						],
						[
							"beehive",
							"drum",
							"shield"
						],
						[
							"icon",
							"lottery ticket",
							"lotto",
							"lucky number",
							"person",
							"referee",
							"ticket",
							"winner",
							"winning ticket"
						],
						[
							"laptop"
						],
						[
							"frog",
							"kermit",
							"retile",
							"toad"
						]
					]
				},
				{
					"playerName": "player2",
					"trapList": [
						{
							"position": [
								0,
								0
							],
							"name": "ship"
						},
						{
							"position": [
								0,
								1
							],
							"name": "boot"
						},
						{
							"position": [
								0,
								2
							],
							"name": "cop"
						},
						{
							"position": [
								0,
								3
							],
							"name": "router"
						},
						{
							"position": [
								0,
								4
							],
							"name": "hen"
						},
						{
							"position": [
								0,
								5
							],
							"name": "peach"
						},
						{
							"position": [
								0,
								6
							],
							"name": "cart"
						},
						{
							"position": [
								0,
								7
							],
							"name": "drugs"
						},
						{
							"position": [
								0,
								8
							],
							"name": "ocean"
						},
						{
							"position": [
								0,
								9
							],
							"name": "axe"
						},
						{
							"position": [
								1,
								0
							],
							"name": "branch"
						},
						{
							"position": [
								1,
								1
							],
							"name": "frog"
						},
						{
							"position": [
								1,
								2
							],
							"name": "videogame"
						},
						{
							"position": [
								1,
								3
							],
							"name": "drugs"
						},
						{
							"position": [
								1,
								4
							],
							"name": "snake"
						},
						{
							"position": [
								1,
								5
							],
							"name": "berries"
						},
						{
							"position": [
								1,
								6
							],
							"name": "computer"
						},
						{
							"position": [
								1,
								7
							],
							"name": "alligator"
						},
						{
							"position": [
								1,
								8
							],
							"name": "rave"
						},
						{
							"position": [
								1,
								9
							],
							"name": "kids"
						},
						{
							"position": [
								2,
								0
							],
							"name": "beetle"
						},
						{
							"position": [
								2,
								1
							],
							"name": "snake"
						},
						{
							"position": [
								2,
								2
							],
							"name": "soldier"
						},
						{
							"position": [
								2,
								3
							],
							"name": "runners"
						},
						{
							"position": [
								2,
								4
							],
							"name": "touchpad"
						},
						{
							"position": [
								2,
								5
							],
							"name": "athlete"
						},
						{
							"position": [
								2,
								6
							],
							"name": "dunes"
						},
						{
							"position": [
								2,
								7
							],
							"name": "artist"
						},
						{
							"position": [
								2,
								8
							],
							"name": "artist"
						},
						{
							"position": [
								2,
								9
							],
							"name": "boot"
						},
						{
							"position": [
								3,
								0
							],
							"name": "marijuana"
						},
						{
							"position": [
								3,
								1
							],
							"name": "beach"
						},
						{
							"position": [
								3,
								2
							],
							"name": "soldier"
						},
						{
							"position": [
								3,
								3
							],
							"name": "videogame"
						},
						{
							"position": [
								3,
								4
							],
							"name": "violin"
						},
						{
							"position": [
								3,
								5
							],
							"name": "bat"
						},
						{
							"position": [
								3,
								6
							],
							"name": "flag"
						},
						{
							"position": [
								3,
								7
							],
							"name": "factory"
						},
						{
							"position": [
								3,
								8
							],
							"name": "beach"
						},
						{
							"position": [
								3,
								9
							],
							"name": "videogame"
						},
						{
							"position": [
								4,
								0
							],
							"name": "eraser"
						},
						{
							"position": [
								4,
								1
							],
							"name": "violin"
						},
						{
							"position": [
								4,
								2
							],
							"name": "people"
						},
						{
							"position": [
								4,
								3
							],
							"name": "mouse"
						},
						{
							"position": [
								4,
								4
							],
							"name": "berries"
						},
						{
							"position": [
								4,
								5
							],
							"name": "sink"
						},
						{
							"position": [
								4,
								6
							],
							"name": "money"
						},
						{
							"position": [
								4,
								7
							],
							"name": "parking sp"
						},
						{
							"position": [
								4,
								8
							],
							"name": "couch"
						},
						{
							"position": [
								4,
								9
							],
							"name": "cop"
						},
						{
							"position": [
								5,
								0
							],
							"name": "peach"
						},
						{
							"position": [
								5,
								1
							],
							"name": "road"
						},
						{
							"position": [
								5,
								2
							],
							"name": "priest"
						},
						{
							"position": [
								5,
								3
							],
							"name": "man"
						},
						{
							"position": [
								5,
								4
							],
							"name": "city"
						},
						{
							"position": [
								5,
								5
							],
							"name": "boot"
						},
						{
							"position": [
								5,
								6
							],
							"name": "bat"
						},
						{
							"position": [
								5,
								7
							],
							"name": "woman"
						},
						{
							"position": [
								5,
								8
							],
							"name": "pipe"
						},
						{
							"position": [
								5,
								9
							],
							"name": "boot"
						},
						{
							"position": [
								6,
								0
							],
							"name": "wine"
						},
						{
							"position": [
								6,
								1
							],
							"name": "recycling"
						},
						{
							"position": [
								6,
								2
							],
							"name": "wine"
						},
						{
							"position": [
								6,
								3
							],
							"name": "branch"
						},
						{
							"position": [
								6,
								4
							],
							"name": "priest"
						},
						{
							"position": [
								6,
								5
							],
							"name": "knife"
						},
						{
							"position": [
								6,
								6
							],
							"name": "tree"
						},
						{
							"position": [
								6,
								7
							],
							"name": "bench"
						},
						{
							"position": [
								6,
								8
							],
							"name": "dunes"
						},
						{
							"position": [
								6,
								9
							],
							"name": "bench"
						},
						{
							"position": [
								7,
								0
							],
							"name": "cop"
						},
						{
							"position": [
								7,
								1
							],
							"name": "snake"
						},
						{
							"position": [
								7,
								2
							],
							"name": "Q45"
						},
						{
							"position": [
								7,
								3
							],
							"name": "snake"
						},
						{
							"position": [
								7,
								4
							],
							"name": "recycling"
						},
						{
							"position": [
								7,
								5
							],
							"name": "sphere"
						},
						{
							"position": [
								7,
								6
							],
							"name": "violin"
						},
						{
							"position": [
								7,
								7
							],
							"name": "people"
						},
						{
							"position": [
								7,
								8
							],
							"name": "thief"
						},
						{
							"position": [
								7,
								9
							],
							"name": "moth"
						},
						{
							"position": [
								8,
								0
							],
							"name": "floppy"
						},
						{
							"position": [
								8,
								1
							],
							"name": "Q60"
						},
						{
							"position": [
								8,
								2
							],
							"name": "doctor"
						},
						{
							"position": [
								8,
								3
							],
							"name": "drugs"
						},
						{
							"position": [
								8,
								4
							],
							"name": "plate"
						},
						{
							"position": [
								8,
								5
							],
							"name": "dog"
						},
						{
							"position": [
								8,
								6
							],
							"name": "drink"
						},
						{
							"position": [
								8,
								7
							],
							"name": "router"
						},
						{
							"position": [
								8,
								8
							],
							"name": "church"
						},
						{
							"position": [
								8,
								9
							],
							"name": "axe"
						},
						{
							"position": [
								9,
								0
							],
							"name": "athlete"
						},
						{
							"position": [
								9,
								1
							],
							"name": "dirt"
						},
						{
							"position": [
								9,
								2
							],
							"name": "berries"
						},
						{
							"position": [
								9,
								3
							],
							"name": "bee"
						},
						{
							"position": [
								9,
								4
							],
							"name": "snake"
						},
						{
							"position": [
								9,
								5
							],
							"name": "thief"
						},
						{
							"position": [
								9,
								6
							],
							"name": "priest"
						},
						{
							"position": [
								9,
								7
							],
							"name": "snake"
						},
						{
							"position": [
								9,
								8
							],
							"name": "beetle"
						},
						{
							"position": [
								9,
								9
							],
							"name": "flower"
						},
						{
							"position": [
								10,
								0
							],
							"name": "alligator"
						},
						{
							"position": [
								10,
								1
							],
							"name": "pipe"
						},
						{
							"position": [
								10,
								2
							],
							"name": "hen"
						},
						{
							"position": [
								10,
								3
							],
							"name": "ship"
						},
						{
							"position": [
								10,
								4
							],
							"name": "cattle"
						},
						{
							"position": [
								10,
								5
							],
							"name": "cook"
						},
						{
							"position": [
								10,
								6
							],
							"name": "fireplace"
						},
						{
							"position": [
								10,
								7
							],
							"name": "alligator"
						},
						{
							"position": [
								10,
								8
							],
							"name": "moth"
						},
						{
							"position": [
								10,
								9
							],
							"name": "axe"
						},
						{
							"position": [
								11,
								0
							],
							"name": "shoe"
						},
						{
							"position": [
								11,
								1
							],
							"name": "floppy"
						},
						{
							"position": [
								11,
								2
							],
							"name": "city"
						},
						{
							"position": [
								11,
								3
							],
							"name": "dog"
						},
						{
							"position": [
								11,
								4
							],
							"name": "ship"
						},
						{
							"position": [
								11,
								5
							],
							"name": "router"
						},
						{
							"position": [
								11,
								6
							],
							"name": "gun"
						},
						{
							"position": [
								11,
								7
							],
							"name": "bee"
						},
						{
							"position": [
								11,
								8
							],
							"name": "barrels"
						},
						{
							"position": [
								11,
								9
							],
							"name": "dog"
						},
						{
							"position": [
								12,
								0
							],
							"name": "beans"
						},
						{
							"position": [
								12,
								1
							],
							"name": "rave"
						},
						{
							"position": [
								12,
								2
							],
							"name": "mouse"
						},
						{
							"position": [
								12,
								3
							],
							"name": "eraser"
						},
						{
							"position": [
								12,
								4
							],
							"name": "robot"
						},
						{
							"position": [
								12,
								5
							],
							"name": "referee"
						},
						{
							"position": [
								12,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								7
							],
							"name": "frog"
						},
						{
							"position": [
								12,
								8
							],
							"name": "soldier"
						},
						{
							"position": [
								12,
								9
							],
							"name": "sphere"
						},
						{
							"position": [
								13,
								0
							],
							"name": "drink"
						},
						{
							"position": [
								13,
								1
							],
							"name": "videogame"
						},
						{
							"position": [
								13,
								2
							],
							"name": "drugs"
						},
						{
							"position": [
								13,
								3
							],
							"name": "rabbit"
						},
						{
							"position": [
								13,
								4
							],
							"name": "money"
						},
						{
							"position": [
								13,
								5
							],
							"name": "touchpad"
						},
						{
							"position": [
								13,
								6
							],
							"name": "shoe"
						},
						{
							"position": [
								13,
								7
							],
							"name": "flag"
						},
						{
							"position": [
								13,
								8
							],
							"name": "cave"
						},
						{
							"position": [
								13,
								9
							],
							"name": "church"
						},
						{
							"position": [
								14,
								0
							],
							"name": "factory"
						},
						{
							"position": [
								14,
								1
							],
							"name": "sink"
						},
						{
							"position": [
								14,
								2
							],
							"name": "socket"
						},
						{
							"position": [
								14,
								3
							],
							"name": "cave"
						},
						{
							"position": [
								14,
								4
							],
							"name": "snake"
						},
						{
							"position": [
								14,
								5
							],
							"name": "videogame"
						},
						{
							"position": [
								14,
								6
							],
							"name": "dog"
						},
						{
							"position": [
								14,
								7
							],
							"name": "eraser"
						},
						{
							"position": [
								14,
								8
							],
							"name": "dog"
						},
						{
							"position": [
								14,
								9
							],
							"name": "priest"
						}
					],
					"hintList": [
						[
							1,
							1
						],
						[
							2,
							1
						],
						[
							2,
							2
						],
						[
							2,
							3
						],
						[
							2,
							4
						],
						[
							2,
							5
						],
						[
							2,
							6
						],
						[
							2,
							7
						],
						[
							3,
							8
						],
						[
							4,
							1
						],
						[
							4,
							2
						],
						[
							4,
							3
						],
						[
							4,
							4
						],
						[
							4,
							5
						],
						[
							4,
							6
						],
						[
							4,
							7
						],
						[
							5,
							1
						],
						[
							6,
							1
						],
						[
							6,
							2
						],
						[
							6,
							3
						],
						[
							6,
							4
						],
						[
							6,
							5
						],
						[
							6,
							6
						],
						[
							6,
							7
						],
						[
							7,
							8
						],
						[
							8,
							1
						],
						[
							8,
							2
						],
						[
							8,
							3
						],
						[
							8,
							4
						],
						[
							8,
							5
						],
						[
							8,
							6
						],
						[
							8,
							7
						],
						[
							9,
							1
						],
						[
							10,
							1
						],
						[
							10,
							2
						],
						[
							10,
							3
						],
						[
							10,
							4
						],
						[
							10,
							5
						],
						[
							10,
							6
						],
						[
							10,
							7
						],
						[
							11,
							8
						],
						[
							12,
							5
						],
						[
							12,
							6
						],
						[
							12,
							7
						]
					],
					"hintWord": [
						[
							"NA",
							"NA"
						],
						[
							"serpent",
							"snake"
						],
						[
							"gunman",
							"soldier"
						],
						[
							"NA",
							"NA"
						],
						[
							"touchscreen",
							"tablet"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"artist",
							"painter"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"people",
							"crowd"
						],
						[
							"mouse",
							"rat"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"money",
							"coins"
						],
						[
							"NA",
							"NA"
						],
						[
							"avenue",
							"highway"
						],
						[
							"recycling bin",
							"rubbish bin"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"pastor",
							"priest"
						],
						[
							"knife",
							"dagger"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"robber",
							"thief"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"drugs",
							"medicine"
						],
						[
							"NA",
							"NA"
						],
						[
							"wolf",
							"dog"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"sand",
							"gravel"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"ship",
							"boat"
						],
						[
							"cattle",
							"cows"
						],
						[
							"cook",
							"chef"
						],
						[
							"NA",
							"NA"
						],
						[
							"crocodile",
							"alligator"
						],
						[
							"beehive",
							"drum",
							"shield"
						],
						[
							"icon",
							"lottery ticket",
							"lotto",
							"lucky number",
							"person",
							"referee",
							"ticket",
							"winner",
							"winning ticket"
						],
						[
							"laptop"
						],
						[
							"frog",
							"kermit",
							"retile",
							"toad"
						]
					]
				}
			]
		},
		"multiPlayerTutorial": {
			"network": [
				{
					"next": 1,
					"transmitter": "player1",
					"receiver": "player2"
				},
				{
					"next": 0,
					"transmitter": "player2",
					"receiver": "player1"
				}
			],
			"fields": [
				{
					"playerName": "player1",
					"trapList": [
						{
							"position": [
								0,
								0
							],
							"name": "clothes"
						},
						{
							"position": [
								0,
								1
							],
							"name": "mouse"
						},
						{
							"position": [
								0,
								2
							],
							"name": "clothes"
						},
						{
							"position": [
								0,
								3
							],
							"name": "RAM"
						},
						{
							"position": [
								0,
								4
							],
							"name": "marijuana"
						},
						{
							"position": [
								0,
								5
							],
							"name": "barrels"
						},
						{
							"position": [
								0,
								6
							],
							"name": "factory"
						},
						{
							"position": [
								0,
								7
							],
							"name": "rabbit"
						},
						{
							"position": [
								0,
								8
							],
							"name": "cart"
						},
						{
							"position": [
								0,
								9
							],
							"name": "frog"
						},
						{
							"position": [
								1,
								0
							],
							"name": "ship"
						},
						{
							"position": [
								1,
								1
							],
							"name": "pigeon"
						},
						{
							"position": [
								1,
								2
							],
							"name": "priest"
						},
						{
							"position": [
								1,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								1,
								4
							],
							"name": "rabbit"
						},
						{
							"position": [
								1,
								5
							],
							"name": "woman"
						},
						{
							"position": [
								1,
								6
							],
							"name": "drugs"
						},
						{
							"position": [
								1,
								7
							],
							"name": "graves"
						},
						{
							"position": [
								1,
								8
							],
							"name": "eraser"
						},
						{
							"position": [
								1,
								9
							],
							"name": "hen"
						},
						{
							"position": [
								2,
								0
							],
							"name": "flag"
						},
						{
							"position": [
								2,
								1
							],
							"name": "bench"
						},
						{
							"position": [
								2,
								2
							],
							"name": "referee"
						},
						{
							"position": [
								2,
								3
							],
							"name": "cross"
						},
						{
							"position": [
								2,
								4
							],
							"name": "parking_spot"
						},
						{
							"position": [
								2,
								5
							],
							"name": "road"
						},
						{
							"position": [
								2,
								6
							],
							"name": "church"
						},
						{
							"position": [
								2,
								7
							],
							"name": "referee"
						},
						{
							"position": [
								2,
								8
							],
							"name": "drugs"
						},
						{
							"position": [
								2,
								9
							],
							"name": "mouse"
						},
						{
							"position": [
								3,
								0
							],
							"name": "Q45"
						},
						{
							"position": [
								3,
								1
							],
							"name": "rave"
						},
						{
							"position": [
								3,
								2
							],
							"name": "beetle"
						},
						{
							"position": [
								3,
								3
							],
							"name": "programmer"
						},
						{
							"position": [
								3,
								4
							],
							"name": "mouse"
						},
						{
							"position": [
								3,
								5
							],
							"name": "people"
						},
						{
							"position": [
								3,
								6
							],
							"name": "ocean"
						},
						{
							"position": [
								3,
								7
							],
							"name": "hen"
						},
						{
							"position": [
								3,
								8
							],
							"name": "pipe"
						},
						{
							"position": [
								3,
								9
							],
							"name": "priest"
						},
						{
							"position": [
								4,
								0
							],
							"name": "floppy"
						},
						{
							"position": [
								4,
								1
							],
							"name": "soldier"
						},
						{
							"position": [
								4,
								2
							],
							"name": "rabbit"
						},
						{
							"position": [
								4,
								3
							],
							"name": "beach"
						},
						{
							"position": [
								4,
								4
							],
							"name": "router"
						},
						{
							"position": [
								4,
								5
							],
							"name": "artist"
						},
						{
							"position": [
								4,
								6
							],
							"name": "tree"
						},
						{
							"position": [
								4,
								7
							],
							"name": "fireplace"
						},
						{
							"position": [
								4,
								8
							],
							"name": "beetle"
						},
						{
							"position": [
								4,
								9
							],
							"name": "eraser"
						},
						{
							"position": [
								5,
								0
							],
							"name": "mouse"
						},
						{
							"position": [
								5,
								1
							],
							"name": "robot"
						},
						{
							"position": [
								5,
								2
							],
							"name": "road"
						},
						{
							"position": [
								5,
								3
							],
							"name": "church"
						},
						{
							"position": [
								5,
								4
							],
							"name": "house"
						},
						{
							"position": [
								5,
								5
							],
							"name": "doctor"
						},
						{
							"position": [
								5,
								6
							],
							"name": "pipe"
						},
						{
							"position": [
								5,
								7
							],
							"name": "cave"
						},
						{
							"position": [
								5,
								8
							],
							"name": "factory"
						},
						{
							"position": [
								5,
								9
							],
							"name": "dunes"
						}
					],
					"hintList": [
						[
							0,
							0
						],
						[
							1,
							1
						],
						[
							2,
							1
						],
						[
							2,
							2
						],
						[
							2,
							3
						],
						[
							2,
							4
						],
						[
							2,
							5
						],
						[
							2,
							6
						],
						[
							2,
							7
						],
						[
							3,
							8
						],
						[
							4,
							7
						],
						[
							4,
							6
						],
						[
							4,
							5
						],
						[
							4,
							4
						],
						[
							4,
							3
						],
						[
							4,
							2
						],
						[
							4,
							1
						],
						[
							5,
							1
						]
					],
					"hintWord": [
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						null
					]
				},
				{
					"playerName": "player2",
					"trapList": [
						{
							"position": [
								0,
								0
							],
							"name": "snack"
						},
						{
							"position": [
								0,
								1
							],
							"name": "sphere"
						},
						{
							"position": [
								0,
								2
							],
							"name": "ocean"
						},
						{
							"position": [
								0,
								3
							],
							"name": "cart"
						},
						{
							"position": [
								0,
								4
							],
							"name": "peach"
						},
						{
							"position": [
								0,
								5
							],
							"name": "money"
						},
						{
							"position": [
								0,
								6
							],
							"name": "woman"
						},
						{
							"position": [
								0,
								7
							],
							"name": "baby"
						},
						{
							"position": [
								0,
								8
							],
							"name": "cross"
						},
						{
							"position": [
								0,
								9
							],
							"name": "beach"
						},
						{
							"position": [
								1,
								0
							],
							"name": "boot"
						},
						{
							"position": [
								1,
								1
							],
							"name": "ocean"
						},
						{
							"position": [
								1,
								2
							],
							"name": "runners"
						},
						{
							"position": [
								1,
								3
							],
							"name": "bench"
						},
						{
							"position": [
								1,
								4
							],
							"name": "door"
						},
						{
							"position": [
								1,
								5
							],
							"name": "soldier"
						},
						{
							"position": [
								1,
								6
							],
							"name": "Q60"
						},
						{
							"position": [
								1,
								7
							],
							"name": "frog"
						},
						{
							"position": [
								1,
								8
							],
							"name": "touchpad"
						},
						{
							"position": [
								1,
								9
							],
							"name": "road"
						},
						{
							"position": [
								2,
								0
							],
							"name": "Q45"
						},
						{
							"position": [
								2,
								1
							],
							"name": "baby"
						},
						{
							"position": [
								2,
								2
							],
							"name": "barrels"
						},
						{
							"position": [
								2,
								3
							],
							"name": "frog"
						},
						{
							"position": [
								2,
								4
							],
							"name": "berries"
						},
						{
							"position": [
								2,
								5
							],
							"name": "ship"
						},
						{
							"position": [
								2,
								6
							],
							"name": "man"
						},
						{
							"position": [
								2,
								7
							],
							"name": "cop"
						},
						{
							"position": [
								2,
								8
							],
							"name": "boot"
						},
						{
							"position": [
								2,
								9
							],
							"name": "flower"
						},
						{
							"position": [
								3,
								0
							],
							"name": "cave"
						},
						{
							"position": [
								3,
								1
							],
							"name": "runners"
						},
						{
							"position": [
								3,
								2
							],
							"name": "videogame"
						},
						{
							"position": [
								3,
								3
							],
							"name": "athlete"
						},
						{
							"position": [
								3,
								4
							],
							"name": "dog"
						},
						{
							"position": [
								3,
								5
							],
							"name": "microbes"
						},
						{
							"position": [
								3,
								6
							],
							"name": "mouse"
						},
						{
							"position": [
								3,
								7
							],
							"name": "gun"
						},
						{
							"position": [
								3,
								8
							],
							"name": "frog"
						},
						{
							"position": [
								3,
								9
							],
							"name": "hen"
						},
						{
							"position": [
								4,
								0
							],
							"name": "kids"
						},
						{
							"position": [
								4,
								1
							],
							"name": "tree"
						},
						{
							"position": [
								4,
								2
							],
							"name": "eraser"
						},
						{
							"position": [
								4,
								3
							],
							"name": "thief"
						},
						{
							"position": [
								4,
								4
							],
							"name": "branch"
						},
						{
							"position": [
								4,
								5
							],
							"name": "cleaner"
						},
						{
							"position": [
								4,
								6
							],
							"name": "wine"
						},
						{
							"position": [
								4,
								7
							],
							"name": "parking_spot"
						},
						{
							"position": [
								4,
								8
							],
							"name": "sink"
						},
						{
							"position": [
								4,
								9
							],
							"name": "recycling"
						},
						{
							"position": [
								5,
								0
							],
							"name": "people"
						},
						{
							"position": [
								5,
								1
							],
							"name": "alligator"
						},
						{
							"position": [
								5,
								2
							],
							"name": "boot"
						},
						{
							"position": [
								5,
								3
							],
							"name": "factory"
						},
						{
							"position": [
								5,
								4
							],
							"name": "baby"
						},
						{
							"position": [
								5,
								5
							],
							"name": "shoe"
						},
						{
							"position": [
								5,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								5,
								7
							],
							"name": "bench"
						},
						{
							"position": [
								5,
								8
							],
							"name": "cross"
						},
						{
							"position": [
								5,
								9
							],
							"name": "moth"
						}
					],
					"hintList": [
						[
							0,
							0
						],
						[
							1,
							1
						],
						[
							2,
							1
						],
						[
							2,
							2
						],
						[
							2,
							3
						],
						[
							2,
							4
						],
						[
							2,
							5
						],
						[
							2,
							6
						],
						[
							2,
							7
						],
						[
							3,
							8
						],
						[
							4,
							7
						],
						[
							4,
							6
						],
						[
							4,
							5
						],
						[
							4,
							4
						],
						[
							4,
							3
						],
						[
							4,
							2
						],
						[
							4,
							1
						],
						[
							5,
							1
						]
					],
					"hintWord": [
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						[
							"next"
						],
						null
					]
				}
			]
		},
		"multiPlayer": {
			"network": [
				{
					"next": 1,
					"transmitter": "player1",
					"receiver": "player2"
				},
				{
					"next": 0,
					"transmitter": "player2",
					"receiver": "player1"
				}
			],
			"fields": [
				{
					"playerName": "player1",
					"trapList": [
						{
							"position": [
								0,
								0
							],
							"name": "mouse"
						},
						{
							"position": [
								0,
								1
							],
							"name": "church"
						},
						{
							"position": [
								0,
								2
							],
							"name": "router"
						},
						{
							"position": [
								0,
								3
							],
							"name": "berries"
						},
						{
							"position": [
								0,
								4
							],
							"name": "socket"
						},
						{
							"position": [
								0,
								5
							],
							"name": "people"
						},
						{
							"position": [
								0,
								6
							],
							"name": "cattle"
						},
						{
							"position": [
								0,
								7
							],
							"name": "king"
						},
						{
							"position": [
								0,
								8
							],
							"name": "priest"
						},
						{
							"position": [
								0,
								9
							],
							"name": "snake"
						},
						{
							"position": [
								1,
								0
							],
							"name": "cross"
						},
						{
							"position": [
								1,
								1
							],
							"name": "drugs"
						},
						{
							"position": [
								1,
								2
							],
							"name": "athlete"
						},
						{
							"position": [
								1,
								3
							],
							"name": "dirt"
						},
						{
							"position": [
								1,
								4
							],
							"name": "robot"
						},
						{
							"position": [
								1,
								5
							],
							"name": "cleaner"
						},
						{
							"position": [
								1,
								6
							],
							"name": "Q60"
						},
						{
							"position": [
								1,
								7
							],
							"name": "rocks"
						},
						{
							"position": [
								1,
								8
							],
							"name": "couch"
						},
						{
							"position": [
								1,
								9
							],
							"name": "gun"
						},
						{
							"position": [
								2,
								0
							],
							"name": "cart"
						},
						{
							"position": [
								2,
								1
							],
							"name": "dog"
						},
						{
							"position": [
								2,
								2
							],
							"name": "priest"
						},
						{
							"position": [
								2,
								3
							],
							"name": "factory"
						},
						{
							"position": [
								2,
								4
							],
							"name": "microbes"
						},
						{
							"position": [
								2,
								5
							],
							"name": "soldier"
						},
						{
							"position": [
								2,
								6
							],
							"name": "baby"
						},
						{
							"position": [
								2,
								7
							],
							"name": "USB"
						},
						{
							"position": [
								2,
								8
							],
							"name": "gun"
						},
						{
							"position": [
								2,
								9
							],
							"name": "rabbit"
						},
						{
							"position": [
								3,
								0
							],
							"name": "videogame"
						},
						{
							"position": [
								3,
								1
							],
							"name": "baby"
						},
						{
							"position": [
								3,
								2
							],
							"name": "kids"
						},
						{
							"position": [
								3,
								3
							],
							"name": "church"
						},
						{
							"position": [
								3,
								4
							],
							"name": "peach"
						},
						{
							"position": [
								3,
								5
							],
							"name": "dirt"
						},
						{
							"position": [
								3,
								6
							],
							"name": "beetle"
						},
						{
							"position": [
								3,
								7
							],
							"name": "pigeon"
						},
						{
							"position": [
								3,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								3,
								9
							],
							"name": "microbes"
						},
						{
							"position": [
								4,
								0
							],
							"name": "dog"
						},
						{
							"position": [
								4,
								1
							],
							"name": "road"
						},
						{
							"position": [
								4,
								2
							],
							"name": "cook"
						},
						{
							"position": [
								4,
								3
							],
							"name": "socket"
						},
						{
							"position": [
								4,
								4
							],
							"name": "Q45"
						},
						{
							"position": [
								4,
								5
							],
							"name": "robot"
						},
						{
							"position": [
								4,
								6
							],
							"name": "city"
						},
						{
							"position": [
								4,
								7
							],
							"name": "dirt"
						},
						{
							"position": [
								4,
								8
							],
							"name": "artist"
						},
						{
							"position": [
								4,
								9
							],
							"name": "flower"
						},
						{
							"position": [
								5,
								0
							],
							"name": "sphere"
						},
						{
							"position": [
								5,
								1
							],
							"name": "recycling"
						},
						{
							"position": [
								5,
								2
							],
							"name": "beetle"
						},
						{
							"position": [
								5,
								3
							],
							"name": "couch"
						},
						{
							"position": [
								5,
								4
							],
							"name": "floppy"
						},
						{
							"position": [
								5,
								5
							],
							"name": "touchpad"
						},
						{
							"position": [
								5,
								6
							],
							"name": "people"
						},
						{
							"position": [
								5,
								7
							],
							"name": "USB"
						},
						{
							"position": [
								5,
								8
							],
							"name": "ocean"
						},
						{
							"position": [
								5,
								9
							],
							"name": "snake"
						},
						{
							"position": [
								6,
								0
							],
							"name": "couch"
						},
						{
							"position": [
								6,
								1
							],
							"name": "boot"
						},
						{
							"position": [
								6,
								2
							],
							"name": "sphere"
						},
						{
							"position": [
								6,
								3
							],
							"name": "people"
						},
						{
							"position": [
								6,
								4
							],
							"name": "church"
						},
						{
							"position": [
								6,
								5
							],
							"name": "ship"
						},
						{
							"position": [
								6,
								6
							],
							"name": "couch"
						},
						{
							"position": [
								6,
								7
							],
							"name": "house"
						},
						{
							"position": [
								6,
								8
							],
							"name": "cross"
						},
						{
							"position": [
								6,
								9
							],
							"name": "tree"
						},
						{
							"position": [
								7,
								0
							],
							"name": "dirt"
						},
						{
							"position": [
								7,
								1
							],
							"name": "marijuana"
						},
						{
							"position": [
								7,
								2
							],
							"name": "berries"
						},
						{
							"position": [
								7,
								3
							],
							"name": "shoe"
						},
						{
							"position": [
								7,
								4
							],
							"name": "baby"
						},
						{
							"position": [
								7,
								5
							],
							"name": "violin"
						},
						{
							"position": [
								7,
								6
							],
							"name": "cattle"
						},
						{
							"position": [
								7,
								7
							],
							"name": "baby"
						},
						{
							"position": [
								7,
								8
							],
							"name": "alligator"
						},
						{
							"position": [
								7,
								9
							],
							"name": "sink"
						},
						{
							"position": [
								8,
								0
							],
							"name": "cup"
						},
						{
							"position": [
								8,
								1
							],
							"name": "king"
						},
						{
							"position": [
								8,
								2
							],
							"name": "rabbit"
						},
						{
							"position": [
								8,
								3
							],
							"name": "thief"
						},
						{
							"position": [
								8,
								4
							],
							"name": "mouse"
						},
						{
							"position": [
								8,
								5
							],
							"name": "cattle"
						},
						{
							"position": [
								8,
								6
							],
							"name": "marijuana"
						},
						{
							"position": [
								8,
								7
							],
							"name": "artist"
						},
						{
							"position": [
								8,
								8
							],
							"name": "man"
						},
						{
							"position": [
								8,
								9
							],
							"name": "drugs"
						},
						{
							"position": [
								9,
								0
							],
							"name": "marijuana"
						},
						{
							"position": [
								9,
								1
							],
							"name": "touchpad"
						},
						{
							"position": [
								9,
								2
							],
							"name": "mouse"
						},
						{
							"position": [
								9,
								3
							],
							"name": "sphere"
						},
						{
							"position": [
								9,
								4
							],
							"name": "shoe"
						},
						{
							"position": [
								9,
								5
							],
							"name": "baby"
						},
						{
							"position": [
								9,
								6
							],
							"name": "computer"
						},
						{
							"position": [
								9,
								7
							],
							"name": "socket"
						},
						{
							"position": [
								9,
								8
							],
							"name": "plate"
						},
						{
							"position": [
								9,
								9
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								10,
								0
							],
							"name": "bench"
						},
						{
							"position": [
								10,
								1
							],
							"name": "cup"
						},
						{
							"position": [
								10,
								2
							],
							"name": "snake"
						},
						{
							"position": [
								10,
								3
							],
							"name": "moth"
						},
						{
							"position": [
								10,
								4
							],
							"name": "knife"
						},
						{
							"position": [
								10,
								5
							],
							"name": "money"
						},
						{
							"position": [
								10,
								6
							],
							"name": "teacher"
						},
						{
							"position": [
								10,
								7
							],
							"name": "woman"
						},
						{
							"position": [
								10,
								8
							],
							"name": "Q45"
						},
						{
							"position": [
								10,
								9
							],
							"name": "cross"
						},
						{
							"position": [
								11,
								0
							],
							"name": "king"
						},
						{
							"position": [
								11,
								1
							],
							"name": "floppy"
						},
						{
							"position": [
								11,
								2
							],
							"name": "road"
						},
						{
							"position": [
								11,
								3
							],
							"name": "teacher"
						},
						{
							"position": [
								11,
								4
							],
							"name": "bench"
						},
						{
							"position": [
								11,
								5
							],
							"name": "bat"
						},
						{
							"position": [
								11,
								6
							],
							"name": "runners"
						},
						{
							"position": [
								11,
								7
							],
							"name": "mouse"
						},
						{
							"position": [
								11,
								8
							],
							"name": "knife"
						},
						{
							"position": [
								11,
								9
							],
							"name": "man"
						},
						{
							"position": [
								12,
								0
							],
							"name": "fireplace"
						},
						{
							"position": [
								12,
								1
							],
							"name": "city"
						},
						{
							"position": [
								12,
								2
							],
							"name": "couch"
						},
						{
							"position": [
								12,
								3
							],
							"name": "money"
						},
						{
							"position": [
								12,
								4
							],
							"name": "Q45"
						},
						{
							"position": [
								12,
								5
							],
							"name": "teacher"
						},
						{
							"position": [
								12,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								7
							],
							"name": "thief"
						},
						{
							"position": [
								12,
								8
							],
							"name": "pigeon"
						},
						{
							"position": [
								12,
								9
							],
							"name": "cave"
						},
						{
							"position": [
								13,
								0
							],
							"name": "recycling"
						},
						{
							"position": [
								13,
								1
							],
							"name": "rabbit"
						},
						{
							"position": [
								13,
								2
							],
							"name": "thief"
						},
						{
							"position": [
								13,
								3
							],
							"name": "gun"
						},
						{
							"position": [
								13,
								4
							],
							"name": "factory"
						},
						{
							"position": [
								13,
								5
							],
							"name": "violin"
						},
						{
							"position": [
								13,
								6
							],
							"name": "recycling"
						},
						{
							"position": [
								13,
								7
							],
							"name": "hen"
						},
						{
							"position": [
								13,
								8
							],
							"name": "priest"
						},
						{
							"position": [
								13,
								9
							],
							"name": "axe"
						},
						{
							"position": [
								14,
								0
							],
							"name": "flower"
						},
						{
							"position": [
								14,
								1
							],
							"name": "boot"
						},
						{
							"position": [
								14,
								2
							],
							"name": "microbes"
						},
						{
							"position": [
								14,
								3
							],
							"name": "dog"
						},
						{
							"position": [
								14,
								4
							],
							"name": "church"
						},
						{
							"position": [
								14,
								5
							],
							"name": "baby"
						},
						{
							"position": [
								14,
								6
							],
							"name": "woman"
						},
						{
							"position": [
								14,
								7
							],
							"name": "cup"
						},
						{
							"position": [
								14,
								8
							],
							"name": "bee"
						},
						{
							"position": [
								14,
								9
							],
							"name": "king"
						},
						{
							"position": [
								15,
								0
							],
							"name": "beach"
						},
						{
							"position": [
								15,
								1
							],
							"name": "artist"
						},
						{
							"position": [
								15,
								2
							],
							"name": "dunes"
						},
						{
							"position": [
								15,
								3
							],
							"name": "kids"
						},
						{
							"position": [
								15,
								4
							],
							"name": "king"
						},
						{
							"position": [
								15,
								5
							],
							"name": "priest"
						},
						{
							"position": [
								15,
								6
							],
							"name": "beach"
						},
						{
							"position": [
								15,
								7
							],
							"name": "teacher"
						},
						{
							"position": [
								15,
								8
							],
							"name": "marijuana"
						},
						{
							"position": [
								15,
								9
							],
							"name": "wine"
						},
						{
							"position": [
								16,
								0
							],
							"name": "beans"
						},
						{
							"position": [
								16,
								1
							],
							"name": "touchpad"
						},
						{
							"position": [
								16,
								2
							],
							"name": "factory"
						},
						{
							"position": [
								16,
								3
							],
							"name": "sphere"
						},
						{
							"position": [
								16,
								4
							],
							"name": "soldier"
						},
						{
							"position": [
								16,
								5
							],
							"name": "alligator"
						},
						{
							"position": [
								16,
								6
							],
							"name": "dirt"
						},
						{
							"position": [
								16,
								7
							],
							"name": "recycling"
						},
						{
							"position": [
								16,
								8
							],
							"name": "jacket"
						},
						{
							"position": [
								16,
								9
							],
							"name": "shoe"
						},
						{
							"position": [
								17,
								0
							],
							"name": "eraser"
						},
						{
							"position": [
								17,
								1
							],
							"name": "people"
						},
						{
							"position": [
								17,
								2
							],
							"name": "flag"
						},
						{
							"position": [
								17,
								3
							],
							"name": "eraser"
						},
						{
							"position": [
								17,
								4
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								17,
								5
							],
							"name": "cup"
						},
						{
							"position": [
								17,
								6
							],
							"name": "ship"
						},
						{
							"position": [
								17,
								7
							],
							"name": "cattle"
						},
						{
							"position": [
								17,
								8
							],
							"name": "gun"
						},
						{
							"position": [
								17,
								9
							],
							"name": "man"
						},
						{
							"position": [
								18,
								0
							],
							"name": "rabbit"
						},
						{
							"position": [
								18,
								1
							],
							"name": "house"
						},
						{
							"position": [
								18,
								2
							],
							"name": "drugs"
						},
						{
							"position": [
								18,
								3
							],
							"name": "king"
						},
						{
							"position": [
								18,
								4
							],
							"name": "USB"
						},
						{
							"position": [
								18,
								5
							],
							"name": "snake"
						},
						{
							"position": [
								18,
								6
							],
							"name": "artist"
						},
						{
							"position": [
								18,
								7
							],
							"name": "mouse"
						},
						{
							"position": [
								18,
								8
							],
							"name": "jacket"
						},
						{
							"position": [
								18,
								9
							],
							"name": "parking_sp"
						},
						{
							"position": [
								19,
								0
							],
							"name": "city"
						},
						{
							"position": [
								19,
								1
							],
							"name": "ocean"
						},
						{
							"position": [
								19,
								2
							],
							"name": "floppy"
						},
						{
							"position": [
								19,
								3
							],
							"name": "rocks"
						},
						{
							"position": [
								19,
								4
							],
							"name": "doctor"
						},
						{
							"position": [
								19,
								5
							],
							"name": "couch"
						},
						{
							"position": [
								19,
								6
							],
							"name": "ocean"
						},
						{
							"position": [
								19,
								7
							],
							"name": "mouse"
						},
						{
							"position": [
								19,
								8
							],
							"name": "robot"
						},
						{
							"position": [
								19,
								9
							],
							"name": "woman"
						},
						{
							"position": [
								20,
								0
							],
							"name": "branch"
						},
						{
							"position": [
								20,
								1
							],
							"name": "cook"
						},
						{
							"position": [
								20,
								2
							],
							"name": "cattle"
						},
						{
							"position": [
								20,
								3
							],
							"name": "priest"
						},
						{
							"position": [
								20,
								4
							],
							"name": "road"
						},
						{
							"position": [
								20,
								5
							],
							"name": "moth"
						},
						{
							"position": [
								20,
								6
							],
							"name": "socket"
						},
						{
							"position": [
								20,
								7
							],
							"name": "ship"
						},
						{
							"position": [
								20,
								8
							],
							"name": "bee"
						},
						{
							"position": [
								20,
								9
							],
							"name": "marijuana"
						},
						{
							"position": [
								21,
								0
							],
							"name": "soldier"
						},
						{
							"position": [
								21,
								1
							],
							"name": "jacket"
						},
						{
							"position": [
								21,
								2
							],
							"name": "rabbit"
						},
						{
							"position": [
								21,
								3
							],
							"name": "fireplace"
						},
						{
							"position": [
								21,
								4
							],
							"name": "shoe"
						},
						{
							"position": [
								21,
								5
							],
							"name": "peach"
						},
						{
							"position": [
								21,
								6
							],
							"name": "rave"
						},
						{
							"position": [
								21,
								7
							],
							"name": "beetle"
						},
						{
							"position": [
								21,
								8
							],
							"name": "RAM"
						},
						{
							"position": [
								21,
								9
							],
							"name": "athlete"
						},
						{
							"position": [
								22,
								0
							],
							"name": "Q60"
						},
						{
							"position": [
								22,
								1
							],
							"name": "fireplace"
						},
						{
							"position": [
								22,
								2
							],
							"name": "bench"
						},
						{
							"position": [
								22,
								3
							],
							"name": "cart"
						},
						{
							"position": [
								22,
								4
							],
							"name": "recycling"
						},
						{
							"position": [
								22,
								5
							],
							"name": "dirt"
						},
						{
							"position": [
								22,
								6
							],
							"name": "cattle"
						},
						{
							"position": [
								22,
								7
							],
							"name": "kids"
						},
						{
							"position": [
								22,
								8
							],
							"name": "couch"
						},
						{
							"position": [
								22,
								9
							],
							"name": "factory"
						},
						{
							"position": [
								23,
								0
							],
							"name": "bat"
						},
						{
							"position": [
								23,
								1
							],
							"name": "videogame"
						},
						{
							"position": [
								23,
								2
							],
							"name": "microbes"
						},
						{
							"position": [
								23,
								3
							],
							"name": "ship"
						},
						{
							"position": [
								23,
								4
							],
							"name": "athlete"
						},
						{
							"position": [
								23,
								5
							],
							"name": "beans"
						},
						{
							"position": [
								23,
								6
							],
							"name": "cart"
						},
						{
							"position": [
								23,
								7
							],
							"name": "bat"
						},
						{
							"position": [
								23,
								8
							],
							"name": "runners"
						},
						{
							"position": [
								23,
								9
							],
							"name": "touchpad"
						},
						{
							"position": [
								24,
								0
							],
							"name": "cart"
						},
						{
							"position": [
								24,
								1
							],
							"name": "teacher"
						},
						{
							"position": [
								24,
								2
							],
							"name": "cave"
						},
						{
							"position": [
								24,
								3
							],
							"name": "parking_sp"
						},
						{
							"position": [
								24,
								4
							],
							"name": "cup"
						},
						{
							"position": [
								24,
								5
							],
							"name": "microbes"
						},
						{
							"position": [
								24,
								6
							],
							"name": "couch"
						},
						{
							"position": [
								24,
								7
							],
							"name": "jacket"
						},
						{
							"position": [
								24,
								8
							],
							"name": "beans"
						},
						{
							"position": [
								24,
								9
							],
							"name": "wine"
						},
						{
							"position": [
								25,
								0
							],
							"name": "cop"
						},
						{
							"position": [
								25,
								1
							],
							"name": "flower"
						},
						{
							"position": [
								25,
								2
							],
							"name": "mouse"
						},
						{
							"position": [
								25,
								3
							],
							"name": "priest"
						},
						{
							"position": [
								25,
								4
							],
							"name": "beetle"
						},
						{
							"position": [
								25,
								5
							],
							"name": "factory"
						},
						{
							"position": [
								25,
								6
							],
							"name": "drugs"
						},
						{
							"position": [
								25,
								7
							],
							"name": "house"
						},
						{
							"position": [
								25,
								8
							],
							"name": "people"
						},
						{
							"position": [
								25,
								9
							],
							"name": "flower"
						},
						{
							"position": [
								26,
								0
							],
							"name": "eraser"
						},
						{
							"position": [
								26,
								1
							],
							"name": "gun"
						},
						{
							"position": [
								26,
								2
							],
							"name": "microbes"
						},
						{
							"position": [
								26,
								3
							],
							"name": "wine"
						},
						{
							"position": [
								26,
								4
							],
							"name": "microbes"
						},
						{
							"position": [
								26,
								5
							],
							"name": "USB"
						},
						{
							"position": [
								26,
								6
							],
							"name": "cop"
						},
						{
							"position": [
								26,
								7
							],
							"name": "city"
						},
						{
							"position": [
								26,
								8
							],
							"name": "cattle"
						},
						{
							"position": [
								26,
								9
							],
							"name": "teacher"
						},
						{
							"position": [
								27,
								0
							],
							"name": "teacher"
						},
						{
							"position": [
								27,
								1
							],
							"name": "flower"
						},
						{
							"position": [
								27,
								2
							],
							"name": "axe"
						},
						{
							"position": [
								27,
								3
							],
							"name": "thief"
						},
						{
							"position": [
								27,
								4
							],
							"name": "teacher"
						},
						{
							"position": [
								27,
								5
							],
							"name": "programmer"
						},
						{
							"position": [
								27,
								6
							],
							"name": "money"
						},
						{
							"position": [
								27,
								7
							],
							"name": "soldier"
						},
						{
							"position": [
								27,
								8
							],
							"name": "people"
						},
						{
							"position": [
								27,
								9
							],
							"name": "factory"
						},
						{
							"position": [
								28,
								0
							],
							"name": "doctor"
						},
						{
							"position": [
								28,
								1
							],
							"name": "church"
						},
						{
							"position": [
								28,
								2
							],
							"name": "thief"
						},
						{
							"position": [
								28,
								3
							],
							"name": "cook"
						},
						{
							"position": [
								28,
								4
							],
							"name": "tree"
						},
						{
							"position": [
								28,
								5
							],
							"name": "king"
						},
						{
							"position": [
								28,
								6
							],
							"name": "tree"
						},
						{
							"position": [
								28,
								7
							],
							"name": "mouse"
						},
						{
							"position": [
								28,
								8
							],
							"name": "rocks"
						},
						{
							"position": [
								28,
								9
							],
							"name": "berries"
						},
						{
							"position": [
								29,
								0
							],
							"name": "axe"
						},
						{
							"position": [
								29,
								1
							],
							"name": "router"
						},
						{
							"position": [
								29,
								2
							],
							"name": "marijuana"
						},
						{
							"position": [
								29,
								3
							],
							"name": "moth"
						},
						{
							"position": [
								29,
								4
							],
							"name": "berries"
						},
						{
							"position": [
								29,
								5
							],
							"name": "socket"
						},
						{
							"position": [
								29,
								6
							],
							"name": "pigeon"
						},
						{
							"position": [
								29,
								7
							],
							"name": "USB"
						},
						{
							"position": [
								29,
								8
							],
							"name": "church"
						},
						{
							"position": [
								29,
								9
							],
							"name": "factory"
						}
					],
					"hintList": [
						[
							1,
							1
						],
						[
							2,
							1
						],
						[
							2,
							2
						],
						[
							2,
							3
						],
						[
							2,
							4
						],
						[
							2,
							5
						],
						[
							2,
							6
						],
						[
							2,
							7
						],
						[
							3,
							8
						],
						[
							4,
							7
						],
						[
							4,
							6
						],
						[
							4,
							5
						],
						[
							4,
							4
						],
						[
							4,
							3
						],
						[
							4,
							2
						],
						[
							4,
							1
						],
						[
							5,
							1
						],
						[
							6,
							1
						],
						[
							6,
							2
						],
						[
							6,
							3
						],
						[
							6,
							4
						],
						[
							6,
							5
						],
						[
							6,
							6
						],
						[
							6,
							7
						],
						[
							7,
							8
						],
						[
							8,
							7
						],
						[
							8,
							6
						],
						[
							8,
							5
						],
						[
							8,
							4
						],
						[
							8,
							3
						],
						[
							8,
							2
						],
						[
							8,
							1
						],
						[
							9,
							1
						],
						[
							10,
							1
						],
						[
							10,
							2
						],
						[
							10,
							3
						],
						[
							10,
							4
						],
						[
							10,
							5
						],
						[
							10,
							6
						],
						[
							10,
							7
						],
						[
							11,
							8
						],
						[
							12,
							7
						],
						[
							12,
							6
						],
						[
							12,
							5
						],
						[
							12,
							4
						],
						[
							12,
							3
						],
						[
							12,
							2
						],
						[
							12,
							1
						],
						[
							13,
							1
						],
						[
							14,
							1
						],
						[
							14,
							2
						],
						[
							14,
							3
						],
						[
							14,
							4
						],
						[
							14,
							5
						],
						[
							14,
							6
						],
						[
							14,
							7
						],
						[
							15,
							8
						],
						[
							16,
							7
						],
						[
							16,
							6
						],
						[
							16,
							5
						],
						[
							16,
							4
						],
						[
							16,
							3
						],
						[
							16,
							2
						],
						[
							16,
							1
						],
						[
							17,
							1
						],
						[
							18,
							1
						],
						[
							18,
							2
						],
						[
							18,
							3
						],
						[
							18,
							4
						],
						[
							18,
							5
						],
						[
							18,
							6
						],
						[
							18,
							7
						],
						[
							19,
							8
						],
						[
							20,
							7
						],
						[
							20,
							6
						],
						[
							20,
							5
						],
						[
							20,
							4
						],
						[
							20,
							3
						],
						[
							20,
							2
						],
						[
							20,
							1
						],
						[
							21,
							1
						],
						[
							22,
							1
						],
						[
							22,
							2
						],
						[
							22,
							3
						],
						[
							22,
							4
						],
						[
							22,
							5
						],
						[
							22,
							6
						],
						[
							22,
							7
						],
						[
							23,
							8
						],
						[
							24,
							7
						],
						[
							24,
							6
						],
						[
							24,
							5
						],
						[
							24,
							4
						],
						[
							24,
							3
						],
						[
							24,
							2
						],
						[
							24,
							1
						],
						[
							25,
							1
						],
						[
							26,
							1
						],
						[
							26,
							2
						],
						[
							26,
							3
						],
						[
							26,
							4
						],
						[
							26,
							5
						],
						[
							26,
							6
						],
						[
							26,
							7
						],
						[
							27,
							8
						],
						[
							28,
							7
						],
						[
							28,
							6
						],
						[
							28,
							5
						],
						[
							28,
							4
						],
						[
							28,
							3
						],
						[
							28,
							2
						],
						[
							28,
							1
						],
						[
							29,
							1
						]
					],
					"hintWord": [
						[
							"drugs",
							"medicine"
						],
						[
							"wolf",
							"dog"
						],
						[
							"pastor",
							"priest"
						],
						[
							"pollution",
							"factory"
						],
						[
							"germs",
							"microorganism"
						],
						[
							"gunman",
							"soldier"
						],
						[
							"sprog",
							"kid"
						],
						[
							"usb stick",
							"memory stick"
						],
						[
							"laptop",
							"computer"
						],
						[
							"sand",
							"gravel"
						],
						[
							"buildings",
							"town"
						],
						[
							"android",
							"robot"
						],
						[
							"pizza slice",
							"concrete"
						],
						[
							"face",
							"socket"
						],
						[
							"cook",
							"chef"
						],
						[
							"avenue",
							"highway"
						],
						[
							"recycling bin",
							"rubbish bin"
						],
						[
							"shoe",
							"work boot"
						],
						[
							"sphere",
							"ball"
						],
						[
							"people",
							"crowd"
						],
						[
							"cathedral",
							"church"
						],
						[
							"ship",
							"boat"
						],
						[
							"sofa",
							"couch"
						],
						[
							"house",
							"home"
						],
						[
							"crocodile",
							"alligator"
						],
						[
							"artist",
							"painter"
						],
						[
							"leaf",
							"weed"
						],
						[
							"cattle",
							"cows"
						],
						[
							"mouse",
							"rat"
						],
						[
							"robber",
							"thief"
						],
						[
							"bunny",
							"rabbit"
						],
						[
							"electric chair",
							"king"
						],
						[
							"touchscreen",
							"tablet"
						],
						[
							"cup",
							"mug"
						],
						[
							"serpent",
							"snake"
						],
						[
							"insect",
							"butterfly"
						],
						[
							"knife",
							"dagger"
						],
						[
							"money",
							"coins"
						],
						[
							"lecturer",
							"teacher"
						],
						[
							"woman",
							"lady"
						],
						[
							"knife",
							"dagger"
						],
						[
							"robber",
							"thief"
						],
						[
							"laptop",
							"computer"
						],
						[
							"lecturer",
							"teacher"
						],
						[
							"pizza slice",
							"concrete"
						],
						[
							"money",
							"coins"
						],
						[
							"sofa",
							"couch"
						],
						[
							"buildings",
							"town"
						],
						[
							"bunny",
							"rabbit"
						],
						[
							"shoe",
							"work boot"
						],
						[
							"germs",
							"microorganism"
						],
						[
							"wolf",
							"dog"
						],
						[
							"cathedral",
							"church"
						],
						[
							"sprog",
							"kid"
						],
						[
							"woman",
							"lady"
						],
						[
							"cup",
							"mug"
						],
						[
							"leaf",
							"weed"
						],
						[
							"recycling bin",
							"rubbish bin"
						],
						[
							"sand",
							"gravel"
						],
						[
							"crocodile",
							"alligator"
						],
						[
							"gunman",
							"soldier"
						],
						[
							"sphere",
							"ball"
						],
						[
							"pollution",
							"factory"
						],
						[
							"touchscreen",
							"tablet"
						],
						[
							"people",
							"crowd"
						],
						[
							"house",
							"home"
						],
						[
							"drugs",
							"medicine"
						],
						[
							"electric chair",
							"king"
						],
						[
							"usb stick",
							"memory stick"
						],
						[
							"serpent",
							"snake"
						],
						[
							"artist",
							"painter"
						],
						[
							"mouse",
							"rat"
						],
						[
							"android",
							"robot"
						],
						[
							"ship",
							"boat"
						],
						[
							"face",
							"socket"
						],
						[
							"insect",
							"butterfly"
						],
						[
							"avenue",
							"highway"
						],
						[
							"pastor",
							"priest"
						],
						[
							"cattle",
							"cows"
						],
						[
							"cook",
							"chef"
						],
						[
							"leather jacket",
							"motorcycle jacket"
						],
						[
							"bbq",
							"fire",
							"fireplace",
							"flammable",
							"furnace",
							"hot",
							"table"
						],
						[
							"garden bench",
							"park bench",
							"seat"
						],
						[
							"shopping cart",
							"shopping trolley",
							"trolley"
						],
						[
							"recycling bin",
							"rubbish bin",
							"wheely bin"
						],
						[
							"dirt",
							"gravel",
							"heap",
							"pile",
							"sand",
							"soil"
						],
						[
							"beef",
							"bulls",
							"cattle",
							"cows",
							"dairy farm",
							"farm",
							"herd",
							"livestock",
							"stock"
						],
						[
							"couple",
							"family",
							"kids",
							"siblings",
							"unisex"
						],
						[
							"runners",
							"running",
							"team"
						],
						[
							"leather jacket",
							"motorcycle jacket"
						],
						[
							"chair",
							"couch",
							"easy chair",
							"sofa"
						],
						[
							"bacteria",
							"bugs",
							"cells",
							"germs",
							"infection",
							"microorganism",
							"virus"
						],
						[
							"coffee",
							"coffee cup",
							"cup",
							"cuppa",
							"mug",
							"tea",
							"tea cup"
						],
						[
							"disabled parking",
							"mobility park",
							"parking",
							"wheelchair park"
						],
						[
							"cave",
							"hole in the rock",
							"rock"
						],
						[
							"lecturer",
							"pointer",
							"presenter",
							"teach",
							"teacher",
							"teaching",
							"tutor",
							"whiteboard"
						],
						[
							"flower",
							"lotus flower",
							"petals",
							"petunia",
							"rafflesi"
						],
						[
							"handgun",
							"pistol",
							"revolver",
							"semi-automatic",
							"weapon"
						],
						[
							"bacteria",
							"bugs",
							"cells",
							"germs",
							"infection",
							"microorganism",
							"virus"
						],
						[
							"booze",
							"champagne",
							"cheers",
							"drinks",
							"toast",
							"wine",
							"wine glasses"
						],
						[
							"bacteria",
							"bugs",
							"cells",
							"germs",
							"infection",
							"microorganism",
							"virus"
						],
						[
							"memory stick",
							"thumb drive",
							"usb drive",
							"usb stick"
						],
						[
							"pig",
							"police officer",
							"policeman",
							"security guard",
							"sheriff"
						],
						[
							"city",
							"cityscape",
							"high-rise buildings",
							"skyscrapers",
							"town"
						],
						[
							"crowd",
							"group",
							"group of people",
							"mob",
							"people",
							"queue",
							"users"
						],
						[
							"hamster",
							"mouse",
							"rat",
							"rodent"
						],
						[],
						[
							"death sentence",
							"electric chair",
							"king",
							"monarch",
							"queen",
							"royal",
							"ruler",
							"throne"
						],
						[],
						[
							"chef",
							"cook",
							"woman"
						],
						[
							"cash",
							"heist",
							"money",
							"robber",
							"thief"
						],
						[
							"church"
						],
						[
							"router",
							"wifi",
							"wireless router"
						]
					]
				},
				{
					"playerName": "player2",
					"trapList": [
						{
							"position": [
								0,
								0
							],
							"name": "priest"
						},
						{
							"position": [
								0,
								1
							],
							"name": "rocks"
						},
						{
							"position": [
								0,
								2
							],
							"name": "mouse"
						},
						{
							"position": [
								0,
								3
							],
							"name": "computer"
						},
						{
							"position": [
								0,
								4
							],
							"name": "athlete"
						},
						{
							"position": [
								0,
								5
							],
							"name": "pigeon"
						},
						{
							"position": [
								0,
								6
							],
							"name": "branch"
						},
						{
							"position": [
								0,
								7
							],
							"name": "parking_sp"
						},
						{
							"position": [
								0,
								8
							],
							"name": "bee"
						},
						{
							"position": [
								0,
								9
							],
							"name": "door"
						},
						{
							"position": [
								1,
								0
							],
							"name": "thief"
						},
						{
							"position": [
								1,
								1
							],
							"name": "programmer"
						},
						{
							"position": [
								1,
								2
							],
							"name": "eraser"
						},
						{
							"position": [
								1,
								3
							],
							"name": "pipe"
						},
						{
							"position": [
								1,
								4
							],
							"name": "shoe"
						},
						{
							"position": [
								1,
								5
							],
							"name": "fireplace"
						},
						{
							"position": [
								1,
								6
							],
							"name": "canoe"
						},
						{
							"position": [
								1,
								7
							],
							"name": "athlete"
						},
						{
							"position": [
								1,
								8
							],
							"name": "touchpad"
						},
						{
							"position": [
								1,
								9
							],
							"name": "factory"
						},
						{
							"position": [
								2,
								0
							],
							"name": "bee"
						},
						{
							"position": [
								2,
								1
							],
							"name": "fireplace"
						},
						{
							"position": [
								2,
								2
							],
							"name": "cave"
						},
						{
							"position": [
								2,
								3
							],
							"name": "pigeon"
						},
						{
							"position": [
								2,
								4
							],
							"name": "barrels"
						},
						{
							"position": [
								2,
								5
							],
							"name": "cop"
						},
						{
							"position": [
								2,
								6
							],
							"name": "floppy"
						},
						{
							"position": [
								2,
								7
							],
							"name": "wine"
						},
						{
							"position": [
								2,
								8
							],
							"name": "thief"
						},
						{
							"position": [
								2,
								9
							],
							"name": "USB"
						},
						{
							"position": [
								3,
								0
							],
							"name": "robot"
						},
						{
							"position": [
								3,
								1
							],
							"name": "branch"
						},
						{
							"position": [
								3,
								2
							],
							"name": "RAM"
						},
						{
							"position": [
								3,
								3
							],
							"name": "floppy"
						},
						{
							"position": [
								3,
								4
							],
							"name": "city"
						},
						{
							"position": [
								3,
								5
							],
							"name": "road"
						},
						{
							"position": [
								3,
								6
							],
							"name": "ocean"
						},
						{
							"position": [
								3,
								7
							],
							"name": "baby"
						},
						{
							"position": [
								3,
								8
							],
							"name": "clothes"
						},
						{
							"position": [
								3,
								9
							],
							"name": "factory"
						},
						{
							"position": [
								4,
								0
							],
							"name": "router"
						},
						{
							"position": [
								4,
								1
							],
							"name": "frog"
						},
						{
							"position": [
								4,
								2
							],
							"name": "peach"
						},
						{
							"position": [
								4,
								3
							],
							"name": "drink"
						},
						{
							"position": [
								4,
								4
							],
							"name": "berries"
						},
						{
							"position": [
								4,
								5
							],
							"name": "cart"
						},
						{
							"position": [
								4,
								6
							],
							"name": "flag"
						},
						{
							"position": [
								4,
								7
							],
							"name": "beach"
						},
						{
							"position": [
								4,
								8
							],
							"name": "USB"
						},
						{
							"position": [
								4,
								9
							],
							"name": "cave"
						},
						{
							"position": [
								5,
								0
							],
							"name": "robot"
						},
						{
							"position": [
								5,
								1
							],
							"name": "tree"
						},
						{
							"position": [
								5,
								2
							],
							"name": "gun"
						},
						{
							"position": [
								5,
								3
							],
							"name": "sphere"
						},
						{
							"position": [
								5,
								4
							],
							"name": "fireplace"
						},
						{
							"position": [
								5,
								5
							],
							"name": "cook"
						},
						{
							"position": [
								5,
								6
							],
							"name": "violin"
						},
						{
							"position": [
								5,
								7
							],
							"name": "branch"
						},
						{
							"position": [
								5,
								8
							],
							"name": "thief"
						},
						{
							"position": [
								5,
								9
							],
							"name": "beach"
						},
						{
							"position": [
								6,
								0
							],
							"name": "sphere"
						},
						{
							"position": [
								6,
								1
							],
							"name": "violin"
						},
						{
							"position": [
								6,
								2
							],
							"name": "router"
						},
						{
							"position": [
								6,
								3
							],
							"name": "cross"
						},
						{
							"position": [
								6,
								4
							],
							"name": "car"
						},
						{
							"position": [
								6,
								5
							],
							"name": "hen"
						},
						{
							"position": [
								6,
								6
							],
							"name": "bat"
						},
						{
							"position": [
								6,
								7
							],
							"name": "parking sp"
						},
						{
							"position": [
								6,
								8
							],
							"name": "axe"
						},
						{
							"position": [
								6,
								9
							],
							"name": "road"
						},
						{
							"position": [
								7,
								0
							],
							"name": "canoe"
						},
						{
							"position": [
								7,
								1
							],
							"name": "recycling"
						},
						{
							"position": [
								7,
								2
							],
							"name": "bat"
						},
						{
							"position": [
								7,
								3
							],
							"name": "soldier"
						},
						{
							"position": [
								7,
								4
							],
							"name": "snake"
						},
						{
							"position": [
								7,
								5
							],
							"name": "eraser"
						},
						{
							"position": [
								7,
								6
							],
							"name": "cart"
						},
						{
							"position": [
								7,
								7
							],
							"name": "shoe"
						},
						{
							"position": [
								7,
								8
							],
							"name": "pipe"
						},
						{
							"position": [
								7,
								9
							],
							"name": "wine"
						},
						{
							"position": [
								8,
								0
							],
							"name": "door"
						},
						{
							"position": [
								8,
								1
							],
							"name": "bench"
						},
						{
							"position": [
								8,
								2
							],
							"name": "beans"
						},
						{
							"position": [
								8,
								3
							],
							"name": "dunes"
						},
						{
							"position": [
								8,
								4
							],
							"name": "doctor"
						},
						{
							"position": [
								8,
								5
							],
							"name": "rocks"
						},
						{
							"position": [
								8,
								6
							],
							"name": "sink"
						},
						{
							"position": [
								8,
								7
							],
							"name": "plate"
						},
						{
							"position": [
								8,
								8
							],
							"name": "canoe"
						},
						{
							"position": [
								8,
								9
							],
							"name": "beans"
						},
						{
							"position": [
								9,
								0
							],
							"name": "plate"
						},
						{
							"position": [
								9,
								1
							],
							"name": "flower"
						},
						{
							"position": [
								9,
								2
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								9,
								3
							],
							"name": "computer"
						},
						{
							"position": [
								9,
								4
							],
							"name": "flag"
						},
						{
							"position": [
								9,
								5
							],
							"name": "mouse"
						},
						{
							"position": [
								9,
								6
							],
							"name": "woman"
						},
						{
							"position": [
								9,
								7
							],
							"name": "rocks"
						},
						{
							"position": [
								9,
								8
							],
							"name": "artist"
						},
						{
							"position": [
								9,
								9
							],
							"name": "ship"
						},
						{
							"position": [
								10,
								0
							],
							"name": "videogame"
						},
						{
							"position": [
								10,
								1
							],
							"name": "Q60"
						},
						{
							"position": [
								10,
								2
							],
							"name": "door"
						},
						{
							"position": [
								10,
								3
							],
							"name": "runners"
						},
						{
							"position": [
								10,
								4
							],
							"name": "branch"
						},
						{
							"position": [
								10,
								5
							],
							"name": "videogame"
						},
						{
							"position": [
								10,
								6
							],
							"name": "athlete"
						},
						{
							"position": [
								10,
								7
							],
							"name": "cleaner"
						},
						{
							"position": [
								10,
								8
							],
							"name": "dog"
						},
						{
							"position": [
								10,
								9
							],
							"name": "alligator"
						},
						{
							"position": [
								11,
								0
							],
							"name": "moth"
						},
						{
							"position": [
								11,
								1
							],
							"name": "plate"
						},
						{
							"position": [
								11,
								2
							],
							"name": "soldier"
						},
						{
							"position": [
								11,
								3
							],
							"name": "branch"
						},
						{
							"position": [
								11,
								4
							],
							"name": "eraser"
						},
						{
							"position": [
								11,
								5
							],
							"name": "rabbit"
						},
						{
							"position": [
								11,
								6
							],
							"name": "moth"
						},
						{
							"position": [
								11,
								7
							],
							"name": "bench"
						},
						{
							"position": [
								11,
								8
							],
							"name": "flower"
						},
						{
							"position": [
								11,
								9
							],
							"name": "flower"
						},
						{
							"position": [
								12,
								0
							],
							"name": "cave"
						},
						{
							"position": [
								12,
								1
							],
							"name": "doctor"
						},
						{
							"position": [
								12,
								2
							],
							"name": "peach"
						},
						{
							"position": [
								12,
								3
							],
							"name": "car"
						},
						{
							"position": [
								12,
								4
							],
							"name": "floppy"
						},
						{
							"position": [
								12,
								5
							],
							"name": "branch"
						},
						{
							"position": [
								12,
								6
							],
							"name": "drink"
						},
						{
							"position": [
								12,
								7
							],
							"name": "cleaner"
						},
						{
							"position": [
								12,
								8
							],
							"name": "plate"
						},
						{
							"position": [
								12,
								9
							],
							"name": "robot"
						},
						{
							"position": [
								13,
								0
							],
							"name": "touchpad"
						},
						{
							"position": [
								13,
								1
							],
							"name": "bat"
						},
						{
							"position": [
								13,
								2
							],
							"name": "jacket"
						},
						{
							"position": [
								13,
								3
							],
							"name": "drugs"
						},
						{
							"position": [
								13,
								4
							],
							"name": "rabbit"
						},
						{
							"position": [
								13,
								5
							],
							"name": "city"
						},
						{
							"position": [
								13,
								6
							],
							"name": "doctor"
						},
						{
							"position": [
								13,
								7
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								13,
								8
							],
							"name": "church"
						},
						{
							"position": [
								13,
								9
							],
							"name": "axe"
						},
						{
							"position": [
								14,
								0
							],
							"name": "shoe"
						},
						{
							"position": [
								14,
								1
							],
							"name": "rocks"
						},
						{
							"position": [
								14,
								2
							],
							"name": "beach"
						},
						{
							"position": [
								14,
								3
							],
							"name": "hen"
						},
						{
							"position": [
								14,
								4
							],
							"name": "pigeon"
						},
						{
							"position": [
								14,
								5
							],
							"name": "bench"
						},
						{
							"position": [
								14,
								6
							],
							"name": "cop"
						},
						{
							"position": [
								14,
								7
							],
							"name": "tree"
						},
						{
							"position": [
								14,
								8
							],
							"name": "violin"
						},
						{
							"position": [
								14,
								9
							],
							"name": "city"
						},
						{
							"position": [
								15,
								0
							],
							"name": "teacher"
						},
						{
							"position": [
								15,
								1
							],
							"name": "boot"
						},
						{
							"position": [
								15,
								2
							],
							"name": "cook"
						},
						{
							"position": [
								15,
								3
							],
							"name": "RAM"
						},
						{
							"position": [
								15,
								4
							],
							"name": "socket"
						},
						{
							"position": [
								15,
								5
							],
							"name": "baby"
						},
						{
							"position": [
								15,
								6
							],
							"name": "axe"
						},
						{
							"position": [
								15,
								7
							],
							"name": "jacket"
						},
						{
							"position": [
								15,
								8
							],
							"name": "dunes"
						},
						{
							"position": [
								15,
								9
							],
							"name": "flag"
						},
						{
							"position": [
								16,
								0
							],
							"name": "jacket"
						},
						{
							"position": [
								16,
								1
							],
							"name": "barrels"
						},
						{
							"position": [
								16,
								2
							],
							"name": "pipe"
						},
						{
							"position": [
								16,
								3
							],
							"name": "sink"
						},
						{
							"position": [
								16,
								4
							],
							"name": "flag"
						},
						{
							"position": [
								16,
								5
							],
							"name": "frog"
						},
						{
							"position": [
								16,
								6
							],
							"name": "plate"
						},
						{
							"position": [
								16,
								7
							],
							"name": "berries"
						},
						{
							"position": [
								16,
								8
							],
							"name": "boot"
						},
						{
							"position": [
								16,
								9
							],
							"name": "priest"
						},
						{
							"position": [
								17,
								0
							],
							"name": "beans"
						},
						{
							"position": [
								17,
								1
							],
							"name": "cart"
						},
						{
							"position": [
								17,
								2
							],
							"name": "shoe"
						},
						{
							"position": [
								17,
								3
							],
							"name": "tree"
						},
						{
							"position": [
								17,
								4
							],
							"name": "dog"
						},
						{
							"position": [
								17,
								5
							],
							"name": "recycling"
						},
						{
							"position": [
								17,
								6
							],
							"name": "factory"
						},
						{
							"position": [
								17,
								7
							],
							"name": "baby"
						},
						{
							"position": [
								17,
								8
							],
							"name": "router"
						},
						{
							"position": [
								17,
								9
							],
							"name": "door"
						},
						{
							"position": [
								18,
								0
							],
							"name": "USB"
						},
						{
							"position": [
								18,
								1
							],
							"name": "clothes"
						},
						{
							"position": [
								18,
								2
							],
							"name": "programmer"
						},
						{
							"position": [
								18,
								3
							],
							"name": "cross"
						},
						{
							"position": [
								18,
								4
							],
							"name": "runners"
						},
						{
							"position": [
								18,
								5
							],
							"name": "parking sp"
						},
						{
							"position": [
								18,
								6
							],
							"name": "wine"
						},
						{
							"position": [
								18,
								7
							],
							"name": "beans"
						},
						{
							"position": [
								18,
								8
							],
							"name": "microbes"
						},
						{
							"position": [
								18,
								9
							],
							"name": "snake"
						},
						{
							"position": [
								19,
								0
							],
							"name": "berries"
						},
						{
							"position": [
								19,
								1
							],
							"name": "flag"
						},
						{
							"position": [
								19,
								2
							],
							"name": "canoe"
						},
						{
							"position": [
								19,
								3
							],
							"name": "eraser"
						},
						{
							"position": [
								19,
								4
							],
							"name": "recycling"
						},
						{
							"position": [
								19,
								5
							],
							"name": "fireplace"
						},
						{
							"position": [
								19,
								6
							],
							"name": "drugs"
						},
						{
							"position": [
								19,
								7
							],
							"name": "violin"
						},
						{
							"position": [
								19,
								8
							],
							"name": "violin"
						},
						{
							"position": [
								19,
								9
							],
							"name": "cleaner"
						},
						{
							"position": [
								20,
								0
							],
							"name": "Q60"
						},
						{
							"position": [
								20,
								1
							],
							"name": "router"
						},
						{
							"position": [
								20,
								2
							],
							"name": "videogame"
						},
						{
							"position": [
								20,
								3
							],
							"name": "Q60"
						},
						{
							"position": [
								20,
								4
							],
							"name": "door"
						},
						{
							"position": [
								20,
								5
							],
							"name": "cave"
						},
						{
							"position": [
								20,
								6
							],
							"name": "fireplace"
						},
						{
							"position": [
								20,
								7
							],
							"name": "athlete"
						},
						{
							"position": [
								20,
								8
							],
							"name": "city"
						},
						{
							"position": [
								20,
								9
							],
							"name": "recycling"
						},
						{
							"position": [
								21,
								0
							],
							"name": "baby"
						},
						{
							"position": [
								21,
								1
							],
							"name": "cross"
						},
						{
							"position": [
								21,
								2
							],
							"name": "pipe"
						},
						{
							"position": [
								21,
								3
							],
							"name": "man"
						},
						{
							"position": [
								21,
								4
							],
							"name": "flower"
						},
						{
							"position": [
								21,
								5
							],
							"name": "fireplace"
						},
						{
							"position": [
								21,
								6
							],
							"name": "router"
						},
						{
							"position": [
								21,
								7
							],
							"name": "fireplace"
						},
						{
							"position": [
								21,
								8
							],
							"name": "cart"
						},
						{
							"position": [
								21,
								9
							],
							"name": "flag"
						},
						{
							"position": [
								22,
								0
							],
							"name": "cleaner"
						},
						{
							"position": [
								22,
								1
							],
							"name": "programmer"
						},
						{
							"position": [
								22,
								2
							],
							"name": "rave"
						},
						{
							"position": [
								22,
								3
							],
							"name": "videogame"
						},
						{
							"position": [
								22,
								4
							],
							"name": "runners"
						},
						{
							"position": [
								22,
								5
							],
							"name": "drink"
						},
						{
							"position": [
								22,
								6
							],
							"name": "athlete"
						},
						{
							"position": [
								22,
								7
							],
							"name": "pipe"
						},
						{
							"position": [
								22,
								8
							],
							"name": "bee"
						},
						{
							"position": [
								22,
								9
							],
							"name": "sphere"
						},
						{
							"position": [
								23,
								0
							],
							"name": "violin"
						},
						{
							"position": [
								23,
								1
							],
							"name": "touchpad"
						},
						{
							"position": [
								23,
								2
							],
							"name": "artist"
						},
						{
							"position": [
								23,
								3
							],
							"name": "touchpad"
						},
						{
							"position": [
								23,
								4
							],
							"name": "cattle"
						},
						{
							"position": [
								23,
								5
							],
							"name": "sphere"
						},
						{
							"position": [
								23,
								6
							],
							"name": "axe"
						},
						{
							"position": [
								23,
								7
							],
							"name": "kids"
						},
						{
							"position": [
								23,
								8
							],
							"name": "bench"
						},
						{
							"position": [
								23,
								9
							],
							"name": "king"
						},
						{
							"position": [
								24,
								0
							],
							"name": "beetle"
						},
						{
							"position": [
								24,
								1
							],
							"name": "cleaner"
						},
						{
							"position": [
								24,
								2
							],
							"name": "bat"
						},
						{
							"position": [
								24,
								3
							],
							"name": "people"
						},
						{
							"position": [
								24,
								4
							],
							"name": "beach"
						},
						{
							"position": [
								24,
								5
							],
							"name": "fireplace"
						},
						{
							"position": [
								24,
								6
							],
							"name": "athlete"
						},
						{
							"position": [
								24,
								7
							],
							"name": "hen"
						},
						{
							"position": [
								24,
								8
							],
							"name": "door"
						},
						{
							"position": [
								24,
								9
							],
							"name": "tree"
						},
						{
							"position": [
								25,
								0
							],
							"name": "wine"
						},
						{
							"position": [
								25,
								1
							],
							"name": "dirt"
						},
						{
							"position": [
								25,
								2
							],
							"name": "people"
						},
						{
							"position": [
								25,
								3
							],
							"name": "recycling"
						},
						{
							"position": [
								25,
								4
							],
							"name": "dunes"
						},
						{
							"position": [
								25,
								5
							],
							"name": "eraser"
						},
						{
							"position": [
								25,
								6
							],
							"name": "cleaner"
						},
						{
							"position": [
								25,
								7
							],
							"name": "flag"
						},
						{
							"position": [
								25,
								8
							],
							"name": "Q60"
						},
						{
							"position": [
								25,
								9
							],
							"name": "snake"
						},
						{
							"position": [
								26,
								0
							],
							"name": "beach"
						},
						{
							"position": [
								26,
								1
							],
							"name": "mouse"
						},
						{
							"position": [
								26,
								2
							],
							"name": "soldier"
						},
						{
							"position": [
								26,
								3
							],
							"name": "wine"
						},
						{
							"position": [
								26,
								4
							],
							"name": "king"
						},
						{
							"position": [
								26,
								5
							],
							"name": "microbes"
						},
						{
							"position": [
								26,
								6
							],
							"name": "USB"
						},
						{
							"position": [
								26,
								7
							],
							"name": "mouse"
						},
						{
							"position": [
								26,
								8
							],
							"name": "kids"
						},
						{
							"position": [
								26,
								9
							],
							"name": "sphere"
						},
						{
							"position": [
								27,
								0
							],
							"name": "teacher"
						},
						{
							"position": [
								27,
								1
							],
							"name": "branch"
						},
						{
							"position": [
								27,
								2
							],
							"name": "marijuana"
						},
						{
							"position": [
								27,
								3
							],
							"name": "man"
						},
						{
							"position": [
								27,
								4
							],
							"name": "eraser"
						},
						{
							"position": [
								27,
								5
							],
							"name": "dog"
						},
						{
							"position": [
								27,
								6
							],
							"name": "socket"
						},
						{
							"position": [
								27,
								7
							],
							"name": "ocean"
						},
						{
							"position": [
								27,
								8
							],
							"name": "king"
						},
						{
							"position": [
								27,
								9
							],
							"name": "priest"
						},
						{
							"position": [
								28,
								0
							],
							"name": "people"
						},
						{
							"position": [
								28,
								1
							],
							"name": "thief"
						},
						{
							"position": [
								28,
								2
							],
							"name": "router"
						},
						{
							"position": [
								28,
								3
							],
							"name": "cross"
						},
						{
							"position": [
								28,
								4
							],
							"name": "tree"
						},
						{
							"position": [
								28,
								5
							],
							"name": "cup"
						},
						{
							"position": [
								28,
								6
							],
							"name": "Q60"
						},
						{
							"position": [
								28,
								7
							],
							"name": "hen"
						},
						{
							"position": [
								28,
								8
							],
							"name": "pigeon"
						},
						{
							"position": [
								28,
								9
							],
							"name": "athlete"
						},
						{
							"position": [
								29,
								0
							],
							"name": "USB"
						},
						{
							"position": [
								29,
								1
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								29,
								2
							],
							"name": "bat"
						},
						{
							"position": [
								29,
								3
							],
							"name": "road"
						},
						{
							"position": [
								29,
								4
							],
							"name": "beach"
						},
						{
							"position": [
								29,
								5
							],
							"name": "computer"
						},
						{
							"position": [
								29,
								6
							],
							"name": "mouse"
						},
						{
							"position": [
								29,
								7
							],
							"name": "wine"
						},
						{
							"position": [
								29,
								8
							],
							"name": "man"
						},
						{
							"position": [
								29,
								9
							],
							"name": "nuke_plant"
						}
					],
					"hintList": [
						[
							1,
							1
						],
						[
							2,
							1
						],
						[
							2,
							2
						],
						[
							2,
							3
						],
						[
							2,
							4
						],
						[
							2,
							5
						],
						[
							2,
							6
						],
						[
							2,
							7
						],
						[
							3,
							8
						],
						[
							4,
							7
						],
						[
							4,
							6
						],
						[
							4,
							5
						],
						[
							4,
							4
						],
						[
							4,
							3
						],
						[
							4,
							2
						],
						[
							4,
							1
						],
						[
							5,
							1
						],
						[
							6,
							1
						],
						[
							6,
							2
						],
						[
							6,
							3
						],
						[
							6,
							4
						],
						[
							6,
							5
						],
						[
							6,
							6
						],
						[
							6,
							7
						],
						[
							7,
							8
						],
						[
							8,
							7
						],
						[
							8,
							6
						],
						[
							8,
							5
						],
						[
							8,
							4
						],
						[
							8,
							3
						],
						[
							8,
							2
						],
						[
							8,
							1
						],
						[
							9,
							1
						],
						[
							10,
							1
						],
						[
							10,
							2
						],
						[
							10,
							3
						],
						[
							10,
							4
						],
						[
							10,
							5
						],
						[
							10,
							6
						],
						[
							10,
							7
						],
						[
							11,
							8
						],
						[
							12,
							7
						],
						[
							12,
							6
						],
						[
							12,
							5
						],
						[
							12,
							4
						],
						[
							12,
							3
						],
						[
							12,
							2
						],
						[
							12,
							1
						],
						[
							13,
							1
						],
						[
							14,
							1
						],
						[
							14,
							2
						],
						[
							14,
							3
						],
						[
							14,
							4
						],
						[
							14,
							5
						],
						[
							14,
							6
						],
						[
							14,
							7
						],
						[
							15,
							8
						],
						[
							16,
							7
						],
						[
							16,
							6
						],
						[
							16,
							5
						],
						[
							16,
							4
						],
						[
							16,
							3
						],
						[
							16,
							2
						],
						[
							16,
							1
						],
						[
							17,
							1
						],
						[
							18,
							1
						],
						[
							18,
							2
						],
						[
							18,
							3
						],
						[
							18,
							4
						],
						[
							18,
							5
						],
						[
							18,
							6
						],
						[
							18,
							7
						],
						[
							19,
							8
						],
						[
							20,
							7
						],
						[
							20,
							6
						],
						[
							20,
							5
						],
						[
							20,
							4
						],
						[
							20,
							3
						],
						[
							20,
							2
						],
						[
							20,
							1
						],
						[
							21,
							1
						],
						[
							22,
							1
						],
						[
							22,
							2
						],
						[
							22,
							3
						],
						[
							22,
							4
						],
						[
							22,
							5
						],
						[
							22,
							6
						],
						[
							22,
							7
						],
						[
							23,
							8
						],
						[
							24,
							7
						],
						[
							24,
							6
						],
						[
							24,
							5
						],
						[
							24,
							4
						],
						[
							24,
							3
						],
						[
							24,
							2
						],
						[
							24,
							1
						],
						[
							25,
							1
						],
						[
							26,
							1
						],
						[
							26,
							2
						],
						[
							26,
							3
						],
						[
							26,
							4
						],
						[
							26,
							5
						],
						[
							26,
							6
						],
						[
							26,
							7
						],
						[
							27,
							8
						],
						[
							28,
							7
						],
						[
							28,
							6
						],
						[
							28,
							5
						],
						[
							28,
							4
						],
						[
							28,
							3
						],
						[
							28,
							2
						],
						[
							28,
							1
						],
						[
							29,
							1
						]
					],
					"hintWord": [
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"cross",
							"fire hydrant"
						],
						[
							"computer guy",
							"computer scientist",
							"computer user",
							"geek",
							"it worker",
							"sys admin",
							"techie"
						],
						[
							"concert",
							"crowd",
							"gig",
							"moshpit",
							"party"
						],
						[
							"consoles",
							"game",
							"gaming",
							"ghost",
							"nintendo",
							"pacman",
							"playstation",
							"videogames"
						],
						[
							"runners",
							"running",
							"team"
						],
						[
							"drinks",
							"glass",
							"straw"
						],
						[
							"ball",
							"football",
							"football player",
							"kick",
							"play",
							"player",
							"soccer",
							"sportsman"
						],
						[
							"elbow bend",
							"joint",
							"pipes",
							"plumber",
							"plumbing"
						],
						[
							"garden bench",
							"park bench",
							"seat"
						],
						[
							"chicken",
							"chook",
							"hen",
							"rooster"
						],
						[
							"ball",
							"football",
							"football player",
							"kick",
							"play",
							"player",
							"soccer",
							"sportsman"
						],
						[
							"bbq",
							"fire",
							"fireplace",
							"flammable",
							"furnace",
							"hot",
							"table"
						],
						[
							"beach umbrella",
							"summer",
							"sun",
							"sun shade",
							"sun umbrella",
							"umbrella"
						],
						[
							"crowd",
							"group",
							"group of people",
							"mob",
							"people",
							"queue",
							"users"
						],
						[
							"baseball bat",
							"bat",
							"softball bat"
						],
						[
							"cleaner",
							"dustman",
							"janitor"
						],
						[
							"dirt",
							"gravel",
							"heap",
							"pile",
							"sand",
							"soil"
						],
						[
							"hamster",
							"mouse",
							"rat",
							"rodent"
						],
						[
							"armed",
							"armed defender",
							"army",
							"assasin",
							"criminal",
							"gunman",
							"killer",
							"militant",
							"murder",
							"rifleman",
							"shooter",
							"sniper",
							"soldier"
						],
						[
							"booze",
							"champagne",
							"cheers",
							"drinks",
							"toast",
							"wine",
							"wine glasses"
						],
						[
							"death sentence",
							"electric chair",
							"king",
							"monarch",
							"queen",
							"royal",
							"ruler",
							"throne"
						],
						[
							"bacteria",
							"bugs",
							"cells",
							"germs",
							"infection",
							"microorganism",
							"virus"
						],
						[
							"memory stick",
							"thumb drive",
							"usb drive",
							"usb stick"
						],
						[
							"hamster",
							"mouse",
							"rat",
							"rodent"
						],
						[
							"death sentence",
							"electric chair",
							"king",
							"monarch",
							"queen",
							"royal",
							"ruler",
							"throne"
						],
						[
							"chicken",
							"chook",
							"hen",
							"rooster"
						],
						[
							"cell phone",
							"iphone",
							"mobile phone",
							"phone",
							"smart phone",
							"smartphone"
						],
						[
							"coffee",
							"coffee cup",
							"cup",
							"cuppa",
							"mug",
							"tea",
							"tea cup"
						],
						[],
						[
							"cross",
							"fire hydrant"
						],
						[
							"router",
							"wifi",
							"wireless router"
						],
						[
							"cash",
							"heist",
							"money",
							"robber",
							"thief"
						],
						[
							"nuclear generator",
							"nuclear power",
							"nuclear power plant",
							"smoke stack",
							"steam",
							"towers"
						]
					]
				}
			]
		},
		"secSinglePlayer": {
			"type": "single",
			"network": [
				{
					"next": 0,
					"transmitter": "player1",
					"receiver": "player2"
				}
			],
			"fields": [
				{
					"playerName": "player1",
					"trapList": [
						{
							"position": [
								0,
								0
							],
							"name": "rocks"
						},
						{
							"position": [
								0,
								1
							],
							"name": "cross"
						},
						{
							"position": [
								0,
								2
							],
							"name": "violin"
						},
						{
							"position": [
								0,
								3
							],
							"name": "peach"
						},
						{
							"position": [
								0,
								4
							],
							"name": "computer"
						},
						{
							"position": [
								0,
								5
							],
							"name": "pipe"
						},
						{
							"position": [
								0,
								6
							],
							"name": "branch"
						},
						{
							"position": [
								0,
								7
							],
							"name": "cop"
						},
						{
							"position": [
								0,
								8
							],
							"name": "beach"
						},
						{
							"position": [
								0,
								9
							],
							"name": "plate"
						},
						{
							"position": [
								1,
								0
							],
							"name": "drink"
						},
						{
							"position": [
								1,
								1
							],
							"name": "marijuana"
						},
						{
							"position": [
								1,
								2
							],
							"name": "Q60"
						},
						{
							"position": [
								1,
								3
							],
							"name": "cattle"
						},
						{
							"position": [
								1,
								4
							],
							"name": "house"
						},
						{
							"position": [
								1,
								5
							],
							"name": "boot"
						},
						{
							"position": [
								1,
								6
							],
							"name": "floppy"
						},
						{
							"position": [
								1,
								7
							],
							"name": "gun"
						},
						{
							"position": [
								1,
								8
							],
							"name": "peach"
						},
						{
							"position": [
								1,
								9
							],
							"name": "eraser"
						},
						{
							"position": [
								2,
								0
							],
							"name": "beach"
						},
						{
							"position": [
								2,
								1
							],
							"name": "cook"
						},
						{
							"position": [
								2,
								2
							],
							"name": "moth"
						},
						{
							"position": [
								2,
								3
							],
							"name": "athlete"
						},
						{
							"position": [
								2,
								4
							],
							"name": "mouse"
						},
						{
							"position": [
								2,
								5
							],
							"name": "recycling"
						},
						{
							"position": [
								2,
								6
							],
							"name": "dunes"
						},
						{
							"position": [
								2,
								7
							],
							"name": "knife"
						},
						{
							"position": [
								2,
								8
							],
							"name": "canoe"
						},
						{
							"position": [
								2,
								9
							],
							"name": "ocean"
						},
						{
							"position": [
								3,
								0
							],
							"name": "plate"
						},
						{
							"position": [
								3,
								1
							],
							"name": "moth"
						},
						{
							"position": [
								3,
								2
							],
							"name": "woman"
						},
						{
							"position": [
								3,
								3
							],
							"name": "alligator"
						},
						{
							"position": [
								3,
								4
							],
							"name": "bench"
						},
						{
							"position": [
								3,
								5
							],
							"name": "beans"
						},
						{
							"position": [
								3,
								6
							],
							"name": "berries"
						},
						{
							"position": [
								3,
								7
							],
							"name": "axe"
						},
						{
							"position": [
								3,
								8
							],
							"name": "hen"
						},
						{
							"position": [
								3,
								9
							],
							"name": "house"
						},
						{
							"position": [
								4,
								0
							],
							"name": "gun"
						},
						{
							"position": [
								4,
								1
							],
							"name": "rabbit"
						},
						{
							"position": [
								4,
								2
							],
							"name": "Q60"
						},
						{
							"position": [
								4,
								3
							],
							"name": "violin"
						},
						{
							"position": [
								4,
								4
							],
							"name": "router"
						},
						{
							"position": [
								4,
								5
							],
							"name": "drugs"
						},
						{
							"position": [
								4,
								6
							],
							"name": "flag"
						},
						{
							"position": [
								4,
								7
							],
							"name": "microbes"
						},
						{
							"position": [
								4,
								8
							],
							"name": "road"
						},
						{
							"position": [
								4,
								9
							],
							"name": "branch"
						},
						{
							"position": [
								5,
								0
							],
							"name": "rave"
						},
						{
							"position": [
								5,
								1
							],
							"name": "snake"
						},
						{
							"position": [
								5,
								2
							],
							"name": "cleaner"
						},
						{
							"position": [
								5,
								3
							],
							"name": "cart"
						},
						{
							"position": [
								5,
								4
							],
							"name": "door"
						},
						{
							"position": [
								5,
								5
							],
							"name": "branch"
						},
						{
							"position": [
								5,
								6
							],
							"name": "alligator"
						},
						{
							"position": [
								5,
								7
							],
							"name": "shoe"
						},
						{
							"position": [
								5,
								8
							],
							"name": "church"
						},
						{
							"position": [
								5,
								9
							],
							"name": "cattle"
						},
						{
							"position": [
								6,
								0
							],
							"name": "dog"
						},
						{
							"position": [
								6,
								1
							],
							"name": "baby"
						},
						{
							"position": [
								6,
								2
							],
							"name": "peach"
						},
						{
							"position": [
								6,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								6,
								4
							],
							"name": "cattle"
						},
						{
							"position": [
								6,
								5
							],
							"name": "couch"
						},
						{
							"position": [
								6,
								6
							],
							"name": "pigeon"
						},
						{
							"position": [
								6,
								7
							],
							"name": "bat"
						},
						{
							"position": [
								6,
								8
							],
							"name": "branch"
						},
						{
							"position": [
								6,
								9
							],
							"name": "jacket"
						},
						{
							"position": [
								7,
								0
							],
							"name": "rabbit"
						},
						{
							"position": [
								7,
								1
							],
							"name": "berries"
						},
						{
							"position": [
								7,
								2
							],
							"name": "woman"
						},
						{
							"position": [
								7,
								3
							],
							"name": "pigeon"
						},
						{
							"position": [
								7,
								4
							],
							"name": "cleaner"
						},
						{
							"position": [
								7,
								5
							],
							"name": "beetle"
						},
						{
							"position": [
								7,
								6
							],
							"name": "dirt"
						},
						{
							"position": [
								7,
								7
							],
							"name": "beach"
						},
						{
							"position": [
								7,
								8
							],
							"name": "flower"
						},
						{
							"position": [
								7,
								9
							],
							"name": "sphere"
						},
						{
							"position": [
								8,
								0
							],
							"name": "drugs"
						},
						{
							"position": [
								8,
								1
							],
							"name": "fireplace"
						},
						{
							"position": [
								8,
								2
							],
							"name": "woman"
						},
						{
							"position": [
								8,
								3
							],
							"name": "wine"
						},
						{
							"position": [
								8,
								4
							],
							"name": "beach"
						},
						{
							"position": [
								8,
								5
							],
							"name": "road"
						},
						{
							"position": [
								8,
								6
							],
							"name": "rocks"
						},
						{
							"position": [
								8,
								7
							],
							"name": "clothes"
						},
						{
							"position": [
								8,
								8
							],
							"name": "kids"
						},
						{
							"position": [
								8,
								9
							],
							"name": "bench"
						},
						{
							"position": [
								9,
								0
							],
							"name": "parking_sp"
						},
						{
							"position": [
								9,
								1
							],
							"name": "plate"
						},
						{
							"position": [
								9,
								2
							],
							"name": "gun"
						},
						{
							"position": [
								9,
								3
							],
							"name": "cleaner"
						},
						{
							"position": [
								9,
								4
							],
							"name": "socket"
						},
						{
							"position": [
								9,
								5
							],
							"name": "money"
						},
						{
							"position": [
								9,
								6
							],
							"name": "house"
						},
						{
							"position": [
								9,
								7
							],
							"name": "church"
						},
						{
							"position": [
								9,
								8
							],
							"name": "cart"
						},
						{
							"position": [
								9,
								9
							],
							"name": "touchpad"
						},
						{
							"position": [
								10,
								0
							],
							"name": "axe"
						},
						{
							"position": [
								10,
								1
							],
							"name": "frog"
						},
						{
							"position": [
								10,
								2
							],
							"name": "cross"
						},
						{
							"position": [
								10,
								3
							],
							"name": "tree"
						},
						{
							"position": [
								10,
								4
							],
							"name": "cup"
						},
						{
							"position": [
								10,
								5
							],
							"name": "ship"
						},
						{
							"position": [
								10,
								6
							],
							"name": "dog"
						},
						{
							"position": [
								10,
								7
							],
							"name": "pipe"
						},
						{
							"position": [
								10,
								8
							],
							"name": "socket"
						},
						{
							"position": [
								10,
								9
							],
							"name": "plate"
						},
						{
							"position": [
								11,
								0
							],
							"name": "athlete"
						},
						{
							"position": [
								11,
								1
							],
							"name": "plate"
						},
						{
							"position": [
								11,
								2
							],
							"name": "shoe"
						},
						{
							"position": [
								11,
								3
							],
							"name": "soldier"
						},
						{
							"position": [
								11,
								4
							],
							"name": "branch"
						},
						{
							"position": [
								11,
								5
							],
							"name": "berries"
						},
						{
							"position": [
								11,
								6
							],
							"name": "microbes"
						},
						{
							"position": [
								11,
								7
							],
							"name": "cook"
						},
						{
							"position": [
								11,
								8
							],
							"name": "barrels"
						},
						{
							"position": [
								11,
								9
							],
							"name": "robot"
						},
						{
							"position": [
								12,
								0
							],
							"name": "beach"
						},
						{
							"position": [
								12,
								1
							],
							"name": "touchpad"
						},
						{
							"position": [
								12,
								2
							],
							"name": "ocean"
						},
						{
							"position": [
								12,
								3
							],
							"name": "router"
						},
						{
							"position": [
								12,
								4
							],
							"name": "runners"
						},
						{
							"position": [
								12,
								5
							],
							"name": "referee"
						},
						{
							"position": [
								12,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								7
							],
							"name": "frog"
						},
						{
							"position": [
								12,
								8
							],
							"name": "pigeon"
						},
						{
							"position": [
								12,
								9
							],
							"name": "ship"
						},
						{
							"position": [
								13,
								0
							],
							"name": "floppy"
						},
						{
							"position": [
								13,
								1
							],
							"name": "alligator"
						},
						{
							"position": [
								13,
								2
							],
							"name": "bench"
						},
						{
							"position": [
								13,
								3
							],
							"name": "hen"
						},
						{
							"position": [
								13,
								4
							],
							"name": "cave"
						},
						{
							"position": [
								13,
								5
							],
							"name": "canoe"
						},
						{
							"position": [
								13,
								6
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								13,
								7
							],
							"name": "eraser"
						},
						{
							"position": [
								13,
								8
							],
							"name": "parking_sp"
						},
						{
							"position": [
								13,
								9
							],
							"name": "sphere"
						},
						{
							"position": [
								14,
								0
							],
							"name": "rave"
						},
						{
							"position": [
								14,
								1
							],
							"name": "runners"
						},
						{
							"position": [
								14,
								2
							],
							"name": "cross"
						},
						{
							"position": [
								14,
								3
							],
							"name": "RAM"
						},
						{
							"position": [
								14,
								4
							],
							"name": "fireplace"
						},
						{
							"position": [
								14,
								5
							],
							"name": "RAM"
						},
						{
							"position": [
								14,
								6
							],
							"name": "king"
						},
						{
							"position": [
								14,
								7
							],
							"name": "drugs"
						},
						{
							"position": [
								14,
								8
							],
							"name": "shoe"
						},
						{
							"position": [
								14,
								9
							],
							"name": "couch"
						}
					],
					"hintList": [
						[
							1,
							1
						],
						[
							2,
							1
						],
						[
							2,
							2
						],
						[
							2,
							3
						],
						[
							2,
							4
						],
						[
							2,
							5
						],
						[
							2,
							6
						],
						[
							2,
							7
						],
						[
							3,
							8
						],
						[
							4,
							1
						],
						[
							4,
							2
						],
						[
							4,
							3
						],
						[
							4,
							4
						],
						[
							4,
							5
						],
						[
							4,
							6
						],
						[
							4,
							7
						],
						[
							5,
							1
						],
						[
							6,
							1
						],
						[
							6,
							2
						],
						[
							6,
							3
						],
						[
							6,
							4
						],
						[
							6,
							5
						],
						[
							6,
							6
						],
						[
							6,
							7
						],
						[
							7,
							8
						],
						[
							8,
							1
						],
						[
							8,
							2
						],
						[
							8,
							3
						],
						[
							8,
							4
						],
						[
							8,
							5
						],
						[
							8,
							6
						],
						[
							8,
							7
						],
						[
							9,
							1
						],
						[
							10,
							1
						],
						[
							10,
							2
						],
						[
							10,
							3
						],
						[
							10,
							4
						],
						[
							10,
							5
						],
						[
							10,
							6
						],
						[
							10,
							7
						],
						[
							11,
							8
						],
						[
							12,
							5
						],
						[
							12,
							6
						],
						[
							12,
							7
						]
					],
					"hintWord": [
						[
							"leaf",
							"weed"
						],
						[
							"cook",
							"chef"
						],
						[
							"insect",
							"butterfly"
						],
						[
							"NA",
							"NA"
						],
						[
							"mouse",
							"rat"
						],
						[
							"recycling bin",
							"rubbish bin"
						],
						[
							"NA",
							"NA"
						],
						[
							"knife",
							"dagger"
						],
						[
							"NA",
							"NA"
						],
						[
							"bunny",
							"rabbit"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"drugs",
							"medicine"
						],
						[
							"NA",
							"NA"
						],
						[
							"germs",
							"microorganism"
						],
						[
							"serpent",
							"snake"
						],
						[
							"sprog",
							"kid"
						],
						[
							"NA",
							"NA"
						],
						[
							"laptop",
							"computer"
						],
						[
							"cattle",
							"cows"
						],
						[
							"sofa",
							"couch"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"woman",
							"lady"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"avenue",
							"highway"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"cup",
							"mug"
						],
						[
							"ship",
							"boat"
						],
						[
							"wolf",
							"dog"
						],
						[
							"NA",
							"NA"
						],
						[
							"beehive",
							"drum",
							"shield"
						],
						[
							"icon",
							"lottery ticket",
							"lotto",
							"lucky number",
							"person",
							"referee",
							"ticket",
							"winner",
							"winning ticket"
						],
						[
							"laptop"
						],
						[
							"frog",
							"kermit",
							"retile",
							"toad"
						]
					]
				},
				{
					"playerName": "player2",
					"trapList": [
						{
							"position": [
								0,
								0
							],
							"name": "ship"
						},
						{
							"position": [
								0,
								1
							],
							"name": "boot"
						},
						{
							"position": [
								0,
								2
							],
							"name": "cop"
						},
						{
							"position": [
								0,
								3
							],
							"name": "router"
						},
						{
							"position": [
								0,
								4
							],
							"name": "hen"
						},
						{
							"position": [
								0,
								5
							],
							"name": "peach"
						},
						{
							"position": [
								0,
								6
							],
							"name": "cart"
						},
						{
							"position": [
								0,
								7
							],
							"name": "drugs"
						},
						{
							"position": [
								0,
								8
							],
							"name": "ocean"
						},
						{
							"position": [
								0,
								9
							],
							"name": "axe"
						},
						{
							"position": [
								1,
								0
							],
							"name": "branch"
						},
						{
							"position": [
								1,
								1
							],
							"name": "marijuana"
						},
						{
							"position": [
								1,
								2
							],
							"name": "videogame"
						},
						{
							"position": [
								1,
								3
							],
							"name": "drugs"
						},
						{
							"position": [
								1,
								4
							],
							"name": "snake"
						},
						{
							"position": [
								1,
								5
							],
							"name": "berries"
						},
						{
							"position": [
								1,
								6
							],
							"name": "computer"
						},
						{
							"position": [
								1,
								7
							],
							"name": "alligator"
						},
						{
							"position": [
								1,
								8
							],
							"name": "rave"
						},
						{
							"position": [
								1,
								9
							],
							"name": "kids"
						},
						{
							"position": [
								2,
								0
							],
							"name": "beetle"
						},
						{
							"position": [
								2,
								1
							],
							"name": "cook"
						},
						{
							"position": [
								2,
								2
							],
							"name": "moth"
						},
						{
							"position": [
								2,
								3
							],
							"name": "athlete"
						},
						{
							"position": [
								2,
								4
							],
							"name": "mouse"
						},
						{
							"position": [
								2,
								5
							],
							"name": "recycling"
						},
						{
							"position": [
								2,
								6
							],
							"name": "dunes"
						},
						{
							"position": [
								2,
								7
							],
							"name": "knife"
						},
						{
							"position": [
								2,
								8
							],
							"name": "artist"
						},
						{
							"position": [
								2,
								9
							],
							"name": "boot"
						},
						{
							"position": [
								3,
								0
							],
							"name": "marijuana"
						},
						{
							"position": [
								3,
								1
							],
							"name": "beach"
						},
						{
							"position": [
								3,
								2
							],
							"name": "soldier"
						},
						{
							"position": [
								3,
								3
							],
							"name": "videogame"
						},
						{
							"position": [
								3,
								4
							],
							"name": "violin"
						},
						{
							"position": [
								3,
								5
							],
							"name": "bat"
						},
						{
							"position": [
								3,
								6
							],
							"name": "flag"
						},
						{
							"position": [
								3,
								7
							],
							"name": "factory"
						},
						{
							"position": [
								3,
								8
							],
							"name": "hen"
						},
						{
							"position": [
								3,
								9
							],
							"name": "videogame"
						},
						{
							"position": [
								4,
								0
							],
							"name": "eraser"
						},
						{
							"position": [
								4,
								1
							],
							"name": "rabbit"
						},
						{
							"position": [
								4,
								2
							],
							"name": "Q60"
						},
						{
							"position": [
								4,
								3
							],
							"name": "violin"
						},
						{
							"position": [
								4,
								4
							],
							"name": "router"
						},
						{
							"position": [
								4,
								5
							],
							"name": "drugs"
						},
						{
							"position": [
								4,
								6
							],
							"name": "flag"
						},
						{
							"position": [
								4,
								7
							],
							"name": "microbes"
						},
						{
							"position": [
								4,
								8
							],
							"name": "couch"
						},
						{
							"position": [
								4,
								9
							],
							"name": "cop"
						},
						{
							"position": [
								5,
								0
							],
							"name": "peach"
						},
						{
							"position": [
								5,
								1
							],
							"name": "snake"
						},
						{
							"position": [
								5,
								2
							],
							"name": "priest"
						},
						{
							"position": [
								5,
								3
							],
							"name": "man"
						},
						{
							"position": [
								5,
								4
							],
							"name": "city"
						},
						{
							"position": [
								5,
								5
							],
							"name": "boot"
						},
						{
							"position": [
								5,
								6
							],
							"name": "bat"
						},
						{
							"position": [
								5,
								7
							],
							"name": "woman"
						},
						{
							"position": [
								5,
								8
							],
							"name": "pipe"
						},
						{
							"position": [
								5,
								9
							],
							"name": "boot"
						},
						{
							"position": [
								6,
								0
							],
							"name": "wine"
						},
						{
							"position": [
								6,
								1
							],
							"name": "baby"
						},
						{
							"position": [
								6,
								2
							],
							"name": "peach"
						},
						{
							"position": [
								6,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								6,
								4
							],
							"name": "cattle"
						},
						{
							"position": [
								6,
								5
							],
							"name": "couch"
						},
						{
							"position": [
								6,
								6
							],
							"name": "pigeon"
						},
						{
							"position": [
								6,
								7
							],
							"name": "bat"
						},
						{
							"position": [
								6,
								8
							],
							"name": "dunes"
						},
						{
							"position": [
								6,
								9
							],
							"name": "bench"
						},
						{
							"position": [
								7,
								0
							],
							"name": "cop"
						},
						{
							"position": [
								7,
								1
							],
							"name": "snake"
						},
						{
							"position": [
								7,
								2
							],
							"name": "Q45"
						},
						{
							"position": [
								7,
								3
							],
							"name": "snake"
						},
						{
							"position": [
								7,
								4
							],
							"name": "recycling"
						},
						{
							"position": [
								7,
								5
							],
							"name": "sphere"
						},
						{
							"position": [
								7,
								6
							],
							"name": "violin"
						},
						{
							"position": [
								7,
								7
							],
							"name": "people"
						},
						{
							"position": [
								7,
								8
							],
							"name": "flower"
						},
						{
							"position": [
								7,
								9
							],
							"name": "moth"
						},
						{
							"position": [
								8,
								0
							],
							"name": "floppy"
						},
						{
							"position": [
								8,
								1
							],
							"name": "fireplace"
						},
						{
							"position": [
								8,
								2
							],
							"name": "woman"
						},
						{
							"position": [
								8,
								3
							],
							"name": "wine"
						},
						{
							"position": [
								8,
								4
							],
							"name": "beach"
						},
						{
							"position": [
								8,
								5
							],
							"name": "road"
						},
						{
							"position": [
								8,
								6
							],
							"name": "rocks"
						},
						{
							"position": [
								8,
								7
							],
							"name": "clothes"
						},
						{
							"position": [
								8,
								8
							],
							"name": "church"
						},
						{
							"position": [
								8,
								9
							],
							"name": "axe"
						},
						{
							"position": [
								9,
								0
							],
							"name": "athlete"
						},
						{
							"position": [
								9,
								1
							],
							"name": "plate"
						},
						{
							"position": [
								9,
								2
							],
							"name": "berries"
						},
						{
							"position": [
								9,
								3
							],
							"name": "bee"
						},
						{
							"position": [
								9,
								4
							],
							"name": "snake"
						},
						{
							"position": [
								9,
								5
							],
							"name": "thief"
						},
						{
							"position": [
								9,
								6
							],
							"name": "priest"
						},
						{
							"position": [
								9,
								7
							],
							"name": "snake"
						},
						{
							"position": [
								9,
								8
							],
							"name": "beetle"
						},
						{
							"position": [
								9,
								9
							],
							"name": "flower"
						},
						{
							"position": [
								10,
								0
							],
							"name": "alligator"
						},
						{
							"position": [
								10,
								1
							],
							"name": "frog"
						},
						{
							"position": [
								10,
								2
							],
							"name": "cross"
						},
						{
							"position": [
								10,
								3
							],
							"name": "tree"
						},
						{
							"position": [
								10,
								4
							],
							"name": "cup"
						},
						{
							"position": [
								10,
								5
							],
							"name": "ship"
						},
						{
							"position": [
								10,
								6
							],
							"name": "dog"
						},
						{
							"position": [
								10,
								7
							],
							"name": "pipe"
						},
						{
							"position": [
								10,
								8
							],
							"name": "moth"
						},
						{
							"position": [
								10,
								9
							],
							"name": "axe"
						},
						{
							"position": [
								11,
								0
							],
							"name": "shoe"
						},
						{
							"position": [
								11,
								1
							],
							"name": "floppy"
						},
						{
							"position": [
								11,
								2
							],
							"name": "city"
						},
						{
							"position": [
								11,
								3
							],
							"name": "dog"
						},
						{
							"position": [
								11,
								4
							],
							"name": "ship"
						},
						{
							"position": [
								11,
								5
							],
							"name": "router"
						},
						{
							"position": [
								11,
								6
							],
							"name": "gun"
						},
						{
							"position": [
								11,
								7
							],
							"name": "bee"
						},
						{
							"position": [
								11,
								8
							],
							"name": "barrels"
						},
						{
							"position": [
								11,
								9
							],
							"name": "dog"
						},
						{
							"position": [
								12,
								0
							],
							"name": "beans"
						},
						{
							"position": [
								12,
								1
							],
							"name": "rave"
						},
						{
							"position": [
								12,
								2
							],
							"name": "mouse"
						},
						{
							"position": [
								12,
								3
							],
							"name": "eraser"
						},
						{
							"position": [
								12,
								4
							],
							"name": "robot"
						},
						{
							"position": [
								12,
								5
							],
							"name": "referee"
						},
						{
							"position": [
								12,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								7
							],
							"name": "frog"
						},
						{
							"position": [
								12,
								8
							],
							"name": "soldier"
						},
						{
							"position": [
								12,
								9
							],
							"name": "sphere"
						},
						{
							"position": [
								13,
								0
							],
							"name": "drink"
						},
						{
							"position": [
								13,
								1
							],
							"name": "videogame"
						},
						{
							"position": [
								13,
								2
							],
							"name": "drugs"
						},
						{
							"position": [
								13,
								3
							],
							"name": "rabbit"
						},
						{
							"position": [
								13,
								4
							],
							"name": "money"
						},
						{
							"position": [
								13,
								5
							],
							"name": "touchpad"
						},
						{
							"position": [
								13,
								6
							],
							"name": "shoe"
						},
						{
							"position": [
								13,
								7
							],
							"name": "flag"
						},
						{
							"position": [
								13,
								8
							],
							"name": "cave"
						},
						{
							"position": [
								13,
								9
							],
							"name": "church"
						},
						{
							"position": [
								14,
								0
							],
							"name": "factory"
						},
						{
							"position": [
								14,
								1
							],
							"name": "sink"
						},
						{
							"position": [
								14,
								2
							],
							"name": "socket"
						},
						{
							"position": [
								14,
								3
							],
							"name": "cave"
						},
						{
							"position": [
								14,
								4
							],
							"name": "snake"
						},
						{
							"position": [
								14,
								5
							],
							"name": "videogame"
						},
						{
							"position": [
								14,
								6
							],
							"name": "dog"
						},
						{
							"position": [
								14,
								7
							],
							"name": "eraser"
						},
						{
							"position": [
								14,
								8
							],
							"name": "dog"
						},
						{
							"position": [
								14,
								9
							],
							"name": "priest"
						}
					],
					"hintList": [
						[
							1,
							1
						],
						[
							2,
							1
						],
						[
							2,
							2
						],
						[
							2,
							3
						],
						[
							2,
							4
						],
						[
							2,
							5
						],
						[
							2,
							6
						],
						[
							2,
							7
						],
						[
							3,
							8
						],
						[
							4,
							1
						],
						[
							4,
							2
						],
						[
							4,
							3
						],
						[
							4,
							4
						],
						[
							4,
							5
						],
						[
							4,
							6
						],
						[
							4,
							7
						],
						[
							5,
							1
						],
						[
							6,
							1
						],
						[
							6,
							2
						],
						[
							6,
							3
						],
						[
							6,
							4
						],
						[
							6,
							5
						],
						[
							6,
							6
						],
						[
							6,
							7
						],
						[
							7,
							8
						],
						[
							8,
							1
						],
						[
							8,
							2
						],
						[
							8,
							3
						],
						[
							8,
							4
						],
						[
							8,
							5
						],
						[
							8,
							6
						],
						[
							8,
							7
						],
						[
							9,
							1
						],
						[
							10,
							1
						],
						[
							10,
							2
						],
						[
							10,
							3
						],
						[
							10,
							4
						],
						[
							10,
							5
						],
						[
							10,
							6
						],
						[
							10,
							7
						],
						[
							11,
							8
						],
						[
							12,
							5
						],
						[
							12,
							6
						],
						[
							12,
							7
						]
					],
					"hintWord": [
						[
							"leaf",
							"weed"
						],
						[
							"cook",
							"chef"
						],
						[
							"insect",
							"butterfly"
						],
						[
							"NA",
							"NA"
						],
						[
							"mouse",
							"rat"
						],
						[
							"recycling bin",
							"rubbish bin"
						],
						[
							"NA",
							"NA"
						],
						[
							"knife",
							"dagger"
						],
						[
							"NA",
							"NA"
						],
						[
							"bunny",
							"rabbit"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"drugs",
							"medicine"
						],
						[
							"NA",
							"NA"
						],
						[
							"germs",
							"microorganism"
						],
						[
							"serpent",
							"snake"
						],
						[
							"sprog",
							"kid"
						],
						[
							"NA",
							"NA"
						],
						[
							"laptop",
							"computer"
						],
						[
							"cattle",
							"cows"
						],
						[
							"sofa",
							"couch"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"woman",
							"lady"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"avenue",
							"highway"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"NA",
							"NA"
						],
						[
							"cup",
							"mug"
						],
						[
							"ship",
							"boat"
						],
						[
							"wolf",
							"dog"
						],
						[
							"NA",
							"NA"
						],
						[
							"beehive",
							"drum",
							"shield"
						],
						[
							"icon",
							"lottery ticket",
							"lotto",
							"lucky number",
							"person",
							"referee",
							"ticket",
							"winner",
							"winning ticket"
						],
						[
							"laptop"
						],
						[
							"frog",
							"kermit",
							"retile",
							"toad"
						]
					]
				}
			]
		}
	}
};
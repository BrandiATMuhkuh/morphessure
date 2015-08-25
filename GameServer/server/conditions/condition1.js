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
							"name": "referee"
						},
						{
							"position": [
								0,
								1
							],
							"name": "socket"
						},
						{
							"position": [
								0,
								2
							],
							"name": "baby"
						},
						{
							"position": [
								0,
								3
							],
							"name": "priest"
						},
						{
							"position": [
								0,
								4
							],
							"name": "cook"
						},
						{
							"position": [
								0,
								5
							],
							"name": "dirt"
						},
						{
							"position": [
								0,
								6
							],
							"name": "eraser"
						},
						{
							"position": [
								0,
								7
							],
							"name": "money"
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
							"name": "flower"
						},
						{
							"position": [
								1,
								0
							],
							"name": "artist"
						},
						{
							"position": [
								1,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								1,
								2
							],
							"name": "rocks"
						},
						{
							"position": [
								1,
								3
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								1,
								4
							],
							"name": "wine"
						},
						{
							"position": [
								1,
								5
							],
							"name": "man"
						},
						{
							"position": [
								1,
								6
							],
							"name": "recycling"
						},
						{
							"position": [
								1,
								7
							],
							"name": "house"
						},
						{
							"position": [
								1,
								8
							],
							"name": "flag"
						},
						{
							"position": [
								1,
								9
							],
							"name": "cook"
						},
						{
							"position": [
								2,
								0
							],
							"name": "couch"
						},
						{
							"position": [
								2,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								8
							],
							"name": "runners"
						},
						{
							"position": [
								2,
								9
							],
							"name": "teacher"
						},
						{
							"position": [
								3,
								0
							],
							"name": "jacket"
						},
						{
							"position": [
								3,
								1
							],
							"name": "floppy"
						},
						{
							"position": [
								3,
								2
							],
							"name": "pigeon"
						},
						{
							"position": [
								3,
								3
							],
							"name": "bench"
						},
						{
							"position": [
								3,
								4
							],
							"name": "priest"
						},
						{
							"position": [
								3,
								5
							],
							"name": "knife"
						},
						{
							"position": [
								3,
								6
							],
							"name": "money"
						},
						{
							"position": [
								3,
								7
							],
							"name": "woman"
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
							"name": "canoe"
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
							"name": "laptop"
						},
						{
							"position": [
								4,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								8
							],
							"name": "berries"
						},
						{
							"position": [
								4,
								9
							],
							"name": "bench"
						},
						{
							"position": [
								5,
								0
							],
							"name": "thief"
						},
						{
							"position": [
								5,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								5,
								2
							],
							"name": "eraser"
						},
						{
							"position": [
								5,
								3
							],
							"name": "wine"
						},
						{
							"position": [
								5,
								4
							],
							"name": "recycling"
						},
						{
							"position": [
								5,
								5
							],
							"name": "beans"
						},
						{
							"position": [
								5,
								6
							],
							"name": "Q45"
						},
						{
							"position": [
								5,
								7
							],
							"name": "dirt"
						},
						{
							"position": [
								5,
								8
							],
							"name": "bench"
						},
						{
							"position": [
								5,
								9
							],
							"name": "cook"
						},
						{
							"position": [
								6,
								0
							],
							"name": "cattle"
						},
						{
							"position": [
								6,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								6,
								2
							],
							"name": "laptop"
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
							"name": "laptop"
						},
						{
							"position": [
								6,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								6,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								6,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								6,
								8
							],
							"name": "thief"
						},
						{
							"position": [
								6,
								9
							],
							"name": "RAM"
						},
						{
							"position": [
								7,
								0
							],
							"name": "drugs"
						},
						{
							"position": [
								7,
								1
							],
							"name": "belly"
						},
						{
							"position": [
								7,
								2
							],
							"name": "athlete"
						},
						{
							"position": [
								7,
								3
							],
							"name": "boot"
						},
						{
							"position": [
								7,
								4
							],
							"name": "factory"
						},
						{
							"position": [
								7,
								5
							],
							"name": "rocks"
						},
						{
							"position": [
								7,
								6
							],
							"name": "doctor"
						},
						{
							"position": [
								7,
								7
							],
							"name": "couch"
						},
						{
							"position": [
								7,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								7,
								9
							],
							"name": "bat"
						},
						{
							"position": [
								8,
								0
							],
							"name": "frog"
						},
						{
							"position": [
								8,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								8
							],
							"name": "artist"
						},
						{
							"position": [
								8,
								9
							],
							"name": "doctor"
						},
						{
							"position": [
								9,
								0
							],
							"name": "tree"
						},
						{
							"position": [
								9,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								9,
								2
							],
							"name": "beetle"
						},
						{
							"position": [
								9,
								3
							],
							"name": "car"
						},
						{
							"position": [
								9,
								4
							],
							"name": "Q45"
						},
						{
							"position": [
								9,
								5
							],
							"name": "dunes"
						},
						{
							"position": [
								9,
								6
							],
							"name": "gun"
						},
						{
							"position": [
								9,
								7
							],
							"name": "artist"
						},
						{
							"position": [
								9,
								8
							],
							"name": "snake"
						},
						{
							"position": [
								9,
								9
							],
							"name": "USB"
						},
						{
							"position": [
								10,
								0
							],
							"name": "computer"
						},
						{
							"position": [
								10,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								8
							],
							"name": "road"
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
							"name": "ocean"
						},
						{
							"position": [
								11,
								1
							],
							"name": "gun"
						},
						{
							"position": [
								11,
								2
							],
							"name": "jacket"
						},
						{
							"position": [
								11,
								3
							],
							"name": "boot"
						},
						{
							"position": [
								11,
								4
							],
							"name": "shoe"
						},
						{
							"position": [
								11,
								5
							],
							"name": "cop"
						},
						{
							"position": [
								11,
								6
							],
							"name": "beach"
						},
						{
							"position": [
								11,
								7
							],
							"name": "parking_sp"
						},
						{
							"position": [
								11,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								11,
								9
							],
							"name": "rocks"
						},
						{
							"position": [
								12,
								0
							],
							"name": "robot"
						},
						{
							"position": [
								12,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								5
							],
							"name": "laptop"
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
							"name": "laptop"
						},
						{
							"position": [
								12,
								8
							],
							"name": "cattle"
						},
						{
							"position": [
								12,
								9
							],
							"name": "man"
						},
						{
							"position": [
								13,
								0
							],
							"name": "man"
						},
						{
							"position": [
								13,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								13,
								2
							],
							"name": "man"
						},
						{
							"position": [
								13,
								3
							],
							"name": "doctor"
						},
						{
							"position": [
								13,
								4
							],
							"name": "berries"
						},
						{
							"position": [
								13,
								5
							],
							"name": "money"
						},
						{
							"position": [
								13,
								6
							],
							"name": "baby"
						},
						{
							"position": [
								13,
								7
							],
							"name": "door"
						},
						{
							"position": [
								13,
								8
							],
							"name": "microbes"
						},
						{
							"position": [
								13,
								9
							],
							"name": "city"
						},
						{
							"position": [
								14,
								0
							],
							"name": "barrels"
						},
						{
							"position": [
								14,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								8
							],
							"name": "RAM"
						},
						{
							"position": [
								14,
								9
							],
							"name": "floppy"
						},
						{
							"position": [
								15,
								0
							],
							"name": "cup"
						},
						{
							"position": [
								15,
								1
							],
							"name": "cave"
						},
						{
							"position": [
								15,
								2
							],
							"name": "ocean"
						},
						{
							"position": [
								15,
								3
							],
							"name": "car"
						},
						{
							"position": [
								15,
								4
							],
							"name": "church"
						},
						{
							"position": [
								15,
								5
							],
							"name": "rave"
						},
						{
							"position": [
								15,
								6
							],
							"name": "snack"
						},
						{
							"position": [
								15,
								7
							],
							"name": "rocks"
						},
						{
							"position": [
								15,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								15,
								9
							],
							"name": "artist"
						},
						{
							"position": [
								16,
								0
							],
							"name": "rocks"
						},
						{
							"position": [
								16,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								8
							],
							"name": "beetle"
						},
						{
							"position": [
								16,
								9
							],
							"name": "ship"
						},
						{
							"position": [
								17,
								0
							],
							"name": "videogame"
						},
						{
							"position": [
								17,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								17,
								2
							],
							"name": "cook"
						},
						{
							"position": [
								17,
								3
							],
							"name": "people"
						},
						{
							"position": [
								17,
								4
							],
							"name": "ocean"
						},
						{
							"position": [
								17,
								5
							],
							"name": "barrels"
						},
						{
							"position": [
								17,
								6
							],
							"name": "USB"
						},
						{
							"position": [
								17,
								7
							],
							"name": "Q45"
						},
						{
							"position": [
								17,
								8
							],
							"name": "dirt"
						},
						{
							"position": [
								17,
								9
							],
							"name": "moth"
						},
						{
							"position": [
								18,
								0
							],
							"name": "eraser"
						},
						{
							"position": [
								18,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								8
							],
							"name": "recycling"
						},
						{
							"position": [
								18,
								9
							],
							"name": "robot"
						},
						{
							"position": [
								19,
								0
							],
							"name": "videogame"
						},
						{
							"position": [
								19,
								1
							],
							"name": "dog"
						},
						{
							"position": [
								19,
								2
							],
							"name": "city"
						},
						{
							"position": [
								19,
								3
							],
							"name": "berries"
						},
						{
							"position": [
								19,
								4
							],
							"name": "boot"
						},
						{
							"position": [
								19,
								5
							],
							"name": "canoe"
						},
						{
							"position": [
								19,
								6
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								19,
								7
							],
							"name": "beach"
						},
						{
							"position": [
								19,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								19,
								9
							],
							"name": "snack"
						},
						{
							"position": [
								20,
								0
							],
							"name": "cop"
						},
						{
							"position": [
								20,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								8
							],
							"name": "church"
						},
						{
							"position": [
								20,
								9
							],
							"name": "flag"
						},
						{
							"position": [
								21,
								0
							],
							"name": "city"
						},
						{
							"position": [
								21,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								21,
								2
							],
							"name": "dirt"
						},
						{
							"position": [
								21,
								3
							],
							"name": "shoe"
						},
						{
							"position": [
								21,
								4
							],
							"name": "referee"
						},
						{
							"position": [
								21,
								5
							],
							"name": "soldier"
						},
						{
							"position": [
								21,
								6
							],
							"name": "snake"
						},
						{
							"position": [
								21,
								7
							],
							"name": "plate"
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
							"name": "couch"
						},
						{
							"position": [
								22,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								8
							],
							"name": "doctor"
						},
						{
							"position": [
								22,
								9
							],
							"name": "cart"
						},
						{
							"position": [
								23,
								0
							],
							"name": "bee"
						},
						{
							"position": [
								23,
								1
							],
							"name": "house"
						},
						{
							"position": [
								23,
								2
							],
							"name": "bat"
						},
						{
							"position": [
								23,
								3
							],
							"name": "beach"
						},
						{
							"position": [
								23,
								4
							],
							"name": "runners"
						},
						{
							"position": [
								23,
								5
							],
							"name": "frog"
						},
						{
							"position": [
								23,
								6
							],
							"name": "cave"
						},
						{
							"position": [
								23,
								7
							],
							"name": "parking_sp"
						},
						{
							"position": [
								23,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								23,
								9
							],
							"name": "drink"
						},
						{
							"position": [
								24,
								0
							],
							"name": "pigeon"
						},
						{
							"position": [
								24,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								8
							],
							"name": "athlete"
						},
						{
							"position": [
								24,
								9
							],
							"name": "fireplace"
						},
						{
							"position": [
								25,
								0
							],
							"name": "knife"
						},
						{
							"position": [
								25,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								25,
								2
							],
							"name": "programmer"
						},
						{
							"position": [
								25,
								3
							],
							"name": "athlete"
						},
						{
							"position": [
								25,
								4
							],
							"name": "branch"
						},
						{
							"position": [
								25,
								5
							],
							"name": "touchpad"
						},
						{
							"position": [
								25,
								6
							],
							"name": "city"
						},
						{
							"position": [
								25,
								7
							],
							"name": "road"
						},
						{
							"position": [
								25,
								8
							],
							"name": "belly"
						},
						{
							"position": [
								25,
								9
							],
							"name": "recycling"
						},
						{
							"position": [
								26,
								0
							],
							"name": "snack"
						},
						{
							"position": [
								26,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								7
							],
							"name": "laptop"
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
							"name": "athlete"
						},
						{
							"position": [
								27,
								0
							],
							"name": "soldier"
						},
						{
							"position": [
								27,
								1
							],
							"name": "house"
						},
						{
							"position": [
								27,
								2
							],
							"name": "thief"
						},
						{
							"position": [
								27,
								3
							],
							"name": "ocean"
						},
						{
							"position": [
								27,
								4
							],
							"name": "athlete"
						},
						{
							"position": [
								27,
								5
							],
							"name": "rabbit"
						},
						{
							"position": [
								27,
								6
							],
							"name": "marijuana"
						},
						{
							"position": [
								27,
								7
							],
							"name": "wine"
						},
						{
							"position": [
								27,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								27,
								9
							],
							"name": "violin"
						},
						{
							"position": [
								28,
								0
							],
							"name": "sphere"
						},
						{
							"position": [
								28,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								8
							],
							"name": "boot"
						},
						{
							"position": [
								28,
								9
							],
							"name": "baby"
						},
						{
							"position": [
								29,
								0
							],
							"name": "jacket"
						},
						{
							"position": [
								29,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								29,
								2
							],
							"name": "robot"
						},
						{
							"position": [
								29,
								3
							],
							"name": "drugs"
						},
						{
							"position": [
								29,
								4
							],
							"name": "ship"
						},
						{
							"position": [
								29,
								5
							],
							"name": "router"
						},
						{
							"position": [
								29,
								6
							],
							"name": "Q60"
						},
						{
							"position": [
								29,
								7
							],
							"name": "rabbit"
						},
						{
							"position": [
								29,
								8
							],
							"name": "knife"
						},
						{
							"position": [
								29,
								9
							],
							"name": "teacher"
						},
						{
							"position": [
								30,
								0
							],
							"name": "tree"
						},
						{
							"position": [
								30,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								8
							],
							"name": "drink"
						},
						{
							"position": [
								30,
								9
							],
							"name": "frog"
						},
						{
							"position": [
								31,
								0
							],
							"name": "man"
						},
						{
							"position": [
								31,
								1
							],
							"name": "road"
						},
						{
							"position": [
								31,
								2
							],
							"name": "rocks"
						},
						{
							"position": [
								31,
								3
							],
							"name": "doctor"
						},
						{
							"position": [
								31,
								4
							],
							"name": "drink"
						},
						{
							"position": [
								31,
								5
							],
							"name": "people"
						},
						{
							"position": [
								31,
								6
							],
							"name": "wine"
						},
						{
							"position": [
								31,
								7
							],
							"name": "referee"
						},
						{
							"position": [
								31,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								31,
								9
							],
							"name": "touchpad"
						},
						{
							"position": [
								32,
								0
							],
							"name": "house"
						},
						{
							"position": [
								32,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								8
							],
							"name": "cart"
						},
						{
							"position": [
								32,
								9
							],
							"name": "knife"
						},
						{
							"position": [
								33,
								0
							],
							"name": "marijuana"
						},
						{
							"position": [
								33,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								33,
								2
							],
							"name": "sink"
						},
						{
							"position": [
								33,
								3
							],
							"name": "boot"
						},
						{
							"position": [
								33,
								4
							],
							"name": "wine"
						},
						{
							"position": [
								33,
								5
							],
							"name": "eraser"
						},
						{
							"position": [
								33,
								6
							],
							"name": "athlete"
						},
						{
							"position": [
								33,
								7
							],
							"name": "shoe"
						},
						{
							"position": [
								33,
								8
							],
							"name": "road"
						},
						{
							"position": [
								33,
								9
							],
							"name": "soldier"
						},
						{
							"position": [
								34,
								0
							],
							"name": "cattle"
						},
						{
							"position": [
								34,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								8
							],
							"name": "people"
						},
						{
							"position": [
								34,
								9
							],
							"name": "clothes"
						},
						{
							"position": [
								35,
								0
							],
							"name": "videogame"
						},
						{
							"position": [
								35,
								1
							],
							"name": "baby"
						},
						{
							"position": [
								35,
								2
							],
							"name": "bench"
						},
						{
							"position": [
								35,
								3
							],
							"name": "drink"
						},
						{
							"position": [
								35,
								4
							],
							"name": "beach"
						},
						{
							"position": [
								35,
								5
							],
							"name": "bat"
						},
						{
							"position": [
								35,
								6
							],
							"name": "recycling"
						},
						{
							"position": [
								35,
								7
							],
							"name": "cross"
						},
						{
							"position": [
								35,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								35,
								9
							],
							"name": "pipe"
						},
						{
							"position": [
								36,
								0
							],
							"name": "dirt"
						},
						{
							"position": [
								36,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								8
							],
							"name": "moth"
						},
						{
							"position": [
								36,
								9
							],
							"name": "eraser"
						},
						{
							"position": [
								37,
								0
							],
							"name": "people"
						},
						{
							"position": [
								37,
								1
							],
							"name": "pipe"
						},
						{
							"position": [
								37,
								2
							],
							"name": "shoe"
						},
						{
							"position": [
								37,
								3
							],
							"name": "USB"
						},
						{
							"position": [
								37,
								4
							],
							"name": "knife"
						},
						{
							"position": [
								37,
								5
							],
							"name": "shoe"
						},
						{
							"position": [
								37,
								6
							],
							"name": "ship"
						},
						{
							"position": [
								37,
								7
							],
							"name": "USB"
						},
						{
							"position": [
								37,
								8
							],
							"name": "cook"
						},
						{
							"position": [
								37,
								9
							],
							"name": "snake"
						},
						{
							"position": [
								38,
								0
							],
							"name": "clothes"
						},
						{
							"position": [
								38,
								1
							],
							"name": "car"
						},
						{
							"position": [
								38,
								2
							],
							"name": "cart"
						},
						{
							"position": [
								38,
								3
							],
							"name": "tree"
						},
						{
							"position": [
								38,
								4
							],
							"name": "rave"
						},
						{
							"position": [
								38,
								5
							],
							"name": "cart"
						},
						{
							"position": [
								38,
								6
							],
							"name": "knife"
						},
						{
							"position": [
								38,
								7
							],
							"name": "moth"
						},
						{
							"position": [
								38,
								8
							],
							"name": "cattle"
						},
						{
							"position": [
								38,
								9
							],
							"name": "hen"
						},
						{
							"position": [
								39,
								0
							],
							"name": "pipe"
						},
						{
							"position": [
								39,
								1
							],
							"name": "robot"
						},
						{
							"position": [
								39,
								2
							],
							"name": "knife"
						},
						{
							"position": [
								39,
								3
							],
							"name": "USB"
						},
						{
							"position": [
								39,
								4
							],
							"name": "beach"
						},
						{
							"position": [
								39,
								5
							],
							"name": "dirt"
						},
						{
							"position": [
								39,
								6
							],
							"name": "sphere"
						},
						{
							"position": [
								39,
								7
							],
							"name": "teacher"
						},
						{
							"position": [
								39,
								8
							],
							"name": "boot"
						},
						{
							"position": [
								39,
								9
							],
							"name": "snack"
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
						],
						[
							30,
							1
						],
						[
							30,
							2
						],
						[
							30,
							3
						],
						[
							30,
							4
						],
						[
							30,
							5
						],
						[
							30,
							6
						],
						[
							30,
							7
						],
						[
							31,
							8
						],
						[
							32,
							7
						],
						[
							32,
							6
						],
						[
							32,
							5
						],
						[
							32,
							4
						],
						[
							32,
							3
						],
						[
							32,
							2
						],
						[
							32,
							1
						],
						[
							33,
							1
						],
						[
							34,
							1
						],
						[
							34,
							2
						],
						[
							34,
							3
						],
						[
							34,
							4
						],
						[
							34,
							5
						],
						[
							34,
							6
						],
						[
							34,
							7
						],
						[
							35,
							8
						],
						[
							36,
							7
						],
						[
							36,
							6
						],
						[
							36,
							5
						],
						[
							36,
							4
						],
						[
							36,
							3
						],
						[
							36,
							2
						],
						[
							36,
							1
						],
						[
							37,
							1
						],
						[
							38,
							1
						],
						[
							38,
							2
						],
						[
							38,
							3
						],
						[
							38,
							4
						],
						[
							38,
							5
						],
						[
							38,
							6
						],
						[
							38,
							7
						],
						[
							39,
							8
						]
					],
					"hintWord": [
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"elbow bend",
							"joint",
							"pipes",
							"plumber",
							"plumbing"
						],
						[
							"car",
							"hatchback",
							"old dunger",
							"vehicle"
						],
						[
							"shopping cart",
							"shopping trolley",
							"trolley"
						],
						[],
						[
							"concert",
							"crowd",
							"gig",
							"moshpit",
							"party"
						],
						[
							"shopping cart",
							"shopping trolley",
							"trolley"
						],
						[
							"dagger",
							"knife",
							"lipstick"
						],
						[
							"butterfly",
							"insect",
							"moth"
						],
						[
							"doc martin",
							"high top",
							"safety boot",
							"shoe",
							"work boot"
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
							"name": "mouse"
						},
						{
							"position": [
								0,
								1
							],
							"name": "ocean"
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
							"name": "bat"
						},
						{
							"position": [
								0,
								4
							],
							"name": "bench"
						},
						{
							"position": [
								0,
								5
							],
							"name": "Q60"
						},
						{
							"position": [
								0,
								6
							],
							"name": "runners"
						},
						{
							"position": [
								0,
								7
							],
							"name": "cattle"
						},
						{
							"position": [
								0,
								8
							],
							"name": "beetle"
						},
						{
							"position": [
								0,
								9
							],
							"name": "ship"
						},
						{
							"position": [
								1,
								0
							],
							"name": "couch"
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
							"name": "alligator"
						},
						{
							"position": [
								1,
								3
							],
							"name": "flower"
						},
						{
							"position": [
								1,
								4
							],
							"name": "factory"
						},
						{
							"position": [
								1,
								5
							],
							"name": "snake"
						},
						{
							"position": [
								1,
								6
							],
							"name": "bench"
						},
						{
							"position": [
								1,
								7
							],
							"name": "couch"
						},
						{
							"position": [
								1,
								8
							],
							"name": "RAM"
						},
						{
							"position": [
								1,
								9
							],
							"name": "bat"
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
							"name": "nuke_plant"
						},
						{
							"position": [
								3,
								1
							],
							"name": "bee"
						},
						{
							"position": [
								3,
								2
							],
							"name": "athlete"
						},
						{
							"position": [
								3,
								3
							],
							"name": "cart"
						},
						{
							"position": [
								3,
								4
							],
							"name": "flag"
						},
						{
							"position": [
								3,
								5
							],
							"name": "peach"
						},
						{
							"position": [
								3,
								6
							],
							"name": "jacket"
						},
						{
							"position": [
								3,
								7
							],
							"name": "plate"
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
							"name": "axe"
						},
						{
							"position": [
								4,
								0
							],
							"name": "jacket"
						},
						{
							"position": [
								4,
								1
							],
							"name": "parking sp"
						},
						{
							"position": [
								4,
								2
							],
							"name": "money"
						},
						{
							"position": [
								4,
								3
							],
							"name": "sink"
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
							"name": "mouse"
						},
						{
							"position": [
								4,
								6
							],
							"name": "people"
						},
						{
							"position": [
								4,
								7
							],
							"name": "violin"
						},
						{
							"position": [
								4,
								8
							],
							"name": "shoe"
						},
						{
							"position": [
								4,
								9
							],
							"name": "socket"
						},
						{
							"position": [
								5,
								0
							],
							"name": "cave"
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
							"name": "robot"
						},
						{
							"position": [
								5,
								3
							],
							"name": "marijuana"
						},
						{
							"position": [
								5,
								4
							],
							"name": "alligator"
						},
						{
							"position": [
								5,
								5
							],
							"name": "cup"
						},
						{
							"position": [
								5,
								6
							],
							"name": "rocks"
						},
						{
							"position": [
								5,
								7
							],
							"name": "cart"
						},
						{
							"position": [
								5,
								8
							],
							"name": "ship"
						},
						{
							"position": [
								5,
								9
							],
							"name": "sphere"
						},
						{
							"position": [
								6,
								0
							],
							"name": "alligator"
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
							"name": "rocks"
						},
						{
							"position": [
								6,
								9
							],
							"name": "wine"
						},
						{
							"position": [
								7,
								0
							],
							"name": "church"
						},
						{
							"position": [
								7,
								1
							],
							"name": "rave"
						},
						{
							"position": [
								7,
								2
							],
							"name": "cop"
						},
						{
							"position": [
								7,
								3
							],
							"name": "clothes"
						},
						{
							"position": [
								7,
								4
							],
							"name": "rave"
						},
						{
							"position": [
								7,
								5
							],
							"name": "king"
						},
						{
							"position": [
								7,
								6
							],
							"name": "cop"
						},
						{
							"position": [
								7,
								7
							],
							"name": "ship"
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
							"name": "berries"
						},
						{
							"position": [
								8,
								0
							],
							"name": "eraser"
						},
						{
							"position": [
								8,
								1
							],
							"name": "router"
						},
						{
							"position": [
								8,
								2
							],
							"name": "drink"
						},
						{
							"position": [
								8,
								3
							],
							"name": "dog"
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
							"name": "drugs"
						},
						{
							"position": [
								8,
								6
							],
							"name": "doctor"
						},
						{
							"position": [
								8,
								7
							],
							"name": "Q60"
						},
						{
							"position": [
								8,
								8
							],
							"name": "cave"
						},
						{
							"position": [
								8,
								9
							],
							"name": "programmer"
						},
						{
							"position": [
								9,
								0
							],
							"name": "touchpad"
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
							"name": "frog"
						},
						{
							"position": [
								9,
								3
							],
							"name": "woman"
						},
						{
							"position": [
								9,
								4
							],
							"name": "knife"
						},
						{
							"position": [
								9,
								5
							],
							"name": "kids"
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
							"name": "dog"
						},
						{
							"position": [
								9,
								8
							],
							"name": "videogame"
						},
						{
							"position": [
								9,
								9
							],
							"name": "snack"
						},
						{
							"position": [
								10,
								0
							],
							"name": "cross"
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
							"name": "plate"
						},
						{
							"position": [
								10,
								9
							],
							"name": "fireplace"
						},
						{
							"position": [
								11,
								0
							],
							"name": "baby"
						},
						{
							"position": [
								11,
								1
							],
							"name": "gun"
						},
						{
							"position": [
								11,
								2
							],
							"name": "boot"
						},
						{
							"position": [
								11,
								3
							],
							"name": "doctor"
						},
						{
							"position": [
								11,
								4
							],
							"name": "cleaner"
						},
						{
							"position": [
								11,
								5
							],
							"name": "knife"
						},
						{
							"position": [
								11,
								6
							],
							"name": "router"
						},
						{
							"position": [
								11,
								7
							],
							"name": "house"
						},
						{
							"position": [
								11,
								8
							],
							"name": "USB"
						},
						{
							"position": [
								11,
								9
							],
							"name": "boot"
						},
						{
							"position": [
								12,
								0
							],
							"name": "woman"
						},
						{
							"position": [
								12,
								1
							],
							"name": "robot"
						},
						{
							"position": [
								12,
								2
							],
							"name": "baby"
						},
						{
							"position": [
								12,
								3
							],
							"name": "cave"
						},
						{
							"position": [
								12,
								4
							],
							"name": "beans"
						},
						{
							"position": [
								12,
								5
							],
							"name": "king"
						},
						{
							"position": [
								12,
								6
							],
							"name": "boot"
						},
						{
							"position": [
								12,
								7
							],
							"name": "barrels"
						},
						{
							"position": [
								12,
								8
							],
							"name": "thief"
						},
						{
							"position": [
								12,
								9
							],
							"name": "mouse"
						},
						{
							"position": [
								13,
								0
							],
							"name": "city"
						},
						{
							"position": [
								13,
								1
							],
							"name": "woman"
						},
						{
							"position": [
								13,
								2
							],
							"name": "marijuana"
						},
						{
							"position": [
								13,
								3
							],
							"name": "factory"
						},
						{
							"position": [
								13,
								4
							],
							"name": "couch"
						},
						{
							"position": [
								13,
								5
							],
							"name": "cattle"
						},
						{
							"position": [
								13,
								6
							],
							"name": "man"
						},
						{
							"position": [
								13,
								7
							],
							"name": "alligator"
						},
						{
							"position": [
								13,
								8
							],
							"name": "belly"
						},
						{
							"position": [
								13,
								9
							],
							"name": "dirt"
						},
						{
							"position": [
								14,
								0
							],
							"name": "referee"
						},
						{
							"position": [
								14,
								1
							],
							"name": "marijuana"
						},
						{
							"position": [
								14,
								2
							],
							"name": "rocks"
						},
						{
							"position": [
								14,
								3
							],
							"name": "videogame"
						},
						{
							"position": [
								14,
								4
							],
							"name": "couch"
						},
						{
							"position": [
								14,
								5
							],
							"name": "rabbit"
						},
						{
							"position": [
								14,
								6
							],
							"name": "flower"
						},
						{
							"position": [
								14,
								7
							],
							"name": "programmer"
						},
						{
							"position": [
								14,
								8
							],
							"name": "priest"
						},
						{
							"position": [
								14,
								9
							],
							"name": "flower"
						},
						{
							"position": [
								15,
								0
							],
							"name": "woman"
						},
						{
							"position": [
								15,
								1
							],
							"name": "robot"
						},
						{
							"position": [
								15,
								2
							],
							"name": "router"
						},
						{
							"position": [
								15,
								3
							],
							"name": "bench"
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
							"name": "router"
						},
						{
							"position": [
								15,
								6
							],
							"name": "mouse"
						},
						{
							"position": [
								15,
								7
							],
							"name": "axe"
						},
						{
							"position": [
								15,
								8
							],
							"name": "cleaner"
						},
						{
							"position": [
								15,
								9
							],
							"name": "rave"
						},
						{
							"position": [
								16,
								0
							],
							"name": "cart"
						},
						{
							"position": [
								16,
								1
							],
							"name": "teacher"
						},
						{
							"position": [
								16,
								2
							],
							"name": "church"
						},
						{
							"position": [
								16,
								3
							],
							"name": "bat"
						},
						{
							"position": [
								16,
								4
							],
							"name": "car"
						},
						{
							"position": [
								16,
								5
							],
							"name": "city"
						},
						{
							"position": [
								16,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								7
							],
							"name": "microbes"
						},
						{
							"position": [
								16,
								8
							],
							"name": "cleaner"
						},
						{
							"position": [
								16,
								9
							],
							"name": "people"
						},
						{
							"position": [
								17,
								0
							],
							"name": "flag"
						},
						{
							"position": [
								17,
								1
							],
							"name": "cross"
						},
						{
							"position": [
								17,
								2
							],
							"name": "drink"
						},
						{
							"position": [
								17,
								3
							],
							"name": "snake"
						},
						{
							"position": [
								17,
								4
							],
							"name": "church"
						},
						{
							"position": [
								17,
								5
							],
							"name": "gun"
						},
						{
							"position": [
								17,
								6
							],
							"name": "city"
						},
						{
							"position": [
								17,
								7
							],
							"name": "couch"
						},
						{
							"position": [
								17,
								8
							],
							"name": "drink"
						},
						{
							"position": [
								17,
								9
							],
							"name": "cattle"
						},
						{
							"position": [
								18,
								0
							],
							"name": "programmer"
						},
						{
							"position": [
								18,
								1
							],
							"name": "factory"
						},
						{
							"position": [
								18,
								2
							],
							"name": "socket"
						},
						{
							"position": [
								18,
								3
							],
							"name": "moth"
						},
						{
							"position": [
								18,
								4
							],
							"name": "pigeon"
						},
						{
							"position": [
								18,
								5
							],
							"name": "door"
						},
						{
							"position": [
								18,
								6
							],
							"name": "floppy"
						},
						{
							"position": [
								18,
								7
							],
							"name": "clothes"
						},
						{
							"position": [
								18,
								8
							],
							"name": "king"
						},
						{
							"position": [
								18,
								9
							],
							"name": "cart"
						},
						{
							"position": [
								19,
								0
							],
							"name": "athlete"
						},
						{
							"position": [
								19,
								1
							],
							"name": "touchpad"
						},
						{
							"position": [
								19,
								2
							],
							"name": "bee"
						},
						{
							"position": [
								19,
								3
							],
							"name": "moth"
						},
						{
							"position": [
								19,
								4
							],
							"name": "ship"
						},
						{
							"position": [
								19,
								5
							],
							"name": "wine"
						},
						{
							"position": [
								19,
								6
							],
							"name": "Q60"
						},
						{
							"position": [
								19,
								7
							],
							"name": "king"
						},
						{
							"position": [
								19,
								8
							],
							"name": "sphere"
						},
						{
							"position": [
								19,
								9
							],
							"name": "house"
						},
						{
							"position": [
								20,
								0
							],
							"name": "touchpad"
						},
						{
							"position": [
								20,
								1
							],
							"name": "cup"
						},
						{
							"position": [
								20,
								2
							],
							"name": "cop"
						},
						{
							"position": [
								20,
								3
							],
							"name": "flag"
						},
						{
							"position": [
								20,
								4
							],
							"name": "peach"
						},
						{
							"position": [
								20,
								5
							],
							"name": "cart"
						},
						{
							"position": [
								20,
								6
							],
							"name": "house"
						},
						{
							"position": [
								20,
								7
							],
							"name": "Q45"
						},
						{
							"position": [
								20,
								8
							],
							"name": "priest"
						},
						{
							"position": [
								20,
								9
							],
							"name": "cave"
						},
						{
							"position": [
								21,
								0
							],
							"name": "shoe"
						},
						{
							"position": [
								21,
								1
							],
							"name": "drugs"
						},
						{
							"position": [
								21,
								2
							],
							"name": "videogame"
						},
						{
							"position": [
								21,
								3
							],
							"name": "cleaner"
						},
						{
							"position": [
								21,
								4
							],
							"name": "money"
						},
						{
							"position": [
								21,
								5
							],
							"name": "Q60"
						},
						{
							"position": [
								21,
								6
							],
							"name": "Q45"
						},
						{
							"position": [
								21,
								7
							],
							"name": "sphere"
						},
						{
							"position": [
								21,
								8
							],
							"name": "marijuana"
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
							"name": "hen"
						},
						{
							"position": [
								22,
								1
							],
							"name": "bat"
						},
						{
							"position": [
								22,
								2
							],
							"name": "pigeon"
						},
						{
							"position": [
								22,
								3
							],
							"name": "factory"
						},
						{
							"position": [
								22,
								4
							],
							"name": "door"
						},
						{
							"position": [
								22,
								5
							],
							"name": "wine"
						},
						{
							"position": [
								22,
								6
							],
							"name": "cop"
						},
						{
							"position": [
								22,
								7
							],
							"name": "doctor"
						},
						{
							"position": [
								22,
								8
							],
							"name": "cleaner"
						},
						{
							"position": [
								22,
								9
							],
							"name": "jacket"
						},
						{
							"position": [
								23,
								0
							],
							"name": "tree"
						},
						{
							"position": [
								23,
								1
							],
							"name": "runners"
						},
						{
							"position": [
								23,
								2
							],
							"name": "flower"
						},
						{
							"position": [
								23,
								3
							],
							"name": "Q60"
						},
						{
							"position": [
								23,
								4
							],
							"name": "recycling"
						},
						{
							"position": [
								23,
								5
							],
							"name": "branch"
						},
						{
							"position": [
								23,
								6
							],
							"name": "house"
						},
						{
							"position": [
								23,
								7
							],
							"name": "couch"
						},
						{
							"position": [
								23,
								8
							],
							"name": "cave"
						},
						{
							"position": [
								23,
								9
							],
							"name": "city"
						},
						{
							"position": [
								24,
								0
							],
							"name": "road"
						},
						{
							"position": [
								24,
								1
							],
							"name": "rabbit"
						},
						{
							"position": [
								24,
								2
							],
							"name": "plate"
						},
						{
							"position": [
								24,
								3
							],
							"name": "frog"
						},
						{
							"position": [
								24,
								4
							],
							"name": "peach"
						},
						{
							"position": [
								24,
								5
							],
							"name": "runners"
						},
						{
							"position": [
								24,
								6
							],
							"name": "knife"
						},
						{
							"position": [
								24,
								7
							],
							"name": "videogame"
						},
						{
							"position": [
								24,
								8
							],
							"name": "cop"
						},
						{
							"position": [
								24,
								9
							],
							"name": "marijuana"
						},
						{
							"position": [
								25,
								0
							],
							"name": "beach"
						},
						{
							"position": [
								25,
								1
							],
							"name": "cleaner"
						},
						{
							"position": [
								25,
								2
							],
							"name": "floppy"
						},
						{
							"position": [
								25,
								3
							],
							"name": "artist"
						},
						{
							"position": [
								25,
								4
							],
							"name": "referee"
						},
						{
							"position": [
								25,
								5
							],
							"name": "tree"
						},
						{
							"position": [
								25,
								6
							],
							"name": "fireplace"
						},
						{
							"position": [
								25,
								7
							],
							"name": "cross"
						},
						{
							"position": [
								25,
								8
							],
							"name": "car"
						},
						{
							"position": [
								25,
								9
							],
							"name": "dunes"
						},
						{
							"position": [
								26,
								0
							],
							"name": "door"
						},
						{
							"position": [
								26,
								1
							],
							"name": "cup"
						},
						{
							"position": [
								26,
								2
							],
							"name": "tree"
						},
						{
							"position": [
								26,
								3
							],
							"name": "cart"
						},
						{
							"position": [
								26,
								4
							],
							"name": "road"
						},
						{
							"position": [
								26,
								5
							],
							"name": "house"
						},
						{
							"position": [
								26,
								6
							],
							"name": "cook"
						},
						{
							"position": [
								26,
								7
							],
							"name": "money"
						},
						{
							"position": [
								26,
								8
							],
							"name": "alligator"
						},
						{
							"position": [
								26,
								9
							],
							"name": "peach"
						},
						{
							"position": [
								27,
								0
							],
							"name": "king"
						},
						{
							"position": [
								27,
								1
							],
							"name": "socket"
						},
						{
							"position": [
								27,
								2
							],
							"name": "doctor"
						},
						{
							"position": [
								27,
								3
							],
							"name": "runners"
						},
						{
							"position": [
								27,
								4
							],
							"name": "church"
						},
						{
							"position": [
								27,
								5
							],
							"name": "beans"
						},
						{
							"position": [
								27,
								6
							],
							"name": "dog"
						},
						{
							"position": [
								27,
								7
							],
							"name": "hen"
						},
						{
							"position": [
								27,
								8
							],
							"name": "socket"
						},
						{
							"position": [
								27,
								9
							],
							"name": "cup"
						},
						{
							"position": [
								28,
								0
							],
							"name": "artist"
						},
						{
							"position": [
								28,
								1
							],
							"name": "dog"
						},
						{
							"position": [
								28,
								2
							],
							"name": "rocks"
						},
						{
							"position": [
								28,
								3
							],
							"name": "robot"
						},
						{
							"position": [
								28,
								4
							],
							"name": "drink"
						},
						{
							"position": [
								28,
								5
							],
							"name": "router"
						},
						{
							"position": [
								28,
								6
							],
							"name": "car"
						},
						{
							"position": [
								28,
								7
							],
							"name": "cattle"
						},
						{
							"position": [
								28,
								8
							],
							"name": "church"
						},
						{
							"position": [
								28,
								9
							],
							"name": "runners"
						},
						{
							"position": [
								29,
								0
							],
							"name": "teacher"
						},
						{
							"position": [
								29,
								1
							],
							"name": "hen"
						},
						{
							"position": [
								29,
								2
							],
							"name": "woman"
						},
						{
							"position": [
								29,
								3
							],
							"name": "cleaner"
						},
						{
							"position": [
								29,
								4
							],
							"name": "ocean"
						},
						{
							"position": [
								29,
								5
							],
							"name": "pigeon"
						},
						{
							"position": [
								29,
								6
							],
							"name": "Q45"
						},
						{
							"position": [
								29,
								7
							],
							"name": "cart"
						},
						{
							"position": [
								29,
								8
							],
							"name": "city"
						},
						{
							"position": [
								29,
								9
							],
							"name": "frog"
						},
						{
							"position": [
								30,
								0
							],
							"name": "sink"
						},
						{
							"position": [
								30,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								2
							],
							"name": "mouse"
						},
						{
							"position": [
								30,
								3
							],
							"name": "dirt"
						},
						{
							"position": [
								30,
								4
							],
							"name": "violin"
						},
						{
							"position": [
								30,
								5
							],
							"name": "recycling"
						},
						{
							"position": [
								30,
								6
							],
							"name": "fireplace"
						},
						{
							"position": [
								30,
								7
							],
							"name": "priest"
						},
						{
							"position": [
								30,
								8
							],
							"name": "sphere"
						},
						{
							"position": [
								30,
								9
							],
							"name": "rave"
						},
						{
							"position": [
								31,
								0
							],
							"name": "money"
						},
						{
							"position": [
								31,
								1
							],
							"name": "router"
						},
						{
							"position": [
								31,
								2
							],
							"name": "priest"
						},
						{
							"position": [
								31,
								3
							],
							"name": "clothes"
						},
						{
							"position": [
								31,
								4
							],
							"name": "cop"
						},
						{
							"position": [
								31,
								5
							],
							"name": "floppy"
						},
						{
							"position": [
								31,
								6
							],
							"name": "rocks"
						},
						{
							"position": [
								31,
								7
							],
							"name": "runners"
						},
						{
							"position": [
								31,
								8
							],
							"name": "couch"
						},
						{
							"position": [
								31,
								9
							],
							"name": "videogame"
						},
						{
							"position": [
								32,
								0
							],
							"name": "cup"
						},
						{
							"position": [
								32,
								1
							],
							"name": "moth"
						},
						{
							"position": [
								32,
								2
							],
							"name": "flower"
						},
						{
							"position": [
								32,
								3
							],
							"name": "snake"
						},
						{
							"position": [
								32,
								4
							],
							"name": "church"
						},
						{
							"position": [
								32,
								5
							],
							"name": "floppy"
						},
						{
							"position": [
								32,
								6
							],
							"name": "Q60"
						},
						{
							"position": [
								32,
								7
							],
							"name": "parking sp"
						},
						{
							"position": [
								32,
								8
							],
							"name": "sphere"
						},
						{
							"position": [
								32,
								9
							],
							"name": "alligator"
						},
						{
							"position": [
								33,
								0
							],
							"name": "peach"
						},
						{
							"position": [
								33,
								1
							],
							"name": "pipe"
						},
						{
							"position": [
								33,
								2
							],
							"name": "car"
						},
						{
							"position": [
								33,
								3
							],
							"name": "doctor"
						},
						{
							"position": [
								33,
								4
							],
							"name": "router"
						},
						{
							"position": [
								33,
								5
							],
							"name": "money"
						},
						{
							"position": [
								33,
								6
							],
							"name": "sphere"
						},
						{
							"position": [
								33,
								7
							],
							"name": "cart"
						},
						{
							"position": [
								33,
								8
							],
							"name": "hen"
						},
						{
							"position": [
								33,
								9
							],
							"name": "peach"
						},
						{
							"position": [
								34,
								0
							],
							"name": "floppy"
						},
						{
							"position": [
								34,
								1
							],
							"name": "Q45"
						},
						{
							"position": [
								34,
								2
							],
							"name": "clothes"
						},
						{
							"position": [
								34,
								3
							],
							"name": "sphere"
						},
						{
							"position": [
								34,
								4
							],
							"name": "athlete"
						},
						{
							"position": [
								34,
								5
							],
							"name": "woman"
						},
						{
							"position": [
								34,
								6
							],
							"name": "artist"
						},
						{
							"position": [
								34,
								7
							],
							"name": "branch"
						},
						{
							"position": [
								34,
								8
							],
							"name": "axe"
						},
						{
							"position": [
								34,
								9
							],
							"name": "cross"
						},
						{
							"position": [
								35,
								0
							],
							"name": "cleaner"
						},
						{
							"position": [
								35,
								1
							],
							"name": "ship"
						},
						{
							"position": [
								35,
								2
							],
							"name": "socket"
						},
						{
							"position": [
								35,
								3
							],
							"name": "peach"
						},
						{
							"position": [
								35,
								4
							],
							"name": "pipe"
						},
						{
							"position": [
								35,
								5
							],
							"name": "Q60"
						},
						{
							"position": [
								35,
								6
							],
							"name": "bench"
						},
						{
							"position": [
								35,
								7
							],
							"name": "peach"
						},
						{
							"position": [
								35,
								8
							],
							"name": "cross"
						},
						{
							"position": [
								35,
								9
							],
							"name": "USB"
						},
						{
							"position": [
								36,
								0
							],
							"name": "money"
						},
						{
							"position": [
								36,
								1
							],
							"name": "flag"
						},
						{
							"position": [
								36,
								2
							],
							"name": "ship"
						},
						{
							"position": [
								36,
								3
							],
							"name": "programmer"
						},
						{
							"position": [
								36,
								4
							],
							"name": "touchpad"
						},
						{
							"position": [
								36,
								5
							],
							"name": "berries"
						},
						{
							"position": [
								36,
								6
							],
							"name": "alligator"
						},
						{
							"position": [
								36,
								7
							],
							"name": "beans"
						},
						{
							"position": [
								36,
								8
							],
							"name": "flag"
						},
						{
							"position": [
								36,
								9
							],
							"name": "computer"
						},
						{
							"position": [
								37,
								0
							],
							"name": "cook"
						},
						{
							"position": [
								37,
								1
							],
							"name": "USB"
						},
						{
							"position": [
								37,
								2
							],
							"name": "cave"
						},
						{
							"position": [
								37,
								3
							],
							"name": "robot"
						},
						{
							"position": [
								37,
								4
							],
							"name": "flag"
						},
						{
							"position": [
								37,
								5
							],
							"name": "king"
						},
						{
							"position": [
								37,
								6
							],
							"name": "bat"
						},
						{
							"position": [
								37,
								7
							],
							"name": "jacket"
						},
						{
							"position": [
								37,
								8
							],
							"name": "teacher"
						},
						{
							"position": [
								37,
								9
							],
							"name": "programmer"
						},
						{
							"position": [
								38,
								0
							],
							"name": "boot"
						},
						{
							"position": [
								38,
								1
							],
							"name": "people"
						},
						{
							"position": [
								38,
								2
							],
							"name": "marijuana"
						},
						{
							"position": [
								38,
								3
							],
							"name": "teacher"
						},
						{
							"position": [
								38,
								4
							],
							"name": "microbes"
						},
						{
							"position": [
								38,
								5
							],
							"name": "sink"
						},
						{
							"position": [
								38,
								6
							],
							"name": "soldier"
						},
						{
							"position": [
								38,
								7
							],
							"name": "bench"
						},
						{
							"position": [
								38,
								8
							],
							"name": "doctor"
						},
						{
							"position": [
								38,
								9
							],
							"name": "bat"
						},
						{
							"position": [
								39,
								0
							],
							"name": "soldier"
						},
						{
							"position": [
								39,
								1
							],
							"name": "touchpad"
						},
						{
							"position": [
								39,
								2
							],
							"name": "snake"
						},
						{
							"position": [
								39,
								3
							],
							"name": "snack"
						},
						{
							"position": [
								39,
								4
							],
							"name": "cop"
						},
						{
							"position": [
								39,
								5
							],
							"name": "dirt"
						},
						{
							"position": [
								39,
								6
							],
							"name": "rocks"
						},
						{
							"position": [
								39,
								7
							],
							"name": "shoe"
						},
						{
							"position": [
								39,
								8
							],
							"name": "barrels"
						},
						{
							"position": [
								39,
								9
							],
							"name": "sphere"
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
						],
						[
							30,
							1
						],
						[
							30,
							2
						],
						[
							30,
							3
						],
						[
							30,
							4
						],
						[
							30,
							5
						],
						[
							30,
							6
						],
						[
							30,
							7
						],
						[
							31,
							8
						],
						[
							32,
							7
						],
						[
							32,
							6
						],
						[
							32,
							5
						],
						[
							32,
							4
						],
						[
							32,
							3
						],
						[
							32,
							2
						],
						[
							32,
							1
						],
						[
							33,
							1
						],
						[
							34,
							1
						],
						[
							34,
							2
						],
						[
							34,
							3
						],
						[
							34,
							4
						],
						[
							34,
							5
						],
						[
							34,
							6
						],
						[
							34,
							7
						],
						[
							35,
							8
						],
						[
							36,
							7
						],
						[
							36,
							6
						],
						[
							36,
							5
						],
						[
							36,
							4
						],
						[
							36,
							3
						],
						[
							36,
							2
						],
						[
							36,
							1
						],
						[
							37,
							1
						],
						[
							38,
							1
						],
						[
							38,
							2
						],
						[
							38,
							3
						],
						[
							38,
							4
						],
						[
							38,
							5
						],
						[
							38,
							6
						],
						[
							38,
							7
						],
						[
							39,
							8
						]
					],
					"hintWord": [
						[
							"NA",
							"NA",
							"amphibian",
							"frog",
							"kermit",
							"retile",
							"toad"
						],
						[
							"serpent",
							"snake",
							"adder",
							"reptile",
							"serpent",
							"snake",
							"sperm",
							"worm"
						],
						[
							"gunman",
							"soldier",
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
							"soldier",
							"Terrorist"
						],
						[
							"NA",
							"NA",
							"exit",
							"runners",
							"running",
							"team"
						],
						[
							"touchscreen",
							"tablet",
							"ipad",
							"phone",
							"tablet",
							"touch",
							"touchpad",
							"touchscreen"
						],
						[
							"NA",
							"NA",
							"athlete",
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
							"NA",
							"NA",
							"desert",
							"sand dunes",
							"sandhills"
						],
						[
							"artist",
							"painter",
							"artist",
							"painter",
							"painting"
						],
						[
							"NA",
							"NA",
							"beach",
							"beach umbrella",
							"summer",
							"sun",
							"sun shade",
							"sun umbrella",
							"umbrella"
						],
						[
							"NA",
							"NA",
							"cello",
							"instrument",
							"mandolin",
							"musical instrument",
							"viola",
							"violin"
						],
						[
							"people",
							"crowd",
							"audience",
							"crowd",
							"group",
							"group of people",
							"mob",
							"people",
							"queue",
							"users"
						],
						[
							"mouse",
							"rat",
							"gerbil",
							"hamster",
							"mouse",
							"rat",
							"rodent"
						],
						[
							"NA",
							"NA",
							"berries",
							"berry fruit",
							"blackberry",
							"fruit",
							"raspberry",
							"strawberry",
							"summer fruit"
						],
						[
							"NA",
							"NA",
							"basin",
							"sink",
							"tap"
						],
						[
							"money",
							"coins",
							"cash",
							"coins",
							"dollar coins",
							"dollars",
							"gold coins",
							"money"
						],
						[
							"NA",
							"NA",
							"accessible parking",
							"disabled parking",
							"mobility park",
							"parking",
							"wheelchair park"
						],
						[
							"avenue",
							"highway",
							"avenue",
							"bridge",
							"highway",
							"ladder",
							"lane",
							"road",
							"street",
							"train tracks"
						],
						[
							"recycling bin",
							"rubbish bin",
							"bin",
							"recycling bin",
							"rubbish bin",
							"wheely bin"
						],
						[
							"NA",
							"NA",
							"alcohol",
							"booze",
							"champagne",
							"cheers",
							"drinks",
							"toast",
							"wine",
							"wine glasses"
						],
						[
							"NA",
							"NA",
							"blossom",
							"flowers",
							"plant",
							"weed"
						],
						[
							"pastor",
							"priest",
							"christian",
							"crucifix",
							"cross",
							"god botherer",
							"minister",
							"necklace",
							"nun",
							"pastor",
							"priest",
							"religious"
						],
						[
							"knife",
							"dagger",
							"broken sword",
							"dagger",
							"knife",
							"lipstick"
						],
						[
							"NA",
							"NA",
							"tree"
						],
						[
							"NA",
							"NA",
							"bench",
							"garden bench",
							"park bench",
							"seat"
						],
						[
							"robber",
							"thief",
							"burglar",
							"cash",
							"heist",
							"money",
							"robber",
							"thief"
						],
						[
							"NA",
							"NA",
							"cell phone",
							"iphone",
							"mobile phone",
							"phone",
							"smart phone",
							"smartphone",
							"Android"
						],
						[
							"NA",
							"NA",
							"doctor",
							"gp",
							"medical professional",
							"specialist"
						],
						[
							"drugs",
							"medicine",
							"drugs",
							"medication",
							"medicine",
							"meds",
							"pills",
							"tablets"
						],
						[
							"NA",
							"NA",
							"crockery",
							"dinner plate",
							"plate"
						],
						[
							"wolf",
							"dog",
							"canine",
							"chasing",
							"dog",
							"hound",
							"kangaroo",
							"mongrel",
							"running",
							"wallaby",
							"wolf"
						],
						[
							"NA",
							"NA",
							"cocktail",
							"drinks",
							"glass",
							"straw"
						],
						[
							"NA",
							"NA",
							"modem",
							"router",
							"wifi",
							"wireless router"
						],
						[
							"sand",
							"gravel",
							"clay",
							"dirt",
							"gravel",
							"heap",
							"pile",
							"sand",
							"soil"
						],
						[
							"NA",
							"NA",
							"bend",
							"elbow bend",
							"joint",
							"pipes",
							"plumber",
							"plumbing"
						],
						[
							"NA",
							"NA",
							"bird",
							"chicken",
							"chook",
							"hen",
							"rooster"
						],
						[
							"ship",
							"boat",
							"boat",
							"cruiseliner",
							"ferry",
							"sea",
							"ship",
							"steamer",
							"tug boat",
							"yatch"
						],
						[
							"cattle",
							"cows",
							"angus",
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
							"cook",
							"chef",
							"baker",
							"chef",
							"cook",
							"woman"
						],
						[
							"NA",
							"NA",
							"barbecue",
							"bbq",
							"fire",
							"fireplace",
							"flammable",
							"furnace",
							"hot",
							"table"
						],
						[
							"crocodile",
							"alligator",
							"alligator",
							"crocodile",
							"reptile"
						],
						[
							"usb stick",
							"memory stick",
							"flash drive",
							"memory stick",
							"thumb drive",
							"usb drive",
							"usb stick"
						],
						[
							"NA",
							"NA",
							"barrels",
							"beehive",
							"drum",
							"shield"
						],
						[
							"shoe",
							"work boot",
							"boot",
							"doc martin",
							"high top",
							"safety boot",
							"shoe",
							"work boot"
						],
						[
							"electric chair",
							"king",
							"death",
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
							"NA",
							"NA",
							"beans",
							"broad beans",
							"coffee",
							"coffee beans",
							"legumes"
						],
						[
							"NA",
							"NA",
							"arch",
							"cave",
							"hole in the rock",
							"rock"
						],
						[
							"sprog",
							"kid",
							"baby",
							"child",
							"crawl",
							"crawler",
							"crawling",
							"infant",
							"kid",
							"sprog",
							"toddler"
						],
						[
							"android",
							"robot",
							"android",
							"droid",
							"machine",
							"metal mickey",
							"robot"
						],
						[
							"woman",
							"lady",
							"chick",
							"female",
							"girl",
							"lady",
							"woman"
						],
						[
							"leaf",
							"weed",
							"cannibis",
							"leaf",
							"marijuana",
							"plant",
							"pot",
							"weed"
						],
						[
							"NA",
							"NA",
							"boulders",
							"cliff",
							"rocks"
						],
						[
							"NA",
							"NA",
							"computer game",
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
							"sofa",
							"couch",
							"arm chair",
							"chair",
							"couch",
							"easy chair",
							"sofa"
						],
						[
							"bunny",
							"rabbit",
							"bunny",
							"hare",
							"rabbit"
						],
						[
							"NA",
							"NA",
							"flora",
							"flower",
							"lotus flower",
							"petals",
							"petunia",
							"rafflesi"
						],
						[
							"NA",
							"NA",
							"computer geek",
							"computer guy",
							"computer scientist",
							"computer user",
							"geek",
							"it worker",
							"sys admin",
							"techie"
						],
						[
							"NA",
							"NA",
							"caretaker",
							"cleaner",
							"dustman",
							"janitor"
						],
						[
							"germs",
							"microorganism",
							"antibody",
							"bacteria",
							"bugs",
							"cells",
							"germs",
							"infection",
							"microorganism",
							"virus"
						],
						[
							"laptop",
							"computer",
							"computer",
							"laptop"
						],
						[
							"buildings",
							"town",
							"buildings",
							"city",
							"cityscape",
							"high-rise buildings",
							"skyscrapers",
							"town"
						],
						[
							"NA",
							"NA",
							"automobile",
							"car",
							"hatchback",
							"old dunger",
							"vehicle"
						],
						[
							"NA",
							"NA",
							"baseball",
							"baseball bat",
							"bat",
							"softball bat"
						],
						[
							"cathedral",
							"church",
							"cathedral",
							"church"
						],
						[
							"lecturer",
							"teacher",
							"instructor",
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
							"NA",
							"NA",
							"christianity",
							"cross",
							"fire hydrant"
						],
						[
							"pollution",
							"factory",
							"castle",
							"factory",
							"industry",
							"manufacturer",
							"pollution",
							"workshop"
						],
						[
							"face",
							"socket",
							"face",
							"plug",
							"powerpoint",
							"sad",
							"smiley",
							"socket",
							"tv"
						],
						[
							"insect",
							"butterfly",
							"bug",
							"butterfly",
							"insect",
							"moth"
						],
						[
							"NA",
							"NA",
							"bird",
							"eagle",
							"hawk",
							"pigeon"
						],
						[
							"NA",
							"NA",
							"ajar",
							"door",
							"doorway",
							"entrance",
							"exit",
							"open"
						],
						[
							"NA",
							"NA",
							"3.5 floppy",
							"3.5 inch disc",
							"disk",
							"file space",
							"floppy",
							"floppy disk",
							"save",
							"storage"
						],
						[
							"NA",
							"NA",
							"clothes",
							"clothing",
							"gear",
							"outfit"
						],
						[
							"sphere",
							"ball",
							"at&t",
							"ball",
							"circle",
							"globe",
							"sphere"
						],
						[
							"pizza slice",
							"concrete",
							"bog",
							"cement",
							"concrete",
							"filler",
							"grout",
							"mortar",
							"mud",
							"pizza",
							"pizza slice",
							"plaster"
						],
						[
							"house",
							"home",
							"accommodation",
							"domicile",
							"habitat",
							"home",
							"house"
						],
						[
							"NA",
							"NA",
							"cart",
							"shopping cart",
							"shopping trolley",
							"trolley"
						],
						[
							"NA",
							"NA",
							"aporo",
							"apple",
							"fruit",
							"red delicious"
						],
						[
							"NA",
							"NA",
							"flag",
							"pennant"
						],
						[
							"NA",
							"NA",
							"cop",
							"pig",
							"police officer",
							"policeman",
							"security guard",
							"sheriff"
						],
						[
							"cup",
							"mug",
							"breakfast cup",
							"coffee",
							"coffee cup",
							"cup",
							"cuppa",
							"mug",
							"tea",
							"tea cup"
						],
						[
							"drugs",
							"medicine",
							"drugs",
							"medication",
							"medicine",
							"meds",
							"pills",
							"tablets"
						],
						[
							"NA",
							"NA",
							"baseball",
							"baseball bat",
							"bat",
							"softball bat"
						],
						[
							"NA",
							"NA",
							"bird",
							"eagle",
							"hawk",
							"pigeon"
						],
						[
							"pollution",
							"factory",
							"castle",
							"factory",
							"industry",
							"manufacturer",
							"pollution",
							"workshop"
						],
						[
							"NA",
							"NA",
							"ajar",
							"door",
							"doorway",
							"entrance",
							"exit",
							"open"
						],
						[
							"NA",
							"NA",
							"alcohol",
							"booze",
							"champagne",
							"cheers",
							"drinks",
							"toast",
							"wine",
							"wine glasses"
						],
						[
							"NA",
							"NA",
							"cop",
							"pig",
							"police officer",
							"policeman",
							"security guard",
							"sheriff"
						],
						[
							"NA",
							"NA",
							"doctor",
							"gp",
							"medical professional",
							"specialist"
						],
						[
							"NA",
							"NA",
							"arch",
							"cave",
							"hole in the rock",
							"rock"
						],
						[
							"NA",
							"NA",
							"computer game",
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
							"knife",
							"dagger",
							"broken sword",
							"dagger",
							"knife",
							"lipstick"
						],
						[
							"NA",
							"NA",
							"exit",
							"runners",
							"running",
							"team"
						],
						[
							"NA",
							"NA",
							"aporo",
							"apple",
							"fruit",
							"red delicious"
						],
						[
							"NA",
							"NA",
							"amphibian",
							"frog",
							"kermit",
							"retile",
							"toad"
						],
						[
							"NA",
							"NA",
							"crockery",
							"dinner plate",
							"plate"
						],
						[
							"bunny",
							"rabbit",
							"bunny",
							"hare",
							"rabbit"
						],
						[
							"NA",
							"NA",
							"caretaker",
							"cleaner",
							"dustman",
							"janitor"
						],
						[
							"cup",
							"mug",
							"breakfast cup",
							"coffee",
							"coffee cup",
							"cup",
							"cuppa",
							"mug",
							"tea",
							"tea cup"
						],
						[
							"NA",
							"NA",
							"tree"
						],
						[
							"NA",
							"NA",
							"cart",
							"shopping cart",
							"shopping trolley",
							"trolley"
						],
						[
							"avenue",
							"highway",
							"avenue",
							"bridge",
							"highway",
							"ladder",
							"lane",
							"road",
							"street",
							"train tracks"
						],
						[
							"house",
							"home",
							"accommodation",
							"domicile",
							"habitat",
							"home",
							"house"
						],
						[
							"cook",
							"chef",
							"baker",
							"chef",
							"cook",
							"woman"
						],
						[
							"money",
							"coins",
							"cash",
							"coins",
							"dollar coins",
							"dollars",
							"gold coins",
							"money"
						],
						[
							"face",
							"socket",
							"face",
							"plug",
							"powerpoint",
							"sad",
							"smiley",
							"socket",
							"tv"
						],
						[
							"cattle",
							"cows",
							"angus",
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
							"NA",
							"NA",
							"automobile",
							"car",
							"hatchback",
							"old dunger",
							"vehicle"
						],
						[
							"NA",
							"NA",
							"modem",
							"router",
							"wifi",
							"wireless router"
						],
						[
							"NA",
							"NA",
							"cocktail",
							"drinks",
							"glass",
							"straw"
						],
						[
							"android",
							"robot",
							"android",
							"droid",
							"machine",
							"metal mickey",
							"robot"
						],
						[
							"NA",
							"NA",
							"boulders",
							"cliff",
							"rocks"
						],
						[
							"wolf",
							"dog",
							"canine",
							"chasing",
							"dog",
							"hound",
							"kangaroo",
							"mongrel",
							"running",
							"wallaby",
							"wolf"
						],
						[
							"NA",
							"NA",
							"bird",
							"chicken",
							"chook",
							"hen",
							"rooster"
						],
						[
							"laptop",
							"computer",
							"computer",
							"laptop"
						],
						[
							"mouse",
							"rat",
							"gerbil",
							"hamster",
							"mouse",
							"rat",
							"rodent"
						],
						[
							"sand",
							"gravel",
							"clay",
							"dirt",
							"gravel",
							"heap",
							"pile",
							"sand",
							"soil"
						],
						[
							"NA",
							"NA",
							"cello",
							"instrument",
							"mandolin",
							"musical instrument",
							"viola",
							"violin"
						],
						[
							"recycling bin",
							"rubbish bin",
							"bin",
							"recycling bin",
							"rubbish bin",
							"wheely bin"
						],
						[
							"NA",
							"NA",
							"barbecue",
							"bbq",
							"fire",
							"fireplace",
							"flammable",
							"furnace",
							"hot",
							"table"
						],
						[
							"pastor",
							"priest",
							"christian",
							"crucifix",
							"cross",
							"god botherer",
							"minister",
							"necklace",
							"nun",
							"pastor",
							"priest",
							"religious"
						],
						[
							"sofa",
							"couch",
							"arm chair",
							"chair",
							"couch",
							"easy chair",
							"sofa"
						],
						[
							"NA",
							"NA",
							"accessible parking",
							"disabled parking",
							"mobility park",
							"parking",
							"wheelchair park"
						],
						[
							"NA",
							"NA",
							"cell phone",
							"iphone",
							"mobile phone",
							"phone",
							"smart phone",
							"smartphone",
							"Android"
						],
						[
							"NA",
							"NA",
							"3.5 floppy",
							"3.5 inch disc",
							"disk",
							"file space",
							"floppy",
							"floppy disk",
							"save",
							"storage"
						],
						[
							"cathedral",
							"church",
							"cathedral",
							"church"
						],
						[
							"serpent",
							"snake",
							"adder",
							"reptile",
							"serpent",
							"snake",
							"sperm",
							"worm"
						],
						[
							"NA",
							"NA",
							"flora",
							"flower",
							"lotus flower",
							"petals",
							"petunia",
							"rafflesi"
						],
						[
							"insect",
							"butterfly",
							"bug",
							"butterfly",
							"insect",
							"moth"
						],
						[
							"NA",
							"NA",
							"bend",
							"elbow bend",
							"joint",
							"pipes",
							"plumber",
							"plumbing"
						],
						[
							"pizza slice",
							"concrete",
							"bog",
							"cement",
							"concrete",
							"filler",
							"grout",
							"mortar",
							"mud",
							"pizza",
							"pizza slice",
							"plaster"
						],
						[
							"NA",
							"NA",
							"clothes",
							"clothing",
							"gear",
							"outfit"
						],
						[
							"sphere",
							"ball",
							"at&t",
							"ball",
							"circle",
							"globe",
							"sphere"
						],
						[
							"NA",
							"NA",
							"athlete",
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
							"woman",
							"lady",
							"chick",
							"female",
							"girl",
							"lady",
							"woman"
						],
						[
							"artist",
							"painter",
							"artist",
							"painter",
							"painting"
						],
						[
							"NA",
							"NA",
							"blossom",
							"flowers",
							"plant",
							"weed"
						],
						[
							"NA",
							"NA",
							"christianity",
							"cross",
							"fire hydrant"
						],
						[
							"NA",
							"NA",
							"beans",
							"broad beans",
							"coffee",
							"coffee beans",
							"legumes"
						],
						[
							"crocodile",
							"alligator",
							"alligator",
							"crocodile",
							"reptile"
						],
						[
							"NA",
							"NA",
							"berries",
							"berry fruit",
							"blackberry",
							"fruit",
							"raspberry",
							"strawberry",
							"summer fruit"
						],
						[
							"touchscreen",
							"tablet",
							"ipad",
							"phone",
							"tablet",
							"touch",
							"touchpad",
							"touchscreen"
						],
						[
							"NA",
							"NA",
							"computer geek",
							"computer guy",
							"computer scientist",
							"computer user",
							"geek",
							"it worker",
							"sys admin",
							"techie"
						],
						[
							"ship",
							"boat",
							"boat",
							"cruiseliner",
							"ferry",
							"sea",
							"ship",
							"steamer",
							"tug boat",
							"yatch"
						],
						[
							"NA",
							"NA",
							"flag",
							"pennant"
						],
						[
							"usb stick",
							"memory stick",
							"flash drive",
							"memory stick",
							"thumb drive",
							"usb drive",
							"usb stick"
						],
						[
							"people",
							"crowd",
							"audience",
							"crowd",
							"group",
							"group of people",
							"mob",
							"people",
							"queue",
							"users"
						],
						[
							"leaf",
							"weed",
							"cannibis",
							"leaf",
							"marijuana",
							"plant",
							"pot",
							"weed"
						],
						[
							"lecturer",
							"teacher",
							"instructor",
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
							"germs",
							"microorganism",
							"antibody",
							"bacteria",
							"bugs",
							"cells",
							"germs",
							"infection",
							"microorganism",
							"virus"
						],
						[
							"NA",
							"NA",
							"basin",
							"sink",
							"tap"
						],
						[
							"gunman",
							"soldier",
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
							"soldier",
							"Terrorist"
						],
						[
							"NA",
							"NA",
							"bench",
							"garden bench",
							"park bench",
							"seat"
						],
						[
							"NA",
							"NA",
							"barrels",
							"beehive",
							"drum",
							"shield"
						],
						[
							"NA",
							"NA",
							"desert",
							"sand dunes",
							"sandhills"
						],
						[
							"electric chair",
							"king",
							"death",
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
							"NA",
							"NA",
							"beach",
							"beach umbrella",
							"summer",
							"sun",
							"sun shade",
							"sun umbrella",
							"umbrella"
						],
						[
							"robber",
							"thief",
							"burglar",
							"cash",
							"heist",
							"money",
							"robber",
							"thief"
						],
						[
							"sprog",
							"kid",
							"baby",
							"child",
							"crawl",
							"crawler",
							"crawling",
							"infant",
							"kid",
							"sprog",
							"toddler"
						],
						[
							"buildings",
							"town",
							"buildings",
							"city",
							"cityscape",
							"high-rise buildings",
							"skyscrapers",
							"town"
						],
						[
							"shoe",
							"work boot",
							"boot",
							"doc martin",
							"high top",
							"safety boot",
							"shoe",
							"work boot"
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
							"name": "rocks"
						},
						{
							"position": [
								0,
								1
							],
							"name": "woman"
						},
						{
							"position": [
								0,
								2
							],
							"name": "cart"
						},
						{
							"position": [
								0,
								3
							],
							"name": "kids"
						},
						{
							"position": [
								0,
								4
							],
							"name": "belly"
						},
						{
							"position": [
								0,
								5
							],
							"name": "eraser"
						},
						{
							"position": [
								0,
								6
							],
							"name": "snack"
						},
						{
							"position": [
								0,
								7
							],
							"name": "house"
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
							"name": "clothes"
						},
						{
							"position": [
								1,
								0
							],
							"name": "knife"
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
							"name": "dunes"
						},
						{
							"position": [
								1,
								3
							],
							"name": "barrels"
						},
						{
							"position": [
								1,
								4
							],
							"name": "car"
						},
						{
							"position": [
								1,
								5
							],
							"name": "dog"
						},
						{
							"position": [
								1,
								6
							],
							"name": "touchpad"
						},
						{
							"position": [
								1,
								7
							],
							"name": "belly"
						},
						{
							"position": [
								1,
								8
							],
							"name": "thief"
						},
						{
							"position": [
								1,
								9
							],
							"name": "city"
						},
						{
							"position": [
								2,
								0
							],
							"name": "cook"
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
							"name": "people"
						},
						{
							"position": [
								2,
								9
							],
							"name": "hen"
						},
						{
							"position": [
								3,
								0
							],
							"name": "drugs"
						},
						{
							"position": [
								3,
								1
							],
							"name": "RAM"
						},
						{
							"position": [
								3,
								2
							],
							"name": "cross"
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
							"name": "cup"
						},
						{
							"position": [
								3,
								5
							],
							"name": "beach"
						},
						{
							"position": [
								3,
								6
							],
							"name": "boot"
						},
						{
							"position": [
								3,
								7
							],
							"name": "ocean"
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
							"name": "drink"
						},
						{
							"position": [
								4,
								0
							],
							"name": "nuke_plant"
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
							"name": "rabbit"
						},
						{
							"position": [
								4,
								9
							],
							"name": "cart"
						},
						{
							"position": [
								5,
								0
							],
							"name": "frog"
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
							"name": "flag"
						},
						{
							"position": [
								5,
								3
							],
							"name": "knife"
						},
						{
							"position": [
								5,
								4
							],
							"name": "artist"
						},
						{
							"position": [
								5,
								5
							],
							"name": "router"
						},
						{
							"position": [
								5,
								6
							],
							"name": "eraser"
						},
						{
							"position": [
								5,
								7
							],
							"name": "wine"
						},
						{
							"position": [
								5,
								8
							],
							"name": "rocks"
						},
						{
							"position": [
								5,
								9
							],
							"name": "doctor"
						},
						{
							"position": [
								6,
								0
							],
							"name": "referee"
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
							"name": "dog"
						},
						{
							"position": [
								6,
								9
							],
							"name": "kids"
						},
						{
							"position": [
								7,
								0
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								7,
								1
							],
							"name": "cook"
						},
						{
							"position": [
								7,
								2
							],
							"name": "cart"
						},
						{
							"position": [
								7,
								3
							],
							"name": "beans"
						},
						{
							"position": [
								7,
								4
							],
							"name": "doctor"
						},
						{
							"position": [
								7,
								5
							],
							"name": "cop"
						},
						{
							"position": [
								7,
								6
							],
							"name": "drugs"
						},
						{
							"position": [
								7,
								7
							],
							"name": "gun"
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
							"name": "cop"
						},
						{
							"position": [
								8,
								0
							],
							"name": "programmer"
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
							"name": "church"
						},
						{
							"position": [
								8,
								9
							],
							"name": "tree"
						},
						{
							"position": [
								9,
								0
							],
							"name": "pipe"
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
							"name": "cattle"
						},
						{
							"position": [
								9,
								3
							],
							"name": "violin"
						},
						{
							"position": [
								9,
								4
							],
							"name": "gun"
						},
						{
							"position": [
								9,
								5
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								9,
								6
							],
							"name": "snack"
						},
						{
							"position": [
								9,
								7
							],
							"name": "baby"
						},
						{
							"position": [
								9,
								8
							],
							"name": "parking_sp"
						},
						{
							"position": [
								9,
								9
							],
							"name": "pigeon"
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
						]
					],
					"hintWord": [
						[
							"drugs",
							"medicine",
							"drugs",
							"medication",
							"medicine",
							"meds",
							"pills",
							"tablets"
						],
						[
							"wolf",
							"dog",
							"canine",
							"chasing",
							"dog",
							"hound",
							"kangaroo",
							"mongrel",
							"running",
							"wallaby",
							"wolf"
						],
						[
							"pastor",
							"priest",
							"christian",
							"crucifix",
							"cross",
							"god botherer",
							"minister",
							"necklace",
							"nun",
							"pastor",
							"priest",
							"religious"
						],
						[
							"pollution",
							"factory",
							"castle",
							"factory",
							"industry",
							"manufacturer",
							"pollution",
							"workshop"
						],
						[
							"germs",
							"microorganism",
							"antibody",
							"bacteria",
							"bugs",
							"cells",
							"germs",
							"infection",
							"microorganism",
							"virus"
						],
						[
							"gunman",
							"soldier",
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
							"soldier",
							"Terrorist"
						],
						[
							"sprog",
							"kid",
							"baby",
							"child",
							"crawl",
							"crawler",
							"crawling",
							"infant",
							"kid",
							"sprog",
							"toddler"
						],
						[
							"usb stick",
							"memory stick",
							"flash drive",
							"memory stick",
							"thumb drive",
							"usb drive",
							"usb stick"
						],
						[
							"laptop",
							"computer",
							"computer",
							"laptop"
						],
						[
							"sand",
							"gravel",
							"clay",
							"dirt",
							"gravel",
							"heap",
							"pile",
							"sand",
							"soil"
						],
						[
							"buildings",
							"town",
							"buildings",
							"city",
							"cityscape",
							"high-rise buildings",
							"skyscrapers",
							"town"
						],
						[
							"android",
							"robot",
							"android",
							"droid",
							"machine",
							"metal mickey",
							"robot"
						],
						[
							"pizza slice",
							"concrete",
							"bog",
							"cement",
							"concrete",
							"filler",
							"grout",
							"mortar",
							"mud",
							"pizza",
							"pizza slice",
							"plaster"
						],
						[
							"face",
							"socket",
							"face",
							"plug",
							"powerpoint",
							"sad",
							"smiley",
							"socket",
							"tv"
						],
						[
							"cook",
							"chef",
							"baker",
							"chef",
							"cook",
							"woman"
						],
						[
							"avenue",
							"highway",
							"avenue",
							"bridge",
							"highway",
							"ladder",
							"lane",
							"road",
							"street",
							"train tracks"
						],
						[
							"recycling bin",
							"rubbish bin",
							"bin",
							"recycling bin",
							"rubbish bin",
							"wheely bin"
						],
						[
							"shoe",
							"work boot",
							"boot",
							"doc martin",
							"high top",
							"safety boot",
							"shoe",
							"work boot"
						],
						[
							"sphere",
							"ball",
							"at&t",
							"ball",
							"circle",
							"globe",
							"sphere"
						],
						[
							"people",
							"crowd",
							"audience",
							"crowd",
							"group",
							"group of people",
							"mob",
							"people",
							"queue",
							"users"
						],
						[
							"cathedral",
							"church",
							"cathedral",
							"church"
						],
						[
							"ship",
							"boat",
							"boat",
							"cruiseliner",
							"ferry",
							"sea",
							"ship",
							"steamer",
							"tug boat",
							"yatch"
						],
						[
							"sofa",
							"couch",
							"arm chair",
							"chair",
							"couch",
							"easy chair",
							"sofa"
						],
						[
							"house",
							"home",
							"accommodation",
							"domicile",
							"habitat",
							"home",
							"house"
						],
						[
							"crocodile",
							"alligator",
							"alligator",
							"crocodile",
							"reptile"
						],
						[
							"artist",
							"painter",
							"artist",
							"painter",
							"painting"
						],
						[
							"leaf",
							"weed",
							"cannibis",
							"leaf",
							"marijuana",
							"plant",
							"pot",
							"weed"
						],
						[
							"cattle",
							"cows",
							"angus",
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
							"mouse",
							"rat",
							"gerbil",
							"hamster",
							"mouse",
							"rat",
							"rodent"
						],
						[
							"robber",
							"thief",
							"burglar",
							"cash",
							"heist",
							"money",
							"robber",
							"thief"
						],
						[
							"bunny",
							"rabbit",
							"bunny",
							"hare",
							"rabbit"
						],
						[
							"electric chair",
							"king",
							"death",
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
							"touchscreen",
							"tablet",
							"ipad",
							"phone",
							"tablet",
							"touch",
							"touchpad",
							"touchscreen"
						],
						[
							"cup",
							"mug",
							"breakfast cup",
							"coffee",
							"coffee cup",
							"cup",
							"cuppa",
							"mug",
							"tea",
							"tea cup"
						],
						[
							"serpent",
							"snake",
							"adder",
							"reptile",
							"serpent",
							"snake",
							"sperm",
							"worm"
						],
						[
							"insect",
							"butterfly",
							"bug",
							"butterfly",
							"insect",
							"moth"
						],
						[
							"knife",
							"dagger",
							"broken sword",
							"dagger",
							"knife",
							"lipstick"
						],
						[
							"money",
							"coins",
							"cash",
							"coins",
							"dollar coins",
							"dollars",
							"gold coins",
							"money"
						],
						[
							"lecturer",
							"teacher",
							"instructor",
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
							"woman",
							"lady",
							"chick",
							"female",
							"girl",
							"lady",
							"woman"
						],
						[
							"knife",
							"dagger",
							"broken sword",
							"dagger",
							"knife",
							"lipstick"
						],
						[
							"robber",
							"thief",
							"burglar",
							"cash",
							"heist",
							"money",
							"robber",
							"thief"
						],
						[
							"laptop",
							"computer",
							"computer",
							"laptop"
						],
						[
							"lecturer",
							"teacher",
							"instructor",
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
							"pizza slice",
							"concrete",
							"bog",
							"cement",
							"concrete",
							"filler",
							"grout",
							"mortar",
							"mud",
							"pizza",
							"pizza slice",
							"plaster"
						],
						[
							"money",
							"coins",
							"cash",
							"coins",
							"dollar coins",
							"dollars",
							"gold coins",
							"money"
						],
						[
							"sofa",
							"couch",
							"arm chair",
							"chair",
							"couch",
							"easy chair",
							"sofa"
						],
						[
							"buildings",
							"town",
							"buildings",
							"city",
							"cityscape",
							"high-rise buildings",
							"skyscrapers",
							"town"
						],
						[
							"bunny",
							"rabbit",
							"bunny",
							"hare",
							"rabbit"
						],
						[
							"shoe",
							"work boot",
							"boot",
							"doc martin",
							"high top",
							"safety boot",
							"shoe",
							"work boot"
						],
						[
							"germs",
							"microorganism",
							"antibody",
							"bacteria",
							"bugs",
							"cells",
							"germs",
							"infection",
							"microorganism",
							"virus"
						],
						[
							"wolf",
							"dog",
							"canine",
							"chasing",
							"dog",
							"hound",
							"kangaroo",
							"mongrel",
							"running",
							"wallaby",
							"wolf"
						],
						[
							"cathedral",
							"church",
							"cathedral",
							"church"
						],
						[
							"sprog",
							"kid",
							"baby",
							"child",
							"crawl",
							"crawler",
							"crawling",
							"infant",
							"kid",
							"sprog",
							"toddler"
						],
						[
							"woman",
							"lady",
							"chick",
							"female",
							"girl",
							"lady",
							"woman"
						],
						[
							"cup",
							"mug",
							"breakfast cup",
							"coffee",
							"coffee cup",
							"cup",
							"cuppa",
							"mug",
							"tea",
							"tea cup"
						],
						[
							"leaf",
							"weed",
							"cannibis",
							"leaf",
							"marijuana",
							"plant",
							"pot",
							"weed"
						],
						[
							"recycling bin",
							"rubbish bin",
							"bin",
							"recycling bin",
							"rubbish bin",
							"wheely bin"
						],
						[
							"sand",
							"gravel",
							"clay",
							"dirt",
							"gravel",
							"heap",
							"pile",
							"sand",
							"soil"
						],
						[
							"crocodile",
							"alligator",
							"alligator",
							"crocodile",
							"reptile"
						],
						[
							"gunman",
							"soldier",
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
							"soldier",
							"Terrorist"
						],
						[
							"sphere",
							"ball",
							"at&t",
							"ball",
							"circle",
							"globe",
							"sphere"
						],
						[
							"pollution",
							"factory",
							"castle",
							"factory",
							"industry",
							"manufacturer",
							"pollution",
							"workshop"
						],
						[
							"touchscreen",
							"tablet",
							"ipad",
							"phone",
							"tablet",
							"touch",
							"touchpad",
							"touchscreen"
						],
						[
							"people",
							"crowd",
							"audience",
							"crowd",
							"group",
							"group of people",
							"mob",
							"people",
							"queue",
							"users"
						],
						[
							"house",
							"home",
							"accommodation",
							"domicile",
							"habitat",
							"home",
							"house"
						],
						[
							"drugs",
							"medicine",
							"drugs",
							"medication",
							"medicine",
							"meds",
							"pills",
							"tablets"
						],
						[
							"electric chair",
							"king",
							"death",
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
							"usb stick",
							"memory stick",
							"flash drive",
							"memory stick",
							"thumb drive",
							"usb drive",
							"usb stick"
						],
						[
							"serpent",
							"snake",
							"adder",
							"reptile",
							"serpent",
							"snake",
							"sperm",
							"worm"
						],
						[
							"artist",
							"painter",
							"artist",
							"painter",
							"painting"
						],
						[
							"mouse",
							"rat",
							"gerbil",
							"hamster",
							"mouse",
							"rat",
							"rodent"
						],
						[
							"android",
							"robot",
							"android",
							"droid",
							"machine",
							"metal mickey",
							"robot"
						],
						[
							"ship",
							"boat",
							"boat",
							"cruiseliner",
							"ferry",
							"sea",
							"ship",
							"steamer",
							"tug boat",
							"yatch"
						],
						[
							"face",
							"socket",
							"face",
							"plug",
							"powerpoint",
							"sad",
							"smiley",
							"socket",
							"tv"
						],
						[
							"insect",
							"butterfly",
							"bug",
							"butterfly",
							"insect",
							"moth"
						],
						[
							"avenue",
							"highway",
							"avenue",
							"bridge",
							"highway",
							"ladder",
							"lane",
							"road",
							"street",
							"train tracks"
						],
						[
							"pastor",
							"priest",
							"christian",
							"crucifix",
							"cross",
							"god botherer",
							"minister",
							"necklace",
							"nun",
							"pastor",
							"priest",
							"religious"
						],
						[
							"cattle",
							"cows",
							"angus",
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
							"cook",
							"chef",
							"baker",
							"chef",
							"cook",
							"woman"
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
							"name": "bench"
						},
						{
							"position": [
								0,
								1
							],
							"name": "soldier"
						},
						{
							"position": [
								0,
								2
							],
							"name": "dirt"
						},
						{
							"position": [
								0,
								3
							],
							"name": "tree"
						},
						{
							"position": [
								0,
								4
							],
							"name": "clothes"
						},
						{
							"position": [
								0,
								5
							],
							"name": "Q45"
						},
						{
							"position": [
								0,
								6
							],
							"name": "couch"
						},
						{
							"position": [
								0,
								7
							],
							"name": "factory"
						},
						{
							"position": [
								0,
								8
							],
							"name": "tree"
						},
						{
							"position": [
								0,
								9
							],
							"name": "baby"
						},
						{
							"position": [
								1,
								0
							],
							"name": "dunes"
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
							"name": "road"
						},
						{
							"position": [
								1,
								3
							],
							"name": "hen"
						},
						{
							"position": [
								1,
								4
							],
							"name": "sphere"
						},
						{
							"position": [
								1,
								5
							],
							"name": "flower"
						},
						{
							"position": [
								1,
								6
							],
							"name": "baby"
						},
						{
							"position": [
								1,
								7
							],
							"name": "branch"
						},
						{
							"position": [
								1,
								8
							],
							"name": "alligator"
						},
						{
							"position": [
								1,
								9
							],
							"name": "clothes"
						},
						{
							"position": [
								2,
								0
							],
							"name": "cook"
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
							"name": "gun"
						},
						{
							"position": [
								2,
								9
							],
							"name": "wine"
						},
						{
							"position": [
								3,
								0
							],
							"name": "cattle"
						},
						{
							"position": [
								3,
								1
							],
							"name": "marijuana"
						},
						{
							"position": [
								3,
								2
							],
							"name": "cop"
						},
						{
							"position": [
								3,
								3
							],
							"name": "mouse"
						},
						{
							"position": [
								3,
								4
							],
							"name": "cop"
						},
						{
							"position": [
								3,
								5
							],
							"name": "drink"
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
							"name": "dog"
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
							"name": "referee"
						},
						{
							"position": [
								4,
								0
							],
							"name": "flag"
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
							"name": "bee"
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
							"name": "recycling"
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
							"name": "ship"
						},
						{
							"position": [
								5,
								3
							],
							"name": "rabbit"
						},
						{
							"position": [
								5,
								4
							],
							"name": "king"
						},
						{
							"position": [
								5,
								5
							],
							"name": "marijuana"
						},
						{
							"position": [
								5,
								6
							],
							"name": "man"
						},
						{
							"position": [
								5,
								7
							],
							"name": "teacher"
						},
						{
							"position": [
								5,
								8
							],
							"name": "car"
						},
						{
							"position": [
								5,
								9
							],
							"name": "thief"
						},
						{
							"position": [
								6,
								0
							],
							"name": "alligator"
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
							"name": "canoe"
						},
						{
							"position": [
								6,
								9
							],
							"name": "flag"
						},
						{
							"position": [
								7,
								0
							],
							"name": "mouse"
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
							"name": "man"
						},
						{
							"position": [
								7,
								3
							],
							"name": "programmer"
						},
						{
							"position": [
								7,
								4
							],
							"name": "barrels"
						},
						{
							"position": [
								7,
								5
							],
							"name": "beach"
						},
						{
							"position": [
								7,
								6
							],
							"name": "floppy"
						},
						{
							"position": [
								7,
								7
							],
							"name": "cattle"
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
							"name": "dirt"
						},
						{
							"position": [
								8,
								0
							],
							"name": "thief"
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
							"name": "knife"
						},
						{
							"position": [
								8,
								9
							],
							"name": "alligator"
						},
						{
							"position": [
								9,
								0
							],
							"name": "door"
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
							"name": "barrels"
						},
						{
							"position": [
								9,
								3
							],
							"name": "router"
						},
						{
							"position": [
								9,
								4
							],
							"name": "dog"
						},
						{
							"position": [
								9,
								5
							],
							"name": "house"
						},
						{
							"position": [
								9,
								6
							],
							"name": "RAM"
						},
						{
							"position": [
								9,
								7
							],
							"name": "microbes"
						},
						{
							"position": [
								9,
								8
							],
							"name": "snack"
						},
						{
							"position": [
								9,
								9
							],
							"name": "snake"
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
						]
					],
					"hintWord": [
						[
							"computer geek",
							"computer guy",
							"computer scientist",
							"computer user",
							"geek",
							"it worker",
							"sys admin",
							"techie"
						],
						[
							"barbecue",
							"bbq",
							"fire",
							"fireplace",
							"flammable",
							"furnace",
							"hot",
							"table"
						],
						[
							"arch",
							"cave",
							"hole in the rock",
							"rock"
						],
						[
							"bird",
							"eagle",
							"hawk",
							"pigeon"
						],
						[
							"barrels",
							"beehive",
							"drum",
							"shield"
						],
						[
							"cop",
							"pig",
							"police officer",
							"policeman",
							"security guard",
							"sheriff"
						],
						[
							"3.5 floppy",
							"3.5 inch disc",
							"disk",
							"file space",
							"floppy",
							"floppy disk",
							"save",
							"storage"
						],
						[
							"alcohol",
							"booze",
							"champagne",
							"cheers",
							"drinks",
							"toast",
							"wine",
							"wine glasses"
						],
						[
							"clothes",
							"clothing",
							"gear",
							"outfit"
						],
						[
							"beach",
							"beach umbrella",
							"summer",
							"sun",
							"sun shade",
							"sun umbrella",
							"umbrella"
						],
						[
							"flag",
							"pennant"
						],
						[
							"cart",
							"shopping cart",
							"shopping trolley",
							"trolley"
						],
						[
							"berries",
							"berry fruit",
							"blackberry",
							"fruit",
							"raspberry",
							"strawberry",
							"summer fruit"
						],
						[
							"cocktail",
							"drinks",
							"glass",
							"straw"
						],
						[
							"aporo",
							"apple",
							"fruit",
							"red delicious"
						],
						[
							"amphibian",
							"frog",
							"kermit",
							"retile",
							"toad"
						],
						[
							"tree"
						],
						[
							"cello",
							"instrument",
							"mandolin",
							"musical instrument",
							"viola",
							"violin"
						],
						[
							"modem",
							"router",
							"wifi",
							"wireless router"
						],
						[
							"christianity",
							"cross",
							"fire hydrant"
						],
						[
							"automobile",
							"car",
							"hatchback",
							"old dunger",
							"vehicle"
						],
						[
							"bird",
							"chicken",
							"chook",
							"hen",
							"rooster"
						],
						[
							"baseball",
							"baseball bat",
							"bat",
							"softball bat"
						],
						[
							"accessible parking",
							"disabled parking",
							"mobility park",
							"parking",
							"wheelchair park"
						],
						[
							"bend",
							"elbow bend",
							"joint",
							"pipes",
							"plumber",
							"plumbing"
						],
						[
							"crockery",
							"dinner plate",
							"plate"
						],
						[
							"basin",
							"sink",
							"tap"
						],
						[
							"boulders",
							"cliff",
							"rocks"
						],
						[
							"doctor",
							"gp",
							"medical professional",
							"specialist"
						],
						[
							"desert",
							"sand dunes",
							"sandhills"
						],
						[
							"beans",
							"broad beans",
							"coffee",
							"coffee beans",
							"legumes"
						],
						[
							"bench",
							"garden bench",
							"park bench",
							"seat"
						],
						[
							"flora",
							"flower",
							"lotus flower",
							"petals",
							"petunia",
							"rafflesi"
						],
						[
							"cell phone",
							"iphone",
							"mobile phone",
							"phone",
							"smart phone",
							"smartphone",
							"Android"
						],
						[
							"ajar",
							"door",
							"doorway",
							"entrance",
							"exit",
							"open"
						],
						[
							"exit",
							"runners",
							"running",
							"team"
						],
						[
							"blossom",
							"flowers",
							"plant",
							"weed"
						],
						[
							"computer game",
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
							"athlete",
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
							"caretaker",
							"cleaner",
							"dustman",
							"janitor"
						],
						[
							"flora",
							"flower",
							"lotus flower",
							"petals",
							"petunia",
							"rafflesi"
						],
						[
							"caretaker",
							"cleaner",
							"dustman",
							"janitor"
						],
						[
							"cocktail",
							"drinks",
							"glass",
							"straw"
						],
						[
							"blossom",
							"flowers",
							"plant",
							"weed"
						],
						[
							"3.5 floppy",
							"3.5 inch disc",
							"disk",
							"file space",
							"floppy",
							"floppy disk",
							"save",
							"storage"
						],
						[
							"automobile",
							"car",
							"hatchback",
							"old dunger",
							"vehicle"
						],
						[
							"aporo",
							"apple",
							"fruit",
							"red delicious"
						],
						[
							"doctor",
							"gp",
							"medical professional",
							"specialist"
						],
						[
							"baseball",
							"baseball bat",
							"bat",
							"softball bat"
						],
						[
							"boulders",
							"cliff",
							"rocks"
						],
						[
							"beach",
							"beach umbrella",
							"summer",
							"sun",
							"sun shade",
							"sun umbrella",
							"umbrella"
						],
						[
							"bird",
							"chicken",
							"chook",
							"hen",
							"rooster"
						],
						[
							"bird",
							"eagle",
							"hawk",
							"pigeon"
						],
						[
							"bench",
							"garden bench",
							"park bench",
							"seat"
						],
						[
							"cop",
							"pig",
							"police officer",
							"policeman",
							"security guard",
							"sheriff"
						],
						[
							"tree"
						],
						[
							"desert",
							"sand dunes",
							"sandhills"
						],
						[
							"berries",
							"berry fruit",
							"blackberry",
							"fruit",
							"raspberry",
							"strawberry",
							"summer fruit"
						],
						[
							"crockery",
							"dinner plate",
							"plate"
						],
						[
							"amphibian",
							"frog",
							"kermit",
							"retile",
							"toad"
						],
						[
							"flag",
							"pennant"
						],
						[
							"basin",
							"sink",
							"tap"
						],
						[
							"bend",
							"elbow bend",
							"joint",
							"pipes",
							"plumber",
							"plumbing"
						],
						[
							"barrels",
							"beehive",
							"drum",
							"shield"
						],
						[
							"cart",
							"shopping cart",
							"shopping trolley",
							"trolley"
						],
						[
							"clothes",
							"clothing",
							"gear",
							"outfit"
						],
						[
							"computer geek",
							"computer guy",
							"computer scientist",
							"computer user",
							"geek",
							"it worker",
							"sys admin",
							"techie"
						],
						[
							"christianity",
							"cross",
							"fire hydrant"
						],
						[
							"exit",
							"runners",
							"running",
							"team"
						],
						[
							"accessible parking",
							"disabled parking",
							"mobility park",
							"parking",
							"wheelchair park"
						],
						[
							"alcohol",
							"booze",
							"champagne",
							"cheers",
							"drinks",
							"toast",
							"wine",
							"wine glasses"
						],
						[
							"beans",
							"broad beans",
							"coffee",
							"coffee beans",
							"legumes"
						],
						[
							"cello",
							"instrument",
							"mandolin",
							"musical instrument",
							"viola",
							"violin"
						],
						[
							"athlete",
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
							"barbecue",
							"bbq",
							"fire",
							"fireplace",
							"flammable",
							"furnace",
							"hot",
							"table"
						],
						[
							"arch",
							"cave",
							"hole in the rock",
							"rock"
						],
						[
							"ajar",
							"door",
							"doorway",
							"entrance",
							"exit",
							"open"
						],
						[
							"cell phone",
							"iphone",
							"mobile phone",
							"phone",
							"smart phone",
							"smartphone",
							"Android"
						],
						[
							"computer game",
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
							"modem",
							"router",
							"wifi",
							"wireless router"
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
							"name": "referee"
						},
						{
							"position": [
								0,
								1
							],
							"name": "socket"
						},
						{
							"position": [
								0,
								2
							],
							"name": "baby"
						},
						{
							"position": [
								0,
								3
							],
							"name": "priest"
						},
						{
							"position": [
								0,
								4
							],
							"name": "cook"
						},
						{
							"position": [
								0,
								5
							],
							"name": "dirt"
						},
						{
							"position": [
								0,
								6
							],
							"name": "eraser"
						},
						{
							"position": [
								0,
								7
							],
							"name": "money"
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
							"name": "flower"
						},
						{
							"position": [
								1,
								0
							],
							"name": "artist"
						},
						{
							"position": [
								1,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								1,
								2
							],
							"name": "rocks"
						},
						{
							"position": [
								1,
								3
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								1,
								4
							],
							"name": "wine"
						},
						{
							"position": [
								1,
								5
							],
							"name": "man"
						},
						{
							"position": [
								1,
								6
							],
							"name": "recycling"
						},
						{
							"position": [
								1,
								7
							],
							"name": "house"
						},
						{
							"position": [
								1,
								8
							],
							"name": "flag"
						},
						{
							"position": [
								1,
								9
							],
							"name": "cook"
						},
						{
							"position": [
								2,
								0
							],
							"name": "couch"
						},
						{
							"position": [
								2,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								2,
								8
							],
							"name": "runners"
						},
						{
							"position": [
								2,
								9
							],
							"name": "teacher"
						},
						{
							"position": [
								3,
								0
							],
							"name": "jacket"
						},
						{
							"position": [
								3,
								1
							],
							"name": "floppy"
						},
						{
							"position": [
								3,
								2
							],
							"name": "pigeon"
						},
						{
							"position": [
								3,
								3
							],
							"name": "bench"
						},
						{
							"position": [
								3,
								4
							],
							"name": "priest"
						},
						{
							"position": [
								3,
								5
							],
							"name": "knife"
						},
						{
							"position": [
								3,
								6
							],
							"name": "money"
						},
						{
							"position": [
								3,
								7
							],
							"name": "woman"
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
							"name": "canoe"
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
							"name": "laptop"
						},
						{
							"position": [
								4,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								4,
								8
							],
							"name": "berries"
						},
						{
							"position": [
								4,
								9
							],
							"name": "bench"
						},
						{
							"position": [
								5,
								0
							],
							"name": "thief"
						},
						{
							"position": [
								5,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								5,
								2
							],
							"name": "eraser"
						},
						{
							"position": [
								5,
								3
							],
							"name": "wine"
						},
						{
							"position": [
								5,
								4
							],
							"name": "recycling"
						},
						{
							"position": [
								5,
								5
							],
							"name": "beans"
						},
						{
							"position": [
								5,
								6
							],
							"name": "Q45"
						},
						{
							"position": [
								5,
								7
							],
							"name": "dirt"
						},
						{
							"position": [
								5,
								8
							],
							"name": "bench"
						},
						{
							"position": [
								5,
								9
							],
							"name": "cook"
						},
						{
							"position": [
								6,
								0
							],
							"name": "cattle"
						},
						{
							"position": [
								6,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								6,
								2
							],
							"name": "laptop"
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
							"name": "laptop"
						},
						{
							"position": [
								6,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								6,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								6,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								6,
								8
							],
							"name": "thief"
						},
						{
							"position": [
								6,
								9
							],
							"name": "RAM"
						},
						{
							"position": [
								7,
								0
							],
							"name": "drugs"
						},
						{
							"position": [
								7,
								1
							],
							"name": "belly"
						},
						{
							"position": [
								7,
								2
							],
							"name": "athlete"
						},
						{
							"position": [
								7,
								3
							],
							"name": "boot"
						},
						{
							"position": [
								7,
								4
							],
							"name": "factory"
						},
						{
							"position": [
								7,
								5
							],
							"name": "rocks"
						},
						{
							"position": [
								7,
								6
							],
							"name": "doctor"
						},
						{
							"position": [
								7,
								7
							],
							"name": "couch"
						},
						{
							"position": [
								7,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								7,
								9
							],
							"name": "bat"
						},
						{
							"position": [
								8,
								0
							],
							"name": "frog"
						},
						{
							"position": [
								8,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								8,
								8
							],
							"name": "artist"
						},
						{
							"position": [
								8,
								9
							],
							"name": "doctor"
						},
						{
							"position": [
								9,
								0
							],
							"name": "tree"
						},
						{
							"position": [
								9,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								9,
								2
							],
							"name": "beetle"
						},
						{
							"position": [
								9,
								3
							],
							"name": "car"
						},
						{
							"position": [
								9,
								4
							],
							"name": "Q45"
						},
						{
							"position": [
								9,
								5
							],
							"name": "dunes"
						},
						{
							"position": [
								9,
								6
							],
							"name": "gun"
						},
						{
							"position": [
								9,
								7
							],
							"name": "artist"
						},
						{
							"position": [
								9,
								8
							],
							"name": "snake"
						},
						{
							"position": [
								9,
								9
							],
							"name": "USB"
						},
						{
							"position": [
								10,
								0
							],
							"name": "computer"
						},
						{
							"position": [
								10,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								10,
								8
							],
							"name": "road"
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
							"name": "ocean"
						},
						{
							"position": [
								11,
								1
							],
							"name": "gun"
						},
						{
							"position": [
								11,
								2
							],
							"name": "jacket"
						},
						{
							"position": [
								11,
								3
							],
							"name": "boot"
						},
						{
							"position": [
								11,
								4
							],
							"name": "shoe"
						},
						{
							"position": [
								11,
								5
							],
							"name": "cop"
						},
						{
							"position": [
								11,
								6
							],
							"name": "beach"
						},
						{
							"position": [
								11,
								7
							],
							"name": "parking_sp"
						},
						{
							"position": [
								11,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								11,
								9
							],
							"name": "rocks"
						},
						{
							"position": [
								12,
								0
							],
							"name": "robot"
						},
						{
							"position": [
								12,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								12,
								5
							],
							"name": "laptop"
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
							"name": "laptop"
						},
						{
							"position": [
								12,
								8
							],
							"name": "cattle"
						},
						{
							"position": [
								12,
								9
							],
							"name": "man"
						},
						{
							"position": [
								13,
								0
							],
							"name": "man"
						},
						{
							"position": [
								13,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								13,
								2
							],
							"name": "man"
						},
						{
							"position": [
								13,
								3
							],
							"name": "doctor"
						},
						{
							"position": [
								13,
								4
							],
							"name": "berries"
						},
						{
							"position": [
								13,
								5
							],
							"name": "money"
						},
						{
							"position": [
								13,
								6
							],
							"name": "baby"
						},
						{
							"position": [
								13,
								7
							],
							"name": "door"
						},
						{
							"position": [
								13,
								8
							],
							"name": "microbes"
						},
						{
							"position": [
								13,
								9
							],
							"name": "city"
						},
						{
							"position": [
								14,
								0
							],
							"name": "barrels"
						},
						{
							"position": [
								14,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								14,
								8
							],
							"name": "RAM"
						},
						{
							"position": [
								14,
								9
							],
							"name": "floppy"
						},
						{
							"position": [
								15,
								0
							],
							"name": "cup"
						},
						{
							"position": [
								15,
								1
							],
							"name": "cave"
						},
						{
							"position": [
								15,
								2
							],
							"name": "ocean"
						},
						{
							"position": [
								15,
								3
							],
							"name": "car"
						},
						{
							"position": [
								15,
								4
							],
							"name": "church"
						},
						{
							"position": [
								15,
								5
							],
							"name": "rave"
						},
						{
							"position": [
								15,
								6
							],
							"name": "snack"
						},
						{
							"position": [
								15,
								7
							],
							"name": "rocks"
						},
						{
							"position": [
								15,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								15,
								9
							],
							"name": "artist"
						},
						{
							"position": [
								16,
								0
							],
							"name": "rocks"
						},
						{
							"position": [
								16,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								16,
								8
							],
							"name": "beetle"
						},
						{
							"position": [
								16,
								9
							],
							"name": "ship"
						},
						{
							"position": [
								17,
								0
							],
							"name": "videogame"
						},
						{
							"position": [
								17,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								17,
								2
							],
							"name": "cook"
						},
						{
							"position": [
								17,
								3
							],
							"name": "people"
						},
						{
							"position": [
								17,
								4
							],
							"name": "ocean"
						},
						{
							"position": [
								17,
								5
							],
							"name": "barrels"
						},
						{
							"position": [
								17,
								6
							],
							"name": "USB"
						},
						{
							"position": [
								17,
								7
							],
							"name": "Q45"
						},
						{
							"position": [
								17,
								8
							],
							"name": "dirt"
						},
						{
							"position": [
								17,
								9
							],
							"name": "moth"
						},
						{
							"position": [
								18,
								0
							],
							"name": "eraser"
						},
						{
							"position": [
								18,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								18,
								8
							],
							"name": "recycling"
						},
						{
							"position": [
								18,
								9
							],
							"name": "robot"
						},
						{
							"position": [
								19,
								0
							],
							"name": "videogame"
						},
						{
							"position": [
								19,
								1
							],
							"name": "dog"
						},
						{
							"position": [
								19,
								2
							],
							"name": "city"
						},
						{
							"position": [
								19,
								3
							],
							"name": "berries"
						},
						{
							"position": [
								19,
								4
							],
							"name": "boot"
						},
						{
							"position": [
								19,
								5
							],
							"name": "canoe"
						},
						{
							"position": [
								19,
								6
							],
							"name": "nuke_plant"
						},
						{
							"position": [
								19,
								7
							],
							"name": "beach"
						},
						{
							"position": [
								19,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								19,
								9
							],
							"name": "snack"
						},
						{
							"position": [
								20,
								0
							],
							"name": "cop"
						},
						{
							"position": [
								20,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								20,
								8
							],
							"name": "church"
						},
						{
							"position": [
								20,
								9
							],
							"name": "flag"
						},
						{
							"position": [
								21,
								0
							],
							"name": "city"
						},
						{
							"position": [
								21,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								21,
								2
							],
							"name": "dirt"
						},
						{
							"position": [
								21,
								3
							],
							"name": "shoe"
						},
						{
							"position": [
								21,
								4
							],
							"name": "referee"
						},
						{
							"position": [
								21,
								5
							],
							"name": "soldier"
						},
						{
							"position": [
								21,
								6
							],
							"name": "snake"
						},
						{
							"position": [
								21,
								7
							],
							"name": "plate"
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
							"name": "couch"
						},
						{
							"position": [
								22,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								22,
								8
							],
							"name": "doctor"
						},
						{
							"position": [
								22,
								9
							],
							"name": "cart"
						},
						{
							"position": [
								23,
								0
							],
							"name": "bee"
						},
						{
							"position": [
								23,
								1
							],
							"name": "house"
						},
						{
							"position": [
								23,
								2
							],
							"name": "bat"
						},
						{
							"position": [
								23,
								3
							],
							"name": "beach"
						},
						{
							"position": [
								23,
								4
							],
							"name": "runners"
						},
						{
							"position": [
								23,
								5
							],
							"name": "frog"
						},
						{
							"position": [
								23,
								6
							],
							"name": "cave"
						},
						{
							"position": [
								23,
								7
							],
							"name": "parking_sp"
						},
						{
							"position": [
								23,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								23,
								9
							],
							"name": "drink"
						},
						{
							"position": [
								24,
								0
							],
							"name": "pigeon"
						},
						{
							"position": [
								24,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								24,
								8
							],
							"name": "athlete"
						},
						{
							"position": [
								24,
								9
							],
							"name": "fireplace"
						},
						{
							"position": [
								25,
								0
							],
							"name": "knife"
						},
						{
							"position": [
								25,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								25,
								2
							],
							"name": "programmer"
						},
						{
							"position": [
								25,
								3
							],
							"name": "athlete"
						},
						{
							"position": [
								25,
								4
							],
							"name": "branch"
						},
						{
							"position": [
								25,
								5
							],
							"name": "touchpad"
						},
						{
							"position": [
								25,
								6
							],
							"name": "city"
						},
						{
							"position": [
								25,
								7
							],
							"name": "road"
						},
						{
							"position": [
								25,
								8
							],
							"name": "belly"
						},
						{
							"position": [
								25,
								9
							],
							"name": "recycling"
						},
						{
							"position": [
								26,
								0
							],
							"name": "snack"
						},
						{
							"position": [
								26,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								7
							],
							"name": "laptop"
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
							"name": "athlete"
						},
						{
							"position": [
								27,
								0
							],
							"name": "soldier"
						},
						{
							"position": [
								27,
								1
							],
							"name": "house"
						},
						{
							"position": [
								27,
								2
							],
							"name": "thief"
						},
						{
							"position": [
								27,
								3
							],
							"name": "ocean"
						},
						{
							"position": [
								27,
								4
							],
							"name": "athlete"
						},
						{
							"position": [
								27,
								5
							],
							"name": "rabbit"
						},
						{
							"position": [
								27,
								6
							],
							"name": "marijuana"
						},
						{
							"position": [
								27,
								7
							],
							"name": "wine"
						},
						{
							"position": [
								27,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								27,
								9
							],
							"name": "violin"
						},
						{
							"position": [
								28,
								0
							],
							"name": "sphere"
						},
						{
							"position": [
								28,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								28,
								8
							],
							"name": "boot"
						},
						{
							"position": [
								28,
								9
							],
							"name": "baby"
						},
						{
							"position": [
								29,
								0
							],
							"name": "jacket"
						},
						{
							"position": [
								29,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								29,
								2
							],
							"name": "robot"
						},
						{
							"position": [
								29,
								3
							],
							"name": "drugs"
						},
						{
							"position": [
								29,
								4
							],
							"name": "ship"
						},
						{
							"position": [
								29,
								5
							],
							"name": "router"
						},
						{
							"position": [
								29,
								6
							],
							"name": "Q60"
						},
						{
							"position": [
								29,
								7
							],
							"name": "rabbit"
						},
						{
							"position": [
								29,
								8
							],
							"name": "knife"
						},
						{
							"position": [
								29,
								9
							],
							"name": "teacher"
						},
						{
							"position": [
								30,
								0
							],
							"name": "tree"
						},
						{
							"position": [
								30,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								30,
								8
							],
							"name": "drink"
						},
						{
							"position": [
								30,
								9
							],
							"name": "frog"
						},
						{
							"position": [
								31,
								0
							],
							"name": "man"
						},
						{
							"position": [
								31,
								1
							],
							"name": "road"
						},
						{
							"position": [
								31,
								2
							],
							"name": "rocks"
						},
						{
							"position": [
								31,
								3
							],
							"name": "doctor"
						},
						{
							"position": [
								31,
								4
							],
							"name": "drink"
						},
						{
							"position": [
								31,
								5
							],
							"name": "people"
						},
						{
							"position": [
								31,
								6
							],
							"name": "wine"
						},
						{
							"position": [
								31,
								7
							],
							"name": "referee"
						},
						{
							"position": [
								31,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								31,
								9
							],
							"name": "touchpad"
						},
						{
							"position": [
								32,
								0
							],
							"name": "house"
						},
						{
							"position": [
								32,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								32,
								8
							],
							"name": "cart"
						},
						{
							"position": [
								32,
								9
							],
							"name": "knife"
						},
						{
							"position": [
								33,
								0
							],
							"name": "marijuana"
						},
						{
							"position": [
								33,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								33,
								2
							],
							"name": "sink"
						},
						{
							"position": [
								33,
								3
							],
							"name": "boot"
						},
						{
							"position": [
								33,
								4
							],
							"name": "wine"
						},
						{
							"position": [
								33,
								5
							],
							"name": "eraser"
						},
						{
							"position": [
								33,
								6
							],
							"name": "athlete"
						},
						{
							"position": [
								33,
								7
							],
							"name": "shoe"
						},
						{
							"position": [
								33,
								8
							],
							"name": "road"
						},
						{
							"position": [
								33,
								9
							],
							"name": "soldier"
						},
						{
							"position": [
								34,
								0
							],
							"name": "cattle"
						},
						{
							"position": [
								34,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								34,
								8
							],
							"name": "people"
						},
						{
							"position": [
								34,
								9
							],
							"name": "clothes"
						},
						{
							"position": [
								35,
								0
							],
							"name": "videogame"
						},
						{
							"position": [
								35,
								1
							],
							"name": "baby"
						},
						{
							"position": [
								35,
								2
							],
							"name": "bench"
						},
						{
							"position": [
								35,
								3
							],
							"name": "drink"
						},
						{
							"position": [
								35,
								4
							],
							"name": "beach"
						},
						{
							"position": [
								35,
								5
							],
							"name": "bat"
						},
						{
							"position": [
								35,
								6
							],
							"name": "recycling"
						},
						{
							"position": [
								35,
								7
							],
							"name": "cross"
						},
						{
							"position": [
								35,
								8
							],
							"name": "laptop"
						},
						{
							"position": [
								35,
								9
							],
							"name": "pipe"
						},
						{
							"position": [
								36,
								0
							],
							"name": "dirt"
						},
						{
							"position": [
								36,
								1
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								3
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								4
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								5
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								6
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								7
							],
							"name": "laptop"
						},
						{
							"position": [
								36,
								8
							],
							"name": "moth"
						},
						{
							"position": [
								36,
								9
							],
							"name": "eraser"
						},
						{
							"position": [
								37,
								0
							],
							"name": "people"
						},
						{
							"position": [
								37,
								1
							],
							"name": "pipe"
						},
						{
							"position": [
								37,
								2
							],
							"name": "shoe"
						},
						{
							"position": [
								37,
								3
							],
							"name": "USB"
						},
						{
							"position": [
								37,
								4
							],
							"name": "knife"
						},
						{
							"position": [
								37,
								5
							],
							"name": "shoe"
						},
						{
							"position": [
								37,
								6
							],
							"name": "ship"
						},
						{
							"position": [
								37,
								7
							],
							"name": "USB"
						},
						{
							"position": [
								37,
								8
							],
							"name": "cook"
						},
						{
							"position": [
								37,
								9
							],
							"name": "snake"
						},
						{
							"position": [
								38,
								0
							],
							"name": "clothes"
						},
						{
							"position": [
								38,
								1
							],
							"name": "car"
						},
						{
							"position": [
								38,
								2
							],
							"name": "cart"
						},
						{
							"position": [
								38,
								3
							],
							"name": "tree"
						},
						{
							"position": [
								38,
								4
							],
							"name": "rave"
						},
						{
							"position": [
								38,
								5
							],
							"name": "cart"
						},
						{
							"position": [
								38,
								6
							],
							"name": "knife"
						},
						{
							"position": [
								38,
								7
							],
							"name": "moth"
						},
						{
							"position": [
								38,
								8
							],
							"name": "cattle"
						},
						{
							"position": [
								38,
								9
							],
							"name": "hen"
						},
						{
							"position": [
								39,
								0
							],
							"name": "pipe"
						},
						{
							"position": [
								39,
								1
							],
							"name": "robot"
						},
						{
							"position": [
								39,
								2
							],
							"name": "knife"
						},
						{
							"position": [
								39,
								3
							],
							"name": "USB"
						},
						{
							"position": [
								39,
								4
							],
							"name": "beach"
						},
						{
							"position": [
								39,
								5
							],
							"name": "dirt"
						},
						{
							"position": [
								39,
								6
							],
							"name": "sphere"
						},
						{
							"position": [
								39,
								7
							],
							"name": "teacher"
						},
						{
							"position": [
								39,
								8
							],
							"name": "boot"
						},
						{
							"position": [
								39,
								9
							],
							"name": "snack"
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
						],
						[
							30,
							1
						],
						[
							30,
							2
						],
						[
							30,
							3
						],
						[
							30,
							4
						],
						[
							30,
							5
						],
						[
							30,
							6
						],
						[
							30,
							7
						],
						[
							31,
							8
						],
						[
							32,
							7
						],
						[
							32,
							6
						],
						[
							32,
							5
						],
						[
							32,
							4
						],
						[
							32,
							3
						],
						[
							32,
							2
						],
						[
							32,
							1
						],
						[
							33,
							1
						],
						[
							34,
							1
						],
						[
							34,
							2
						],
						[
							34,
							3
						],
						[
							34,
							4
						],
						[
							34,
							5
						],
						[
							34,
							6
						],
						[
							34,
							7
						],
						[
							35,
							8
						],
						[
							36,
							7
						],
						[
							36,
							6
						],
						[
							36,
							5
						],
						[
							36,
							4
						],
						[
							36,
							3
						],
						[
							36,
							2
						],
						[
							36,
							1
						],
						[
							37,
							1
						],
						[
							38,
							1
						],
						[
							38,
							2
						],
						[
							38,
							3
						],
						[
							38,
							4
						],
						[
							38,
							5
						],
						[
							38,
							6
						],
						[
							38,
							7
						],
						[
							39,
							8
						]
					],
					"hintWord": [
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"laptop"
						],
						[
							"elbow bend",
							"joint",
							"pipes",
							"plumber",
							"plumbing"
						],
						[
							"car",
							"hatchback",
							"old dunger",
							"vehicle"
						],
						[
							"shopping cart",
							"shopping trolley",
							"trolley"
						],
						[],
						[
							"concert",
							"crowd",
							"gig",
							"moshpit",
							"party"
						],
						[
							"shopping cart",
							"shopping trolley",
							"trolley"
						],
						[
							"dagger",
							"knife",
							"lipstick"
						],
						[
							"butterfly",
							"insect",
							"moth"
						],
						[
							"doc martin",
							"high top",
							"safety boot",
							"shoe",
							"work boot"
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
							"name": "mouse"
						},
						{
							"position": [
								0,
								1
							],
							"name": "ocean"
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
							"name": "bat"
						},
						{
							"position": [
								0,
								4
							],
							"name": "bench"
						},
						{
							"position": [
								0,
								5
							],
							"name": "Q60"
						},
						{
							"position": [
								0,
								6
							],
							"name": "runners"
						},
						{
							"position": [
								0,
								7
							],
							"name": "cattle"
						},
						{
							"position": [
								0,
								8
							],
							"name": "beetle"
						},
						{
							"position": [
								0,
								9
							],
							"name": "ship"
						},
						{
							"position": [
								1,
								0
							],
							"name": "couch"
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
							"name": "alligator"
						},
						{
							"position": [
								1,
								3
							],
							"name": "flower"
						},
						{
							"position": [
								1,
								4
							],
							"name": "factory"
						},
						{
							"position": [
								1,
								5
							],
							"name": "snake"
						},
						{
							"position": [
								1,
								6
							],
							"name": "bench"
						},
						{
							"position": [
								1,
								7
							],
							"name": "couch"
						},
						{
							"position": [
								1,
								8
							],
							"name": "RAM"
						},
						{
							"position": [
								1,
								9
							],
							"name": "bat"
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
							"name": "nuke_plant"
						},
						{
							"position": [
								3,
								1
							],
							"name": "bee"
						},
						{
							"position": [
								3,
								2
							],
							"name": "athlete"
						},
						{
							"position": [
								3,
								3
							],
							"name": "cart"
						},
						{
							"position": [
								3,
								4
							],
							"name": "flag"
						},
						{
							"position": [
								3,
								5
							],
							"name": "peach"
						},
						{
							"position": [
								3,
								6
							],
							"name": "jacket"
						},
						{
							"position": [
								3,
								7
							],
							"name": "plate"
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
							"name": "axe"
						},
						{
							"position": [
								4,
								0
							],
							"name": "jacket"
						},
						{
							"position": [
								4,
								1
							],
							"name": "microbes"
						},
						{
							"position": [
								4,
								2
							],
							"name": "flag"
						},
						{
							"position": [
								4,
								3
							],
							"name": "drugs"
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
							"name": "violin"
						},
						{
							"position": [
								4,
								6
							],
							"name": "Q60"
						},
						{
							"position": [
								4,
								7
							],
							"name": "rabbit"
						},
						{
							"position": [
								4,
								8
							],
							"name": "shoe"
						},
						{
							"position": [
								4,
								9
							],
							"name": "socket"
						},
						{
							"position": [
								5,
								0
							],
							"name": "cave"
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
							"name": "robot"
						},
						{
							"position": [
								5,
								3
							],
							"name": "marijuana"
						},
						{
							"position": [
								5,
								4
							],
							"name": "alligator"
						},
						{
							"position": [
								5,
								5
							],
							"name": "cup"
						},
						{
							"position": [
								5,
								6
							],
							"name": "rocks"
						},
						{
							"position": [
								5,
								7
							],
							"name": "cart"
						},
						{
							"position": [
								5,
								8
							],
							"name": "ship"
						},
						{
							"position": [
								5,
								9
							],
							"name": "sphere"
						},
						{
							"position": [
								6,
								0
							],
							"name": "alligator"
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
							"name": "rocks"
						},
						{
							"position": [
								6,
								9
							],
							"name": "wine"
						},
						{
							"position": [
								7,
								0
							],
							"name": "church"
						},
						{
							"position": [
								7,
								1
							],
							"name": "rave"
						},
						{
							"position": [
								7,
								2
							],
							"name": "cop"
						},
						{
							"position": [
								7,
								3
							],
							"name": "clothes"
						},
						{
							"position": [
								7,
								4
							],
							"name": "rave"
						},
						{
							"position": [
								7,
								5
							],
							"name": "king"
						},
						{
							"position": [
								7,
								6
							],
							"name": "cop"
						},
						{
							"position": [
								7,
								7
							],
							"name": "ship"
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
							"name": "berries"
						},
						{
							"position": [
								8,
								0
							],
							"name": "eraser"
						},
						{
							"position": [
								8,
								1
							],
							"name": "clothes"
						},
						{
							"position": [
								8,
								2
							],
							"name": "rocks"
						},
						{
							"position": [
								8,
								3
							],
							"name": "road"
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
							"name": "wine"
						},
						{
							"position": [
								8,
								6
							],
							"name": "woman"
						},
						{
							"position": [
								8,
								7
							],
							"name": "fireplace"
						},
						{
							"position": [
								8,
								8
							],
							"name": "cave"
						},
						{
							"position": [
								8,
								9
							],
							"name": "programmer"
						},
						{
							"position": [
								9,
								0
							],
							"name": "touchpad"
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
							"name": "frog"
						},
						{
							"position": [
								9,
								3
							],
							"name": "woman"
						},
						{
							"position": [
								9,
								4
							],
							"name": "knife"
						},
						{
							"position": [
								9,
								5
							],
							"name": "kids"
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
							"name": "dog"
						},
						{
							"position": [
								9,
								8
							],
							"name": "videogame"
						},
						{
							"position": [
								9,
								9
							],
							"name": "snack"
						},
						{
							"position": [
								10,
								0
							],
							"name": "cross"
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
							"name": "plate"
						},
						{
							"position": [
								10,
								9
							],
							"name": "fireplace"
						},
						{
							"position": [
								11,
								0
							],
							"name": "baby"
						},
						{
							"position": [
								11,
								1
							],
							"name": "gun"
						},
						{
							"position": [
								11,
								2
							],
							"name": "boot"
						},
						{
							"position": [
								11,
								3
							],
							"name": "doctor"
						},
						{
							"position": [
								11,
								4
							],
							"name": "cleaner"
						},
						{
							"position": [
								11,
								5
							],
							"name": "knife"
						},
						{
							"position": [
								11,
								6
							],
							"name": "router"
						},
						{
							"position": [
								11,
								7
							],
							"name": "house"
						},
						{
							"position": [
								11,
								8
							],
							"name": "dirt"
						},
						{
							"position": [
								11,
								9
							],
							"name": "boot"
						},
						{
							"position": [
								12,
								0
							],
							"name": "woman"
						},
						{
							"position": [
								12,
								1
							],
							"name": "programmer"
						},
						{
							"position": [
								12,
								2
							],
							"name": "branch"
						},
						{
							"position": [
								12,
								3
							],
							"name": "city"
						},
						{
							"position": [
								12,
								4
							],
							"name": "artist"
						},
						{
							"position": [
								12,
								5
							],
							"name": "USB"
						},
						{
							"position": [
								12,
								6
							],
							"name": "videogame"
						},
						{
							"position": [
								12,
								7
							],
							"name": "barrels"
						},
						{
							"position": [
								12,
								8
							],
							"name": "thief"
						},
						{
							"position": [
								12,
								9
							],
							"name": "mouse"
						},
						{
							"position": [
								13,
								0
							],
							"name": "city"
						},
						{
							"position": [
								13,
								1
							],
							"name": "robot"
						},
						{
							"position": [
								13,
								2
							],
							"name": "marijuana"
						},
						{
							"position": [
								13,
								3
							],
							"name": "factory"
						},
						{
							"position": [
								13,
								4
							],
							"name": "couch"
						},
						{
							"position": [
								13,
								5
							],
							"name": "cattle"
						},
						{
							"position": [
								13,
								6
							],
							"name": "man"
						},
						{
							"position": [
								13,
								7
							],
							"name": "alligator"
						},
						{
							"position": [
								13,
								8
							],
							"name": "belly"
						},
						{
							"position": [
								13,
								9
							],
							"name": "dirt"
						},
						{
							"position": [
								14,
								0
							],
							"name": "referee"
						},
						{
							"position": [
								14,
								1
							],
							"name": "cop"
						},
						{
							"position": [
								14,
								2
							],
							"name": "touchpad"
						},
						{
							"position": [
								14,
								3
							],
							"name": "bench"
						},
						{
							"position": [
								14,
								4
							],
							"name": "sink"
						},
						{
							"position": [
								14,
								5
							],
							"name": "people"
						},
						{
							"position": [
								14,
								6
							],
							"name": "parking sp"
						},
						{
							"position": [
								14,
								7
							],
							"name": "door"
						},
						{
							"position": [
								14,
								8
							],
							"name": "priest"
						},
						{
							"position": [
								14,
								9
							],
							"name": "flower"
						},
						{
							"position": [
								15,
								0
							],
							"name": "woman"
						},
						{
							"position": [
								15,
								1
							],
							"name": "robot"
						},
						{
							"position": [
								15,
								2
							],
							"name": "router"
						},
						{
							"position": [
								15,
								3
							],
							"name": "bench"
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
							"name": "router"
						},
						{
							"position": [
								15,
								6
							],
							"name": "mouse"
						},
						{
							"position": [
								15,
								7
							],
							"name": "axe"
						},
						{
							"position": [
								15,
								8
							],
							"name": "socket"
						},
						{
							"position": [
								15,
								9
							],
							"name": "rave"
						},
						{
							"position": [
								16,
								0
							],
							"name": "cart"
						},
						{
							"position": [
								16,
								1
							],
							"name": "runners"
						},
						{
							"position": [
								16,
								2
							],
							"name": "cart"
						},
						{
							"position": [
								16,
								3
							],
							"name": "soldier"
						},
						{
							"position": [
								16,
								4
							],
							"name": "priest"
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
							"name": "floppy"
						},
						{
							"position": [
								16,
								7
							],
							"name": "cleaner"
						},
						{
							"position": [
								16,
								8
							],
							"name": "cleaner"
						},
						{
							"position": [
								16,
								9
							],
							"name": "people"
						},
						{
							"position": [
								17,
								0
							],
							"name": "flag"
						},
						{
							"position": [
								17,
								1
							],
							"name": "berries"
						},
						{
							"position": [
								17,
								2
							],
							"name": "drink"
						},
						{
							"position": [
								17,
								3
							],
							"name": "snake"
						},
						{
							"position": [
								17,
								4
							],
							"name": "church"
						},
						{
							"position": [
								17,
								5
							],
							"name": "gun"
						},
						{
							"position": [
								17,
								6
							],
							"name": "city"
						},
						{
							"position": [
								17,
								7
							],
							"name": "couch"
						},
						{
							"position": [
								17,
								8
							],
							"name": "drink"
						},
						{
							"position": [
								17,
								9
							],
							"name": "cattle"
						},
						{
							"position": [
								18,
								0
							],
							"name": "programmer"
						},
						{
							"position": [
								18,
								1
							],
							"name": "car"
						},
						{
							"position": [
								18,
								2
							],
							"name": "thief"
						},
						{
							"position": [
								18,
								3
							],
							"name": "beans"
						},
						{
							"position": [
								18,
								4
							],
							"name": "sphere"
						},
						{
							"position": [
								18,
								5
							],
							"name": "cave"
						},
						{
							"position": [
								18,
								6
							],
							"name": "boot"
						},
						{
							"position": [
								18,
								7
							],
							"name": "church"
						},
						{
							"position": [
								18,
								8
							],
							"name": "king"
						},
						{
							"position": [
								18,
								9
							],
							"name": "cart"
						},
						{
							"position": [
								19,
								0
							],
							"name": "athlete"
						},
						{
							"position": [
								19,
								1
							],
							"name": "touchpad"
						},
						{
							"position": [
								19,
								2
							],
							"name": "bee"
						},
						{
							"position": [
								19,
								3
							],
							"name": "moth"
						},
						{
							"position": [
								19,
								4
							],
							"name": "ship"
						},
						{
							"position": [
								19,
								5
							],
							"name": "wine"
						},
						{
							"position": [
								19,
								6
							],
							"name": "Q60"
						},
						{
							"position": [
								19,
								7
							],
							"name": "king"
						},
						{
							"position": [
								19,
								8
							],
							"name": "house"
						},
						{
							"position": [
								19,
								9
							],
							"name": "house"
						},
						{
							"position": [
								20,
								0
							],
							"name": "touchpad"
						},
						{
							"position": [
								20,
								1
							],
							"name": "king"
						},
						{
							"position": [
								20,
								2
							],
							"name": "factory"
						},
						{
							"position": [
								20,
								3
							],
							"name": "Q45"
						},
						{
							"position": [
								20,
								4
							],
							"name": "money"
						},
						{
							"position": [
								20,
								5
							],
							"name": "teacher"
						},
						{
							"position": [
								20,
								6
							],
							"name": "doctor"
						},
						{
							"position": [
								20,
								7
							],
							"name": "drink"
						},
						{
							"position": [
								20,
								8
							],
							"name": "priest"
						},
						{
							"position": [
								20,
								9
							],
							"name": "cave"
						},
						{
							"position": [
								21,
								0
							],
							"name": "shoe"
						},
						{
							"position": [
								21,
								1
							],
							"name": "marijuana"
						},
						{
							"position": [
								21,
								2
							],
							"name": "videogame"
						},
						{
							"position": [
								21,
								3
							],
							"name": "cleaner"
						},
						{
							"position": [
								21,
								4
							],
							"name": "money"
						},
						{
							"position": [
								21,
								5
							],
							"name": "Q60"
						},
						{
							"position": [
								21,
								6
							],
							"name": "Q45"
						},
						{
							"position": [
								21,
								7
							],
							"name": "sphere"
						},
						{
							"position": [
								21,
								8
							],
							"name": "marijuana"
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
							"name": "hen"
						},
						{
							"position": [
								22,
								1
							],
							"name": "baby"
						},
						{
							"position": [
								22,
								2
							],
							"name": "rabbit"
						},
						{
							"position": [
								22,
								3
							],
							"name": "rocks"
						},
						{
							"position": [
								22,
								4
							],
							"name": "cup"
						},
						{
							"position": [
								22,
								5
							],
							"name": "programmer"
						},
						{
							"position": [
								22,
								6
							],
							"name": "runners"
						},
						{
							"position": [
								22,
								7
							],
							"name": "people"
						},
						{
							"position": [
								22,
								8
							],
							"name": "cleaner"
						},
						{
							"position": [
								22,
								9
							],
							"name": "jacket"
						},
						{
							"position": [
								23,
								0
							],
							"name": "tree"
						},
						{
							"position": [
								23,
								1
							],
							"name": "runners"
						},
						{
							"position": [
								23,
								2
							],
							"name": "flower"
						},
						{
							"position": [
								23,
								3
							],
							"name": "Q60"
						},
						{
							"position": [
								23,
								4
							],
							"name": "recycling"
						},
						{
							"position": [
								23,
								5
							],
							"name": "branch"
						},
						{
							"position": [
								23,
								6
							],
							"name": "house"
						},
						{
							"position": [
								23,
								7
							],
							"name": "couch"
						},
						{
							"position": [
								23,
								8
							],
							"name": "road"
						},
						{
							"position": [
								23,
								9
							],
							"name": "city"
						},
						{
							"position": [
								24,
								0
							],
							"name": "road"
						},
						{
							"position": [
								24,
								1
							],
							"name": "alligator"
						},
						{
							"position": [
								24,
								2
							],
							"name": "cook"
						},
						{
							"position": [
								24,
								3
							],
							"name": "berries"
						},
						{
							"position": [
								24,
								4
							],
							"name": "dunes"
						},
						{
							"position": [
								24,
								5
							],
							"name": "wine"
						},
						{
							"position": [
								24,
								6
							],
							"name": "cart"
						},
						{
							"position": [
								24,
								7
							],
							"name": "tree"
						},
						{
							"position": [
								24,
								8
							],
							"name": "cop"
						},
						{
							"position": [
								24,
								9
							],
							"name": "marijuana"
						},
						{
							"position": [
								25,
								0
							],
							"name": "beach"
						},
						{
							"position": [
								25,
								1
							],
							"name": "microbes"
						},
						{
							"position": [
								25,
								2
							],
							"name": "floppy"
						},
						{
							"position": [
								25,
								3
							],
							"name": "artist"
						},
						{
							"position": [
								25,
								4
							],
							"name": "referee"
						},
						{
							"position": [
								25,
								5
							],
							"name": "tree"
						},
						{
							"position": [
								25,
								6
							],
							"name": "fireplace"
						},
						{
							"position": [
								25,
								7
							],
							"name": "cross"
						},
						{
							"position": [
								25,
								8
							],
							"name": "car"
						},
						{
							"position": [
								25,
								9
							],
							"name": "dunes"
						},
						{
							"position": [
								26,
								0
							],
							"name": "door"
						},
						{
							"position": [
								26,
								1
							],
							"name": "hen"
						},
						{
							"position": [
								26,
								2
							],
							"name": "laptop"
						},
						{
							"position": [
								26,
								3
							],
							"name": "recycling"
						},
						{
							"position": [
								26,
								4
							],
							"name": "drink"
						},
						{
							"position": [
								26,
								5
							],
							"name": "artist"
						},
						{
							"position": [
								26,
								6
							],
							"name": "branch"
						},
						{
							"position": [
								26,
								7
							],
							"name": "door"
						},
						{
							"position": [
								26,
								8
							],
							"name": "alligator"
						},
						{
							"position": [
								26,
								9
							],
							"name": "peach"
						},
						{
							"position": [
								27,
								0
							],
							"name": "king"
						},
						{
							"position": [
								27,
								1
							],
							"name": "socket"
						},
						{
							"position": [
								27,
								2
							],
							"name": "doctor"
						},
						{
							"position": [
								27,
								3
							],
							"name": "runners"
						},
						{
							"position": [
								27,
								4
							],
							"name": "church"
						},
						{
							"position": [
								27,
								5
							],
							"name": "beans"
						},
						{
							"position": [
								27,
								6
							],
							"name": "dog"
						},
						{
							"position": [
								27,
								7
							],
							"name": "hen"
						},
						{
							"position": [
								27,
								8
							],
							"name": "robot"
						},
						{
							"position": [
								27,
								9
							],
							"name": "cup"
						},
						{
							"position": [
								28,
								0
							],
							"name": "artist"
						},
						{
							"position": [
								28,
								1
							],
							"name": "doctor"
						},
						{
							"position": [
								28,
								2
							],
							"name": "flag"
						},
						{
							"position": [
								28,
								3
							],
							"name": "soldier"
						},
						{
							"position": [
								28,
								4
							],
							"name": "pigeon"
						},
						{
							"position": [
								28,
								5
							],
							"name": "sink"
						},
						{
							"position": [
								28,
								6
							],
							"name": "socket"
						},
						{
							"position": [
								28,
								7
							],
							"name": "knife"
						},
						{
							"position": [
								28,
								8
							],
							"name": "church"
						},
						{
							"position": [
								28,
								9
							],
							"name": "runners"
						},
						{
							"position": [
								29,
								0
							],
							"name": "teacher"
						},
						{
							"position": [
								29,
								1
							],
							"name": "drugs"
						},
						{
							"position": [
								29,
								2
							],
							"name": "woman"
						},
						{
							"position": [
								29,
								3
							],
							"name": "cleaner"
						},
						{
							"position": [
								29,
								4
							],
							"name": "ocean"
						},
						{
							"position": [
								29,
								5
							],
							"name": "pigeon"
						},
						{
							"position": [
								29,
								6
							],
							"name": "Q45"
						},
						{
							"position": [
								29,
								7
							],
							"name": "cart"
						},
						{
							"position": [
								29,
								8
							],
							"name": "city"
						},
						{
							"position": [
								29,
								9
							],
							"name": "frog"
						},
						{
							"position": [
								30,
								0
							],
							"name": "sink"
						},
						{
							"position": [
								30,
								1
							],
							"name": "city"
						},
						{
							"position": [
								30,
								2
							],
							"name": "Q45"
						},
						{
							"position": [
								30,
								3
							],
							"name": "bat"
						},
						{
							"position": [
								30,
								4
							],
							"name": "frog"
						},
						{
							"position": [
								30,
								5
							],
							"name": "woman"
						},
						{
							"position": [
								30,
								6
							],
							"name": "floppy"
						},
						{
							"position": [
								30,
								7
							],
							"name": "cleaner"
						},
						{
							"position": [
								30,
								8
							],
							"name": "sphere"
						},
						{
							"position": [
								30,
								9
							],
							"name": "rave"
						},
						{
							"position": [
								31,
								0
							],
							"name": "money"
						},
						{
							"position": [
								31,
								1
							],
							"name": "router"
						},
						{
							"position": [
								31,
								2
							],
							"name": "priest"
						},
						{
							"position": [
								31,
								3
							],
							"name": "clothes"
						},
						{
							"position": [
								31,
								4
							],
							"name": "cop"
						},
						{
							"position": [
								31,
								5
							],
							"name": "floppy"
						},
						{
							"position": [
								31,
								6
							],
							"name": "rocks"
						},
						{
							"position": [
								31,
								7
							],
							"name": "runners"
						},
						{
							"position": [
								31,
								8
							],
							"name": "money"
						},
						{
							"position": [
								31,
								9
							],
							"name": "videogame"
						},
						{
							"position": [
								32,
								0
							],
							"name": "cup"
						},
						{
							"position": [
								32,
								1
							],
							"name": "bench"
						},
						{
							"position": [
								32,
								2
							],
							"name": "sphere"
						},
						{
							"position": [
								32,
								3
							],
							"name": "ship"
						},
						{
							"position": [
								32,
								4
							],
							"name": "barrels"
						},
						{
							"position": [
								32,
								5
							],
							"name": "videogame"
						},
						{
							"position": [
								32,
								6
							],
							"name": "plate"
						},
						{
							"position": [
								32,
								7
							],
							"name": "USB"
						},
						{
							"position": [
								32,
								8
							],
							"name": "sphere"
						},
						{
							"position": [
								32,
								9
							],
							"name": "alligator"
						},
						{
							"position": [
								33,
								0
							],
							"name": "peach"
						},
						{
							"position": [
								33,
								1
							],
							"name": "snake"
						},
						{
							"position": [
								33,
								2
							],
							"name": "car"
						},
						{
							"position": [
								33,
								3
							],
							"name": "doctor"
						},
						{
							"position": [
								33,
								4
							],
							"name": "router"
						},
						{
							"position": [
								33,
								5
							],
							"name": "money"
						},
						{
							"position": [
								33,
								6
							],
							"name": "sphere"
						},
						{
							"position": [
								33,
								7
							],
							"name": "cart"
						},
						{
							"position": [
								33,
								8
							],
							"name": "hen"
						},
						{
							"position": [
								33,
								9
							],
							"name": "peach"
						},
						{
							"position": [
								34,
								0
							],
							"name": "floppy"
						},
						{
							"position": [
								34,
								1
							],
							"name": "factory"
						},
						{
							"position": [
								34,
								2
							],
							"name": "beach"
						},
						{
							"position": [
								34,
								3
							],
							"name": "church"
						},
						{
							"position": [
								34,
								4
							],
							"name": "cattle"
						},
						{
							"position": [
								34,
								5
							],
							"name": "parking sp"
						},
						{
							"position": [
								34,
								6
							],
							"name": "clothes"
						},
						{
							"position": [
								34,
								7
							],
							"name": "king"
						},
						{
							"position": [
								34,
								8
							],
							"name": "axe"
						},
						{
							"position": [
								34,
								9
							],
							"name": "cross"
						},
						{
							"position": [
								35,
								0
							],
							"name": "cleaner"
						},
						{
							"position": [
								35,
								1
							],
							"name": "ship"
						},
						{
							"position": [
								35,
								2
							],
							"name": "socket"
						},
						{
							"position": [
								35,
								3
							],
							"name": "peach"
						},
						{
							"position": [
								35,
								4
							],
							"name": "pipe"
						},
						{
							"position": [
								35,
								5
							],
							"name": "Q60"
						},
						{
							"position": [
								35,
								6
							],
							"name": "bench"
						},
						{
							"position": [
								35,
								7
							],
							"name": "peach"
						},
						{
							"position": [
								35,
								8
							],
							"name": "pipe"
						},
						{
							"position": [
								35,
								9
							],
							"name": "USB"
						},
						{
							"position": [
								36,
								0
							],
							"name": "money"
						},
						{
							"position": [
								36,
								1
							],
							"name": "beans"
						},
						{
							"position": [
								36,
								2
							],
							"name": "peach"
						},
						{
							"position": [
								36,
								3
							],
							"name": "cave"
						},
						{
							"position": [
								36,
								4
							],
							"name": "touchpad"
						},
						{
							"position": [
								36,
								5
							],
							"name": "violin"
						},
						{
							"position": [
								36,
								6
							],
							"name": "mouse"
						},
						{
							"position": [
								36,
								7
							],
							"name": "thief"
						},
						{
							"position": [
								36,
								8
							],
							"name": "flag"
						},
						{
							"position": [
								36,
								9
							],
							"name": "computer"
						},
						{
							"position": [
								37,
								0
							],
							"name": "cook"
						},
						{
							"position": [
								37,
								1
							],
							"name": "teacher"
						},
						{
							"position": [
								37,
								2
							],
							"name": "cave"
						},
						{
							"position": [
								37,
								3
							],
							"name": "robot"
						},
						{
							"position": [
								37,
								4
							],
							"name": "flag"
						},
						{
							"position": [
								37,
								5
							],
							"name": "king"
						},
						{
							"position": [
								37,
								6
							],
							"name": "bat"
						},
						{
							"position": [
								37,
								7
							],
							"name": "jacket"
						},
						{
							"position": [
								37,
								8
							],
							"name": "teacher"
						},
						{
							"position": [
								37,
								9
							],
							"name": "programmer"
						},
						{
							"position": [
								38,
								0
							],
							"name": "boot"
						},
						{
							"position": [
								38,
								1
							],
							"name": "cop"
						},
						{
							"position": [
								38,
								2
							],
							"name": "house"
						},
						{
							"position": [
								38,
								3
							],
							"name": "car"
						},
						{
							"position": [
								38,
								4
							],
							"name": "router"
						},
						{
							"position": [
								38,
								5
							],
							"name": "boot"
						},
						{
							"position": [
								38,
								6
							],
							"name": "dog"
						},
						{
							"position": [
								38,
								7
							],
							"name": "flower"
						},
						{
							"position": [
								38,
								8
							],
							"name": "doctor"
						},
						{
							"position": [
								38,
								9
							],
							"name": "bat"
						},
						{
							"position": [
								39,
								0
							],
							"name": "soldier"
						},
						{
							"position": [
								39,
								1
							],
							"name": "touchpad"
						},
						{
							"position": [
								39,
								2
							],
							"name": "snake"
						},
						{
							"position": [
								39,
								3
							],
							"name": "snack"
						},
						{
							"position": [
								39,
								4
							],
							"name": "cop"
						},
						{
							"position": [
								39,
								5
							],
							"name": "dirt"
						},
						{
							"position": [
								39,
								6
							],
							"name": "rocks"
						},
						{
							"position": [
								39,
								7
							],
							"name": "shoe"
						},
						{
							"position": [
								39,
								8
							],
							"name": "couch"
						},
						{
							"position": [
								39,
								9
							],
							"name": "sphere"
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
						],
						[
							30,
							1
						],
						[
							30,
							2
						],
						[
							30,
							3
						],
						[
							30,
							4
						],
						[
							30,
							5
						],
						[
							30,
							6
						],
						[
							30,
							7
						],
						[
							31,
							8
						],
						[
							32,
							7
						],
						[
							32,
							6
						],
						[
							32,
							5
						],
						[
							32,
							4
						],
						[
							32,
							3
						],
						[
							32,
							2
						],
						[
							32,
							1
						],
						[
							33,
							1
						],
						[
							34,
							1
						],
						[
							34,
							2
						],
						[
							34,
							3
						],
						[
							34,
							4
						],
						[
							34,
							5
						],
						[
							34,
							6
						],
						[
							34,
							7
						],
						[
							35,
							8
						],
						[
							36,
							7
						],
						[
							36,
							6
						],
						[
							36,
							5
						],
						[
							36,
							4
						],
						[
							36,
							3
						],
						[
							36,
							2
						],
						[
							36,
							1
						],
						[
							37,
							1
						],
						[
							38,
							1
						],
						[
							38,
							2
						],
						[
							38,
							3
						],
						[
							38,
							4
						],
						[
							38,
							5
						],
						[
							38,
							6
						],
						[
							38,
							7
						],
						[
							39,
							8
						]
					],
					"hintWord": [
						[
							"leaf",
							"weed",
							"cannibis",
							"leaf",
							"marijuana",
							"plant",
							"pot",
							"weed"
						],
						[
							"cook",
							"chef",
							"baker",
							"chef",
							"cook",
							"woman"
						],
						[
							"insect",
							"butterfly",
							"bug",
							"butterfly",
							"insect",
							"moth"
						],
						[
							"NA",
							"NA",
							"athlete",
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
							"mouse",
							"rat",
							"gerbil",
							"hamster",
							"mouse",
							"rat",
							"rodent"
						],
						[
							"recycling bin",
							"rubbish bin",
							"bin",
							"recycling bin",
							"rubbish bin",
							"wheely bin"
						],
						[
							"NA",
							"NA",
							"desert",
							"sand dunes",
							"sandhills"
						],
						[
							"knife",
							"dagger",
							"broken sword",
							"dagger",
							"knife",
							"lipstick"
						],
						[
							"NA",
							"NA",
							"bird",
							"chicken",
							"chook",
							"hen",
							"rooster"
						],
						[
							"bunny",
							"rabbit",
							"bunny",
							"hare",
							"rabbit"
						],
						[
							"NA",
							"NA",
							"cell phone",
							"iphone",
							"mobile phone",
							"phone",
							"smart phone",
							"smartphone",
							"Android"
						],
						[
							"NA",
							"NA",
							"cello",
							"instrument",
							"mandolin",
							"musical instrument",
							"viola",
							"violin"
						],
						[
							"NA",
							"NA",
							"modem",
							"router",
							"wifi",
							"wireless router"
						],
						[
							"drugs",
							"medicine",
							"drugs",
							"medication",
							"medicine",
							"meds",
							"pills",
							"tablets"
						],
						[
							"NA",
							"NA",
							"flag",
							"pennant"
						],
						[
							"germs",
							"microorganism",
							"antibody",
							"bacteria",
							"bugs",
							"cells",
							"germs",
							"infection",
							"microorganism",
							"virus"
						],
						[
							"serpent",
							"snake",
							"adder",
							"reptile",
							"serpent",
							"snake",
							"sperm",
							"worm"
						],
						[
							"sprog",
							"kid",
							"baby",
							"child",
							"crawl",
							"crawler",
							"crawling",
							"infant",
							"kid",
							"sprog",
							"toddler"
						],
						[
							"NA",
							"NA",
							"aporo",
							"apple",
							"fruit",
							"red delicious"
						],
						[
							"laptop",
							"computer",
							"computer",
							"laptop"
						],
						[
							"cattle",
							"cows",
							"angus",
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
							"sofa",
							"couch",
							"arm chair",
							"chair",
							"couch",
							"easy chair",
							"sofa"
						],
						[
							"NA",
							"NA",
							"bird",
							"eagle",
							"hawk",
							"pigeon"
						],
						[
							"NA",
							"NA",
							"baseball",
							"baseball bat",
							"bat",
							"softball bat"
						],
						[
							"NA",
							"NA",
							"flora",
							"flower",
							"lotus flower",
							"petals",
							"petunia",
							"rafflesi"
						],
						[
							"NA",
							"NA",
							"barbecue",
							"bbq",
							"fire",
							"fireplace",
							"flammable",
							"furnace",
							"hot",
							"table"
						],
						[
							"woman",
							"lady",
							"chick",
							"female",
							"girl",
							"lady",
							"woman"
						],
						[
							"NA",
							"NA",
							"alcohol",
							"booze",
							"champagne",
							"cheers",
							"drinks",
							"toast",
							"wine",
							"wine glasses"
						],
						[
							"NA",
							"NA",
							"beach",
							"beach umbrella",
							"summer",
							"sun",
							"sun shade",
							"sun umbrella",
							"umbrella"
						],
						[
							"avenue",
							"highway",
							"avenue",
							"bridge",
							"highway",
							"ladder",
							"lane",
							"road",
							"street",
							"train tracks"
						],
						[
							"NA",
							"NA",
							"boulders",
							"cliff",
							"rocks"
						],
						[
							"NA",
							"NA",
							"clothes",
							"clothing",
							"gear",
							"outfit"
						],
						[
							"NA",
							"NA",
							"crockery",
							"dinner plate",
							"plate"
						],
						[
							"NA",
							"NA",
							"amphibian",
							"frog",
							"kermit",
							"retile",
							"toad"
						],
						[
							"NA",
							"NA",
							"christianity",
							"cross",
							"fire hydrant"
						],
						[
							"NA",
							"NA",
							"tree"
						],
						[
							"cup",
							"mug",
							"breakfast cup",
							"coffee",
							"coffee cup",
							"cup",
							"cuppa",
							"mug",
							"tea",
							"tea cup"
						],
						[
							"ship",
							"boat",
							"boat",
							"cruiseliner",
							"ferry",
							"sea",
							"ship",
							"steamer",
							"tug boat",
							"yatch"
						],
						[
							"wolf",
							"dog",
							"canine",
							"chasing",
							"dog",
							"hound",
							"kangaroo",
							"mongrel",
							"running",
							"wallaby",
							"wolf"
						],
						[
							"NA",
							"NA",
							"bend",
							"elbow bend",
							"joint",
							"pipes",
							"plumber",
							"plumbing"
						],
						[
							"sand",
							"gravel",
							"clay",
							"dirt",
							"gravel",
							"heap",
							"pile",
							"sand",
							"soil"
						],
						[
							"NA",
							"NA",
							"barrels",
							"beehive",
							"drum",
							"shield"
						],
						[
							"NA",
							"NA",
							"computer game",
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
							"usb stick",
							"memory stick",
							"flash drive",
							"memory stick",
							"thumb drive",
							"usb drive",
							"usb stick"
						],
						[
							"artist",
							"painter",
							"artist",
							"painter",
							"painting"
						],
						[
							"buildings",
							"town",
							"buildings",
							"city",
							"cityscape",
							"high-rise buildings",
							"skyscrapers",
							"town"
						],
						[
							"NA",
							"NA",
							"blossom",
							"flowers",
							"plant",
							"weed"
						],
						[
							"NA",
							"NA",
							"computer geek",
							"computer guy",
							"computer scientist",
							"computer user",
							"geek",
							"it worker",
							"sys admin",
							"techie"
						],
						[
							"android",
							"robot",
							"android",
							"droid",
							"machine",
							"metal mickey",
							"robot"
						],
						[
							"NA",
							"NA",
							"cop",
							"pig",
							"police officer",
							"policeman",
							"security guard",
							"sheriff"
						],
						[
							"touchscreen",
							"tablet",
							"ipad",
							"phone",
							"tablet",
							"touch",
							"touchpad",
							"touchscreen"
						],
						[
							"NA",
							"NA",
							"bench",
							"garden bench",
							"park bench",
							"seat"
						],
						[
							"NA",
							"NA",
							"basin",
							"sink",
							"tap"
						],
						[
							"people",
							"crowd",
							"audience",
							"crowd",
							"group",
							"group of people",
							"mob",
							"people",
							"queue",
							"users"
						],
						[
							"NA",
							"NA",
							"accessible parking",
							"disabled parking",
							"mobility park",
							"parking",
							"wheelchair park"
						],
						[
							"NA",
							"NA",
							"ajar",
							"door",
							"doorway",
							"entrance",
							"exit",
							"open"
						],
						[
							"face",
							"socket",
							"face",
							"plug",
							"powerpoint",
							"sad",
							"smiley",
							"socket",
							"tv"
						],
						[
							"NA",
							"NA",
							"caretaker",
							"cleaner",
							"dustman",
							"janitor"
						],
						[
							"NA",
							"NA",
							"3.5 floppy",
							"3.5 inch disc",
							"disk",
							"file space",
							"floppy",
							"floppy disk",
							"save",
							"storage"
						],
						[
							"crocodile",
							"alligator",
							"alligator",
							"crocodile",
							"reptile"
						],
						[
							"pastor",
							"priest",
							"christian",
							"crucifix",
							"cross",
							"god botherer",
							"minister",
							"necklace",
							"nun",
							"pastor",
							"priest",
							"religious"
						],
						[
							"gunman",
							"soldier",
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
							"soldier",
							"Terrorist"
						],
						[
							"NA",
							"NA",
							"cart",
							"shopping cart",
							"shopping trolley",
							"trolley"
						],
						[
							"NA",
							"NA",
							"exit",
							"runners",
							"running",
							"team"
						],
						[
							"NA",
							"NA",
							"berries",
							"berry fruit",
							"blackberry",
							"fruit",
							"raspberry",
							"strawberry",
							"summer fruit"
						],
						[
							"NA",
							"NA",
							"automobile",
							"car",
							"hatchback",
							"old dunger",
							"vehicle"
						],
						[
							"robber",
							"thief",
							"burglar",
							"cash",
							"heist",
							"money",
							"robber",
							"thief"
						],
						[
							"NA",
							"NA",
							"beans",
							"broad beans",
							"coffee",
							"coffee beans",
							"legumes"
						],
						[
							"sphere",
							"ball",
							"at&t",
							"ball",
							"circle",
							"globe",
							"sphere"
						],
						[
							"NA",
							"NA",
							"arch",
							"cave",
							"hole in the rock",
							"rock"
						],
						[
							"shoe",
							"work boot",
							"boot",
							"doc martin",
							"high top",
							"safety boot",
							"shoe",
							"work boot"
						],
						[
							"cathedral",
							"church",
							"cathedral",
							"church"
						],
						[
							"house",
							"home",
							"accommodation",
							"domicile",
							"habitat",
							"home",
							"house"
						],
						[
							"NA",
							"NA",
							"cocktail",
							"drinks",
							"glass",
							"straw"
						],
						[
							"NA",
							"NA",
							"doctor",
							"gp",
							"medical professional",
							"specialist"
						],
						[
							"lecturer",
							"teacher",
							"instructor",
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
							"money",
							"coins",
							"cash",
							"coins",
							"dollar coins",
							"dollars",
							"gold coins",
							"money"
						],
						[
							"pizza slice",
							"concrete",
							"bog",
							"cement",
							"concrete",
							"filler",
							"grout",
							"mortar",
							"mud",
							"pizza",
							"pizza slice",
							"plaster"
						],
						[
							"pollution",
							"factory",
							"castle",
							"factory",
							"industry",
							"manufacturer",
							"pollution",
							"workshop"
						],
						[
							"electric chair",
							"king",
							"death",
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
							"leaf",
							"weed",
							"cannibis",
							"leaf",
							"marijuana",
							"plant",
							"pot",
							"weed"
						],
						[
							"sprog",
							"kid",
							"baby",
							"child",
							"crawl",
							"crawler",
							"crawling",
							"infant",
							"kid",
							"sprog",
							"toddler"
						],
						[
							"bunny",
							"rabbit",
							"bunny",
							"hare",
							"rabbit"
						],
						[
							"NA",
							"NA",
							"boulders",
							"cliff",
							"rocks"
						],
						[
							"cup",
							"mug",
							"breakfast cup",
							"coffee",
							"coffee cup",
							"cup",
							"cuppa",
							"mug",
							"tea",
							"tea cup"
						],
						[
							"NA",
							"NA",
							"computer geek",
							"computer guy",
							"computer scientist",
							"computer user",
							"geek",
							"it worker",
							"sys admin",
							"techie"
						],
						[
							"NA",
							"NA",
							"exit",
							"runners",
							"running",
							"team"
						],
						[
							"people",
							"crowd",
							"audience",
							"crowd",
							"group",
							"group of people",
							"mob",
							"people",
							"queue",
							"users"
						],
						[
							"avenue",
							"highway",
							"avenue",
							"bridge",
							"highway",
							"ladder",
							"lane",
							"road",
							"street",
							"train tracks"
						],
						[
							"NA",
							"NA",
							"tree"
						],
						[
							"NA",
							"NA",
							"cart",
							"shopping cart",
							"shopping trolley",
							"trolley"
						],
						[
							"NA",
							"NA",
							"alcohol",
							"booze",
							"champagne",
							"cheers",
							"drinks",
							"toast",
							"wine",
							"wine glasses"
						],
						[
							"NA",
							"NA",
							"desert",
							"sand dunes",
							"sandhills"
						],
						[
							"NA",
							"NA",
							"berries",
							"berry fruit",
							"blackberry",
							"fruit",
							"raspberry",
							"strawberry",
							"summer fruit"
						],
						[
							"cook",
							"chef",
							"baker",
							"chef",
							"cook",
							"woman"
						],
						[
							"crocodile",
							"alligator",
							"alligator",
							"crocodile",
							"reptile"
						],
						[
							"germs",
							"microorganism",
							"antibody",
							"bacteria",
							"bugs",
							"cells",
							"germs",
							"infection",
							"microorganism",
							"virus"
						],
						[
							"NA",
							"NA",
							"bird",
							"chicken",
							"chook",
							"hen",
							"rooster"
						],
						[
							"laptop",
							"computer",
							"computer",
							"laptop"
						],
						[
							"recycling bin",
							"rubbish bin",
							"bin",
							"recycling bin",
							"rubbish bin",
							"wheely bin"
						],
						[
							"NA",
							"NA",
							"cocktail",
							"drinks",
							"glass",
							"straw"
						],
						[
							"artist",
							"painter",
							"artist",
							"painter",
							"painting"
						],
						[
							"NA",
							"NA",
							"blossom",
							"flowers",
							"plant",
							"weed"
						],
						[
							"NA",
							"NA",
							"ajar",
							"door",
							"doorway",
							"entrance",
							"exit",
							"open"
						],
						[
							"android",
							"robot",
							"android",
							"droid",
							"machine",
							"metal mickey",
							"robot"
						],
						[
							"knife",
							"dagger",
							"broken sword",
							"dagger",
							"knife",
							"lipstick"
						],
						[
							"face",
							"socket",
							"face",
							"plug",
							"powerpoint",
							"sad",
							"smiley",
							"socket",
							"tv"
						],
						[
							"NA",
							"NA",
							"basin",
							"sink",
							"tap"
						],
						[
							"NA",
							"NA",
							"bird",
							"eagle",
							"hawk",
							"pigeon"
						],
						[
							"gunman",
							"soldier",
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
							"soldier",
							"Terrorist"
						],
						[
							"NA",
							"NA",
							"flag",
							"pennant"
						],
						[
							"NA",
							"NA",
							"doctor",
							"gp",
							"medical professional",
							"specialist"
						],
						[
							"drugs",
							"medicine",
							"drugs",
							"medication",
							"medicine",
							"meds",
							"pills",
							"tablets"
						],
						[
							"buildings",
							"town",
							"buildings",
							"city",
							"cityscape",
							"high-rise buildings",
							"skyscrapers",
							"town"
						],
						[
							"pizza slice",
							"concrete",
							"bog",
							"cement",
							"concrete",
							"filler",
							"grout",
							"mortar",
							"mud",
							"pizza",
							"pizza slice",
							"plaster"
						],
						[
							"NA",
							"NA",
							"baseball",
							"baseball bat",
							"bat",
							"softball bat"
						],
						[
							"NA",
							"NA",
							"amphibian",
							"frog",
							"kermit",
							"retile",
							"toad"
						],
						[
							"woman",
							"lady",
							"chick",
							"female",
							"girl",
							"lady",
							"woman"
						],
						[
							"NA",
							"NA",
							"3.5 floppy",
							"3.5 inch disc",
							"disk",
							"file space",
							"floppy",
							"floppy disk",
							"save",
							"storage"
						],
						[
							"NA",
							"NA",
							"caretaker",
							"cleaner",
							"dustman",
							"janitor"
						],
						[
							"money",
							"coins",
							"cash",
							"coins",
							"dollar coins",
							"dollars",
							"gold coins",
							"money"
						],
						[
							"usb stick",
							"memory stick",
							"flash drive",
							"memory stick",
							"thumb drive",
							"usb drive",
							"usb stick"
						],
						[
							"NA",
							"NA",
							"crockery",
							"dinner plate",
							"plate"
						],
						[
							"NA",
							"NA",
							"computer game",
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
							"NA",
							"NA",
							"barrels",
							"beehive",
							"drum",
							"shield"
						],
						[
							"ship",
							"boat",
							"boat",
							"cruiseliner",
							"ferry",
							"sea",
							"ship",
							"steamer",
							"tug boat",
							"yatch"
						],
						[
							"sphere",
							"ball",
							"at&t",
							"ball",
							"circle",
							"globe",
							"sphere"
						],
						[
							"NA",
							"NA",
							"bench",
							"garden bench",
							"park bench",
							"seat"
						],
						[
							"serpent",
							"snake",
							"adder",
							"reptile",
							"serpent",
							"snake",
							"sperm",
							"worm"
						],
						[
							"pollution",
							"factory",
							"castle",
							"factory",
							"industry",
							"manufacturer",
							"pollution",
							"workshop"
						],
						[
							"NA",
							"NA",
							"beach",
							"beach umbrella",
							"summer",
							"sun",
							"sun shade",
							"sun umbrella",
							"umbrella"
						],
						[
							"cathedral",
							"church",
							"cathedral",
							"church"
						],
						[
							"cattle",
							"cows",
							"angus",
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
							"NA",
							"NA",
							"accessible parking",
							"disabled parking",
							"mobility park",
							"parking",
							"wheelchair park"
						],
						[
							"NA",
							"NA",
							"clothes",
							"clothing",
							"gear",
							"outfit"
						],
						[
							"electric chair",
							"king",
							"death",
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
							"NA",
							"NA",
							"bend",
							"elbow bend",
							"joint",
							"pipes",
							"plumber",
							"plumbing"
						],
						[
							"robber",
							"thief",
							"burglar",
							"cash",
							"heist",
							"money",
							"robber",
							"thief"
						],
						[
							"mouse",
							"rat",
							"gerbil",
							"hamster",
							"mouse",
							"rat",
							"rodent"
						],
						[
							"NA",
							"NA",
							"cello",
							"instrument",
							"mandolin",
							"musical instrument",
							"viola",
							"violin"
						],
						[
							"touchscreen",
							"tablet",
							"ipad",
							"phone",
							"tablet",
							"touch",
							"touchpad",
							"touchscreen"
						],
						[
							"NA",
							"NA",
							"arch",
							"cave",
							"hole in the rock",
							"rock"
						],
						[
							"NA",
							"NA",
							"aporo",
							"apple",
							"fruit",
							"red delicious"
						],
						[
							"NA",
							"NA",
							"beans",
							"broad beans",
							"coffee",
							"coffee beans",
							"legumes"
						],
						[
							"lecturer",
							"teacher",
							"instructor",
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
							"NA",
							"NA",
							"cop",
							"pig",
							"police officer",
							"policeman",
							"security guard",
							"sheriff"
						],
						[
							"house",
							"home",
							"accommodation",
							"domicile",
							"habitat",
							"home",
							"house"
						],
						[
							"NA",
							"NA",
							"automobile",
							"car",
							"hatchback",
							"old dunger",
							"vehicle"
						],
						[
							"NA",
							"NA",
							"modem",
							"router",
							"wifi",
							"wireless router"
						],
						[
							"shoe",
							"work boot",
							"boot",
							"doc martin",
							"high top",
							"safety boot",
							"shoe",
							"work boot"
						],
						[
							"wolf",
							"dog",
							"canine",
							"chasing",
							"dog",
							"hound",
							"kangaroo",
							"mongrel",
							"running",
							"wallaby",
							"wolf"
						],
						[
							"NA",
							"NA",
							"flora",
							"flower",
							"lotus flower",
							"petals",
							"petunia",
							"rafflesi"
						],
						[
							"sofa",
							"couch",
							"arm chair",
							"chair",
							"couch",
							"easy chair",
							"sofa"
						],
						[
							"NA",
							"NA",
							"christianity",
							"cross",
							"fire hydrant"
						],
						[
							"NA",
							"NA",
							"athlete",
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
							"pastor",
							"priest",
							"christian",
							"crucifix",
							"cross",
							"god botherer",
							"minister",
							"necklace",
							"nun",
							"pastor",
							"priest",
							"religious"
						],
						[
							"sand",
							"gravel",
							"clay",
							"dirt",
							"gravel",
							"heap",
							"pile",
							"sand",
							"soil"
						],
						[
							"insect",
							"butterfly",
							"bug",
							"butterfly",
							"insect",
							"moth"
						],
						[
							"NA",
							"NA",
							"barbecue",
							"bbq",
							"fire",
							"fireplace",
							"flammable",
							"furnace",
							"hot",
							"table"
						],
						[
							"NA",
							"NA",
							"cell phone",
							"iphone",
							"mobile phone",
							"phone",
							"smart phone",
							"smartphone",
							"Android"
						]
					]
				}
			]
		}
	}
};
const movieList = [
    {
        name: 'Peppa Pig',
        desc: 'Peppa, an outgoing preschool pig, participates in many energetic activities. She learns something new every day and has a lot of fun with her family and friends.',
        thum: '/image/main/Movie/PeppaPig.jpg',
        type: 'Kid, Series, Adventure'
    },
    {
        name: 'SpongeBob',
        desc: 'A yellow sea sponge named SpongeBob SquarePants lives in the city of Bikini Bottom deep in the Pacific Ocean.',
        thum: '/image/main/Movie/SpongeBob.jpg',
        type: 'Kid, Comedy, Series'
    },
    {
        name: 'Arthur',
        desc: 'Bespectacled aardvark Arthur Read demonstrates to kids how to deal with such childhood traumas and challenges as homework, teachers and bullies.',
        thum: '/image/main/Movie/Arthur.jpg',
        type: 'Kid'
    },
    {
        name: 'Despicable Me',
        desc: 'Gru, a criminal mastermind, adopts three orphans as pawns to carry out the biggest heist in history. His life takes an unexpected turn when the little girls see him as their potential father.',
        thum: '/image/main/Movie/DespicableMe.jpg',
        type: 'Kid, Movie'
    },
    {
        name: 'Dora The Explorer',
        desc: 'Dora, a seven-year-old girl of Latin American descent, embarks upon numerous adventures in the wilderness with her friend Boots, a monkey, and a variety of fun and useful tools.',
        thum: '/image/main/Movie/Dora.jpg',
        type: 'Kid, Series, Adventure'
    },
    {
        name: 'Family Guy',
        desc: 'Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.',
        thum: '/image/main/Movie/FamilyGuy.jpg',
        type: 'Comedy, Series'
    },
    {
        name: 'Frozen',
        desc: 'Anna sets out on a journey with an iceman, Kristoff, and his reindeer, Sven, in order to find her sister, Elsa, who has the power to convert any object or person into ice.',
        thum: '/image/main/Movie/Frozen.jpg',
        type: 'Kid, Movie, Adventure'
    },
    {
        name: 'Hotel Transylvania',
        desc: 'Dracula, who owns a high-end resort for monsters, attempts to keep his daughter from falling in love with Jonathan, a human.',
        thum: '/image/main/Movie/HotelTransylvania.jpg',
        type: 'Kid, Series, Comedy'
    },
    {
        name: 'PAW Patrol',
        desc: 'Six brave puppies, captained by a tech-savvy ten-year-old boy, Ryder, work together to accomplish high-stakes rescue missions to safeguard the residents of the Adventure Bay community.',
        thum: '/image/main/Movie/PAW.jpg',
        type: 'Kid'
    },
    {
        name: 'South Park',
        desc: 'Four young, schoolgoing boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick, who live in South Park set out on various adventures.',
        thum: '/image/main/Movie/SouthPark.jpg',
        type: 'Series, Comedy'
    },
    {
        name: 'Spirited Away',
        desc: 'In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.',
        thum: '/image/main/Movie/SpiritedAway.jpg',
        type: 'Kid, Movie, Drama, Adventure'
    },
    {
        name: 'Up',
        desc: 'Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife\'s dream destination.',
        thum: '/image/main/Movie/Up.jpg',
        type: 'Kid, Movie, Comedy'
    },
    {
        name: 'Tiger King',
        desc: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
        thum: '/image/main/Movie/TigerKing.jpg',
        type: 'Documentary, Crime'
    },
    {
        name: 'Amanda Knox',
        desc: 'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
        thum: '/image/main/Movie/AmandaKnox.jpg',
        type: 'Documentary'
    },
    {
        name: 'Super Size Me',
        desc: 'Director Morgan Spurlock\'s social experiment in fast-food gastronomy sees him attempting to subsist uniquely on food from the McDonalds',
        thum: '/image/main/Movie/SuperSizeMe.jpg',
        type: 'Documentary'
    },
    {
        name: 'Man on Wire',
        desc: 'Filmmaker James Marsh masterfully recreates high-wire daredevil Philippe Petit\'s 1974 stunt walking on a wire across the Twin Towers.',
        thum: '/image/main/Movie/ManonWire.jpg',
        type: 'Documentary'
    },
    {
        name: 'Citizenfour',
        desc: 'Citizenfour is a 2014 documentary film directed by Laura Poitras, concerning Edward Snowden and the NSA spying scandal.',
        thum: '/image/main/Movie/Citizenfour.jpg',
        type: 'Documentary'
    },
    {
        name: 'The Social Network',
        desc: 'Mark Zuckerberg creates a social networking site, Facebook, with the help of his friend Eduardo Saverin. But soon, a string of lies tears their relationship apart even as Facebook connects people.',
        thum: '/image/main/Movie/TheSocialNetwork.jpg',
        type: 'Drama, Documentary'
    },
    {
        name: 'The Prestige',
        desc: 'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
        thum: '/image/main/Movie/ThePrestige.jpg',
        type: 'Drama, Thriller'
    },
    {
        name: 'Fight Club',
        desc: 'Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.',
        thum: '/image/main/Movie/FightClub.jpg',
        type: 'Drama, Thriller'
    },
    {
        name: 'The Revenant',
        desc: 'Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion, who betrayed him.',
        thum: '/image/main/Movie/TheRevenant.jpg',
        type: 'Adventure'
    },
    {
        name: 'Kings Speech',
        desc: 'King George VI tries to overcome his stammering problem with the help of speech therapist Lionel Logue and makes himself worthy enough to lead his country through World War II.',
        thum: '/image/main/Movie/KingsSpeech.jpg',
        type: 'Drama'
    },
    {
        name: 'Nightcrawler',
        desc: 'Louis Bloom, a petty thief, realises that he can make money by capturing photographs of criminal activities and starts resorting to extreme tactics to get them.',
        thum: '/image/main/Movie/Nightcrawler.jpg',
        type: 'Crime'
    },
    {
        name: 'A Quiet Place',
        desc: 'The Abbott family must now face the terrors of the outside world as they fight for survival in silence. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.',
        thum: '/image/main/Movie/AQuietPlace.jpg',
        type: 'Thriller'
    },
    {
        name: 'Joker',
        desc: 'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City.',
        thum: '/image/main/Movie/Joker.jpg',
        type: 'Drama, Crime'
    },
    {
        name: 'Black Swan',
        desc: 'Nina, a ballerina, gets the chance to play the White Swan, Princess Odette. But she finds herself slipping into madness when Thomas, the artistic director, decides that Lily might fit the role better.',
        thum: '/image/main/Movie/BlackSwan.jpg',
        type: 'Drama, Thriller'
    },
    {
        name: 'The Silence of The Lambs',
        desc: 'Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims.',
        thum: '/image/main/Movie/TheSilenceofTheLambs.jpg',
        type: 'Drama, Crime'
    },
    {
        name: 'Shutter Island',
        desc: 'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
        thum: '/image/main/Movie/ShutterIsland.jpg',
        type: 'Drama, Thriller'
    },
    {
        name: 'Zodiac',
        desc: 'Robert Graysmith, a cartoonist by profession, finds himself obsessively thinking about the Zodiac killer. He uses his puzzle-solving abilities to get closer to revealing the identity of the killer.',
        thum: '/image/main/Movie/Zodiac.jpg',
        type: 'Crime'
    },
    {
        name: 'Prisoners',
        desc: 'When the police take time to find Keller Dover\'s daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life.',
        thum: '/image/main/Movie/Prisoners.jpg',
        type: 'Drama, Crime'
    },
    {
        name: 'Seven',
        desc: 'A serial killer begins murdering people according to the seven deadly sins. Two detectives, one new to the city and the other about to retire, are tasked with apprehending the criminal.',
        thum: '/image/main/Movie/Seven.jpg',
        type: 'Drama, Crime'
    },
    {
        name: 'Gone Girl',
        desc: 'Nick Dunne discovers that the entire media focus has shifted on him when his wife Amy Dunne disappears on the day of their fifth wedding anniversary.',
        thum: '/image/main/Movie/GoneGirl.jpg',
        type: 'Drama, Crime'
    },
    {
        name: 'The Notebook',
        desc: 'Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from Alzheimer\'s, on a daily basis out of his notebook.',
        thum: '/image/main/Movie/TheNotebook.jpg',
        type: 'Romance'
    },
    {
        name: 'Blue Valentine',
        desc: 'Dean and Cynthia are married with a daughter and their marriage is about to fall apart. Both come from dysfunctional families and struggle to make sense of their relationship.',
        thum: '/image/main/Movie/BlueValentine.jpg',
        type: 'Romance'
    },
    {
        name: 'La La Land',
        desc: 'Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin...',
        thum: '/image/main/Movie/LaLaLand.jpg',
        type: 'Comedy, Romance'
    },
    {
        name: 'A Star Is Born',
        desc: 'After falling in love with struggling artist Ally, Jackson, a musician, coaxes her to follow her dreams, while he battles with alcoholism and his personal demons.',
        thum: '/image/main/Movie/AStarIsBorn.jpg',
        type: 'Romance'
    },
    {
        name: 'Titanic',
        desc: 'Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.',
        thum: '/image/main/Movie/Titanic.jpg',
        type: 'Drama'
    },
    {
        name: 'Curb Your Enthusiasm',
        desc: 'Larry David, a famous television writer and producer, gets into various misadventures with his friends and celebrity colleagues in Los Angeles.',
        thum: '/image/main/Movie/CurbYourEnthusiasm.jpg',
        type: 'Comedy'
    },
    {
        name: 'Arrested Development',
        desc: 'The Bluth family, once a prominent name in the business, loses everything after the head patriarch gets convicted for fraud.',
        thum: '/image/main/Movie/ArrestedDevelopment.jpg',
        type: 'Comedy'
    },
    {
        name: 'The Office',
        desc: 'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
        thum: '/image/main/Movie/TheOffice.jpg',
        type: 'Comedy'
    },
    {
        name: 'The Innocent Man',
        desc: 'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson.',
        thum: '/image/main/Movie/TheInnocentMan.jpg',
        type: 'Documentary'
    },
    {
        name: 'The Confession Killer',
        desc: 'Henry Lee Lucas was an American convicted serial killer whose crimes spanned from 1960 to 1983. He was convicted of murdering eleven people and condemned to death for the murder of Debra Jackson, although his sentence would be commuted to life in prison in 1998.',
        thum: '/image/main/Movie/TheConfessionKiller.jpg',
        type: 'Crime'
    },
    {
        name: 'Making a Murderer',
        desc: 'Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest.',
        thum: '/image/main/Movie/MakingaMurderer.jpg',
        type: 'Documentary'
    },
    {
        name: 'The Staircase',
        desc: 'In 2001 novelist Michael Peterson\'s wife died, and he claimed she perished after falling down stairs at their home. The medical examiner, however, determined that she had been beaten with a weapon',
        thum: '/image/main/Movie/TheStaircase.jpg',
        type: 'Drama'
    },
    {
        name: 'Long Shot',
        desc: 'An innocent man is accused of murder, leading his attorney on a wild chase to confirm his alibi using raw footage from a television show.',
        thum: '/image/main/Movie/LongShot.jpg',
        type: 'Documentary'
    },
    {
        name: 'School of Rock',
        desc: 'Dewey Finn, an amateur rock enthusiast, slyly takes up his friend\'s substitute teacher\'s job. Bearing no qualifications for it, he instead starts training the students to form a band.',
        thum: '/image/main/Movie/SchoolofRock.jpg',
        type: 'Comedy'
    },
    {
        name: 'Forrest Gump',
        desc: 'Forrest Gump, a man with a low IQ, joins the army for service where he meets Dan and Bubba. However, he cannot stop thinking about his childhood sweetheart Jenny Curran, whose life is messed up.',
        thum: '/image/main/Movie/ForrestGump.jpg',
        type: 'Comedy, Drama'
    },
    {
        name: 'Juno',
        desc: 'Social misfit Juno protects herself with a caustic wit, but her unplanned pregnancy has the teen getting more involved in the lives of her baby\'s adoptive parents than she expected.',
        thum: '/image/main/Movie/Juno.jpg',
        type: 'Comedy'
    },
    {
        name: 'Good Will Hunting',
        desc: 'Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.',
        thum: '/image/main/Movie/GoodWillHunting.jpg',
        type: 'Drama'
    },
    {
        name: 'Midnight In Paris',
        desc: 'Gil arrives with his fiancee and her family in Paris for a vacation, even as he tries to finish his debut novel. He is beguiled by the city, which takes him to a time past, away from his fiancee.',
        thum: '/image/main/Movie/MidnightInParis.jpg',
        type: 'Comedy'
    },
];

export default movieList;
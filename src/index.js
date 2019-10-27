import React from "react";
import { render } from "react-dom";

import Autocomplete from "./App/components/Autocomplete";
import {BasicRadarChart} from "./App/components/radar-chart-series-tooltips"

function App() {
	return (
	<div>
		<h1> This is nba stat visualizer Autocomplete demo </h1>
		<Autocomplete suggestions = {['Jaylen Adams',
  'Steven Adams',
  'Bam Adebayo',
  'Deng Adel',
  'LaMarcus Aldridge',
  'Rawle Alkins',
  'Grayson Allen',
  'Jarrett Allen',
  'Kadeem Allen',
  'Al-Farouq Aminu',
  'Justin Anderson',
  'Kyle Anderson',
  'Ryan Anderson',
  'Giannis Antetokounmpo',
  'Kostas Antetokounmpo',
  'OG Anunoby',
  'Ryan Arcidiacono',
  'Trevor Ariza',
  'D.J. Augustin',
  'Deandre Ayton',
  'Dwayne Bacon',
  'Marvin Bagley III',
  'Lonzo Ball',
  'Mo Bamba',
  'J.J. Barea',
  'Harrison Barnes',
  'Will Barton',
  'Keita Bates-Diop',
  'Nicolas Batum',
  'Jerryd Bayless',
  'Aron Baynes',
  'Kent Bazemore',
  'Bradley Beal',
  'Malik Beasley',
  'Marco Belinelli',
  'Jordan Bell',
  'DeAndre\' Bembry',
  'Dragan Bender',
  'Dairis Bertans',
  'Davis Bertans',
  'Patrick Beverley',
  'Khem Birch',
  'Bismack Biyombo',
  'Nemanja Bjelica',
  'Antonio Blakeney',
  'Eric Bledsoe',
  'Jaron Blossomgame',
  'Trevon Bluiett',
  'Bogdan Bogdanovic',
  'Bojan Bogdanovic',
  'Andrew Bogut',
  'Jonah Bolden',
  'Isaac Bonga',
  'Devin Booker',
  'Chris Boucher',
  'Avery Bradley',
  'Tony Bradley',
  'Corey Brewer',
  'Mikal Bridges',
  'Miles Bridges',
  'Ryan Broekhoff',
  'Malcolm Brogdon',
  'Dillon Brooks',
  'Bruce Brown',
  'Jaylen Brown',
  'Sterling Brown',
  'Troy Brown Jr.',
  'Jalen Brunson',
  'Thomas Bryant',
  'Reggie Bullock',
  'Trey Burke',
  'Alec Burks',
  'Deonte Burton',
  'Jimmy Butler',
  'Bruno Caboclo',
  'Jose Calderon',
  'Kentavious Caldwell-Pope',
  'Clint Capela',
  'DeMarre Carroll',
  'Jevon Carter',
  'Vince Carter',
  'Wendell Carter Jr.',
  'Michael Carter-Williams',
  'Alex Caruso',
  'Willie Cauley-Stein',
  'Troy Caupain',
  'Tyler Cavanaugh',
  'Tyson Chandler',
  'Wilson Chandler',
  'Joe Chealey',
  'Chris Chiozza',
  'Marquese Chriss',
  'Gary Clark',
  'Ian Clark',
  'Jordan Clarkson',
  'John Collins',
  'Zach Collins',
  'Darren Collison',
  'Bonzie Colson',
  'Mike Conley',
  'Pat Connaughton',
  'Quinn Cook',
  'DeMarcus Cousins',
  'Robert Covington',
  'Allen Crabbe',
  'Torrey Craig',
  'Jamal Crawford',
  'Mitchell Creek',
  'Jae Crowder',
  'Dante Cunningham',
  'Seth Curry',
  'Stephen Curry',
  'Troy Daniels',
  'Anthony Davis',
  'Ed Davis',
  'DeMar DeRozan',
  'Dewayne Dedmon',
  'Sam Dekker',
  'Angel Delgado',
  'Matthew Dellavedova',
  'Luol Deng',
  'Marcus Derrickson',
  'Donte DiVincenzo',
  'Cheick Diallo',
  'Hamidou Diallo',
  'Gorgui Dieng',
  'Spencer Dinwiddie',
  'Luka Doncic',
  'Tyler Dorsey',
  'Damyean Dotson',
  'PJ Dozier',
  'Goran Dragic',
  'Andre Drummond',
  'Jared Dudley',
  'Kris Dunn',
  'Kevin Durant',
  'Trevon Duval',
  'Vincent Edwards',
  'Henry Ellenson',
  'Wayne Ellington',
  'Joel Embiid',
  'James Ennis III',
  'Drew Eubanks',
  'Jacob Evans',
  'Jawun Evans',
  'Dante Exum',
  'Kenneth Faried',
  'Derrick Favors',
  'Cristiano Felicio',
  'Raymond Felton',
  'Terrance Ferguson',
  'Yogi Ferrell',
  'Dorian Finney-Smith',
  'Bryn Forbes',
  'Evan Fournier',
  'De\'Aaron Fox',
  'Michael Frazier',
  'Tim Frazier',
  'Melvin Frazier Jr.',
  'Jimmer Fredette',
  'Channing Frye',
  'Markelle Fultz',
  'Wenyen Gabriel',
  'Danilo Gallinari',
  'Langston Galloway',
  'Billy Garrett',
  'Marc Gasol',
  'Pau Gasol',
  'Rudy Gay',
  'Paul George',
  'Jonathan Gibson',
  'Taj Gibson',
  'Harry Giles III',
  'Shai Gilgeous-Alexander',
  'Rudy Gobert',
  'Brandon Goodwin',
  'Aaron Gordon',
  'Eric Gordon',
  'Devonte\' Graham',
  'Treveon Graham',
  'Jerami Grant',
  'Jerian Grant',
  'Donte Grantham',
  'Danny Green',
  'Draymond Green',
  'Gerald Green',
  'JaMychal Green',
  'Jeff Green',
  'Blake Griffin',
  'Tim Hardaway Jr.',
  'James Harden',
  'Maurice Harkless',
  'Montrezl Harrell',
  'Devin Harris',
  'Gary Harris',
  'Joe Harris',
  'Tobias Harris',
  'Shaquille Harrison',
  'Josh Hart',
  'Isaiah Hartenstein',
  'Udonis Haslem',
  'Gordon Hayward',
  'John Henson',
  'Juancho Hernangomez',
  'Willy Hernangomez',
  'Mario Hezonja',
  'Isaiah Hicks',
  'Buddy Hield',
  'Haywood Highsmith',
  'Nene',
  'George Hill',
  'Solomon Hill',
  'Aaron Holiday',
  'Jrue Holiday',
  'Justin Holiday',
  'Rondae Hollis-Jefferson',
  'Richaun Holmes',
  'Rodney Hood',
  'Al Horford',
  'Danuel House Jr.',
  'Dwight Howard',
  'Kevin Huerter',
  'Isaac Humphries',
  'RJ Hunter',
  'Chandler Hutchison',
  'Serge Ibaka',
  'Andre Iguodala',
  'Ersan Ilyasova',
  'Joe Ingles',
  'Brandon Ingram',
  'Kyrie Irving',
  'Jonathan Isaac',
  'Wes Iwundu',
  'Frank Jackson',
  'Josh Jackson',
  'Justin Jackson',
  'Reggie Jackson',
  'Jaren Jackson Jr.',
  'LeBron James',
  'Amile Jefferson',
  'John Jenkins',
  'Jonas Jerebko',
  'Alize Johnson',
  'Amir Johnson',
  'BJ Johnson',
  'James Johnson',
  'Stanley Johnson',
  'Tyler Johnson',
  'Wesley Johnson',
  'Nikola Jokic',
  'Damian Jones',
  'Jemerrio Jones',
  'Tyus Jones',
  'Derrick Jones Jr.',
  'DeAndre Jordan',
  'Cory Joseph',
  'Frank Kaminsky',
  'Enes Kanter',
  'Luke Kennard',
  'Michael Kidd-Gilchrist',
  'George King',
  'Maxi Kleber',
  'Brandon Knight',
  'Kevin Knox II',
  'Furkan Korkmaz',
  'Luke Kornet',
  'Kyle Korver',
  'Kosta Koufos',
  'Rodions Kurucs',
  'Kyle Kuzma',
  'Zach LaVine',
  'Skal Labissiere',
  'Jeremy Lamb',
  'Jake Layman',
  'Caris LeVert',
  'TJ Leaf',
  'Courtney Lee',
  'Damion Lee',
  'Walt Lemon Jr.',
  'Alex Len',
  'Kawhi Leonard',
  'Meyers Leonard',
  'Jon Leuer',
  'Damian Lillard',
  'Jeremy Lin',
  'Shaun Livingston',
  'Kevon Looney',
  'Brook Lopez',
  'Robin Lopez',
  'Kevin Love',
  'Kyle Lowry',
  'Jordan Loyd',
  'Kalin Lucas',
  'Timothe Luwawu-Cabarrot',
  'Tyler Lydon',
  'Trey Lyles',
  'Shelvin Mack',
  'Daryl Macon',
  'J.P. Macura',
  'Ian Mahinmi',
  'Thon Maker',
  'Boban Marjanovic',
  'Lauri Markkanen',
  'Jarell Martin',
  'Frank Mason',
  'Yante Maten',
  'Wesley Matthews',
  'Patrick McCaw',
  'CJ McCollum',
  'T.J. McConnell',
  'Doug McDermott',
  'JaVale McGee',
  'Rodney McGruder',
  'Alfonzo McKinnie',
  'Jordan McRae',
  'Jodie Meeks',
  'Salah Mejri',
  'De\'Anthony Melton',
  'Chimezie Metu',
  'Khris Middleton',
  'CJ Miles',
  'Darius Miller',
  'Malcolm Miller',
  'Patty Mills',
  'Paul Millsap',
  'Shake Milton',
  'Nikola Mirotic',
  'Donovan Mitchell',
  'Naz Mitrou-Long',
  'Malik Monk',
  'Greg Monroe',
  'Ben Moore',
  'E\'Twaun Moore',
  'Eric Moreland',
  'Markieff Morris',
  'Monte Morris',
  'Marcus Morris Sr.',
  'Donatas Motiejunas',
  'Johnathan Motley',
  'Timofey Mozgov',
  'Emmanuel Mudiay',
  'Dejounte Murray',
  'Jamal Murray',
  'Dzanan Musa',
  'Mike Muscala',
  'Svi Mykhailiuk',
  'Abdel Nader',
  'Larry Nance Jr.',
  'Shabazz Napier',
  'Raul Neto',
  'Georges Niang',
  'Joakim Noah',
  'Nerlens Noel',
  'Dirk Nowitzki',
  'Frank Ntilikina',
  'Kendrick Nunn',
  'Jusuf Nurkic',
  'David Nwaba',
  'Royce O\'Neale',
  'Kyle O\'Quinn',
  'Semi Ojeleye',
  'Jahlil Okafor',
  'Elie Okobo',
  'Josh Okogie',
  'Victor Oladipo',
  'Kelly Olynyk',
  'Cedi Osman',
  'Kelly Oubre Jr.',
  'Zaza Pachulia',
  'Jabari Parker',
  'Tony Parker',
  'Chandler Parsons',
  'Patrick Patterson',
  'Chris Paul',
  'Elfrid Payton',
  'Tarik Phillip',
  'Theo Pinson',
  'Mason Plumlee',
  'Miles Plumlee',
  'Jakob Poeltl',
  'Quincy Pondexter',
  'Michael Porter Jr.',
  'Otto Porter Jr.',
  'Bobby Portis',
  'Kristaps Porzingis',
  'Dwight Powell',
  'Norman Powell',
  'Alex Poythress',
  'Taurean Prince',
  'Ivan Rabb',
  'Chasson Randle',
  'Julius Randle',
  'JJ Redick',
  'Davon Reed',
  'Cameron Reynolds',
  'Josh Richardson',
  'Austin Rivers',
  'Andre Roberson',
  'Devin Robinson',
  'Duncan Robinson',
  'Jerome Robinson',
  'Mitchell Robinson',
  'Glenn Robinson III',
  'Rajon Rondo',
  'Derrick Rose',
  'Terrence Ross',
  'Terry Rozier',
  'Ricky Rubio',
  'D\'Angelo Russell',
  'Domantas Sabonis',
  'Brandon Sampson',
  'Dario Saric',
  'Tomas Satoransky',
  'Dennis Schroder',
  'Mike Scott',
  'Thabo Sefolosha',
  'Wayne Selden',
  'Collin Sexton',
  'Landry Shamet',
  'Iman Shumpert',
  'Pascal Siakam',
  'Ben Simmons',
  'Jonathon Simmons',
  'Anfernee Simons',
  'Marcus Smart',
  'Ish Smith',
  'JR Smith',
  'Zhaire Smith',
  'Dennis Smith Jr.',
  'Tony Snell',
  'Ray Spalding',
  'Omari Spellman',
  'Nik Stauskas',
  'Lance Stephenson',
  'Edmond Sumner',
  'Caleb Swanigan',
  'Jayson Tatum',
  'Jeff Teague',
  'Garrett Temple',
  'Jared Terrell',
  'Daniel Theis',
  'Isaiah Thomas',
  'Khyri Thomas',
  'Lance Thomas',
  'Klay Thompson',
  'Tristan Thompson',
  'Sindarius Thornwell',
  'Anthony Tolliver',
  'Karl-Anthony Towns',
  'Gary Trent Jr.',
  'Allonzo Trier',
  'PJ Tucker',
  'Evan Turner',
  'Myles Turner',
  'Ekpe Udoh',
  'Jonas Valanciunas',
  'Denzel Valentine',
  'Fred VanVleet',
  'Jarred Vanderbilt',
  'Noah Vonleh',
  'Nikola Vucevic',
  'Dwyane Wade',
  'Moritz Wagner',
  'Dion Waiters',
  'Kemba Walker',
  'Lonnie Walker IV',
  'John Wall',
  'Tyrone Wallace',
  'Brad Wanamaker',
  'T.J. Warren',
  'Julian Washburn',
  'Yuta Watanabe',
  'Thomas Welsh',
  'Russell Westbrook',
  'Derrick White',
  'Isaiah Whitehead',
  'Hassan Whiteside',
  'Andrew Wiggins',
  'Alan Williams',
  'C.J. Williams',
  'Johnathan Williams',
  'Kenrich Williams',
  'Lou Williams',
  'Marvin Williams',
  'Troy Williams',
  'Robert Williams III',
  'D.J. Wilson',
  'Justise Winslow',
  'Christian Wood',
  'Delon Wright',
  'Guerschon Yabusele',
  'Thaddeus Young',
  'Trae Young',
  'Cody Zeller',
  'Tyler Zeller',
  'Ante Zizic',
  'Ivica Zubac' ]} />
  	</div>
  	);
}

render(<BasicRadarChart />, document.getElementById('autocomplete'));
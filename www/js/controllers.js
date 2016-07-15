angular.module("pam.controllers").controller("DeliveryCtrl", function($scope) {
  return console.log("Delivery!!!");
});

angular.module("pam.controllers").controller("GeneralCtrl", function($scope) {
  return console.log("General!!!");
});

angular.module("pam.controllers").controller("HomeCtrl", function($scope, $timeout) {
  return console.log("HOME!!!");
});

angular.module("pam.controllers").controller("MeetingCtrl", function($scope, $http, localStorageService) {
  var data, employee, i, len;
  data = [
    {
      username: 'aamir',
      id: 'U096SDF2Q',
      real_name: 'Aamir',
      email: 'aamirh@thesecretlocation.com',
      phone: ''
    }, {
      username: 'ainsley',
      id: 'U0JD3AXPS',
      real_name: 'Ainsley Doty',
      email: 'ainsleyd@thesecretlocation.com',
      phone: '4167380895'
    }, {
      username: 'alexp',
      id: 'U07BE4DJA',
      real_name: 'Alex Predusel',
      email: 'alex@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'alex_a',
      id: 'U0YE1JQ5C',
      real_name: 'Alex Andrews',
      email: 'alexa@thesecretlocation.com',
      phone: ''
    }, {
      username: 'amanda',
      id: 'U0340PBQG',
      real_name: 'Amanda Anderton',
      email: 'amanda@thesecretlocation.com',
      phone: ''
    }, {
      username: 'andrewcarvalho',
      id: 'U0YEBFPNV',
      real_name: 'Andrew Carvalho',
      email: 'andrewc@thesecretlocation.com',
      phone: '9058084077'
    }, {
      username: 'andrewg',
      id: 'U1NKYCVK9',
      real_name: 'Andrew Glisinski',
      email: 'andrewg@thesecretlocation.com',
      phone: ''
    }, {
      username: 'anteb',
      id: 'U0KASK327',
      real_name: 'Ante B',
      email: 'anteb@thesecretlocation.com',
      phone: ''
    }, {
      username: 'anujpatel',
      id: 'U1PLZ00VA',
      real_name: '',
      email: 'anujp@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'ashlee',
      id: 'U06SSE4P4',
      real_name: 'Ashlee Lougheed',
      email: 'ashlee@thesecretlocation.com',
      phone: ''
    }, {
      username: 'bb',
      id: 'U1RT4P690',
      real_name: 'Bathroom Butler',
      email: void 0,
      phone: void 0
    }, {
      username: 'ben.arfmann',
      id: 'U1QLH0JCX',
      real_name: '',
      email: 'benjamina@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'bosco',
      id: 'U054CEZ9S',
      real_name: 'Stephen Bosco',
      email: 'stephen@thesecretlocation.com',
      phone: ''
    }, {
      username: 'bradk',
      id: 'U1L2AQDKP',
      real_name: 'Brad Keys',
      email: 'bradk@thesecretlocation.com',
      phone: '7788473782'
    }, {
      username: 'cb3d',
      id: 'U1GTR476C',
      real_name: 'Craig Barr',
      email: 'craigb@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'chrisb',
      id: 'U0QG17UJK',
      real_name: '',
      email: 'chrisb@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'clayton',
      id: 'U18GJJV1A',
      real_name: 'Clayton Tapp',
      email: 'claytont@thesecretlocation.com',
      phone: '14169095150'
    }, {
      username: 'connor',
      id: 'U0G30DM9T',
      real_name: 'Connor Illsley',
      email: 'connori@thesecretlocation.com',
      phone: '905-506-1654'
    }, {
      username: 'craig',
      id: 'U07KPC4KE',
      real_name: 'Craig Harwood',
      email: 'craigh@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'dan',
      id: 'U0WKJ5RLP',
      real_name: 'Daniel Carter',
      email: 'danielc@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'dustinf',
      id: 'U1K8ANB4Y',
      real_name: 'Dustin Freeman',
      email: 'dustinf@thesecretlocation.com',
      phone: '4169187467'
    }, {
      username: 'dylanw',
      id: 'U1QTMGC6P',
      real_name: 'Dylan Wallace',
      email: 'dylanw@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'elvedin',
      id: 'U033TTSM9',
      real_name: 'Elvedin Terzic',
      email: 'elvedin@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'emilyc',
      id: 'U07KG7A1Y',
      real_name: 'Emily Cumming',
      email: 'emilyc@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'eric.shamlin',
      id: 'U06Q6EW8H',
      real_name: '',
      email: 'eric@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'erinackerman',
      id: 'U033U26A1',
      real_name: 'Erin Ackerman',
      email: 'erin@thesecretlocation.com',
      phone: ''
    }, {
      username: 'gaeil',
      id: 'U0FUCKT41',
      real_name: 'Gaeil Donovan',
      email: 'gaeil@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'gino',
      id: 'U0312NM6G',
      real_name: 'Gino Fazari',
      email: 'gino@thesecretlocation.com',
      phone: '647.400.9121'
    }, {
      username: 'hamedseyf',
      id: 'U1BP6BZKN',
      real_name: 'Hamed Seyf',
      email: 'hamed.seyf@zemind.ca',
      phone: void 0
    }, {
      username: 'jacksun',
      id: 'U07KJ2YRW',
      real_name: 'Jack  Sun',
      email: 'jacks@thesecretlocation.com',
      phone: '4168438381'
    }, {
      username: 'jamesf',
      id: 'U07KJGP4Z',
      real_name: 'James Fraser',
      email: 'jamesf@thesecretlocation.com',
      phone: ''
    }, {
      username: 'jamesmilward',
      id: 'U033WCVAB',
      real_name: 'James Milward',
      email: 'james@thesecretlocation.com',
      phone: '2137600006'
    }, {
      username: 'jamie',
      id: 'U1DAUQQMD',
      real_name: 'Jamie Haberman',
      email: 'jamieh@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'japandy',
      id: 'U07M4AJDR',
      real_name: 'Andy Garcia',
      email: 'andy@thesecretlocation.com',
      phone: '4169020061'
    }, {
      username: 'jasonl',
      id: 'U07KJQ9MY',
      real_name: 'Jason Legge',
      email: 'jasonl@thesecretlocation.com',
      phone: '6472044985'
    }, {
      username: 'jessbaker',
      id: 'U1H82MDL7',
      real_name: 'Jessica B',
      email: 'jessicab@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'jingleby',
      id: 'U0NTUJCGL',
      real_name: 'Josh Ingelby',
      email: 'hello@joshjingles.ca',
      phone: void 0
    }, {
      username: 'joel_walsh',
      id: 'U09775LLX',
      real_name: 'Joel Walsh',
      email: 'joel@studio13.ca',
      phone: ''
    }, {
      username: 'john',
      id: 'U0311H3QG',
      real_name: 'John Cumming',
      email: 'john@thesecretlocation.com',
      phone: '4167354610'
    }, {
      username: 'johnbaker',
      id: 'U1PLY3CTB',
      real_name: 'John Baker',
      email: 'johnb@thesecretlocation.com',
      phone: '905 999 5714'
    }, {
      username: 'joshmanricks',
      id: 'U030ZV4AR',
      real_name: 'Josh Manricks',
      email: 'josh@thesecretlocation.com',
      phone: ''
    }, {
      username: 'kaths56',
      id: 'U06Q0Q077',
      real_name: '',
      email: 'kathryn@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'klou',
      id: 'U1H616QHL',
      real_name: 'Kania Lou',
      email: 'kania@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'kyle',
      id: 'U06ST0BSR',
      real_name: '',
      email: 'kyle@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'liamd',
      id: 'U16MEBEPM',
      real_name: 'Liam Duffy',
      email: 'liamd@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'lisacumming',
      id: 'U1QV15VM2',
      real_name: 'Lisa Cumming',
      email: 'lisac@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'lukevanosch',
      id: 'U054Y6CNL',
      real_name: 'Luke Van Osch',
      email: 'luke@thesecretlocation.com',
      phone: '6472015033'
    }, {
      username: 'mark',
      id: 'U07KNEQ15',
      real_name: 'Mark Lindan',
      email: 'markl@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'mark_andrew_sirju',
      id: 'U0NKV9RS6',
      real_name: 'Mark Sirju',
      email: 'marks@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'marty',
      id: 'U07KVR48P',
      real_name: '',
      email: 'marty@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'mathewb',
      id: 'U0JUVGEBS',
      real_name: 'Mathew Borrett',
      email: 'mathewb@thesecretlocation.com',
      phone: ''
    }, {
      username: 'matthewv',
      id: 'U1GNLJV5Z',
      real_name: 'Matthew Virsunen',
      email: 'matthewv@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'melo',
      id: 'U07BF0N22',
      real_name: 'Melody Tam',
      email: 'melody@thesecretlocation.com',
      phone: ''
    }, {
      username: 'michaelk',
      id: 'U07KQ0BT6',
      real_name: '',
      email: 'michaelk@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'michala',
      id: 'U033W8L7A',
      real_name: 'michala duffield',
      email: 'michala@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'mikes',
      id: 'U0QSTPD43',
      real_name: 'Mike Sandercock',
      email: 'michaels@thesecretlocation.com',
      phone: ''
    }, {
      username: 'miriam',
      id: 'U1NSMQY64',
      real_name: '',
      email: 'miriamv@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'morshed',
      id: 'U1PMX53FT',
      real_name: 'Morshed Abul Ala',
      email: 'morsheda@thesecretlocation.com',
      phone: ''
    }, {
      username: 'n0wak',
      id: 'U06RG5A94',
      real_name: 'Mike Nowak',
      email: 'miken@thesecretlocation.com',
      phone: '6472700238'
    }, {
      username: 'nadiav',
      id: 'U1RPXV30Q',
      real_name: 'Nadia Vargas',
      email: 'nadiav@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'noise',
      id: 'U1AJUEK0C',
      real_name: '',
      email: void 0,
      phone: void 0
    }, {
      username: 'noots',
      id: 'U0740QHB9',
      real_name: 'Noora Abu Etah',
      email: 'noora@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'olivia.amu',
      id: 'U0T62N8VC',
      real_name: 'Olivia Amu',
      email: 'oliviaa@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'pam',
      id: 'U1RQD2KGF',
      real_name: 'Pam',
      email: void 0,
      phone: void 0
    }, {
      username: 'pietro',
      id: 'U0336H1KG',
      real_name: 'Pietro Gagliano',
      email: 'pietro@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'ryan',
      id: 'U030ZUFCX',
      real_name: 'Ryan Andal',
      email: 'ryan@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'ryanreptoid',
      id: 'U12AR2G3T',
      real_name: 'Ryan Miller',
      email: 'ryan@reptoidgames.com',
      phone: ''
    }, {
      username: 'sabrinaduncan',
      id: 'U06SVSXN0',
      real_name: '',
      email: 'sabrina@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'samg',
      id: 'U054Z8EA1',
      real_name: 'Sam Gallagher',
      email: 'samg@thesecretlocation.com',
      phone: ''
    }, {
      username: 'shaun_larkin',
      id: 'U0JHJK5DW',
      real_name: 'Shaun Larkin',
      email: 'shaunl@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'stefan',
      id: 'U035KNE4V',
      real_name: 'Stefan Grambart',
      email: 'stefan@thesecretlocation.com',
      phone: '(647) 210-2477'
    }, {
      username: 'stephenc',
      id: 'U09ACUEKV',
      real_name: '',
      email: 'stephenc@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'stingray',
      id: 'U054EHCHG',
      real_name: '',
      email: 'stevemiller@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'travisn',
      id: 'U09TL4GV7',
      real_name: 'Travis Nischuk',
      email: 'travisn@thesecretlocation.com',
      phone: '6479241610'
    }, {
      username: 'vderelle',
      id: 'U07UY80UT',
      real_name: 'Vincent Derelle',
      email: 'vincentd@thesecretlocation.com',
      phone: void 0
    }, {
      username: 'yorkattack',
      id: 'U1ERVR4GK',
      real_name: 'Amanda York',
      email: 'amanday@thesecretlocation.com',
      phone: '416 659-9675'
    }, {
      username: 'slackbot',
      id: 'USLACKBOT',
      real_name: 'slackbot',
      email: null,
      phone: void 0
    }
  ];
  $scope.companyDir = [];
  for (i = 0, len = data.length; i < len; i++) {
    employee = data[i];
    if (employee.real_name && employee.email) {
      $scope.companyDir.push(employee);
    }
  }
  $scope.recentDir = localStorageService.get("recent");
  if (!$scope.recentDir) {
    $scope.recentDir = [];
  }
  return $scope.pingEmployee = function(employee) {
    var e, flag, j, len1, num, ref;
    flag = 0;
    ref = $scope.recentDir;
    for (num = j = 0, len1 = ref.length; j < len1; num = ++j) {
      e = ref[num];
      if (e.id === employee.id) {
        flag = 1;
      }
    }
    if (!flag) {
      $scope.recentDir.unshift(employee);
      $scope.recentDir = $scope.recentDir.splice(0, 5);
      return localStorageService.set("recent", $scope.recentDir);
    }
  };
});

angular.module("pam.controllers").controller("MeetingThanksCtrl", function($scope) {
  return console.log("MeetingThanks!!!");
});

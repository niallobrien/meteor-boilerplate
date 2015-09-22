//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Fake;

(function(){

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
// packages/anti_fake/packages/anti_fake.js                                             //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////
                                                                                        //
(function () {                                                                          // 1
                                                                                        // 2
///////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                               //     // 4
// packages/anti:fake/fake.js                                                    //     // 5
//                                                                               //     // 6
///////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                 //     // 8
                                                                                 // 1   // 9
                                                                                 // 2   // 10
                                                                                 // 3   // 11
                                                                                 // 4   // 12
/* ---------- ---------- ---------- ---------- ---------- ---------- */          // 5   // 13
/* Source arrays */                                                              // 6   // 14
/* ---------- ---------- ---------- ---------- ---------- ---------- */          // 7   // 15
                                                                                 // 8   // 16
                                                                                 // 9   // 17
/* Most common syllabes in English language */                                   // 10  // 18
                                                                                 // 11  // 19
var syllabes = [                                                                 // 12  // 20
  'the','ing','er','a','ly','ed','i','es','re','tion','in','e','con','y','ter','ex','al','de','com','o','di','en','an','ty','ry','u',
  'ti','ri','be','per','to','pro','ac','ad','ar','ers','ment','or','tions','ble','der','ma','na','si','un','at','dis','ca','cal','man','ap',
  'po','sion','vi','el','est','la','lar','pa','ture','for','is','mer','pe','ra','so','ta','as','col','fi','ful','get','low','ni','par','son',
  'tle','day','ny','pen','pre','tive','car','ci','mo','an','aus','pi','se','ten','tor','ver','ber','can','dy','et','it','mu','no','ple','cu',
  'fac','fer','gen','ic','land','light','ob','of','pos','tain','den','ings','mag','ments','set','some','sub','sur','ters','tu','af','au','cy','fa','im',
  'li','lo','men','min','mon','op','out','rec','ro','sen','side','tal','tic','ties','ward','age','ba','but','cit','cle','co','cov','daq','dif','ence',
  'ern','eve','hap','ies','ket','lec','main','mar','mis','my','nal','ness','ning','nu','oc','pres','sup','te','ted','tem','tin','tri','tro','up',
];                                                                               // 20  // 28
                                                                                 // 21  // 29
var syllabesLength = syllabes.length;                                            // 22  // 30
                                                                                 // 23  // 31
/* Popular names in several English-speaking countries */                        // 24  // 32
                                                                                 // 25  // 33
var names = [                                                                    // 26  // 34
  'Abigail','Alice','Amelia','Angelina','Ann',                                   // 27  // 35
  'Ashley','Avery','Barbara','Brianna','Camila',                                 // 28  // 36
  'Chloe','Dorothy','Elizabeth','Ella','Emily',                                  // 29  // 37
  'Emma','Fiona','Florence','Gabrielle','Haley',                                 // 30  // 38
  'Hannah','Isabella','Jasmine','Jennifer','Jessica',                            // 31  // 39
  'Juliette','Kate','Leah','Lily','Linda',                                       // 32  // 40
  'Lea','Madison','Makayla','Margaret','Maria',                                  // 33  // 41
  'Mariana','Mary','Megan','Mia','Olivia',                                       // 34  // 42
  'Patricia','Rachel','Samantha','Sarah','Sophie',                               // 35  // 43
  'Susan','Taylor','Valeria','Victoria','Zoe',                                   // 36  // 44
  'Alexander','Anthony','Benjamin','Brandon','Carter',                           // 37  // 45
  'Charles','Charlie','Christian','Christopher','Daniel',                        // 38  // 46
  'David','Deven','Dylan','Elijah','Eric',                                       // 39  // 47
  'Ethan','Felix','Gabriel','George','Harry',                                    // 40  // 48
  'Hudson','Hunter','Jack','Jacob','James',                                      // 41  // 49
  'Jason','Jayden','Jeremiah','John','Joseph',                                   // 42  // 50
  'Joshua','Justin','Kevin','Liam','Logan',                                      // 43  // 51
  'Lucas','Matthew','Michael','Neil','Noah',                                     // 44  // 52
  'Oliver','Owen','Raphael','Richard','Robert',                                  // 45  // 53
  'Ryan','Samuel','Thomas','Tyler','William'                                     // 46  // 54
];                                                                               // 47  // 55
                                                                                 // 48  // 56
/* Sample colors */                                                              // 49  // 57
/* TODO: Split them to several palettes and allow choice of which palettes to use, ie. warm, cool, grays, greens, etc. */
                                                                                 // 51  // 59
var colors = [                                                                   // 52  // 60
  'antiquewhite', 'brown', 'chocolate', 'coral', 'crimson',                      // 53  // 61
  'darkgray', 'darkred', 'darkorange', 'darksalmon',                             // 54  // 62
  'firebrick', 'floralwhite', 'gainsboro', 'gold', 'goldenrod',                  // 55  // 63
  'gray', 'indianred', 'khaki', 'lightcoral', 'lightsalmon', 'lightyellow',      // 56  // 64
  'maroon', 'mistyrose', 'navajowhite', 'mocassin', 'orange', 'orangered',       // 57  // 65
  'peru', 'red', 'rosybrown', 'saddlebrown', 'sandybrown', 'sienna',             // 58  // 66
  'silver', 'slategray', 'tan', 'tomato', 'yeal', 'navy', 'black',               // 59  // 67
];                                                                               // 60  // 68
                                                                                 // 61  // 69
                                                                                 // 62  // 70
var namesLength = names.length;                                                  // 63  // 71
                                                                                 // 64  // 72
/* Domain suffixes */                                                            // 65  // 73
                                                                                 // 66  // 74
var domains = [                                                                  // 67  // 75
  '.net', '.org', '.edu', '.com',                                                // 68  // 76
  '.com', '.com', '.com', '.com',                                                // 69  // 77
];                                                                               // 70  // 78
                                                                                 // 71  // 79
/* Frequency table for word lengths */                                           // 72  // 80
                                                                                 // 73  // 81
var wordLengths = [                                                              // 74  // 82
  1, 1,                                                                          // 75  // 83
  2, 2, 2, 2, 2, 2, 2,                                                           // 76  // 84
  3, 3, 3, 3,                                                                    // 77  // 85
  4, 4,                                                                          // 78  // 86
  5                                                                              // 79  // 87
];                                                                               // 80  // 88
                                                                                 // 81  // 89
/* Frequency table for random syllabes */                                        // 82  // 90
                                                                                 // 83  // 91
var syllabeCounts = [                                                            // 84  // 92
  10,                                                                            // 85  // 93
  15,                                                                            // 86  // 94
  20,                                                                            // 87  // 95
  25,                                                                            // 88  // 96
                                                                                 // 89  // 97
  30,                                                                            // 90  // 98
  35,                                                                            // 91  // 99
  40,                                                                            // 92  // 100
  45,                                                                            // 93  // 101
                                                                                 // 94  // 102
  50,                                                                            // 95  // 103
  75,                                                                            // 96  // 104
  100,                                                                           // 97  // 105
  125,                                                                           // 98  // 106
                                                                                 // 99  // 107
  150,                                                                           // 100
  175,                                                                           // 101
  175,                                                                           // 102
  175,                                                                           // 103
];                                                                               // 104
                                                                                 // 105
                                                                                 // 106
                                                                                 // 107
/* ---------- ---------- ---------- ---------- ---------- ---------- */          // 108
/* Utility methods */                                                            // 109
/* ---------- ---------- ---------- ---------- ---------- ---------- */          // 110
                                                                                 // 111
                                                                                 // 112
var capitalize = function(str) {                                                 // 113
  return str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();              // 114
};                                                                               // 115
                                                                                 // 116
var getName = function() {                                                       // 117
  return names[Math.floor(Math.random() * namesLength)];                         // 118
};                                                                               // 119
                                                                                 // 120
var getWord = function(min, max) {                                               // 121
  var length = wordLengths[Math.floor(Math.random() * 16)];                      // 122
  if(min && (length < min)) length = min;                                        // 123
  if(max && (length > max)) length = max;                                        // 124
  var word = '';                                                                 // 125
  for(var i = 0; i < length; ++i) {                                              // 126
    var count = syllabeCounts[Math.floor(Math.random() * 16)];                   // 127
    word += syllabes[Math.floor(Math.random() * count)];                         // 128
  }                                                                              // 129
  return word;                                                                   // 130
};                                                                               // 131
                                                                                 // 132
var getDomain = function() {                                                     // 133
  return getWord(2) + domains[Math.floor(Math.random() * 8)];                    // 134
};                                                                               // 135
                                                                                 // 136
var randomElement = function(array) {                                            // 137
  return array[Math.floor(Math.random() * array.length)];                        // 138
};                                                                               // 139
                                                                                 // 140
                                                                                 // 141
var attachUserField = {                                                          // 142
                                                                                 // 143
  name: function(u, o) {                                                         // 144
    o.name = u.name;                                                             // 145
  },                                                                             // 146
                                                                                 // 147
  surname: function(u, o) {                                                      // 148
    o.surname = u.surname;                                                       // 149
  },                                                                             // 150
                                                                                 // 151
  fullname: function(u, o) {                                                     // 152
    o.fullname = u.name + ' ' + u.surname;                                       // 153
  },                                                                             // 154
                                                                                 // 155
  email: function(u, o) {                                                        // 156
    o.email = (u.name + '@' + u.domain).toLowerCase();                           // 157
  },                                                                             // 158
                                                                                 // 159
  username: function(u, o) {                                                     // 160
    o.username = (u.name + '@' + u.domain).toLowerCase();                        // 161
  },                                                                             // 162
                                                                                 // 163
  'emails.address': function(u, o) {                                             // 164
    o.emails = [                                                                 // 165
      {address: (u.name + '@' + u.domain).toLowerCase(), validated: false}       // 166
    ];                                                                           // 167
  },                                                                             // 168
                                                                                 // 169
  'profile.name': function(u, o) {                                               // 170
    o.profile = {                                                                // 171
      name: u.name + ' ' + u.surname,                                            // 172
    };                                                                           // 173
  },                                                                             // 174
                                                                                 // 175
};                                                                               // 176
                                                                                 // 177
var defaultUserFields = ['name', 'surname', 'fullname', 'email'];                // 178
                                                                                 // 179
/* ---------- ---------- ---------- ---------- ---------- ---------- */          // 180
/* Exported methods */                                                           // 181
/* ---------- ---------- ---------- ---------- ---------- ---------- */          // 182
                                                                                 // 183
                                                                                 // 184
Fake = {};                                                                       // 185
                                                                                 // 186
                                                                                 // 187
                                                                                 // 188
Fake.user = function(params) {                                                   // 189
  var fields;                                                                    // 190
                                                                                 // 191
  if(params && params.fields) {                                                  // 192
    fields = params.fields;                                                      // 193
  } else {                                                                       // 194
    fields = defaultUserFields;                                                  // 195
  }                                                                              // 196
                                                                                 // 197
  var user = {                                                                   // 198
    name: getName(),                                                             // 199
    surname: capitalize(getWord(3)),                                             // 200
    domain: getDomain(),                                                         // 201
  };                                                                             // 202
                                                                                 // 203
  var result = {};                                                               // 204
                                                                                 // 205
  for(var i in fields) {                                                         // 206
    if(attachUserField[fields[i]])                                               // 207
      attachUserField[fields[i]](user, result);                                  // 208
  }                                                                              // 209
                                                                                 // 210
  return result;                                                                 // 211
};                                                                               // 212
                                                                                 // 213
Fake.word = function() {                                                         // 214
  var result = getWord();                                                        // 215
  result = result.slice(0,1).toUpperCase() + result.slice(1).toLowerCase();;     // 216
  return result;                                                                 // 217
};                                                                               // 218
                                                                                 // 219
Fake.sentence = function(length) {                                               // 220
  if(!length) {                                                                  // 221
    var length = 4 + Math.floor(Math.random() * 8);                              // 222
  }                                                                              // 223
  var ending = (Math.random() < 0.95) ? '.' : (Math.random() < 0.5) ? '!' : '?'; // 224
  var result = getWord();                                                        // 225
  result = result.slice(0,1).toUpperCase() + result.slice(1).toLowerCase();      // 226
  for(var i = 1; i < length; ++i) {                                              // 227
    result += ' ' + getWord();                                                   // 228
  }                                                                              // 229
  return result + ending;                                                        // 230
};                                                                               // 231
                                                                                 // 232
                                                                                 // 233
Fake.paragraph = function(length) {                                              // 234
  if(!length) {                                                                  // 235
    length = 6 + Math.floor(Math.random() * 8);                                  // 236
  }                                                                              // 237
  var result = Fake.sentence();                                                  // 238
  for(var i = 1; i < length; ++i) {                                              // 239
    result += ' ' + Fake.sentence();                                             // 240
  }                                                                              // 241
  return result;                                                                 // 242
};                                                                               // 243
                                                                                 // 244
                                                                                 // 245
                                                                                 // 246
Fake.fromArray = function(array) {                                               // 247
  return randomElement(array);                                                   // 248
};                                                                               // 249
                                                                                 // 250
Fake.color = function() {                                                        // 251
  return randomElement(colors);                                                  // 252
};                                                                               // 253
                                                                                 // 254
                                                                                 // 255
                                                                                 // 256
                                                                                 // 257
                                                                                 // 258
                                                                                 // 259
                                                                                 // 260
///////////////////////////////////////////////////////////////////////////////////     // 269
                                                                                        // 270
}).call(this);                                                                          // 271
                                                                                        // 272
//////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['anti:fake'] = {
  Fake: Fake
};

})();

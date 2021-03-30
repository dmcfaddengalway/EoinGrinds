function canVote(age) {
  return age >= 18;
}

function func() {
  let voterAges = [24, 33, 16, 40];
  let filtered = voterAges.filter(voterAge => canVote(voterAge));
  console.log(filtered);
}

// canVote is simply another function jsut for logical clarity, can put age >= in plac eof canVote() call

// func() --> voterAge = 24 --> filter() --> canVote(24) --> 24 > 18 --> 24 [24]
// voterAge = 33 --> filter() --> canVote(33) --> 33 > 18 --> 33 [24, 33]
// voterAge = 16 --> filter() --> canVote(24) --> 16 < 18 --> X --> [24, 33]
// voterAge = 40 --> filter() --> canVote(40) --> 40 > 18 --> 40 --> [24, 33, 40]

func();

// MAP --> perform operation, num of array eles --> same number after calling
// FILTER --> loop through and remove non passing elements, remove on criteion
// number of eles, possibly less after filter()

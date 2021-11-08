let names = ['Lisa', 'Kaitlin', 'Jan']

function writeCards(names, value) {
  return ['Thank you, Lisa, for the wonderful surprise gift!', 'Thank you, Kaitlin, for the wonderful surprise gift!', 'Thank you, Jan, for the wonderful surprise gift!'];
}

writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise')

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
      console.log(countDown);
      countDown--;
    }
    }
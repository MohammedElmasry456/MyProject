const name = "ali";
const age = 15;
const city = "Egypt";
function addition(x, y) {
  return x + y;
}

module.exports = {
  // لو انت معملتهاش اوبجكت وساوتها بالمتغير علطول هياخد اخر متغير
  N: name,
  A: age,
  C: city,
  addition: addition,
};

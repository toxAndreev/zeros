module.exports = function getZerosCount(number) {
	var a = 5, count = 0;
	while (a <= number) {
		count += Math.floor(number / a);
		a *= 5;
	}
	return count;
}

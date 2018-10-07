module.exports = function solveSudoku(matrix) {

	const zeros = [];

	for (let x = 0; x < 9; x++) {
		for (let y = 0; y < 9; y++) {
			if (matrix[x][y] === 0) {
				zeros.push([ x, y ]);
			}
		}
	}

	let zsize = zeros.length;
	for (let k = 0; k < zsize;) {
		for (let m = 1; m <= 9; m++) {
			if (check(matrix, zeros[k][0], zeros[k][1], m)) {
				matrix[zeros[k][0]][zeros[k][1]] = m;
				k++;
				break;
			} else {
				if (m == 9) {
					k--;
					while (k > 0) {
						if (matrix[zeros[k][0]][zeros[k][1]] == 9) {
							matrix[zeros[k][0]][zeros[k][1]] = 0;
							k--;
						} else {
							break;
						}
					}
					m = matrix[zeros[k][0]][zeros[k][1]];
					matrix[zeros[k][0]][zeros[k][1]] = 0;
				}
			}
		}
	}
	return matrix;

	function check(matr, i, j, numb) {
		let xBlock = Math.floor(i / 3) * 3;
		let yBlock = Math.floor(j / 3) * 3;
			for (let k = 0; k < 9; k++) {
			if (matr[i][k] == numb || matr[k][j] == numb
					|| matr[xBlock + Math.floor(k / 3)][yBlock + k % 3] == numb) {
				return false;
			}
		}
		return true;
	}
}

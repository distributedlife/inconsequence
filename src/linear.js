const next = {};

export default (key) => {
	if (next[key] === undefined) {
		next[key] = 0;
	}

  next[key] += 1;
	return next[key];
}

export const exists = (key) => next[key] !== undefined;
function choice(w) {
  let weights = [...w];
  let n = weights.length;
  let i;
  for (i = 0; i < n; i++) weights[i] += weights[i - 1] || 0;
  let random = Math.random() * weights[n - 1];
  for (i = 0; i < n; i++) if (weights[i] > random) break;
  return i;
}

export { choice };

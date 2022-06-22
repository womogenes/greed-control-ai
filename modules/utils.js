const choice = (w) => {
  // Make some random choices from weights
  let prefix = [...w];
  let n = prefix.length;
  for (let i = 0; i < n; i++) prefix[i] += prefix[i - 1] || 0;
  let random = Math.random() * prefix[n - 1];
  for (let i = 0; i < n; i++) if (prefix[i] > random) return i;
};

const mutate = (distr) => {
  // Mutate a distribution Gaussian-ly
  return distr.map((x) => x * randomGaussian(1, 0.05));
};

const normalize = (distr) => {
  const sum = distr.reduce((partial, x) => partial + x, 0);
  return distr.map((x) => x / sum);
};

export { choice, mutate, normalize };

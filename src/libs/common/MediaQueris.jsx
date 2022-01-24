const breakpoints = [455, 499, 500, 650, 700, 800, 900, 1200];

const mq_min_width = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
);

const mq_max_width = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
);

export { mq_min_width, mq_max_width };
const services = [
  { name: 'node server', port: 3000, pid: 12481, base: 120, restarts: 0, status: 'up' },
  { name: 'postgres',    port: 5432, pid: 8834,  base: 210, restarts: 0, status: 'up' },
  { name: 'redis',       port: 6379, pid: 9012,  base: 32,  restarts: 1, status: 'up' },
  // ...
];

const ports = [
  { num: 3000, name: 'node',     open: true  },
  { num: 5432, name: 'postgres', open: true  },
  { num: 443,  name: 'https',    open: false },
  // ...
];

function refresh() {
  const cpu = rnd(15, 85);
  const mem = rnd(40, 75);

  cpuHistory.push(cpu);
  cpuHistory.shift();

  renderSummary(cpu, mem, disk);
  renderResourceBars(cpu, mem, swap);
  updateSparkChart(cpuHistory);
  renderServices();
  addLog(randomPick, type);
  renderLogs();
}

setInterval(refresh, 3000);

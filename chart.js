let cpuHistory = Array.from({ length: 20 }, () => Math.round(20 + Math.random() * 30));

new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{ data: cpuHistory, borderColor: '#1d9e75', tension: 0.4, fill: true }]
  },
  options: { scales: { y: { min: 0, max: 100 } } }
})

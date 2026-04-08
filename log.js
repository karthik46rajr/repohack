function addLog(msg, type) {
  const ts = new Date().toTimeString().slice(0, 8);
  logEntries.unshift({ ts, msg, type });  // prepend
  if (logEntries.length > 40) logEntries.pop(); // cap at 40
}

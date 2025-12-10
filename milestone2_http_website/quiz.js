/* quiz.js
   Grading logic for Milestone 2 quiz.
   Comments explain implementation and answer keys.
*/

/* Answer key (used to grade)
   Q1: TCP (text)
   Q2: HTTP/2 (value "2")
   Q3: QUIC (value "quic")
   Q4: SPDY (value "spdy")
   Q5: multi-select: HTTPS and SSL (values "https" and "ssl") — both required
*/

document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.getElementById('submitBtn');
  const resetBtn = document.getElementById('resetBtn');
  const resultsEl = document.getElementById('results');
  const form = document.getElementById('quizForm');

  submitBtn.addEventListener('click', function () {
    // clear previous
    resultsEl.innerHTML = '';

    const total = 5;
    let score = 0;
    const details = [];

    // Q1 — text input, accept case-insensitive "tcp"
    const q1 = (document.getElementById('q1').value || '').trim().toLowerCase();
    if (q1 === 'tcp') {
      score++;
      document.getElementById('f1').textContent = 'Correct: TCP';
      document.getElementById('f1').className = 'feedback correct';
      details.push({ q: 1, ok: true, ans: 'TCP', user: q1 });
    } else {
      document.getElementById('f1').textContent = 'Incorrect. Answer: TCP';
      document.getElementById('f1').className = 'feedback incorrect';
      details.push({ q: 1, ok: false, ans: 'TCP', user: q1 });
    }

    // Q2 — radio: "2"
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === '2') {
      score++;
      document.getElementById('f2').textContent = 'Correct: HTTP/2';
      document.getElementById('f2').className = 'feedback correct';
      details.push({ q: 2, ok: true, ans: 'HTTP/2', user: q2.value });
    } else {
      document.getElementById('f2').textContent = 'Incorrect. Answer: HTTP/2';
      document.getElementById('f2').className = 'feedback incorrect';
      details.push({ q: 2, ok: false, ans: 'HTTP/2', user: q2 ? q2.value : null });
    }

    // Q3 — radio: "quic"
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'quic') {
      score++;
      document.getElementById('f3').textContent = 'Correct: QUIC';
      document.getElementById('f3').className = 'feedback correct';
      details.push({ q: 3, ok: true, ans: 'QUIC', user: q3.value });
    } else {
      document.getElementById('f3').textContent = 'Incorrect. Answer: QUIC';
      document.getElementById('f3').className = 'feedback incorrect';
      details.push({ q: 3, ok: false, ans: 'QUIC', user: q3 ? q3.value : null });
    }

    // Q4 — radio: "spdy"
    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'spdy') {
      score++;
      document.getElementById('f4').textContent = 'Correct: SPDY';
      document.getElementById('f4').className = 'feedback correct';
      details.push({ q: 4, ok: true, ans: 'SPDY', user: q4.value });
    } else {
      document.getElementById('f4').textContent = 'Incorrect. Answer: SPDY';
      document.getElementById('f4').className = 'feedback incorrect';
      details.push({ q: 4, ok: false, ans: 'SPDY', user: q4 ? q4.value : null });
    }

    // Q5 — multi-select: check that both 'https' and 'ssl' are checked
    const q5_checked = Array.from(document.querySelectorAll('input[name="q5"]:checked')).map(i => i.value);
    const required = ['https', 'ssl'];
    const ok5 = required.every(r => q5_checked.includes(r));
    if (ok5) {
      score++;
      document.getElementById('f5').textContent = 'Correct: HTTPS and SSL';
      document.getElementById('f5').className = 'feedback correct';
      details.push({ q: 5, ok: true, ans: 'HTTPS, SSL', user: q5_checked.join(',') });
    } else {
      document.getElementById('f5').textContent = 'Incorrect. Answers: HTTPS and SSL';
      document.getElementById('f5').className = 'feedback incorrect';
      details.push({ q: 5, ok: false, ans: 'HTTPS, SSL', user: q5_checked.join(',') });
    }

    // Build results: pass threshold 60%
    const percent = Math.round((score / total) * 100);
    const pass = percent >= 60;
    const header = document.createElement('div');
    header.className = pass ? 'result-pass' : 'result-fail';
    header.innerHTML = `<strong>Overall:</strong> ${pass ? 'PASS' : 'FAIL'} — Score: ${score}/${total} (${percent}%)`;
    resultsEl.appendChild(header);

    // Per-question breakdown
    const ul = document.createElement('ul');
    ul.className = 'small';
    details.forEach(d => {
      const li = document.createElement('li');
      li.innerHTML = `Q${d.q}: ${d.ok ? '<span class="correct">Correct</span>' : '<span class="incorrect">Incorrect</span>'} — Answer: <strong>${d.ans}</strong>${d.user ? '<br>User: ' + d.user : ''}`;
      ul.appendChild(li);
    });
    resultsEl.appendChild(ul);

    header.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // Reset clears inputs and results and per-question feedback
  resetBtn.addEventListener('click', function () {
    form.reset();
    resultsEl.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const el = document.getElementById('f' + i);
      if (el) { el.textContent = ''; el.className = 'feedback'; }
    }
  });
});

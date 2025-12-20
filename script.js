// 🌗 Dark / Light Mode Toggle
function toggleMode() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
}

// 📊 CGPA Calculation
function calculate() {
  // Step 1: Empty check
  if (
    s1.value === "" || s2.value === "" || s3.value === "" ||
    s4.value === "" || s5.value === "" || s6.value === "" ||
    s7.value === "" || s8.value === ""
  ) {
    alert("সব পর্বের GPA দিন");
    return;
  }

  // Step 2: Convert input to numbers
  let g1 = parseFloat(s1.value);
  let g2 = parseFloat(s2.value);
  let g3 = parseFloat(s3.value);
  let g4 = parseFloat(s4.value);
  let g5 = parseFloat(s5.value);
  let g6 = parseFloat(s6.value);
  let g7 = parseFloat(s7.value);
  let g8 = parseFloat(s8.value);

  // Step 3: Validate GPA range (0–4)
  if (g1 < 0 || g1 > 4 ||
      g2 < 0 || g2 > 4 ||
      g3 < 0 || g3 > 4 ||
      g4 < 0 || g4 > 4 ||
      g5 < 0 || g5 > 4 ||
      g6 < 0 || g6 > 4 ||
      g7 < 0 || g7 > 4 ||
      g8 < 0 || g8 > 4) {
    alert("GPA অবশ্যই 0.00 থেকে 4.00 এর মধ্যে হতে হবে");
    return;
  }

  // Step 4: Weighted calculation
  let total = 0;
  total += g1 * 5;
  total += g2 * 5;
  total += g3 * 10;
  total += g4 * 10;
  total += g5 * 20;
  total += g6 * 20;
  total += g7 * 20;
  total += g8 * 10;

  // Step 5: Final CGPA
  let cgpa = (total / 100).toFixed(2);

  // Step 6: Show result
  result.innerText = "Final CGPA: " + cgpa;

  // Step 7: Progress bar animation
  let percent = (cgpa / 4) * 100;
  bar.style.width = percent + "%";
}

// 🗑️ Clear All Data
function clearData() {
  s1.value = "";
  s2.value = "";
  s3.value = "";
  s4.value = "";
  s5.value = "";
  s6.value = "";
  s7.value = "";
  s8.value = "";

  result.innerText = "";
  bar.style.width = "0%";
}

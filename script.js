function generateAnime() {
  const desc = document.getElementById("description").value.trim();
  const output = document.getElementById("output");

  if (!desc) {
    output.innerHTML = "<p style='color:red;'>من فضلك أدخل وصفًا أولاً.</p>";
    return;
  }

  output.innerHTML = `
    <h2>نتيجة الإنشاء:</h2>
    <p>وصفك: ${desc}</p>
    <p>سيتم قريبًا تحويل هذا الوصف إلى أنمي!</p>
  `;
}

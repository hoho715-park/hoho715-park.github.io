function openModal() {
  document.getElementById("modal-bg").style.display = "flex";
}

function closeModal(e) {
  if (e.target.id === "modal-bg") {
    document.getElementById("modal-bg").style.display = "none";
  }
}

function submitForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name) {
    alert("name을 입력해주세요!");
    return;
  }
  if (!email) {
    alert("email을 입력해주세요!");
    return;
  }
  if (!email.includes("@")) {
    alert("이메일의 형식에 맞춰서 작성해주세요!");
    return;
  }
  if (!message) {
    alert("message를 입력해주세요!");
    return;
  }

  alert("성공적으로 메일이 전송되었습니다.");
  document.getElementById("modal-bg").style.display = "none";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

function openPopup(target) {
  document.querySelectorAll('.goal-popup').forEach(popup => popup.classList.remove('active'));
  const popup = document.getElementById(`popup-${target}`);
  if (popup) popup.classList.add('active');
}

function closePopup() {
  document.querySelectorAll('.goal-popup').forEach(popup => popup.classList.remove('active'));
}

function openModal() {
      document.getElementById("modal-bg").style.display = "flex";
    }
    function closeModal(e) {
      if (e.target.id === "modal-bg") {
        document.getElementById("modal-bg").style.display = "none";
      }
    }
let displayReplies1 = false;

function toggleReplies1() {
  const replies1 = document.querySelector("#replies1");
  replies1.style.display = displayReplies1 ? "none" : "block";
  displayReplies1 = !displayReplies1;
}

let displayReplies2 = false;

function toggleReplies2() {
  const replies2 = document.querySelector("#replies2");
  replies2.style.display = displayReplies2 ? "none" : "block";
  displayReplies2 = !displayReplies2;
}

let displayReplies3 = false;

function toggleReplies3() {
  const replies3 = document.querySelector("#replies3");
  replies3.style.display = displayReplies3 ? "none" : "block";
  displayReplies3 = !displayReplies3;
}

function displaySubscribeMessage() {
  const subscribeMessageModal = document.querySelector(
    "#subscribeMessageModal"
  );

  subscribeMessageModal.style.display = "flex";
}

function hideSubscribeMessage() {
  const subscribeMessageModal = document.querySelector(
    "#subscribeMessageModal"
  );

  subscribeMessageModal.style.display = "none";
}

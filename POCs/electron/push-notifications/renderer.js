const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process.'

//Button for create push notification
const btn = document.getElementById("button");
btn.innerHTML = "Create Push Notification";
btn.addEventListener("click", function () {
  new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
});
document.body.appendChild(btn);

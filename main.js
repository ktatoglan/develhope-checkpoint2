let addBtn = document.getElementById("addBtn");
let findBtn = document.getElementById("find");

addBtn.addEventListener("click", () => {
  if (
    document.getElementById("name").value == "" ||
    document.getElementById("age").value == "" ||
    document.getElementById("location").value == ""
  ) {
    alert("Fill all spaces");
    return;
  }
  let user = {
    username: document.getElementById("name").value,
    password: document.getElementById("age").value,
    location: document.getElementById("location").value,
  };
  let storedUsers = [];
  storedUsers = JSON.parse(localStorage.getItem("users"));
  if (storedUsers) {
    storedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    alert("User registered!");
  } else {
    localStorage.setItem("users", JSON.stringify([user]));
    alert("User registered!");
  }
});

findBtn.addEventListener("click", () => {
  console.clear();
  let lcl = document.getElementById("locationFind").value;
  let storedUsers = JSON.parse(localStorage.getItem("users"));
  storedUsers.map((u) => {
    if (u.location.includes(lcl)) {
      console.log(u);
    }
  });
  alert("Users printed.");
});

function displayAll() {
  console.clear();
  alert("All users printed.");
  console.log(JSON.parse(localStorage.getItem("users")));
}

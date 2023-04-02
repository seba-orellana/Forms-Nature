function animate_input(input_name, label_name, icon_name, top, left) {
    let input_user = document.getElementById(input_name);
    let label_user = document.getElementById(label_name);
    let icon_user = document.getElementById(icon_name);
    input_user.addEventListener("focus", () => {
        label_user.style.top=top;
        label_user.style.left=left;
        input_user.style.width="96.5%";
        input_user.style.visibility="visible";
        icon_user.style.opacity="0%";
    })
}

animate_input("username", "username_label", "username_icon", "17.8rem", "49.5rem");
animate_input("pass", "pass_label", "pass_icon", "22.8rem", "49.5rem");
animate_input("mail", "mail_label", "mail_icon", "27.8rem", "49.5rem");

function submit_data() {
    button = document.getElementById("submit");
    button.addEventListener("click", () => {
        button.style.width="15%";
        button.style.alignSelf="center";
        button.style.justifySelf="center";
        button.style.borderRadius="50px";
        button.innerHTML="<img src='./Img/done_white.png'/>";
        button.style.boxShadow="0px 0px 30px rgb(29, 218, 24)";
        setTimeout(function(){
            window.location.reload();
         }, 5000);
    })
}

submit_data()
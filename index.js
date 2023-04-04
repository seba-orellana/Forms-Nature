function clicked_input(input_name, label_name, icon_name, parent) {
    let input_user = document.getElementById(input_name);
    let label_user = document.getElementById(label_name);
    let icon_user = document.getElementById(icon_name);
    let par = document.getElementById(parent);
    input_user.addEventListener("focus", () => {
        label_user.style.top="0%";
        label_user.style.left="0%";
        input_user.style.width="96.5%";
        input_user.style.visibility="visible";
        icon_user.style.opacity="0%";
        label_user.classList.remove("anim");
        switch (label_name) {
            case "username_label":
                par.removeEventListener("mouseout", de_animate_userlabel);
                par.removeEventListener("mouseover", animate_userlabel);
                break;
            case "pass_label":
                par.removeEventListener("mouseout", de_animate_passlabel);
                par.removeEventListener("mouseover", animate_passlabel);
                break;
            case "mail_label":
                par.removeEventListener("mouseout", de_animate_maillabel);
                par.removeEventListener("mouseover", animate_maillabel);
                break;
        }
    })
}

function animate_userlabel() {
    let elem = document.getElementById("username_label");
    elem.classList.add("anim");
}

function de_animate_userlabel() {
    let elem = document.getElementById("username_label");
    elem.classList.remove("anim");
}

function animate_passlabel() {
    let elem = document.getElementById("pass_label");
    elem.classList.add("anim");
}

function de_animate_passlabel() {
    let elem = document.getElementById("pass_label");
    elem.classList.remove("anim");
}

function animate_maillabel() {
    let elem = document.getElementById("mail_label");
    elem.classList.add("anim");
}

function de_animate_maillabel() {
    let elem = document.getElementById("mail_label");
    elem.classList.remove("anim");
}

function animate_field(parent) {
    let par = document.getElementById(parent);
    switch (parent) {
        case "username_list":
            par.addEventListener("mouseover", animate_userlabel);
            par.addEventListener("mouseout", de_animate_userlabel);
            break;
        case "pass_list":
            par.addEventListener("mouseover", animate_passlabel);
            par.addEventListener("mouseout", de_animate_passlabel);
            console.log("work");
            break;
        case "mail_list":
            par.addEventListener("mouseover", animate_maillabel);
            par.addEventListener("mouseout", de_animate_maillabel);
            break;
    }

}

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

if(window.innerWidth > 1279) {
    animate_field("username_list");
    animate_field("pass_list");
    animate_field("mail_list");
    clicked_input("username", "username_label", "username_icon", "username_list");
    clicked_input("pass", "pass_label", "pass_icon", "pass_list");
    clicked_input("mail", "mail_label", "mail_icon", "mail_list");
    submit_data()
}

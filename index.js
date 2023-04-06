function animate_userlabel() {
    let label = document.getElementById("username_label");
    let icon = document.getElementById("username_icon");
    let input = document.getElementById("username");
    let par = document.getElementById("username_list");
    label.classList.add("anim");
    icon.style.opacity="0%";
    icon.style.visibility="hidden";
    input.style.width="96.5%";
    input.style.visibility="visible";
    par.removeEventListener("mouseover", animate_userlabel);
}

function animate_passlabel() {
    let label = document.getElementById("pass_label");
    let icon = document.getElementById("pass_icon");
    let input = document.getElementById("pass");
    let par = document.getElementById("pass_list");
    label.classList.add("anim");
    icon.style.opacity="0%";
    icon.style.visibility="hidden";
    input.style.width="96.5%";
    input.style.visibility="visible";
    par.removeEventListener("mouseover", animate_passlabel);
}

function animate_maillabel() {
    let label = document.getElementById("mail_label");
    let icon = document.getElementById("mail_icon");
    let input = document.getElementById("mail");
    let par = document.getElementById("mail_list");
    label.classList.add("anim");
    icon.style.opacity="0%";
    icon.style.visibility="hidden";
    input.style.width="96.5%";
    input.style.visibility="visible";
    par.removeEventListener("mouseover", animate_maillabel);
}


function animate_field(parent) {
    let par = document.getElementById(parent);
    switch (parent) {
        case "username_list":
            par.addEventListener("mouseover", animate_userlabel);
            break;
        case "pass_list":
            par.addEventListener("mouseover", animate_passlabel);
            break;
        case "mail_list":
            par.addEventListener("mouseover", animate_maillabel);
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
    submit_data()
}

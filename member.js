function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsBtn = document.getElementById("memberSkillsBtn");
    var memberSkillsBtnIcon = document.getElementById("memberSkillsBtnIcon");
    var memberSkillsBtnText = document.getElementById("memberSkillsBtnText");
    var memberSkillsBtnIconClass = memberSkillsBtnIcon.className;
    var memberSkillsBtnTextClass = memberSkillsBtnText.className;
    var memberSkillsClass = memberSkills.className;
    if (memberSkillsBtnIconClass == "fas fa-chevron-down") {
        memberSkillsBtnIcon.className = "fas fa-chevron-up";
        memberSkillsBtnText.className = "memberSkillsBtnTextUp";
        memberSkills.className = "memberSkillsUp";
        member.className = "memberUp";
    } else {
        memberSkillsBtnIcon.className = "fas fa-chevron-down";
        memberSkillsBtnText.className = "memberSkillsBtnTextDown";
        memberSkills.className = "memberSkillsDown";
        member.className = "memberDown";
    }
}
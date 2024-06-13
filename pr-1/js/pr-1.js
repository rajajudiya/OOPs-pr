class school{
    student(name,contact,email) {
        document.getElementById('name1').innerHTML = `My name is =${name}`
        document.getElementById('contact1').innerHTML = `My contact no is =${contact}`
        document.getElementById('eamil1').innerHTML = `My gmail is =${email}`
    }
    peon(name,contact,email) {
        document.getElementById('name2').innerHTML = `My name is =${name}`
        document.getElementById('contact2').innerHTML = `My contact no is =${contact}`
        document.getElementById('eamil2').innerHTML = `My gmail is =${email}`
    }
    faculty(name,contact,email) {
        document.getElementById('name3').innerHTML = `My name is =${name}`
        document.getElementById('contact3').innerHTML = `My contact no is =${contact}`
        document.getElementById('eamil3').innerHTML = `My gmail is =${email}`
    }
}

let student1 = new school();
student1.student("Raj","2364774575","rajajudiya@gmail.com");

let peon = new school();
peon.peon("Prince","9346484744","prince@gmail.com");

let faculty = new school();
faculty.faculty("Ankur","2364447844","amkur@gmail.com");

function submit() {
  var button = document.getElementById('submit');
  button.onclick = function() {
    var parent = document.getElementById('parent').value;
    var phone = document.getElementById('phone-number').value;
    var student = document.getElementById('student').value;
    var age = document.getElementById('age').value;
    var allergies = document.getElementById('allergies').value;
    var comments = document.getElementById('comments').value;

    var mailto = 'mailto:gpizarro@javaman.net';
    var subject = 'subject=I Would Like To Sign My Child Up';
    var body = '&body=';
    body += 'I would like to sign ' + student + ' up for Code Reboot 2017.';
    body += ' ' + student + ' is ' + ' years old.';
    if(allergies != '') {
      body += '%0A %0AAllergies: %0A' + allergies;
    }
    if(comments != '') {
      body += '%0A %0AMy Comments: %0A' + comments;
    }
    body += '%0A %0AThank you, %0A' + parent + ' %0A' + phone;

    console.log(mailto + subject + body);
    window.location.replace(mailto + subject + body);
  }
}

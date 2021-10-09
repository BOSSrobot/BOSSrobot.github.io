const num = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 
'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 
'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 
't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25};

const char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cipher(text, key) {
  let encrypted = "";
  for (var i = 0; i<text.length; i++) {
    encrypted += char[(num[text[i]] + num[key[i%key.length]])%26];
  }
  return encrypted;
}

function special(char) {
  if (num[char] <= num['f']) {
    return "!";
  } else if (num[char] <= num['m']) {
    return "@";
  } else if (num[char] <= num['t']) {
    return "$";
  } else if (num[char] <= num['z']) {
    return "&";
  }

}

function run(form) {

  var outdiv = document.getElementById("output");
  outdiv.innerHTML = "";

  var site = form.sitename.value.toLowerCase();
  var name = form.username.value.toLowerCase(); 
  var password = "";

  password += site.length; 
  password += site[0].toUpperCase();
  password += cipher(site, name);
  password += site[site.length-1];
  password += 42-site.length;
  password += special(site[0]);

  showPassword(password, outdiv); 

}

function showError(msg, outdiv) {
  addHeader("An Error Occured", outdiv);	
  addDisplay(msg, "error", outdiv); 
}

function showPassword(password, outdiv) {
  addHeader("Your generated password!", outdiv);	
  addDisplay(password, "display", outdiv); 
}

function addHeader(title, outdiv) {
  var header = document.createElement("h1");
  header.innerHTML = title;
  header.className = "title";
  outdiv.appendChild(header);
}

function addDisplay(msg, className, outdiv) {
  var p = document.createElement("p");
  p.innerHTML = msg;	
  p.className = className;
  outdiv.appendChild(p);
}

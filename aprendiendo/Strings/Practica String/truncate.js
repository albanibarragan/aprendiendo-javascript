function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "...";
  } else {
    return str;
  }
}

console.log(truncate("Lo que me gustaría contar sobre este tema es:", 20));

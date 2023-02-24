function angryProfessor(k, a) {
   let num = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            num += 1;
        }
    }
    return num >= k ? "NO" : "YES";
}
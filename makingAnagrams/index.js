function makingAnagrams(s1, s2) {
  const freq = {};
  let count = 0;

  // Update frequency of characters in s1
  for (let i = 0; i < s1.length; i++) {
    freq[s1[i]] = freq[s1[i]] ? freq[s1[i]] + 1 : 1;
  }
  // Update frequency of characters in s2 and count deletions
  for (let i = 0; i < s2.length; i++) {
    if (freq[s2[i]]) {
      freq[s2[i]]--;
    } else {
      count++;
    }
  }
  // Add up remaining characters in s1
  for (let char in freq) {
    count += freq[char];
  }
  return count;
}

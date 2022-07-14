
#include <bits/stdc++.h>

using namespace std;

int
romanToInt(string s)
{
  map<char, int> romans = {
    { 'I', 1 },   { 'V', 5 },    { 'X', 10 },  { 'L', 50 },
    { 'C', 100 }, { 'M', 1000 }, { 'D', 500 },
  };

  int total = 0;

  for (int i = 0; i < s.length(); i++)
    int curr = romans[s[i]],
    {
      next = romans[s[i + 1]];

      if (curr >= next) {
        total += curr;
      } else {
        total -= curr;
      }
    }
  return total;
}

int
main(void)
{
  cout << romanToInt("IV");
  return 0;
}

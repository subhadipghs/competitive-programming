
#include <bits/stdc++.h>

using namespace std;

bool
isValidParenthesis(string s)
{
  unordered_map<char, char> lookup = {
    { ')', '(' },
    { '}', '{' },
    { ']', '[' },
  };
  stack<char> st;

  // minimum 2 characters are required for a valid parenthesis
  if (s.length() <= 1) {
    return false;
  }
  // check whether the first character is closing bracket or not
  if (s[0] == '}' || s[0] == ')' || s[0] == ']') {
    return false;
  }

  for (int i = 0; i < s.length(); i++) {
    if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
      st.push(s[i]);
    } else {
      char top = st.top();
      char open = lookup[s[i]];
      if (open == '\0') {
        return false;
      }
      if (top != open) {
        break;
      } else {
        st.pop();
      }
    }
  }
  return st.empty();
}

int
main(void)
{
  cout << isValidParenthesis("()") << endl;
  cout << isValidParenthesis("){") << endl;
}

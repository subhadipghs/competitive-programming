

#include <iostream>
#include <map>
#include <unordered_map>

using namespace std;

int
main(void)
{
  map<char, int> m = { { 'a', 1 }, { 'b', 2 } };
  unordered_map<char, int> a = { { 'a', 1 }, { 'b', 2 } };
  unordered_map<int, char> b = {
    { 1, 'a' },
    { 2, 'b' },
  };
  // if the key does not exists then return the default value for that data type
  // for number -> 0
  // for char -> '\0'
  cout << a['b'] << " " << a['c'] << '\n';
  cout << b[1] << " " << b[4] << '\n';
  cout << m['b'] << " " << m['c'] << '\n';
}

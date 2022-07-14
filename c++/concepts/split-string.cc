
#include <algorithm>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>

int
main(void)
{
  std::string s = "quick brown fox jumped over a lazy dog!";
  std::vector<std::string> words;
  size_t pos = 0;
  std::string space = " ";

  while ((pos = s.find(" ")) != std::string::npos) {
    std::cout << pos << std::endl;
    words.push_back(s.substr(0, pos));
    s.erase(0, pos + space.length());
  }
  for (auto& v : words) {
    std::cout << v << std::endl;
  }
  return 0;
}

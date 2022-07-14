
#include <fstream>
#include <iostream>

using namespace std;

int
main(void)
{

#if ONLINE_JUDGE
  fropen(stdin, "r", "input.txt");
  fropen(stdout, "w", "output.txt");
#endif

  ifstream input;
  input.open("data.txt");
  if (!input) {
    std::cerr << "oops! nothing found";
    exit(1);
  }
  int tc;
  input >> tc;
  while (tc-- && !input.eof()) {
  }
  input.close();
  cout << "closed" << '\n';
  return 0;
}


#include <iostream>


// by reference
void check(int& a) {
  a = 10;
}

// pass value by copy 
void check_cp(int a) {
  a = 9;
}

// pass value by pointer
void check_ptr(int* a) {
  *a = 184823;
}


int main(void) {
  int a = 8, b = 48, c = 20;
  check(a);
  check_cp(b);
  check_ptr(&c);
  std::cout << a << " " << b << " " << c << std::endl;
  return 0;
}

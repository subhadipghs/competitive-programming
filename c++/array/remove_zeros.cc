#include <bits/stdc++.h>

using namespace std;

#define index size_t

// it does not maintain the order
void
moveZeros(vector<int>& nums)
{
  index start = 0, end = nums.size() - 1;
  int temp = 0;
  while (start < end) {
    if (nums[start] != 0) {
      start++;
    } else {
      if (nums[end] == 0) {
        end--;
      } else {
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
      }
    }
  }
}

void
moveZerosOrder(vector<int>& nums)
{
  for (int i = 0; i < nums.size(); i++) {
    // todo: later bye !eee
  }
}

int
main(int argc, char* argv[])
{
  vector<int> v = { 0, 1, 0, 3, 12 };
  moveZerosOrder(v);
  for (int i = 0; i < v.size(); i++) {
    cout << v[i] << " ";
  }
  return 0;
}

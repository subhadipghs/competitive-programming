#include <bits/stdc++.h>

using namespace std;

void
debug(vector<int>& v)
{
  for (auto& a : v) {
    cout << a << ' ';
  }
  cout << '\n';
}

void
dbg_map(map<int, int>& m)
{
  for (auto& a : m) {
    cout << a.first << "->" << a.second << '\n';
  }
}
vector<int>
topKFrequent(vector<int>& nums, int k)
{
  unordered_map<int, int> freqs;
  vector<int> ans;
  for (int i = 0; i < nums.size(); i++) {
    freqs[nums[i]]++;
  }

  priority_queue<pair<int, int>, vector<pair<int, int>>> maxHeap;

  for (auto& x : freqs) {
    maxHeap.push(make_pair(x.second, x.first));
  }

  while (k--) {
    pair<int, int> e = maxHeap.top();
    if (k > 0) {
      maxHeap.pop();
    }
    ans.push_back(e.second);
  }
  return ans;
}

int
main(void)
{
  vector<int> v = { 1, 2 };
  vector<int> ans = topKFrequent(v, 2);
  debug(ans);
  return 0;
}

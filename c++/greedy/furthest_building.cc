#include <bits/stdc++.h>
#include <functional>

int
furthest_building(std::vector<int> heights, int bricks, int ladders)
{
  std::priority_queue<int> q;
  for (int i = 0; i < heights.size() - 1; i++) {
    int difference = heights[i + 1] - heights[i];
    // will need bricks/ladder
    if (difference > 0) {
      if (ladders) {
        q.push(-difference);
        ladders--;
      } else if (!q.empty() && difference > -q.top()) {
        q.push(-difference);
        bricks += q.top();
        q.pop();
      } else {
        bricks -= difference;
      }
      if (bricks < 0) {
        return i;
      }
    }
  }
  return heights.size();
}

int
main(int argc, char** argv)
{
  std::vector<int> v{ 4, 12, 2, 7, 3, 18, 20, 3, 19 };
  std::cout << furthest_building(v, 10, 2) << std::endl;
  return 0;
}

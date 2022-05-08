#include <bits/stdc++.h>

using namespace std;


vector<bool> kidsWithGreatestCandies(vector<int> candies, int extraCandies) {
    int max = 0;
    vector<bool> ans;
    for (int i = 0; i < candies.size(); i++) {
        if (candies[i] > max) {
            max = candies[i];
        }
    }
    for (int i = 0; i < candies.size(); i++) {
        if (candies[i] + extraCandies >= max) {
            ans.push_back(true);
        } else {
            ans.push_back(false);
        }
    }
    return ans;
}

int main(void)
{
    vector<int> candies = {2,3,5,1,3};
    int extra = 3;
    vector<bool> result = kidsWithGreatestCandies(candies, extra);
    for (int i = 0; i < result.size(); i++) {
        cout << result[i] << " ";
    }
    return 0;
}

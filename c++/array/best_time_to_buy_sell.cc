

#include <bits/stdc++.h>

using namespace std;

int max_profit(vector<int> prices) {
    int min = INT_MAX;
    int max = 0;
    for (int i = 0; i < prices.size(); i++) {
        if (prices[i] < min) {
            min = prices[i];
        }
        if (prices[i] - min > max) {
            max = prices[i] - min;
        }
    }
    return max;
}


int main(void) {
    vector<int> v = {7, 1, 4, 9, 3};
    cout << max_profit(v) << endl;
    return 0;
}



#include <bits/stdc++.h>

using namespace std;

int numJewelsInStones(string jewels, string stones) {
    int count = 0;
    for (int i = 0; i < stones.size(); i++) {
        for (int j = 0; j < jewels.size(); j++) {
            if (stones[i] == jewels[j]) {
                count++;
            }
        }
    }
    return count;
}


int main(void)
{
    string jewel = "aA", stones = "aAAbbbb";
    cout << numJewelsInStones(jewel, stones) << '\n';
    return 0;
}

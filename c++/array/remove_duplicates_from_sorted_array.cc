
#include <bits/stdc++.h>
#include <cstdint>

#define IOS std::ios_base::sync_with_stdio(false); \
    std::cin.tie(NULL); \
    std::cout.tie(NULL)
    
using namespace std;

int removeDuplicates(vector<int>& nums) {
    int k = 0;
    // distinct element count
    // if one element is there then return 1 because there's no duplicates
    // now we are using two pointer solution
    if (nums.size() <= 1) {
        return nums.size();
    } 
    int next = 1, count = 0;

    for (int i = 0; i < nums.size(); i++) {
        if (i < nums.size() - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
        nums[count] = nums[i];
        count++;
    }
    return count;
}

void print(vector<int> v) {
    for (int i = 0; i < v.size(); i++) {
        cout << v[i] << ' ';
        cout << endl;
    }
}


int main(void) {
    IOS;
    vector<int> nums = {0,0,1,1,1,2,2,3,3,4};
    cout << removeDuplicates(nums) << '\n';
    print(nums);
    return 0;
}

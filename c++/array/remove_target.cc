#include <bits/stdc++.h>


using namespace std;

// remove all occurances of the val
// using two pointer approach
// where i and j are two pointers and `i` is slow runner and `j` is a fast runner
// the fast pointer is checking for all the non-target numbers if he see's any then just move it the beginning of the array
int remove_element(vector<int> &nums, int val) {
    int i = 0;
    for (int j = 0; j < nums.size(); j++) {
        if (nums[j] != val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}

// remove element when the element is rare in the array
int remove_element_rare(vector<int> &nums, int val) {
    int n = nums.size(), i = 0;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            n--;
        } else {
            i++;
        }
    }
    return n;
}

void print(vector<int> v, int k)  {
    for (int i = 0; i < k; i++) {
        cout << v[i] << " ";
    }
    cout << endl;
}


int main() {
    vector<int> nums = {3, 1, 2, 3};
    cout << "size " << nums.size() << endl; 
    int k = remove_element(nums, 3);
    print(nums, k);
    return 0;
}

#include "linked_list_api.cc"
#include <bits/stdc++.h>

using namespace std;

#define DEBUG true

ListNode*
mergeTwoLists(ListNode* list1, ListNode* list2)
{
  ListNode* merged = nullptr;
  while (list1 != nullptr && list2 != nullptr) {
    if (list1->val < list2->val) {
      merged = append(merged, list1->val);
      list1 = list1->next;
    } else {
      merged = append(merged, list2->val);
      list2 = list2->next;
    }
  }

  while (list1 != nullptr) {
    merged = append(merged, list1->val);
    list1 = list1->next;
  }

  while (list2 != nullptr) {
    merged = append(merged, list2->val);
    list2 = list2->next;
  }

  return merged;
}

int
main(int argc, char* argv[])
{
  vector<int> v{ 1, 2, 4 };
  vector<int> v2{ 1, 3, 5 };
  ListNode* list_one = make_list(v);
  ListNode* list_two = make_list(v2);
  ListNode* merged_linked_list = mergeTwoLists(list_one, list_two);

#ifdef DEBUG
  debug_list(list_one);
  debug_list(list_two);
#endif

  debug_list(merged_linked_list);
  return 0;
}


#include "linked_list_api.cc"
#include <bits/stdc++.h>

// O (m*n) time and O(1) space complexity solution
ListNode*
get_intersection_node(ListNode* head_a, ListNode* head_b)
{
  ListNode* i = head_a;
  ListNode* j = head_b;
  while (i != nullptr) {
    j = head_b;
    while (j != nullptr) {
      if (i == j)
        return i;
      j = j->next;
    }
    i = i->next;
  }
  return nullptr;
}

// O (m+n) and O(m+n) time and space complexity
ListNode*
get_intersection_node_hashmap(ListNode* head_a, ListNode* head_b)
{
  std::map<ListNode*, bool> hash_map;
  ListNode* iter1 = head_a;
  ListNode* iter2 = head_b;

  while (iter1 != nullptr) {
    hash_map[iter1] = 1;
    iter1 = iter1->next;
  }
  while (iter2 != nullptr) {
    if (hash_map[iter2] == 1)
      return iter2;
    hash_map[iter2] = 1;
    iter2 = iter2->next;
  }
  return nullptr;
}



#include "linked_list_api.h"
#include <bits/stdc++.h>

// check whether the linked list has cycle
bool
has_cycle(ListNode* head)
{
  ListNode* iter = head;
  while (iter != nullptr) {
    if (iter->val == 10e5)
      return true;
    else
      iter->val = 10e5;
    iter = iter->next;
  }
  return false;
}

// two pointer solution to the problem is this
bool
has_cycle_two_pointer(ListNode* head)
{
  ListNode* slow = head;
  ListNode* fast = head;

  while (fast != nullptr && fast->next != nullptr) {
    if (slow->next == fast->next->next)
      return true;
    slow = slow->next;
    fast = fast->next->next;
  }
  return false;
}

void
should_check_for_cycle(bool (*fn)(ListNode* list))
{

  ListNode* head = new ListNode(1);
  ListNode* conn = new ListNode(2);
  head->next = conn;
  head->next->next = new ListNode(4);
  head->next->next->next = new ListNode(7);
  head->next->next->next->next = conn;
  bool r = fn(head);
  assert(r == true);
  std::cout << "should_check_for_cycle passed 🏁" << std::endl;
}

int
main(int argc, char** argv)
{
  should_check_for_cycle(has_cycle);
  return 0;
}

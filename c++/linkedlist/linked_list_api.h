
#ifndef _LIST_API_
#define _LIST_API_

#include <iostream>
#include <vector>

struct ListNode
{
  int val;
  ListNode* next;
  ListNode()
    : val(0)
    , next(nullptr)
  {}
  ListNode(int x)
    : val(x)
    , next(nullptr)
  {}
  ListNode(int x, ListNode* next)
    : val(x)
    , next(next)
  {}
};

/**
 * Debug a linked list by printing it out
 */
void
debug_list(ListNode* head);

/**
 * Make a list from vector
 */
ListNode*
make_list(std::vector<int>& v);

/**
 * Append a value to the linked list
 */
ListNode*
append(ListNode* head, int val);

/**
 * Create vector from list
 */
std::vector<int>
make_vec(ListNode* list);

#endif // !_LIST_API_

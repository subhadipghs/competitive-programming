
#include "linked_list_api.cc"
#include <bits/stdc++.h>

using namespace std;

ListNode*
remove_nth_node_from_last(ListNode* head, int n)
{
  int count = 0;
  ListNode* iter = head;

  if (!head) {
    return head;
  }

  while (iter) {
    count++;
    iter = iter->next;
  }

  int node_index = count - n;
  ListNode *prev = nullptr, *curr = head;

  for (int i = 0; i < node_index; i++) {
    prev = curr;
    curr = curr->next;
  }

  if (!curr) {
    return nullptr;
  } else if (!prev) {
    head = curr->next;
  } else {
    prev->next = curr->next;
  }
  delete curr;
  return head;
}

int
main(int argc, char** argv)
{

  vector<int> v = { 1 };
  int n = 1;
  ListNode* head = make_list(v);
  ListNode* res = remove_nth_node_from_last(head, n);
  debug_list(res);
  return 0;
}

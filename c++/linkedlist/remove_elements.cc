

#include "linked_list_api.cc"
#include <bits/stdc++.h>

ListNode *
remove_elements (ListNode *head, int val)
{
  ListNode *curr = head, *result = nullptr;
  while (curr)
    {
      if (curr->val != val)
        {
          if (!result)
            {
              result = new ListNode (val);
            }
          else
            {
              ListNode *iter = result;
              while (iter)
                {
                  iter = iter->next;
                }
              iter->next = new ListNode (val);
            }
        }
      curr = curr->next;
    }
  return result;
}

ListNode *
remove_elements_fast (ListNode *head, int val)
{
  while (head && head->val == val)
    {
      ListNode *temp = head;
      head = head->next;
      delete temp;
    }
  ListNode *curr = head, *prev = nullptr;

  while (curr)
    {
      if (curr->val == val)
        {
          prev->next = curr->next;
        }
      else
        {
          prev = curr;
        }
      curr = curr->next;
    }
  return head;
}

int
main (int argc, char **argv)
{
  std::vector<int> v = { 7, 7, 7, 8, 4, 7, 23, 5, 7 };
  ListNode *head = make_list (v);
  debug_list (head);
  ListNode *re = remove_elements_fast (head, 7);
  debug_list (re);
  return 0;
}

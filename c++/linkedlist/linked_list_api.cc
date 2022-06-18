#include "linked_list_api.h"

ListNode *
append (ListNode *head, int val)
{
  if (!head)
    {
      head = new ListNode (val);
    }
  else
    {
      ListNode *iter = head;
      while (iter->next != nullptr)
        {
          iter = iter->next;
        }
      iter->next = new ListNode (val);
    }

  return head;
}

ListNode *
make_list (std::vector<int> &nums)
{
  ListNode *head = nullptr;
  for (int i = 0; i < nums.size (); i++)
    {
      head = append (head, nums[i]);
    }
  return head;
}

void
debug_list (ListNode *head)
{
  ListNode *iter = head;
  while (iter != nullptr)
    {
      std::cout << iter->val << " ";
      iter = iter->next;
    }
  std::cout << std::endl;
}

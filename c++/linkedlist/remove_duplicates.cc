
#include "linked_list_api.cc"
#include <bits/stdc++.h>
#include <cassert>

#define DEBUG

ListNode *
remove_duplicates_from_list (ListNode *head)
{
  ListNode *current_node = head;
  ListNode *uniq = nullptr, *next_node = nullptr;
  while (current_node != nullptr)
    {
      next_node = current_node->next;
      if (next_node == nullptr)
        {
          uniq = append (uniq, current_node->val);
          break;
        }
      if (current_node->val == next_node->val)
        {
          current_node = current_node->next;
          continue;
        }
      uniq = append (uniq, current_node->val);
      current_node = current_node->next;
    }

  return uniq;
}

void
should_remove_duplicates_from_linked_list (
    std::vector<int> v, std::vector<int> e,
    ListNode *(*testable_function) (ListNode *list))
{
  ListNode *list = make_list (v);
  ListNode *result_list = testable_function (list);
  std::vector<int> result_vec = make_vec (result_list);
#ifdef DEBUG
  debug_list (result_list);
#endif
  assert (e.size () == result_vec.size ());
  for (int i = 0; i < e.size (); i++)
    {
      assert (e[i] == result_vec[i]);
    }
  std::cout << "should_remove_duplicates_from_linked_list passed 🏁"
            << std::endl;
}

int
main (int argc, char **argv)
{
  std::vector<int> v{ 1, 1, 2 };
  std::vector<int> e{ 1, 2 };
  should_remove_duplicates_from_linked_list (v, e,
                                             remove_duplicates_from_list);
  return 0;
}

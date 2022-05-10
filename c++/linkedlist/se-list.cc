#include <bits/stdc++.h>

using namespace std;


struct Node {
    int value;
    Node* next;
    Node* previous;
    vector<int> d;

    Node(): value(0), d(0), next(nullptr), previous(nullptr) {}
    ~Node() = default;
};

class Location {
    public:
        Node* u;
        int j;
        Location(Node* u, int j) {
            this->u = u;
            this->j = j;
        }
        ~Location() = default;
};


class Block {
    private:
        int n;
        int j;
        vector<int> a;

    public:
        Block(int b) {
            this->n = 0;
            this->j = 0;
            fill(this->a.begin(), this->a.begin() + b + 1, 0);
        } 

        ~Block() = default;
        // get the location of block
        // arguments with the i and e
        void get_location(int i, Location& e); 
};


void Block::get_location(int i, Location& e) {
    if (i < (n/2)) {
        Node* u;
        while(i >= u->d.size()) {
            i -= u->d.size();
            u = u->next;
        }
        e.u = u;
        e.j = i;
    } else {
        Node* u;
    }
}


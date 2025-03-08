/*
https://leetcode.com/problems/reverse-string/description/
O(1) memory (inplace)
*/
#include <bits/stdc++.h>
using namespace std;
void reverseString(vector<char> &s)
{
    int len = s.size();
    int low = 0;
    int high = len - 1;
    while (low < high)
    {
        char ch = s[low];
        s[low] = s[high];
        s[high] = ch;
        low++;
        high--;
    }
}
int main()
{
    vector<char> str{'h', 'e', 'l', 'l', 'o'};
    cout << "Org: " << endl;
    for (char ch : str)
        cout << ch;
    cout << endl;
    reverseString(str);
    cout << "Mod" << endl;
    for (char ch : str)
        cout << ch;
    cout << endl;
    return 0;
}
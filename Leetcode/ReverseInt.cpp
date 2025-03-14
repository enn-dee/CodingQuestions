/*
https://leetcode.com/problems/reverse-integer/submissions/1566602103/
*/

#include <iostream>
#include <climits>
using namespace std;

int reverse(int x)
{

    int ans = 0;

    while (x)
    {
        int digit = x % 10;
        if (ans > INT_MAX / 10 || (ans == INT_MAX / 10 && digit > 7))
            return 0;
        if (ans < INT_MIN / 10 || (ans == INT_MIN / 10 && digit < -8))
            return 0;
        ans = (ans * 10) + digit;

        x = x / 10;
    }
    return ans;
}
int main()
{

    int x = -2147483412;

    int ans = reverse(x);
    cout << "ans: " << ans << endl;

    return 0;
}
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
int main()
{

    int num = 10;
    vector<int> vc;
    while (num)
    {
        int rem = num % 2;
        num = num / 2;
        vc.push_back(rem);
    }
    reverse(vc.begin(), vc.end());
    for (int i = 0; i < vc.size(); i++)
    {
        cout << vc[i] << " ";
    }
    cout << endl;
    return 0;
}
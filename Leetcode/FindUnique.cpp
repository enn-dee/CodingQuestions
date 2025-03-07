// https://www.naukri.com/code360/problems/find-unique_625159
// xor ^ -> return zero (0) if two bits are same

#include <iostream>
using namespace std;

int main(){
int arr[] = {2, 3, 1, 6, 3, 6, 2};
int sol =0;
int size  = sizeof(arr)/sizeof(arr[0]);
for(int i=0;i<size;i++){
    sol = sol^arr[i];
}

cout<<"Unique Element in arr = "<<sol<<endl;
    return 0;
}

#include <iostream>
using namespace std;
void display(int arr[] , int size){
    for(int i = 0;i<size;i++){
        cout<<" "<<arr[i];
    }
    cout<<endl;
}
int main() {
int arr[] = {1, 2,3,4,5,6 ,7};
int len = sizeof(arr)/sizeof(arr[0]);

display(arr, len);
bool isOddSize = len%2 != 0;
if(isOddSize ){
    for(int i=0;i<len-1;i +=2){
        int temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}
else{
    for( int i=0;i<len;i +=2){
        int temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}
display(arr, len);
    return 0;
}


/*

orginal arr:  1 2 3 4 5 6 7
o/p:           2 1 4 3 6 5 7

*/
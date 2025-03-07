#include <iostream>
using namespace std;

int main() {
    cout << "Enter num: ";
    int num;
    cin >> num;

    if (num < 2) {  
       
        cout << num << " is not prime" << endl;
        return 0;
    }#include <iostream>
    using namespace std;
    
    int main() {
        cout << "Enter num: ";
        int num;
        cin >> num;
    
        if (num < 2) {  
            cout << num << " is not prime" << endl;
            return 0;
        }
    
        bool isComposite = false;
        for (int i = 2; i * i <= num; i++) { 
            if (num % i == 0) {
                isComposite = true;
                break;
            }
        }
    
        if (isComposite)
            cout << num << " is not prime" << endl;
        else
            cout << num << " is prime" << endl;
    
        return 0;
    }
    

    bool isComposite = false;
    for (int i = 2; i * i <= num; i++) { 
        if (num % i == 0) {
            isComposite = true;
            break;
        }
    }

    if (isComposite)
        cout << num << " is not prime" << endl;
    else
        cout << num << " is prime" << endl;

    return 0;
}

#include <iostream>
using namespace std;
int main(){
    int a[] = {2,2,2,0,3,3,1,1,2};
    int size = sizeof(a)/sizeof(a[0]);
    int count = 0 , key = 0, n = 0;
    cout<<"Enter The Key : ";
    cin>>key;
    cout<<"Enter The n :";
    cin>>n;
    for (int i = 0; i < size; i++)
    {
        if (a[i] == key)
        {
            count++;
        }
        
    }
    if (count>(n/2))
    {
        cout<<"Code Is Perfect";
    }
    else{
        cout<<"NULL !";
    }
    


return 0;
}
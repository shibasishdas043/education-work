#include <iostream>
using namespace std;
int main(){
    int n;
    cout << " Enter The Value of n : ";
    cin >> n;
    cout << "Printing Cout From 1 To n " << endl;
    // int i = 1;
    // for ( ; ; )
    // {
    //     if (i <= n)
    //     {
    //         cout << i << endl;
    //     }
    //     else
    //     {
    //         break;
    //     }
        
    //     i++;
    // }
    for (int a = 0 , b = 1 , c = 2; a >=0 && b>=1 && c>=2; a-- , b-- , c--)
    {
        cout << a << " "<< b << " " << c << " ";
    }
    return 0;
}
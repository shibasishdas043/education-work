
/*
         1
        121
       12321
      1234321
     123454321

*/

#include<iostream>
using namespace std;

int main() {
    int n;
    cout << "Enter Your Number: ";
    cin >> n;
    
    int row = 1;
    while (row <= n) {
        // Print The Space (1st Triangle)

        int space = n - row;
        while (space) {
            cout << " ";
            space--;
        }

        // Print The 2nd Triangle;
        int j = 1;
        while (j <= row) {
            cout << j;
            j++;
        }

        // Print The 3rd Triangle.
        int start = row - 1;
        while (start) {
            cout << start;
            start--;
        }

        // Move to the next line for the next row
        cout << endl;
        
        // Increment the row counter
        row++;
    }

    return 0;
}

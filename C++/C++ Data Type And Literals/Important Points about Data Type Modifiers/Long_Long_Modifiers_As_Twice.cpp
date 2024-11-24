//The long modifier can be used as twice as long long.
//It is used for even larger numbers than long. However, long long-type modifiers can only be used with int. Below is the C++ program to demonstrate the above concept.
// C++ program to demonstrate
// the long long modifier
#include <iostream>
using namespace std;

// Driver Code
int main()
{
	cout << "Size of long long int : " <<
			sizeof(long long int) <<
			" bytes" << endl;
	return 0;
}

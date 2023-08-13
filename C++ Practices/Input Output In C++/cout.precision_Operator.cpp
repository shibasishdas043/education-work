// C++ program toillustrate the use
// of cout.precision()
#include <iostream>
using namespace std;

// Driver Code
int main()
{
	double pi = 3.14159783;

	// Set precision to 5
	cout.precision(5);

	// Print pi
	cout << pi << endl;

	// Set precision to 7
	cout.precision(7);

	// Print pi
	cout << pi << endl;

	return 0;
}

// CPP Program to demonstrate the Conditional Operators
#include <iostream>
using namespace std;

int main()
{
	int a = 3, b = 4;

	// Conditional Operator
	int result = (a < b) ? b : a;
	cout << "The greatest number is " << result << endl;

	return 0;
}

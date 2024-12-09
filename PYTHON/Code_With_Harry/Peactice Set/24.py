x = input("Enter Your Word : ")
x1 = "click here"
x2 = "subscribe"
x3 = "join"
#if(x == x1 or x == x2 or x == x3): print("Spam :( ")
#else:print("Ist Ok Although !")
if((x1 in x) or (x2 in x) or (x3 in x)):
    print("Dont Spam Please :) ")
else:
    print("Ist Ok Although !")    
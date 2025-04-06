marks1 = int(input("Enter 1st Marks : "))
marks2 = int(input("Enter 2nd Marks : "))
marks3 = int(input("Enter 3rd Marks : "))
#Total Marks
total_percent = (100*(marks1+marks2+marks3))/300
if(total_percent>=40 and marks1>=33 and marks2>=33 and marks3>=33):
    print("You Are Passed ! : ",total_percent)
else:
    print("Failed ! : ",total_percent)

        


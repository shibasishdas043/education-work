
computer = -1
you = print("Enter Your Choice : ")
youDic = {"s":1,"w":-1,"g":0}
youNum = youDic[you]

print(f"you Chose")

if(computer == you):
    print("Its Draw")
else:
    if(computer == -1 and you == 1):
       print("You Wins !")
    elif(computer == -1 and you == 0):
        print("You Loose !")
    elif(computer == 1 and you == -1):
        print("You  !")
    elif(computer == 1 and you == 0):
        print("You Wins !")
    elif(computer == 0 and you == -1):
        print("You Wins !")
    elif(computer == 0 and you == 1):
        print("You Loose !")
    else:
        print('Something Went Wrong')    

    

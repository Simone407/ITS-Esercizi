'''
8. ATM Machine Simulator:

Create a function that simulates an ATM machine.
Initialize an account with a starting balance.
Allow the user to perform transactions such as deposit, withdraw, and check balance.
 Validate transactions against the account balance and available funds.
Provide appropriate feedback to the user for each transaction.

'''
import time

def atm():
    balance:float= 43000

    choice:int= 0

    while choice != 4:
        print("Welcome... to SYNT BANK")
        time.sleep(1)
        print("Inserisci la tua carta ")
        print("=====================================")
        time.sleep(3)
        print("Aspetti che le sue informazioni vengano elaborate.. ")
        print("=====================================")
        time.sleep(5)
        print("Scegli una tra le seguenti opzioni:")
        print("=====================================")
        print("1. Controlla il tuo saldo")
        print("2. Deposita")
        print("3. Preleva")
        print("4. Esci")
      

        choice = int(input("Inserisci l'opzione corrispondente: "))

        if choice == 1:
            print(f"Il tuo residuo: {balance}")

        elif choice == 2:
            deposit = float(input("Quanto vuoi depositare?: "))
            balance += deposit
            print(f"Depositati {deposit}. Ora il saldo è di: {balance}")
        
        elif choice == 3:
            withdraw = float(input("Quanto vuoi prelevare?: "))
        
            if withdraw > balance:
                print("Fondi insufficienti!")
            else:
                balance -= withdraw
                print(f"Prelievo avvenuto con successo ! {withdraw}. Ora il saldo è di: {balance}")
        
        elif choice == 4:
            print("Grazie per aver usato l'ATM, Buonagiornata!")
    else:
        print("Scelta non valida, riprovare")



atm()
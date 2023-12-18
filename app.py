# write 'hello world' to the console
import random


print('hello world')

# create a classic rock, paper, scissors minigame

# 1. create a list of choices
choices = ['rock', 'paper', 'scissors']

# 2. create a function that picks a random choice from the list
def get_computer_choice():
    return random.choice(choices)

# 3. create a function that compares the user's choice to the computer's choice and returns the result (win, lose, tie)
def compare_choices(user_choice, computer_choice):
    if user_choice == computer_choice:
        return 'tie'
    elif user_choice == 'rock' and computer_choice == 'paper':
        return 'lose'
    elif user_choice == 'rock' and computer_choice == 'scissors':
        return 'win'
    elif user_choice == 'paper' and computer_choice == 'rock':
        return 'win'
    elif user_choice == 'paper' and computer_choice == 'scissors':
        return 'lose'
    elif user_choice == 'scissors' and computer_choice == 'rock':
        return 'lose'
    elif user_choice == 'scissors' and computer_choice == 'paper':
        return 'win'

# 4. Display the user's score at the end of the game.
user_score = 0
computer_score = 0

# 5. The minigame must handle user inputs, putting them in lowercase and informing the user if the option is invalid.
while True:
    user_choice = input('Choose rock, paper, or scissors: ')
    user_choice = user_choice.lower()
    if user_choice not in choices:
        print('Invalid choice. Try again.')
        continue
    computer_choice = get_computer_choice()
    print('You chose: ' + user_choice)
    print('The computer chose: ' + computer_choice)
    result = compare_choices(user_choice, computer_choice)
    if result == 'win':
        user_score += 1
        print('You win!')
    elif result == 'lose':
        computer_score += 1
        print('You lose!')
    elif result == 'tie':
        print('You tied!')
    print('Your score: ' + str(user_score))
    print('The computer score: ' + str(computer_score))
    play_again = input('Play again? (y/n) ')
    if play_again == 'n':
        break
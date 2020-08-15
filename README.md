## Blackjack

Built using React. This is a small demo project that allows you to play a game of blackjack.

### How to run:

- Clone or download the project.
- `yarn install` or `npm install`
- `yarn start` or `npm start`

### Testing:

- `yarn test` or `npm test`

## Developer notes:

This project uses redux for state managemnt. This is likely overkill, however it is something I am comfortable using at the moment.

My testing approach currently falls in line with how Kent C Dodds describes in this [blog post](https://kentcdodds.com/blog/write-tests).
While I am not married to this style, I feel it works well for the apps I currently work on.

For this project, I have opted to use css modules for styling components for simplicity and to take advantage of `stylelint` to produce a
consistent style format.

## Potential improvements / additions

- Currency: Adding the ability for the user to 'bid' an amount of currency when choosing to bid.
- Handle a 'draw' scenario.
- Animation / actual card images.
- Adding the ability to 'split' cards when the player is dealt a double.
- Prevent the deck from re-shuffling between each 'round' and going through the full 52 cards if the user keeps playing.

### E2E Testing:

I wrote a very short end-to-end test on the daniel/testcafe branch. Testcafe is a tool that was recommended to me for this purpose.
Note: this currently is targetting only Google Chrome. Either have Chrome installed, or change the `testcafe chrome` part of 
package.json to use the browser of your choice. 

In order to try this out:
- Swap to the `daniel/testcafe` branch.
- Run `yarn install`.
- In another terminal, run `yarn start`.
- Run `yarn run testcafe`.
